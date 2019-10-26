import { PropertyValue } from '@reallyland/really-elements/dist/code-configurator/code-configurator.js';

import { START_VIEW } from '../app-datepicker.js';
import { WEEK_NUMBER_TYPE } from '../calendar.js';
import {
  getResolvedDate,
  getResolvedLocale,
  toFormattedDateString,
} from '../datepicker-helpers.js';
import { locales } from './locales.js';

const properties: PropertyValue[] = [
  {
    name: 'firstDayOfWeek',
    value: 0,
    type: 'number',
  },
  {
    name: 'showWeekNumber',
    value: false,
    type: 'boolean',
  },
  {
    name: 'weekNumberType',
    value: WEEK_NUMBER_TYPE.FIRST_4_DAY_WEEK,
    type: 'string',
    options: [
      {
        label: WEEK_NUMBER_TYPE.FIRST_4_DAY_WEEK,
        value: WEEK_NUMBER_TYPE.FIRST_4_DAY_WEEK,
      },
      {
        label: WEEK_NUMBER_TYPE.FIRST_DAY_OF_YEAR,
        value: WEEK_NUMBER_TYPE.FIRST_DAY_OF_YEAR,
      },
      {
        label: WEEK_NUMBER_TYPE.FIRST_FULL_WEEK,
        value: WEEK_NUMBER_TYPE.FIRST_FULL_WEEK,
      },
    ],
  },
  {
    name: 'landscape',
    value: false,
    type: 'boolean',
  },
  {
    name: 'startView',
    value: START_VIEW.CALENDAR,
    type: 'string',
    options: [
      {
        label: START_VIEW.CALENDAR,
        value: START_VIEW.CALENDAR,
      },
      {
        label: START_VIEW.YEAR_LIST,
        value: START_VIEW.YEAR_LIST,
      },
    ],
  },
  {
    name: 'min',
    value: '',
    type: 'string',
  },
  {
    name: 'max',
    value: '',
    type: 'string',
  },
  {
    name: 'value',
    value: toFormattedDateString(getResolvedDate()),
    type: 'string',
  },
  {
    name: 'locale',
    value: getResolvedLocale(),
    type: 'string',
    options: locales.map(n => ({ label: n.name, value: n.code })),
  },
  {
    name: 'disabledDays',
    value: '',
    type: 'string',
  },
  {
    name: 'disabledDates',
    value: '',
    type: 'string',
  },
  {
    name: 'weekLabel',
    value: 'Wk',
    type: 'string',
  },
  {
    name: 'dragRatio',
    value: .15,
    type: 'number',
  },
];

const cssProperties: PropertyValue[] = [
  {
    name: '--app-dateicker-border-top-left-radius',
    value: '8px',
  },
  {
    name: '--app-datepicker-border-top-right-radius',
    value: '8px',
  },
  {
    name: '--app-datepicker-border-bottom-right-radius',
    value: '8px',
  },
  {
    name: '--app-datepicker-border-bottom-left-radius',
    value: '8px',
  },
  {
    name: '--app-datepicker-accent-color',
    value: '#1a73e8',
  },
  {
    name: '--app-datepicker-bg-color',
    value: '#fff',
  },
  {
    name: '--app-datepicker-color',
    value: '#000',
  },
  {
    name: '--app-datepicker-disabled-day-color',
    value: 'rgba(0, 0, 0, .35)',
  },
  {
    name: '--app-datepicker-focused-day-color',
    value: '#fff',
  },
  {
    name: '--app-datepicker-selector-color',
    value: 'rgba(0, 0, 0, .55)',
  },
  {
    name: '--app-datepicker-separator-color',
    value: '#ddd',
  },
  {
    name: '--app-datepicker-weekday-color',
    value: 'rgba(0, 0, 0, .55)',
  },
];

const propertiesDialog: PropertyValue[] = [
  ...properties,
  {
    name: 'dismissLabel',
    value: 'cancel',
    type: 'string',
  },
  {
    name: 'confirmLabel',
    value: 'ok',
    type: 'string',
  },
  {
    name: 'noFocusTrap',
    value: false,
    type: 'boolean',
  },
];

const cssPropertiesDialog: PropertyValue[] = [
  ...cssProperties,
  {
    name: '--app-datepicker-dialog-z-index',
    value: '24',
  },
  {
    name: '--app-datepicker-dialog-border-radius',
    value: '8px',
  },
  {
    name: '--app-datepicker-dialog-scrim-bg-color',
    value: 'rgba(0, 0, 0, .55)',
  },
];

export { properties, cssProperties, propertiesDialog, cssPropertiesDialog };
