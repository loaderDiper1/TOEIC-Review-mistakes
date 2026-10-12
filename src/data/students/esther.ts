import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Esther — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const ESTHER_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(103, 'A', 'D'),
  buildMistakeRecord(104, 'C', 'B'),
  buildMistakeRecord(107, 'A', 'D'),
  buildMistakeRecord(108, 'B', 'C'),
  buildMistakeRecord(109, 'D', 'B'),
  buildMistakeRecord(110, 'C', 'D'),
  buildMistakeRecord(112, 'C', 'A'),
  buildMistakeRecord(114, 'A', 'B'),
  buildMistakeRecord(116, 'D', 'B'),
  buildMistakeRecord(118, 'A', 'D'),
  buildMistakeRecord(121, 'D', 'A'),
  buildMistakeRecord(122, 'C', 'B'),
  buildMistakeRecord(125, 'A', 'B'),
  buildMistakeRecord(126, 'A', 'C'),
  buildMistakeRecord(128, 'A', 'D'),
  buildMistakeRecord(130, 'A', 'B'),
  buildMistakeRecord(132, 'B', 'C'),
  buildMistakeRecord(134, 'A', 'D'),
  buildMistakeRecord(135, 'D', 'B'),
  buildMistakeRecord(137, 'D', 'C'),
  buildMistakeRecord(138, 'D', 'C'),
  buildMistakeRecord(139, 'C', 'A'),
  buildMistakeRecord(140, 'A', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(142, 'C', 'B'),
  buildMistakeRecord(143, 'A', 'D'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(145, 'B', 'C'),
  buildMistakeRecord(147, 'B', 'A'),
  buildMistakeRecord(148, 'B', 'C'),
  buildMistakeRecord(149, 'A', 'D'),
  buildMistakeRecord(150, 'B', 'C'),
  buildMistakeRecord(151, 'C', 'B'),
  buildMistakeRecord(152, 'A', 'C'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(155, 'B', 'C'),
  buildMistakeRecord(156, 'D', 'B'),
  buildMistakeRecord(157, 'A', 'D'),
  buildMistakeRecord(158, 'C', 'B'),
  buildMistakeRecord(159, 'B', 'A'),
  buildMistakeRecord(160, 'D', 'A'),
  buildMistakeRecord(161, 'B', 'C'),
  buildMistakeRecord(162, 'D', 'B'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(165, 'D', 'C'),
  buildMistakeRecord(166, 'C', 'B'),
  buildMistakeRecord(169, 'B', 'C'),
  buildMistakeRecord(170, 'A', 'D'),
  buildMistakeRecord(171, 'C', 'B'),
  buildMistakeRecord(172, 'C', 'A'),
  buildMistakeRecord(174, 'D', 'C'),
  buildMistakeRecord(175, 'A', 'C'),
  buildMistakeRecord(176, 'A', 'C'),
  buildMistakeRecord(177, 'A', 'D'),
  buildMistakeRecord(178, 'D', 'A'),
  buildMistakeRecord(180, 'A', 'B'),
  buildMistakeRecord(182, 'D', 'C'),
  buildMistakeRecord(183, 'C', 'A'),
  buildMistakeRecord(185, 'A', 'D'),
  buildMistakeRecord(186, 'A', 'B'),
  buildMistakeRecord(187, 'D', 'A'),
  buildMistakeRecord(188, 'A', 'D'),
  buildMistakeRecord(189, 'D', 'B'),
  buildMistakeRecord(191, 'A', 'C'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'A', 'D'),
  buildMistakeRecord(194, 'A', 'B'),
  buildMistakeRecord(196, 'D', 'C'),
  buildMistakeRecord(197, 'C', 'A'),
];
