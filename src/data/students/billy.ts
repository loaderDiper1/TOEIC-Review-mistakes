import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Billy — TOEIC Practice Test 1 Reading Mistake Records
 * All 65 verified mistakes with complete grammar explanations,
 * rules applied, and distractor option analyses.
 *
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const BILLY_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES (20 Items)
  // ==========================================
  buildMistakeRecord(101, 'D', 'A'),
  buildMistakeRecord(103, 'A', 'D'),
  buildMistakeRecord(104, 'C', 'B'),
  buildMistakeRecord(105, 'A', 'B'),
  buildMistakeRecord(106, 'D', 'C'),
  buildMistakeRecord(107, 'C', 'D'),
  buildMistakeRecord(108, 'B', 'C'),
  buildMistakeRecord(111, 'D', 'C'),
  buildMistakeRecord(113, 'A', 'C'),
  buildMistakeRecord(114, 'C', 'B'),
  buildMistakeRecord(117, 'C', 'D'),
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(120, 'B', 'C'),
  buildMistakeRecord(122, 'C', 'B'),
  buildMistakeRecord(123, 'D', 'A'),
  buildMistakeRecord(124, 'B', 'D'),
  buildMistakeRecord(126, 'B', 'C'),
  buildMistakeRecord(130, 'A', 'B'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(140, 'D', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION (9 Items)
  // ==========================================
  buildMistakeRecord(141, 'C', 'A'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(145, 'B', 'C'),
  buildMistakeRecord(147, 'D', 'A'),
  buildMistakeRecord(148, 'A', 'C'),
  buildMistakeRecord(149, 'A', 'D'),
  buildMistakeRecord(150, 'A', 'C'),
  buildMistakeRecord(151, 'C', 'B'),
  buildMistakeRecord(152, 'B', 'C'),

  // ==========================================
  // PART 7 — READING COMPREHENSION (36 Items)
  // ==========================================
  buildMistakeRecord(154, 'D', 'A'),
  buildMistakeRecord(155, 'A', 'C'),
  buildMistakeRecord(156, 'C', 'B'),
  buildMistakeRecord(157, 'A', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(159, 'D', 'A'),
  buildMistakeRecord(161, 'D', 'C'),
  buildMistakeRecord(162, 'D', 'B'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(166, 'D', 'B'),
  buildMistakeRecord(167, 'C', 'A'),
  buildMistakeRecord(168, 'A', 'D'),
  buildMistakeRecord(169, 'B', 'C'),
  buildMistakeRecord(170, 'A', 'D'),
  buildMistakeRecord(171, 'C', 'B'),
  buildMistakeRecord(172, 'C', 'A'),
  buildMistakeRecord(173, 'C', 'A'),
  buildMistakeRecord(175, 'B', 'C'),
  buildMistakeRecord(176, 'A', 'C'),
  buildMistakeRecord(177, 'B', 'D'),
  buildMistakeRecord(178, 'C', 'A'),
  buildMistakeRecord(179, 'B', 'A'),
  buildMistakeRecord(182, 'A', 'C'),
  buildMistakeRecord(183, 'D', 'A'),
  buildMistakeRecord(185, 'A', 'D'),
  buildMistakeRecord(187, 'D', 'A'),
  buildMistakeRecord(188, 'C', 'D'),
  buildMistakeRecord(190, 'B', 'D'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'B', 'D'),
  buildMistakeRecord(194, 'D', 'B'),
  buildMistakeRecord(195, 'A', 'C'),
  buildMistakeRecord(197, 'C', 'A'),
  buildMistakeRecord(199, 'C', 'D'),
  buildMistakeRecord(200, 'D', 'C'),
];
