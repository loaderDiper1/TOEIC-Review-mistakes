import { ReviewItem } from '../types';
import { buildMistakeRecord } from '../questionMaster';

/**
 * Steven — TOEIC Practice Test 1 Reading Mistake Records
 */
export const STEVEN_MISTAKES: ReviewItem[] = [
  buildMistakeRecord(119, 'C', 'D'),
  buildMistakeRecord(120, 'B', 'C'),
  buildMistakeRecord(135, 'A', 'B'),
  buildMistakeRecord(142, 'A', 'B'),
  buildMistakeRecord(148, 'B', 'C'),
  buildMistakeRecord(151, 'D', 'B'),
  buildMistakeRecord(156, 'A', 'B'),
  buildMistakeRecord(159, 'B', 'A'),
  buildMistakeRecord(163, 'B', 'D'),
  buildMistakeRecord(164, 'D', 'C'),
  buildMistakeRecord(169, 'D', 'C'),
  buildMistakeRecord(170, 'B', 'D'),
  buildMistakeRecord(186, 'C', 'B'),
  buildMistakeRecord(195, 'D', 'C'),
  buildMistakeRecord(198, 'C', 'B'),
  buildMistakeRecord(199, 'B', 'D'),
];
