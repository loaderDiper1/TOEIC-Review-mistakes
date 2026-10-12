import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Esther Li — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const ESTHER_LI_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(103, 'C', 'D'),
  buildMistakeRecord(112, 'D', 'A'),
  buildMistakeRecord(114, 'A', 'B'),
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(125, 'C', 'B'),
  buildMistakeRecord(126, 'A', 'C'),
  buildMistakeRecord(128, 'A', 'D'),
  buildMistakeRecord(129, 'B', 'A'),
  buildMistakeRecord(134, 'B', 'D'),
  buildMistakeRecord(138, 'D', 'C'),
  buildMistakeRecord(140, 'A', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(141, 'B', 'A'),
  buildMistakeRecord(143, 'B', 'D'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(147, 'D', 'A'),
  buildMistakeRecord(148, 'A', 'C'),
  buildMistakeRecord(150, 'A', 'C'),
  buildMistakeRecord(151, 'D', 'B'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(157, 'A', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(161, 'B', 'C'),
  buildMistakeRecord(162, 'D', 'B'),
  buildMistakeRecord(163, 'A', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(166, 'D', 'B'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(170, 'A', 'D'),
  buildMistakeRecord(172, 'D', 'A'),
  buildMistakeRecord(173, 'D', 'A'),
  buildMistakeRecord(175, 'A', 'C'),
  buildMistakeRecord(178, 'D', 'A'),
  buildMistakeRecord(188, 'A', 'D'),
  buildMistakeRecord(194, 'C', 'B'),
  buildMistakeRecord(199, 'B', 'D'),
  buildMistakeRecord(200, 'A', 'C'),
];
