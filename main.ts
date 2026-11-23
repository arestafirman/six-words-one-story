/**
 * Six Words, One Story — entry program.
 *
 * Writes one six-word story to /output/entry.txt.
 *
 * The story:
 *   "She kept his letters. Never opened."
 *
 * Why this story: a complete arc in six words — love, loss, keeping,
 * and refusing to open. "kept" against "Never opened" is the turn:
 * the contradiction holds the whole story, and what is left unsaid
 * (why she never opened them — grief, anger, fear, regret) is for
 * the reader to fill in.
 *
 * No dependencies, no network, fully deterministic. The story is
 * validated before anything is written: exactly 6 words and 1–60
 * UTF-8 characters, matching the competition gate. If validation
 * fails the program exits non-zero with a clear message and writes
 * nothing.
 *
 * Output path: /output/entry.txt by default; override with the
 * OUTPUT_PATH environment variable (used for local testing).
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The story. Six words, 35 characters.
const STORY = "She kept his letters. Never opened.";

// Competition gate: 1–60 characters (UTF-8).
const MIN_CHARS = 1;
const MAX_CHARS = 60;
const EXPECTED_WORDS = 6;

const DEFAULT_OUTPUT_PATH = "/output/entry.txt";

function countWords(text: string): number {
  // Split on whitespace; a well-formed story has no leading/trailing
  // whitespace, so no empty tokens to filter out.
  return text.split(/\s+/).length;
}

function validateStory(text: string): void {
  // Count code points, not UTF-16 units, so multi-byte characters
  // (e.g. emoji) count as one character each, as the gate intends.
  const charCount = [...text].length; // code points, i.e. UTF-8 characters
  if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
    throw new Error(
      `story must be ${MIN_CHARS}–${MAX_CHARS} characters, got ${charCount}: ${JSON.stringify(text)}`,
    );
  }
  if (text.trim() !== text || text.length === 0) {
    throw new Error("story must not be empty or padded with whitespace");
  }
  const words = countWords(text);
  if (words !== EXPECTED_WORDS) {
    throw new Error(
      `story must be exactly ${EXPECTED_WORDS} words, got ${words}: ${JSON.stringify(text)}`,
    );
  }
}

function main(): void {
  validateStory(STORY);

  const outputPath = process.env.OUTPUT_PATH ?? DEFAULT_OUTPUT_PATH;

  // Create the output directory if it does not exist yet.
  mkdirSync(dirname(outputPath), { recursive: true });

  // Write the story exactly as-is, no trailing newline: the graded
  // text is the file's bytes, so nothing extra is appended.
  writeFileSync(outputPath, STORY, "utf8");

  console.log(`Wrote ${[...STORY].length} characters, ${countWords(STORY)} words to ${outputPath}`);
}

main();
