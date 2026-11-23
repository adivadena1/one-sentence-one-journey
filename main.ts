// One Sentence, One Journey — make.fun entry.
// Writes a single original one-sentence story to /output/entry.txt.
// Node 22, standard library only. Deterministic: no clock, no network,
// no randomness. The file holds exactly the sentence, no trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "She boarded the last train out of the desert town with nothing but her grandmother's copper kettle and a ticket she couldn't afford, and by the time the brakes sighed at the coast, she understood that the home she had been running from was the only place that had ever waited for her.";

// Gate self-check: UTF-8 text, 1-300 characters, exactly one sentence
// (one terminal period, no other sentence terminators).
const chars = [...STORY].length;
if (chars < 1 || chars > 300) {
  throw new Error(`story is ${chars} characters, gate needs 1-300`);
}
const terminators = [...STORY].filter((c) => c === "." || c === "!" || c === "?").length;
if (terminators !== 1 || !STORY.endsWith(".")) {
  throw new Error("story must be exactly one sentence ending in a single period");
}

const outDir = process.argv[2] || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, STORY, "utf8");

// Verify-after-write: read the file back and confirm it is byte-identical
// to STORY, so a partial or corrupted write fails loudly instead of
// silently producing a wrong entry.
const written = readFileSync(outPath, "utf8");
if (written !== STORY) {
  throw new Error(`verify-after-write failed: ${outPath} does not match the story`);
}
console.log(`wrote ${chars} characters to ${outPath}`);
