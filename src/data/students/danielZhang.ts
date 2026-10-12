import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Daniel Zhang — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const DANIEL_ZHANG_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(103, 'A', 'D'),
  buildMistakeRecord(112, 'D', 'A'),
  buildMistakeRecord(113, 'A', 'C'),
  buildMistakeRecord(116, 'D', 'B'),
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(122, 'D', 'B'),
  buildMistakeRecord(123, 'C', 'A'),
  buildMistakeRecord(124, 'A', 'D'),
  buildMistakeRecord(127, 'C', 'A'),
  buildMistakeRecord(128, 'A', 'D'),
  buildMistakeRecord(129, 'C', 'A'),
  buildMistakeRecord(130, 'A', 'B'),
  buildMistakeRecord(131, 'D', 'C'),
  buildMistakeRecord(134, 'A', 'D'),
  buildMistakeRecord(136, 'B', 'D'),
  buildMistakeRecord(137, 'A', 'C'),
  buildMistakeRecord(138, 'D', 'C'),
  buildMistakeRecord(139, 'D', 'A'),
  buildMistakeRecord(140, 'D', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(142, 'D', 'B'),
  buildMistakeRecord(143, 'C', 'D'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(147, 'D', 'A'),
  buildMistakeRecord(148, 'B', 'C'),
  buildMistakeRecord(149, 'A', 'D'),
  buildMistakeRecord(150, 'D', 'C'),
  buildMistakeRecord(151, 'C', 'B'),
  buildMistakeRecord(152, 'B', 'C'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(156, 'D', 'B'),
  buildMistakeRecord(157, 'A', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(159, 'B', 'A'),
  buildMistakeRecord(161, 'B', 'C'),
  buildMistakeRecord(162, 'C', 'B'),
  buildMistakeRecord(163, 'A', 'D'),
  buildMistakeRecord(164, 'A', 'C'),
  buildMistakeRecord(166, 'D', 'B'),
  buildMistakeRecord(169, 'B', 'C'),
  buildMistakeRecord(170, 'B', 'D'),
  buildMistakeRecord(172, 'C', 'A'),
  buildMistakeRecord(173, 'C', 'A'),
  buildMistakeRecord(175, 'A', 'C'),
  buildMistakeRecord(177, 'B', 'D'),
  buildMistakeRecord(178, 'D', 'A'),
  buildMistakeRecord(181, 'B', 'B'),
  buildMistakeRecord(182, 'A', 'C'),
  buildMistakeRecord(185, 'A', 'D'),
  buildMistakeRecord(187, 'C', 'A'),
  buildMistakeRecord(188, 'C', 'D'),
  buildMistakeRecord(189, 'C', 'B'),
  buildMistakeRecord(190, 'C', 'D'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'C', 'D'),
  buildMistakeRecord(194, 'C', 'B'),
  buildMistakeRecord(195, 'B', 'C'),
  buildMistakeRecord(196, 'B', 'C'),
  buildMistakeRecord(197, 'B', 'A'),
  buildMistakeRecord(198, 'A', 'B'),
  buildMistakeRecord(199, 'C', 'D'),
  buildMistakeRecord(200, 'B', 'C'),
];
