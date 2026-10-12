import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Alice — TOEIC Practice Test 1 Reading Mistake Records
 * All 34 verified mistakes linked to centralized shared explanations.
 *
 * Format: Question Number | Student's Answer | Official Correct Answer
 */
export const ALICE_MISTAKES: ReviewItem[] = [
  // Part 5 — Incomplete Sentences (14 Items)
  buildMistakeRecord(104, 'C'),
  buildMistakeRecord(107, 'C'),
  buildMistakeRecord(108, 'D'),
  buildMistakeRecord(111, 'A'),
  buildMistakeRecord(118, 'A'),
  buildMistakeRecord(119, 'C'),
  buildMistakeRecord(121, 'D'),
  buildMistakeRecord(123, 'C'),
  buildMistakeRecord(126, 'D'),
  buildMistakeRecord(128, 'A'),
  buildMistakeRecord(129, 'B'),
  buildMistakeRecord(134, 'A'),
  buildMistakeRecord(138, 'D'),
  buildMistakeRecord(140, 'A'),

  // Part 6 — Text Completion (6 Items)
  buildMistakeRecord(144, 'C'),
  buildMistakeRecord(147, 'D'),
  buildMistakeRecord(148, 'A'),
  buildMistakeRecord(149, 'A'),
  buildMistakeRecord(151, 'D'),
  buildMistakeRecord(152, 'B'),

  // Part 7 — Reading Comprehension (14 Items)
  buildMistakeRecord(154, 'D'),
  buildMistakeRecord(159, 'B'),
  buildMistakeRecord(161, 'A'),
  buildMistakeRecord(162, 'C'),
  buildMistakeRecord(163, 'B'),
  buildMistakeRecord(164, 'B'),
  buildMistakeRecord(179, 'C'),
  buildMistakeRecord(180, 'C'),
  buildMistakeRecord(192, 'A'),
  buildMistakeRecord(193, 'B'),
  buildMistakeRecord(195, 'A'),
  buildMistakeRecord(197, 'B'),
  buildMistakeRecord(198, 'D'),
  buildMistakeRecord(199, 'A'),
];
