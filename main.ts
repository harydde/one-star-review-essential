// One-Star Review of Something Essential (u-0xb3e689-one-star-review-of-something-essential-c7234629):
// one deadpan single-line one-star review of sleep, written to /output/entry.txt.
// Gate: UTF-8 text, 1-160 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Eight hours a night and I still wake up tired. Will use again tonight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
