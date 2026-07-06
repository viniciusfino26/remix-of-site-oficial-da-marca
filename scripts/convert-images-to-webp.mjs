// Uso único (build-time): converte as imagens importadas via ESM para WebP,
// reescreve os imports .png/.jpg -> .webp e remove os originais convertidos.
// Rode com: node scripts/convert-images-to-webp.mjs
import { readFileSync, writeFileSync, existsSync, statSync, readdirSync, unlinkSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");

// 1. Coleta todos os specifiers de import de imagem em src/
const IMPORT_RE = /from\s+['"]([^'"]+\.(?:png|jpe?g))['"]/gi;
const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) files.push(p);
  }
})(SRC);

const specifiers = new Set();
for (const f of files) {
  const code = readFileSync(f, "utf8");
  let m;
  while ((m = IMPORT_RE.exec(code))) specifiers.add(m[1]);
}

const resolve = (spec) =>
  spec.startsWith("@/") ? join(SRC, spec.slice(2)) : null; // só tratamos @/assets

let totalOld = 0;
let totalNew = 0;
const converted = [];

for (const spec of specifiers) {
  const abs = resolve(spec);
  if (!abs || !existsSync(abs)) {
    console.warn(`skip (não @/ ou inexistente): ${spec}`);
    continue;
  }
  const webpAbs = abs.replace(/\.(png|jpe?g)$/i, ".webp");
  const oldSize = statSync(abs).size;
  const hasAlpha = extname(abs).toLowerCase() === ".png";
  await sharp(abs)
    .webp({ quality: 80, effort: 6, alphaQuality: hasAlpha ? 90 : 100 })
    .toFile(webpAbs);
  const newSize = statSync(webpAbs).size;
  totalOld += oldSize;
  totalNew += newSize;
  converted.push({ spec, abs, webpSpec: spec.replace(/\.(png|jpe?g)$/i, ".webp") });
  const pct = ((1 - newSize / oldSize) * 100).toFixed(0);
  console.log(
    `${spec}\n  ${(oldSize / 1024).toFixed(0)} kB -> ${(newSize / 1024).toFixed(0)} kB (-${pct}%)`
  );
}

// 2. Reescreve os imports em todos os arquivos
const specMap = new Map(converted.map((c) => [c.spec, c.webpSpec]));
let touchedFiles = 0;
for (const f of files) {
  let code = readFileSync(f, "utf8");
  let changed = false;
  for (const [oldSpec, newSpec] of specMap) {
    if (code.includes(oldSpec)) {
      code = code.split(oldSpec).join(newSpec);
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(f, code);
    touchedFiles++;
  }
}

// 3. Remove os originais convertidos
for (const c of converted) {
  try {
    unlinkSync(c.abs);
  } catch (e) {
    console.warn(`não removeu ${c.abs}: ${e.message}`);
  }
}

console.log(
  `\n✔ ${converted.length} imagens convertidas · ${touchedFiles} arquivos atualizados`
);
console.log(
  `Total: ${(totalOld / 1024 / 1024).toFixed(2)} MB -> ${(totalNew / 1024 / 1024).toFixed(2)} MB (-${(
    (1 - totalNew / totalOld) *
    100
  ).toFixed(0)}%)`
);
