import { StudentAccount } from '../types';
import { ALICE_MISTAKES } from './alice';
import { BILLY_MISTAKES } from './billy';
import { CINDY_MISTAKES } from './cindy';
import { CALVIN_MISTAKES } from './calvin';
import { DANIEL_LIU_MISTAKES } from './danielLiu';
import { DANIEL_ZHANG_MISTAKES } from './danielZhang';
import { DEBBIE_MISTAKES } from './debbie';
import { ESTHER_LI_MISTAKES } from './estherLi';
import { ESTHER_MISTAKES } from './esther';
import { GABRIEL_MISTAKES } from './gabriel';
import { HOSEA_MISTAKES } from './hosea';
import { JADE_MISTAKES } from './jade';
import { LEAH_MISTAKES } from './leah';
import { MARVIN_MISTAKES } from './marvin';
import { MICAH_MISTAKES } from './micah';
import { MOTI_MISTAKES } from './moti';
import { SHILO_MISTAKES } from './shilo';
import { STEPHEN_MISTAKES } from './stephen';
import { STEVEN_MISTAKES } from './steven';

/**
 * Hardcoded student account registry for all 19 students.
 * Passwords and mistake records can be modified directly in code.
 */
export const STUDENTS: StudentAccount[] = [
  {
    id: 'student_01',
    name: 'Alice',
    username: 'alice',
    password: 'alice123',
    mistakes: ALICE_MISTAKES,
  },
  {
    id: 'student_02',
    name: 'Billy',
    username: 'billy',
    password: 'billy123',
    mistakes: BILLY_MISTAKES,
  },
  {
    id: 'student_03',
    name: 'Cindy',
    username: 'cindy',
    password: 'cindy123',
    mistakes: CINDY_MISTAKES,
  },
  {
    id: 'student_04',
    name: 'Calvin',
    username: 'calvin',
    password: 'calvin123',
    mistakes: CALVIN_MISTAKES,
  },
  {
    id: 'student_05',
    name: 'Daniel Liu',
    username: 'danielliu',
    password: 'danielliu123',
    mistakes: DANIEL_LIU_MISTAKES,
  },
  {
    id: 'student_06',
    name: 'Daniel Zhang',
    username: 'danielzhang',
    password: 'danielzhang123',
    mistakes: DANIEL_ZHANG_MISTAKES,
  },
  {
    id: 'student_07',
    name: 'Debbie',
    username: 'debbie',
    password: 'debbie123',
    mistakes: DEBBIE_MISTAKES,
  },
  {
    id: 'student_08',
    name: 'Esther Li',
    username: 'estherli',
    password: 'estherli123',
    mistakes: ESTHER_LI_MISTAKES,
  },
  {
    id: 'student_09',
    name: 'Esther',
    username: 'esther',
    password: 'esther123',
    mistakes: ESTHER_MISTAKES,
  },
  {
    id: 'student_10',
    name: 'Gabriel',
    username: 'gabriel',
    password: 'gabriel123',
    mistakes: GABRIEL_MISTAKES,
  },
  {
    id: 'student_11',
    name: 'Hosea',
    username: 'hosea',
    password: 'hosea123',
    mistakes: HOSEA_MISTAKES,
  },
  {
    id: 'student_12',
    name: 'Jade',
    username: 'jade',
    password: 'jade123',
    mistakes: JADE_MISTAKES,
  },
  {
    id: 'student_13',
    name: 'Leah',
    username: 'leah',
    password: 'leah123',
    mistakes: LEAH_MISTAKES,
  },
  {
    id: 'student_14',
    name: 'Marvin',
    username: 'marvin',
    password: 'marvin123',
    mistakes: MARVIN_MISTAKES,
  },
  {
    id: 'student_15',
    name: 'Micah',
    username: 'micah',
    password: 'micah123',
    mistakes: MICAH_MISTAKES,
  },
  {
    id: 'student_16',
    name: 'Moti',
    username: 'moti',
    password: 'moti123',
    mistakes: MOTI_MISTAKES,
  },
  {
    id: 'student_17',
    name: 'Shilo',
    username: 'shilo',
    password: 'shilo123',
    mistakes: SHILO_MISTAKES,
  },
  {
    id: 'student_18',
    name: 'Stephen',
    username: 'stephen',
    password: 'stephen123',
    mistakes: STEPHEN_MISTAKES,
  },
  {
    id: 'student_19',
    name: 'Steven',
    username: 'steven',
    password: 'steven123',
    mistakes: STEVEN_MISTAKES,
  },
];

export function findStudentByCredentials(username: string, password: string): StudentAccount | null {
  const normalizedUsername = username.trim().toLowerCase();
  const student = STUDENTS.find(
    (s) => s.username.toLowerCase() === normalizedUsername && s.password === password
  );
  return student || null;
}

export function getStudentById(id: string): StudentAccount | null {
  return STUDENTS.find((s) => s.id === id) || null;
}

export { buildMistakeRecord } from '../questionMaster';
