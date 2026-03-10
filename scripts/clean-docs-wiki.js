import { promises as fs } from "node:fs";
import { join } from "node:path";

const docsWikiDir = join(process.cwd(), "docs", "wiki");

async function removeMarkdowns(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === ".obsidian") {
          await fs.rm(entryPath, { recursive: true, force: true });
          return;
        }
        await removeMarkdowns(entryPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        await fs.rm(entryPath, { force: true });
      }
    }),
  );
}

async function run() {
  try {
    await removeMarkdowns(docsWikiDir);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error["code"] === "ENOENT"
    ) {
      return;
    }
    throw error;
  }
}

run();
