import config from 'next.config';
import { useRouter } from 'next/router';

type LocaleTimeDate = {
  date: string;
  dateTime: string;
  time: string;
};

const useLocaleTimeDate = (now: Date): LocaleTimeDate => {
  const { locale = config.i18n.defaultLocale } = useRouter() || {};
  return {
    date: new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(now),
    time: new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now),
    dateTime: now.toISOString()
  };
};

export default useLocaleTimeDate;
