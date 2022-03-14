import StyledClock from 'components/system/Taskbar/Clock/StyledClock';
import useClock from 'hooks/useClock';
import useLocaleTimeDate from 'hooks/useLocaleTimeDate';
import React from 'react';

const Clock = (): JSX.Element => {
  const now = useClock();
  const { date, time, dateTime } = useLocaleTimeDate(now);

  return (
    <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
      {time}
    </StyledClock>
  );
};

export default Clock;
