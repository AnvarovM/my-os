/* eslint-disable import/no-named-as-default */
import useLocaleTimeDate from 'hooks/useLocaleTimeDate';
import useSyncedClock from 'hooks/useSyncedClock';
import React from 'react';
import StyledClock from 'styles/components/system/StyledClock';

const Clock = (): JSX.Element => {
  const [now, setNow] = React.useState(new Date());
  const { date, time, dateTime } = useLocaleTimeDate(now);

  const updateClock = React.useCallback(() => setNow(new Date()), []);

  useSyncedClock(updateClock);

  return (
    <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
      {time}
    </StyledClock>
  );
};

export default Clock;
