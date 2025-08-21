// src/utils/slugify.js

export function slugify(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")     // tildes
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // ZWJ/zero-width (emojis)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")        // quita símbolos/emojis
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
