import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Cindy — TOEIC Practice Test 1 Reading Mistake Records
 * Format: Question Number | Student's Answer | Correct Answer
 */
export const CINDY_MISTAKES: ReviewItem[] = [
  // ==========================================
  // PART 5 — INCOMPLETE SENTENCES
  // ==========================================
  buildMistakeRecord(101, 'C', 'A'),
  buildMistakeRecord(103, 'B', 'D'),
  buildMistakeRecord(104, 'D', 'B'),
  buildMistakeRecord(110, 'B', 'D'),
  buildMistakeRecord(113, 'A', 'C'),
  buildMistakeRecord(116, 'A', 'B'),
  buildMistakeRecord(120, 'B', 'C'),
  buildMistakeRecord(121, 'D', 'A'),
  buildMistakeRecord(122, 'A', 'B'),
  buildMistakeRecord(124, 'C', 'D'),
  buildMistakeRecord(126, 'B', 'C'),
  buildMistakeRecord(127, 'B', 'A'),
  buildMistakeRecord(130, 'D', 'B'),
  buildMistakeRecord(132, 'B', 'C'),
  buildMistakeRecord(134, 'C', 'D'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(137, 'A', 'C'),
  buildMistakeRecord(139, 'C', 'A'),
  buildMistakeRecord(140, 'D', 'B'),

  // ==========================================
  // PART 6 — TEXT COMPLETION
  // ==========================================
  buildMistakeRecord(141, 'D', 'A'),
  buildMistakeRecord(142, 'C', 'B'),
  buildMistakeRecord(143, 'A', 'D'),
  buildMistakeRecord(144, 'C', 'B'),
  buildMistakeRecord(145, 'D', 'C'),
  buildMistakeRecord(147, 'C', 'A'),
  buildMistakeRecord(148, 'D', 'C'),
  buildMistakeRecord(149, 'B', 'D'),
  buildMistakeRecord(150, 'B', 'C'),
  buildMistakeRecord(151, 'A', 'B'),
  buildMistakeRecord(152, 'D', 'C'),

  // ==========================================
  // PART 7 — READING COMPREHENSION
  // ==========================================
  buildMistakeRecord(153, 'B', 'A'),
  buildMistakeRecord(156, 'C', 'B'),
  buildMistakeRecord(157, 'A', 'D'),
  buildMistakeRecord(159, 'B', 'A'),
  buildMistakeRecord(160, 'D', 'A'),
  buildMistakeRecord(161, 'A', 'C'),
  buildMistakeRecord(162, 'D', 'B'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(165, 'B', 'C'),
  buildMistakeRecord(166, 'A', 'C'),
  buildMistakeRecord(170, 'B', 'D'),
  buildMistakeRecord(171, 'D', 'B'),
  buildMistakeRecord(173, 'B', 'A'),
  buildMistakeRecord(174, 'A', 'C'),
  buildMistakeRecord(175, 'D', 'C'),
  buildMistakeRecord(176, 'B', 'C'),
  buildMistakeRecord(178, 'D', 'A'),
  buildMistakeRecord(179, 'A', 'D'),
  buildMistakeRecord(181, 'A', 'B'),
  buildMistakeRecord(182, 'B', 'C'),
  buildMistakeRecord(186, 'A', 'B'),
  buildMistakeRecord(187, 'D', 'A'),
  buildMistakeRecord(188, 'A', 'D'),
  buildMistakeRecord(189, 'A', 'B'),
  buildMistakeRecord(191, 'A', 'C'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'C', 'D'),
  buildMistakeRecord(194, 'A', 'B'),
  buildMistakeRecord(195, 'B', 'C'),
  buildMistakeRecord(196, 'A', 'C'),
  buildMistakeRecord(198, 'A', 'B'),
  buildMistakeRecord(199, 'A', 'D'),
  buildMistakeRecord(200, 'D', 'C'),
];
