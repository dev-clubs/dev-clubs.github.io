import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");
const docsDir = path.join(repoRoot, "libraries/material-web/docs/components");
const mapPath = path.join(repoRoot, "libraries/expressive-vainilla/component-map.json");
const outPath = path.join(repoRoot, "libraries/expressive-vainilla/COMPONENT_MAPPING.md");

const map = JSON.parse(await fs.readFile(mapPath, "utf8"));
const mapKeys = Object.keys(map);
const files = (await fs.readdir(docsDir))
  .filter((file) => file.endsWith(".md"))
  .sort();

const materialTags = new Set();
for (const file of files) {
  const text = await fs.readFile(path.join(docsDir, file), "utf8");
  const matches = text.match(/<md-[a-z0-9-]+/g) ?? [];
  for (const match of matches) {
    materialTags.add(match.slice(1));
  }
}

const discovered = [...materialTags].sort();
const missingMappings = discovered.filter((tag) => !map[tag]);
const unusedMappings = mapKeys.filter((tag) => !materialTags.has(tag));
const coveragePct = discovered.length === 0
  ? 100
  : Math.round(((discovered.length - missingMappings.length) / discovered.length) * 100);

const lines = [];
lines.push("# Material Web -> Expressive Vainilla coverage");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push(`Source: \`libraries/material-web/docs/components/*.md\``);
lines.push(`Coverage: ${coveragePct}% (${discovered.length - missingMappings.length}/${discovered.length})`);
lines.push("");
lines.push("## Component map");
lines.push("");
lines.push("| Material tag | Expressive replacement | Status |");
lines.push("| --- | --- | --- |");

for (const tag of discovered) {
  const entry = map[tag];
  if (!entry) {
    lines.push(`| \`${tag}\` | _(missing)_ | ⚠️ missing |`);
    continue;
  }
  const target = entry.className
    ? `<${entry.element} class="${entry.className}">`
    : `<${entry.element}>`;
  lines.push(`| \`${tag}\` | \`${target}\` | ✅ mapped |`);
}

lines.push("");
lines.push("## Vanilla snippets");
lines.push("");
for (const tag of discovered) {
  const entry = map[tag];
  if (!entry) {
    continue;
  }
  lines.push(`### \`${tag}\``);
  lines.push("");
  lines.push("```html");
  lines.push(entry.example);
  lines.push("```");
  lines.push("");
}

if (unusedMappings.length > 0) {
  lines.push("## Unused mappings");
  lines.push("");
  lines.push(unusedMappings.map((tag) => `- \`${tag}\``).join("\n"));
  lines.push("");
}

if (missingMappings.length > 0) {
  lines.push("## Missing mappings");
  lines.push("");
  lines.push(missingMappings.map((tag) => `- \`${tag}\``).join("\n"));
  lines.push("");
}

await fs.writeFile(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${path.relative(repoRoot, outPath)}`);

if (missingMappings.length > 0) {
  console.error("Missing mappings found:");
  for (const tag of missingMappings) {
    console.error(`- ${tag}`);
  }
  process.exitCode = 1;
}
