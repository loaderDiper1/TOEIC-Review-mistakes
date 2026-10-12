import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Gabriel — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const GABRIEL_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(116, 'A', 'B'),
  buildMistakeRecord(118, 'B', 'D'),
  buildMistakeRecord(119, 'B', 'D'),
  buildMistakeRecord(135, 'A', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(142, 'D', 'B'),
  buildMistakeRecord(143, 'A', 'D'),
  buildMistakeRecord(144, 'C', 'B'),
  buildMistakeRecord(151, 'D', 'B'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(153, 'C', 'A'),
  buildMistakeRecord(156, 'C', 'B'),
  buildMistakeRecord(161, 'A', 'C'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(175, 'B', 'C'),
  buildMistakeRecord(188, 'C', 'D'),
  buildMistakeRecord(191, 'A', 'C'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'B', 'D'),
  buildMistakeRecord(194, 'A', 'B'),
  buildMistakeRecord(199, 'B', 'D'),
  buildMistakeRecord(200, 'A', 'C'),
];
