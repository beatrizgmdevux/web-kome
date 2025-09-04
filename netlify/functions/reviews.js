// netlify/functions/reviews.js
export async function handler() {
  try {
    const API_KEY  = (process.env.GOOGLE_MAPS_API_KEY ?? '').trim();
    const PLACE_ID = (process.env.GOOGLE_PLACE_ID ?? '').trim();

    if (!API_KEY || !PLACE_ID) {
      return { statusCode: 500, body: 'Faltan variables de entorno' };
    }

    // 1) Intento con Places API v1 (moderna)
    const v1Url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es&fields=rating,userRatingCount,reviews`;
    const r1 = await fetch(v1Url, { headers: { 'X-Goog-Api-Key': API_KEY } });
    const j1 = await r1.json();

    if (!j1.error && (j1.rating || (j1.reviews && j1.reviews.length))) {
      return ok({
        rating: j1.rating ?? null,
        user_ratings_total: j1.userRatingCount ?? 0,
        reviews: (j1.reviews ?? []).map(r => ({
          author_name: r.authorAttribution?.displayName ?? 'Cliente',
          author_url: r.authorAttribution?.uri ?? '#',
          rating: r.rating,
          text: r.text?.text ?? ''
        }))
      });
    }

    // 2) Fallback: endpoint legacy Place Details (opcionalmente orden más reciente)
    const params = new URLSearchParams({
      place_id: PLACE_ID,
      fields: 'rating,user_ratings_total,reviews',
      language: 'es',
      reviews_sort: 'newest',         // <- ordena reseñas (al tener muchas reseñas)
      key: API_KEY
    });
    const legacyUrl = 'https://maps.googleapis.com/maps/api/place/details/json?' + params.toString();
    const r2 = await fetch(legacyUrl);
    const j2 = await r2.json();

    if (j2.status === 'OK') {
      return ok({
        rating: j2.result?.rating ?? null,
        user_ratings_total: j2.result?.user_ratings_total ?? 0,
        reviews: (j2.result?.reviews ?? []).map(r => ({
          author_name: r.author_name,
          author_url: r.author_url,
          rating: r.rating,
          text: r.text ?? ''
        }))
      });
    }

    // 3) Si nada devuelve datos, mandamos un 502 con pista (sin detalles sensibles)
    return err({
      status_v1: j1.error?.status ?? null,
      status_legacy: j2.status ?? null
    });

  } catch {
    return { statusCode: 502, body: 'Error obteniendo reviews' };
  }
}

function ok(payload) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=1800' },
    body: JSON.stringify(payload)
  };
}
function err(payload) {
  return {
    statusCode: 502,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
}
