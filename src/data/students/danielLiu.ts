import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Daniel Liu — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const DANIEL_LIU_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(101, 'C', 'A'),
  buildMistakeRecord(107, 'A', 'D'),
  buildMistakeRecord(108, 'B', 'C'),
  buildMistakeRecord(112, 'C', 'A'),
  buildMistakeRecord(114, 'C', 'B'),
  buildMistakeRecord(115, 'D', 'A'),
  buildMistakeRecord(116, 'C', 'B'),
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(119, 'C', 'D'),
  buildMistakeRecord(120, 'A', 'C'),
  buildMistakeRecord(121, 'D', 'A'),
  buildMistakeRecord(122, 'A', 'B'),
  buildMistakeRecord(125, 'A', 'B'),
  buildMistakeRecord(126, 'D', 'C'),
  buildMistakeRecord(131, 'D', 'C'),
  buildMistakeRecord(132, 'D', 'C'),
  buildMistakeRecord(134, 'A', 'D'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(137, 'A', 'C'),
  buildMistakeRecord(139, 'D', 'A'),
  buildMistakeRecord(140, 'C', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(141, 'B', 'A'),
  buildMistakeRecord(142, 'D', 'B'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(149, 'A', 'D'),
  buildMistakeRecord(150, 'A', 'C'),
  buildMistakeRecord(151, 'D', 'B'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(154, 'D', 'A'),
  buildMistakeRecord(156, 'D', 'B'),
  buildMistakeRecord(157, 'B', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(160, 'B', 'A'),
  buildMistakeRecord(161, 'A', 'C'),
  buildMistakeRecord(162, 'D', 'B'),
  buildMistakeRecord(163, 'A', 'D'),
  buildMistakeRecord(164, 'A', 'C'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(170, 'B', 'D'),
  buildMistakeRecord(171, 'A', 'B'),
  buildMistakeRecord(172, 'D', 'A'),
  buildMistakeRecord(173, 'B', 'A'),
  buildMistakeRecord(174, 'A', 'C'),
  buildMistakeRecord(175, 'B', 'C'),
  buildMistakeRecord(178, 'B', 'A'),
  buildMistakeRecord(183, 'D', 'A'),
  buildMistakeRecord(184, 'C', 'B'),
  buildMistakeRecord(185, 'C', 'D'),
  buildMistakeRecord(186, 'A', 'B'),
  buildMistakeRecord(188, 'C', 'D'),
  buildMistakeRecord(196, 'D', 'C'),
  buildMistakeRecord(197, 'C', 'A'),
  buildMistakeRecord(198, 'A', 'B'),
  buildMistakeRecord(200, 'D', 'C'),
];
