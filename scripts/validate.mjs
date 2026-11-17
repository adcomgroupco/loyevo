import { access, readFile, readdir } from "node:fs/promises";
import { extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const excluded = new Set([".git", "node_modules", "outputs", "reports", "tmp"]);
async function collect(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const target = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);
    if (entry.isDirectory()) files.push(...await collect(target));
    else if (extname(entry.name) === ".html") files.push(target);
  }
  return files;
}

const pages = new Map();
for (const file of await collect(root)) pages.set(file.href, await readFile(file, "utf8"));
const errors = [];
const add = (file, message) => errors.push(`${fileURLToPath(file).replace(fileURLToPath(root), "")}: ${message}`);
for (const [file, html] of pages) {
  const redirect = html.includes("<!-- media-bridge:redirect -->");
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map(match => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) add(file, `IDs duplicados: ${[...new Set(duplicates)].join(", ")}`);
  if (!/<html\b[^>]*\blang=["']es["']/i.test(html)) add(file, 'falta lang="es"');
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) add(file, "debe tener exactamente un h1");
  if (!/<main\b[^>]*\bid=["'][^"']+["']/i.test(html)) add(file, "main debe tener un id");
  if (!/class=["'](?:skip-link|skip)["']/i.test(html)) add(file, "falta enlace para saltar al contenido");
  if (/<style\b/i.test(html)) add(file, "conserva CSS inline");
  if (!redirect && /<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) add(file, "conserva JavaScript inline");
  if (redirect && !/<link\b[^>]*rel="canonical"/i.test(html)) add(file, "redirección sin destino canónico");
  for (const image of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt=["'][^"']*["']/i.test(image[1])) add(file, "imagen sin alt");
  }
  for (const link of html.matchAll(/\b(?:href|src|poster)=["']([^"']+)["']/gi)) {
    const ref = link[1].replaceAll("&amp;", "&");
    if (/^(?:https?:|mailto:|tel:|data:)/i.test(ref)) continue;
    const target = new URL(ref, file);
    const anchor = decodeURIComponent(target.hash.slice(1));
    target.hash = "";
    target.search = "";
    if (!target.href.startsWith(root.href)) { add(file, `enlace fuera del sitio: ${ref}`); continue; }
    try { await access(target); } catch { add(file, `recurso inexistente: ${ref}`); continue; }
    if (anchor && !anchor.startsWith("i-") && pages.has(target.href)) {
      const targetIds = [...pages.get(target.href).matchAll(/\bid=["']([^"']+)["']/gi)].map(match => match[1]);
      if (!targetIds.includes(anchor)) add(file, `ancla inexistente: ${ref}`);
    }
  }
}
for (const error of errors) console.error(`ERROR ${error}`);
if (errors.length) process.exit(1);
console.log(`OK: ${pages.size} HTML validados, incluidas carpetas y redirecciones.`);
