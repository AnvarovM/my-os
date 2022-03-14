import { DEFAULT_LOCALE } from 'utils/constants';

type LocaleTimeDate = {
  date: string;
  dateTime: string;
  time: string;
};

const useLocaleTimeDate = (now: Date): LocaleTimeDate => {
  return {
    date: new Intl.DateTimeFormat(DEFAULT_LOCALE, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(now),
    time: new Intl.DateTimeFormat(DEFAULT_LOCALE, {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now),
    dateTime: now.toISOString()
  };
};

export default useLocaleTimeDate;
