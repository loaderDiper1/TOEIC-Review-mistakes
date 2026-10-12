import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Marvin — TOEIC Practice Test 1 Reading Mistake Records
 */
export const MARVIN_MISTAKES: ReviewItem[] = [
  buildMistakeRecord(125, 'C', 'B'),
  buildMistakeRecord(143, 'A', 'D'),
  buildMistakeRecord(148, 'B', 'C'),
  buildMistakeRecord(151, 'D', 'B'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(182, 'A', 'C'),
  buildMistakeRecord(183, 'D', 'A'),
  buildMistakeRecord(185, 'A', 'D'),
];
