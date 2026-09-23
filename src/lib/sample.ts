import fixtureJson from "../data/sample-review.json";

/**
  * The homepage illustration is built from a committed copy of the Codazo project's authored synthetic
  * fixture (checked against the original by a test) so the site shows the real feedback contract rather than invented
 * output. It is labeled as a sample on the page: it is not a live model result.
 */

export type SampleCategory = "spelling" | "grammar" | "verb" | "alternative";

export interface SampleAnnotation {
  id: string;
  category: SampleCategory;
  quote: string;
  notice: string;
  question: string;
  hint: string;
  explanation: string;
  suggestion: string;
  optional: boolean;
}

export interface SampleSegment {
  text: string;
  annotation?: SampleAnnotation;
}

export interface SampleReview {
  source: string;
  segments: SampleSegment[];
  annotations: SampleAnnotation[];
  strengths: string[];
  nextFocus: string[];
}

interface RawAnnotation {
  id: string;
  category: SampleCategory;
  anchor: { quote: string; occurrence: number };
  notice: string;
  question: string;
  hint: string;
  explanation: string;
  suggestion: { kind: string; text: string };
}

interface RawFixture {
  source: { text: string };
  annotations: RawAnnotation[];
  strengths: { text: string }[];
  next_focus: { text: string }[];
}

function locate(source: string, quote: string, occurrence: number): number {
  let index = -1;
  for (let n = 0; n < occurrence; n += 1) {
    index = source.indexOf(quote, index + 1);
    if (index === -1) throw new Error(`sample fixture: anchor "${quote}" occurrence ${occurrence} not found`);
  }
  return index;
}

export function loadSampleReview(): SampleReview {
  const raw = fixtureJson as RawFixture;
  const source = raw.source.text;
  const placed = raw.annotations
    .map((entry) => ({
      start: locate(source, entry.anchor.quote, entry.anchor.occurrence),
      annotation: {
        id: entry.id,
        category: entry.category,
        quote: entry.anchor.quote,
        notice: entry.notice,
        question: entry.question,
        hint: entry.hint,
        explanation: entry.explanation,
        suggestion: entry.suggestion.text,
        optional: entry.suggestion.kind === "optional_alternative",
      },
    }))
    .sort((a, b) => a.start - b.start);

  const segments: SampleSegment[] = [];
  let cursor = 0;
  for (const { start, annotation } of placed) {
    if (start < cursor) throw new Error("sample fixture: overlapping anchors");
    if (start > cursor) segments.push({ text: source.slice(cursor, start) });
    segments.push({ text: annotation.quote, annotation });
    cursor = start + annotation.quote.length;
  }
  if (cursor < source.length) segments.push({ text: source.slice(cursor) });

  return {
    source,
    segments,
    annotations: placed.map((entry) => entry.annotation),
    strengths: raw.strengths.map((entry) => entry.text),
    nextFocus: raw.next_focus.map((entry) => entry.text),
  };
}
