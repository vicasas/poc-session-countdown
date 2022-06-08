import { useEffect, useRef, useState } from 'react';

const useCountdown = (currentDate, targetDate) => {
  const difference = targetDate - currentDate;
  const [countDown, setCountDown] = useState(difference > 0 ? difference : 0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCountDown(countDown - 1000);
    }, 1000);

    // TODO: Clean `setInterval` when countdown expired

    return () => clearInterval(timerRef.current);
  }, [countDown]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export default useCountdown;
