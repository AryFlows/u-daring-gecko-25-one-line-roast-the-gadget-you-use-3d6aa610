import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My phone's battery is 20% all morning, 19% all afternoon, then 1% the exact second I open the map.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
