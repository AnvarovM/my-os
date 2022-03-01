import useClock from 'hooks/useClock';
import useLocaleTimeDate from 'hooks/useLocaleTimeDate';
import React from 'react';
import StyledClock from 'styles/components/system/Taskbar/StyledClock';

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
