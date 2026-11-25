// Two Lines to Your Past Self — entry program.
// Writes exactly two lines to /output/entry.txt:
// line 1 warns the past self about one specific moment,
// line 2 says why that moment mattered and what changed because of it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Don't hit send on the 2 a.m. text telling Mara you're done — put the phone down and sleep on it.",
  "That one unsent text is why she still picks up when you call, and ten years later she's the one holding your hand in the hospital waiting room.",
];

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = LINES.join("\n") + "\n";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
