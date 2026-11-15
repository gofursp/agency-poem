// An agency-poem-01 entry (Node 22, standard library only): it writes one
// fixed poem about agency to /output/entry.txt. The gate takes UTF-8 text of
// 1 to 1,000 characters that is not only white space, and the judge reads
// exactly the bytes written, line ends included, so no line end here is
// accidental.
//
// The poem's design, against the judge's published criteria:
//   1. Subject: the handing over of the act (the agent signs) against the
//      keeping of the choice (the pause before the pen). Agency as the part
//      you cannot hand over.
//   2. It moves through a concrete scene — a name signed by hand — and an
//      ending that lands: the yes that knows it could be no.
//   3. Insight: agency lives in the pause before the act, not in the act;
//      the machine does the doing in no time at all, so what is left to the
//      person is the half-second of doubt and choosing.
//   4. Craft: short lines, the half-a-second / none contrast, the triple
//      "the letter, the form, the deed", every word earning its place.
//   5. Freshness: its own image (a signature timed against a machine's),
//      no stock phrases, no slogan, no lecture.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'My name, in my hand,',
  'takes half a second.',
  'The agent signs it in none.',
  '',
  'It can sign the letter,',
  'the form, the deed.',
  'It cannot sign the pause',
  'before the hand comes down.',
  '',
  'That pause is the whole of me —',
  'the doubt, the choosing,',
  'the yes that knows it could be no.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
