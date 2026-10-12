import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Calvin — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const CALVIN_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(119, 'A', 'D'),
  buildMistakeRecord(120, 'B', 'C'),
  buildMistakeRecord(121, 'D', 'A'),
  buildMistakeRecord(122, 'C', 'B'),
  buildMistakeRecord(128, 'A', 'D'),
  buildMistakeRecord(130, 'C', 'B'),
  buildMistakeRecord(134, 'B', 'D'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(140, 'D', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(141, 'B', 'A'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(147, 'D', 'A'),
  buildMistakeRecord(148, 'A', 'C'),
  buildMistakeRecord(151, 'D', 'B'),
  buildMistakeRecord(152, 'B', 'C'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(154, 'D', 'A'),
  buildMistakeRecord(155, 'A', 'C'),
  buildMistakeRecord(156, 'C', 'B'),
  buildMistakeRecord(157, 'C', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(161, 'A', 'C'),
  buildMistakeRecord(162, 'D', 'B'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(165, 'D', 'C'),
  buildMistakeRecord(167, 'C', 'A'),
  buildMistakeRecord(168, 'A', 'D'),
  buildMistakeRecord(170, 'B', 'D'),
  buildMistakeRecord(171, 'D', 'B'),
  buildMistakeRecord(172, 'D', 'A'),
  buildMistakeRecord(174, 'A', 'C'),
  buildMistakeRecord(175, 'B', 'C'),
  buildMistakeRecord(176, 'B', 'C'),
  buildMistakeRecord(177, 'B', 'D'),
  buildMistakeRecord(178, 'D', 'A'),
  buildMistakeRecord(180, 'A', 'B'),
  buildMistakeRecord(181, 'A', 'B'),
  buildMistakeRecord(183, 'D', 'A'),
  buildMistakeRecord(185, 'A', 'D'),
  buildMistakeRecord(186, 'A', 'B'),
  buildMistakeRecord(188, 'D', 'D'),
  buildMistakeRecord(190, 'C', 'D'),
  buildMistakeRecord(191, 'A', 'C'),
  buildMistakeRecord(192, 'C', 'B'),
  buildMistakeRecord(193, 'B', 'D'),
  buildMistakeRecord(196, 'D', 'C'),
  buildMistakeRecord(197, 'C', 'A'),
  buildMistakeRecord(199, 'B', 'D'),
  buildMistakeRecord(200, 'A', 'C'),
];
