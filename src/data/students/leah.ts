import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Leah — TOEIC Practice Test 1 Reading Mistake Records
 */
export const LEAH_MISTAKES: ReviewItem[] = [
  buildMistakeRecord(114, 'A', 'B'),
  buildMistakeRecord(115, 'D', 'A'),
  buildMistakeRecord(122, 'A', 'B'),
  buildMistakeRecord(125, 'C', 'B'),
  buildMistakeRecord(126, 'A', 'C'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(140, 'C', 'B'),
  buildMistakeRecord(144, 'D', 'B'),
  buildMistakeRecord(148, 'A', 'C'),
  buildMistakeRecord(151, 'D', 'B'),
  buildMistakeRecord(158, 'D', 'B'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(170, 'A', 'D'),
  buildMistakeRecord(175, 'A', 'C'),
  buildMistakeRecord(177, 'B', 'D'),
  buildMistakeRecord(186, 'A', 'B'),
  buildMistakeRecord(192, 'A', 'B'),
  buildMistakeRecord(193, 'A', 'D'),
  buildMistakeRecord(196, 'D', 'C'),
];
