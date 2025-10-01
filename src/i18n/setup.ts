import { initReactI18next } from 'react-i18next';
import dayjs from 'dayjs';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

import CustomParseFormatPlugin from 'dayjs/plugin/customParseFormat.js';
import DayOfYearPlugin from 'dayjs/plugin/dayOfYear.js';
import DurationPlugin from 'dayjs/plugin/duration.js';
import IsBetweenPlugin from 'dayjs/plugin/isBetween.js';
import IsSameOrAfterPlugin from 'dayjs/plugin/isSameOrAfter.js';
import IsSameOrBeforePlugin from 'dayjs/plugin/isSameOrBefore.js';
import LocaleDataPlugin from 'dayjs/plugin/localeData.js';
import LocalizedFormatPlugin from 'dayjs/plugin/localizedFormat.js';
import RelativeTimePlugin from 'dayjs/plugin/relativeTime.js';
import timezone from 'dayjs/plugin/timezone.js';
import UtcPlugin from 'dayjs/plugin/utc.js';


dayjs.extend(LocalizedFormatPlugin);
dayjs.extend(LocaleDataPlugin);
dayjs.extend(timezone);
dayjs.extend(UtcPlugin);
dayjs.extend(RelativeTimePlugin);
dayjs.extend(CustomParseFormatPlugin);
dayjs.extend(DurationPlugin);
dayjs.extend(IsBetweenPlugin);
dayjs.extend(IsSameOrAfterPlugin);
dayjs.extend(IsSameOrBeforePlugin);
dayjs.extend(DayOfYearPlugin);


export * from 'react-i18next';

const dateFormats = {
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'DD/MM/YYYY',
  LL: 'D MMMM YYYY',
  LLL: 'D MMMM YYYY HH:mm',
  LLLL: 'dddd D MMMM YYYY HH:mm',
};

function setDatesLocale(lng: string) {
  const presetSplit = lng.split('-');
  dayjs.locale(lng, {
    ...dayjs.Ls[presetSplit[0]],
    formats: dateFormats,
  });
}
export type DefaultSupportedLngs = 'en-US' | 'fr-FR';

export const instance = i18next.use(initReactI18next);

export function init({
  supportedLngs = ['en-US', 'fr-FR'],
  enableMultilingual = true,
}: { supportedLngs?: Array<string>; enableMultilingual?: boolean } = {}) {
  // Teamcity specifics to avoid locales errors in Storybook
  let pathname = '';
  if (window.location.host === 'teamcity.evs.tv' && window.location.pathname.includes('storybook.zip')) {
    pathname = window.location.pathname.replace(/\/(index|iframe)\.html$/, '');
  }

  if (enableMultilingual) {
    instance.use(LanguageDetector);
    instance.on('languageChanged', (lng: string) => {
      if (supportedLngs.includes(lng)) {
        setDatesLocale(lng);
      }
    });
  }
  instance.use(HttpBackend);
  instance.on('initialized', (options) => {
    if (options.lng && supportedLngs.includes(options.lng)) {
      setDatesLocale(options.lng);
    }
  });

  return instance.init({
    load: 'currentOnly',
    fallbackLng: supportedLngs[0],
    ns: [],
    defaultNS: false,
    fallbackNS: false,
    preload: [supportedLngs[0]],
    detection: {
      order: ['localStorage', 'navigator'],
    },
    backend: {
      loadPath: `${pathname}/locales/{{lng}}.json`,
    },
    react: {
      useSuspense: false,
    },
  });
}
