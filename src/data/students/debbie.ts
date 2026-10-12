import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Debbie — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const DEBBIE_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(101, 'B', 'A'),
  buildMistakeRecord(102, 'A', 'C'),
  buildMistakeRecord(103, 'A', 'D'),
  buildMistakeRecord(106, 'D', 'C'),
  buildMistakeRecord(108, 'B', 'C'),
  buildMistakeRecord(114, 'C', 'B'),
  buildMistakeRecord(116, 'C', 'B'),
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(119, 'B', 'D'),
  buildMistakeRecord(120, 'B', 'C'),
  buildMistakeRecord(121, 'D', 'A'),
  buildMistakeRecord(122, 'C', 'B'),
  buildMistakeRecord(123, 'B', 'A'),
  buildMistakeRecord(126, 'D', 'C'),
  buildMistakeRecord(127, 'C', 'A'),
  buildMistakeRecord(128, 'A', 'D'),
  buildMistakeRecord(129, 'C', 'A'),
  buildMistakeRecord(134, 'B', 'D'),
  buildMistakeRecord(136, 'B', 'D'),
  buildMistakeRecord(138, 'D', 'C'),
  buildMistakeRecord(139, 'B', 'A'),
  buildMistakeRecord(140, 'A', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(141, 'C', 'A'),
  buildMistakeRecord(142, 'D', 'B'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(151, 'C', 'B'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(153, 'B', 'A'),
  buildMistakeRecord(154, 'B', 'A'),
  buildMistakeRecord(155, 'D', 'C'),
  buildMistakeRecord(156, 'A', 'B'),
  buildMistakeRecord(157, 'C', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(159, 'B', 'A'),
  buildMistakeRecord(162, 'A', 'B'),
  buildMistakeRecord(163, 'A', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(166, 'D', 'C'),
  buildMistakeRecord(168, 'C', 'D'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(170, 'A', 'D'),
  buildMistakeRecord(171, 'D', 'B'),
  buildMistakeRecord(172, 'D', 'A'),
  buildMistakeRecord(173, 'B', 'A'),
  buildMistakeRecord(174, 'A', 'C'),
  buildMistakeRecord(176, 'B', 'C'),
  buildMistakeRecord(177, 'A', 'D'),
  buildMistakeRecord(183, 'B', 'A'),
  buildMistakeRecord(184, 'A', 'B'),
  buildMistakeRecord(185, 'C', 'D'),
  buildMistakeRecord(186, 'A', 'B'),
  buildMistakeRecord(187, 'D', 'A'),
  buildMistakeRecord(189, 'D', 'B'),
  buildMistakeRecord(190, 'C', 'D'),
  buildMistakeRecord(191, 'D', 'C'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'B', 'D'),
  buildMistakeRecord(194, 'C', 'B'),
  buildMistakeRecord(195, 'D', 'C'),
  buildMistakeRecord(197, 'D', 'A'),
  buildMistakeRecord(199, 'B', 'D'),
  buildMistakeRecord(200, 'D', 'C'),
];
