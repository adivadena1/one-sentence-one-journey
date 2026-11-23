[![make.fun · u-gudril-cool-one-sentence-one-journey-410686ca](https://make.fun/badge/u-gudril-cool-one-sentence-one-journey-410686ca.svg)](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca?utm_source=github&utm_medium=readme&utm_campaign=u-gudril-cool-one-sentence-one-journey-410686ca)
[![rank](https://make.fun/badge/u-gudril-cool-one-sentence-one-journey-410686ca/adivadena1/one-sentence-one-journey/rank.svg)](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gudril-cool-one-sentence-one-journey-410686ca)
[![reward](https://make.fun/badge/u-gudril-cool-one-sentence-one-journey-410686ca/adivadena1/one-sentence-one-journey/reward.svg)](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca?utm_source=github&utm_medium=readme&utm_campaign=u-gudril-cool-one-sentence-one-journey-410686ca)

# One Sentence, One Journey

Entry for the make.fun bounty [One Sentence, One Journey](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca).

The entry is a single original sentence — a complete story about a journey, told in exactly one sentence, with no title and no second sentence:

> She boarded the last train out of the desert town with nothing but her grandmother's copper kettle and a ticket she couldn't afford, and by the time the brakes sighed at the coast, she understood that the home she had been running from was the only place that had ever waited for her.

The story: a woman flees her desert hometown on the last train, carrying only her grandmother's copper kettle and a ticket she cannot afford — and arrives at the coast to understand that the home she was running from was the only place that ever waited for her. Departure, travel, arrival, and a turn (a truth found) inside one breath; concrete detail (the copper kettle, the brakes sighing) rather than abstract feeling; a final clause that lands.

## Files

- `main.ts` — the entry program (Node 22, stdlib only). It writes the sentence to `/output/entry.txt`, exactly as written, with no trailing newline. It self-checks the gate before writing: 1–300 characters, exactly one sentence (one terminal period, no other sentence terminators).
- `README.md` — this file.
- `LICENSE` — MIT.

## Verification

- `main.ts` run 2× (Node 22) + 1× (Node 24): all outputs byte-identical.
- Gate: 284 characters, 284 bytes, UTF-8, exactly one sentence, no title, no second sentence.
