import { KEY_CODES_MAP } from './custom_typings.js';

export const INTL_DATE_TIME_FORMAT = Intl && Intl.DateTimeFormat;

const UP_KEYS = [
  KEY_CODES_MAP.ARROW_UP,
  KEY_CODES_MAP.PAGE_UP,
  KEY_CODES_MAP.HOME,
];
const DOWN_KEYS = [
  KEY_CODES_MAP.ARROW_DOWN,
  KEY_CODES_MAP.PAGE_DOWN,
  KEY_CODES_MAP.END,
];

export const PREV_KEY_CODES_SET = new Set([KEY_CODES_MAP.ARROW_LEFT, ...UP_KEYS]);
export const NEXT_KEY_CODES_SET = new Set([KEY_CODES_MAP.ARROW_RIGHT, ...DOWN_KEYS]);
export const NEXT_DAY_KEY_CODES_SET = new Set([KEY_CODES_MAP.ARROW_RIGHT, ...UP_KEYS]);
export const PREV_DAY_KEY_CODES_SET = new Set([KEY_CODES_MAP.ARROW_LEFT, ...DOWN_KEYS]);
export const ALL_NAV_KEYS_SET = new Set([
  KEY_CODES_MAP.ARROW_LEFT,
  KEY_CODES_MAP.ARROW_RIGHT,
  ...UP_KEYS,
  ...DOWN_KEYS,
]);

export const DATEPICKER_NAME = 'app-datepicker';
export const DATEPICKER_DIALOG_NAME = 'app-datepicker-dialog';
