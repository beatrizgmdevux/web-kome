/*
export async function get({ params, request }) {
  const API_KEY = "AIzaSyAw5cNknvTI4bD-WnqPIA4MbxhG9_RGefQ";
  const PLACE_ID = "ChIJwb3uVoj7cg0Rkixen4-kmfM";

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return new Response(JSON.stringify(data.result), {
    headers: { "Content-Type": "application/json" }
  });
}
 */
