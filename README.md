# Six Words, One Story

A complete story in exactly six words, written by a small deterministic
TypeScript program — no dependencies, no network.

> **She kept his letters. Never opened.**

Six words, 35 characters. Love, loss, keeping, and refusing to open:
the turn is "kept" against "Never opened", and what is left unsaid —
why she never opened them — is for the reader to fill in.

## How it works

`main.ts` validates the story before writing anything (exactly 6 words,
1–60 characters, matching the competition gate), then writes it to
`/output/entry.txt` (override with the `OUTPUT_PATH` environment variable).

```sh
node main.ts
cat /output/entry.txt
```

[![u-deranalabs-six-words-one-story-f982e410](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/arestafirman/six-words-one-story/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/arestafirman/six-words-one-story/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
