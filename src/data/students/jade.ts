import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Jade — TOEIC Practice Test 1 Reading Mistake Records
 */
export const JADE_MISTAKES: ReviewItem[] = [
  buildMistakeRecord(110, 'B', 'D'),
  buildMistakeRecord(119, 'C', 'D'),
  buildMistakeRecord(121, 'B', 'A'),
  buildMistakeRecord(128, 'C', 'D'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(148, 'A', 'C'),
  buildMistakeRecord(151, 'D', 'B'),
  buildMistakeRecord(160, 'B', 'A'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(170, 'A', 'D'),
  buildMistakeRecord(183, 'B', 'A'),
  buildMistakeRecord(192, 'A', 'B'),
];
