// Charm the Commuter: Forecast a City That Isn't
// Entry program (program/v1): writes exactly one line of weather forecast,
// at most 140 characters, for a city that does not exist, to /output/entry.txt.
// Deterministic: no randomness, no network, no clock — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good morning, Puddleton: 11° with light showers of warm gravy from 8am — umbrellas up, spoons out; the 8:15 bus is late, the gravy is not.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1–140
// characters, not only whitespace, on a single line. Fail loudly
// rather than ever writing an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 140) {
  throw new Error(`entry is ${[...LINE].length} chars, must be 1-140`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
