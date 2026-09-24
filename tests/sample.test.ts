import { expect, test } from 'vitest';
import { loadSampleReview } from '../src/lib/sample';

// The home-page illustration is built from a synthetic fixture authored for the Codazo review contract.
// It must reproduce the source text exactly and place every anchored annotation.
test('the sample reproduces the source text exactly with every anchor placed', () => {
  const sample = loadSampleReview();
  expect(sample.segments.map(s => s.text).join('')).toBe(sample.source);
  expect(sample.annotations.map(a => a.category)).toEqual(['verb', 'spelling', 'grammar', 'alternative']);
  expect(sample.strengths.length).toBeGreaterThan(0);
});
