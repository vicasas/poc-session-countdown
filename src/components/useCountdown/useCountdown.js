import { useEffect, useState } from 'react';

const useCountdown = (targetDate, options = {}) => {
  const { intervalTime = 1000, now = new Date().getTime() } = options;
  const [timeLeft, setTimeLeft] = useState(
    () => targetDate - now
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 0) {
          clearInterval(interval);

          return 0;
        }

        return current - intervalTime;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);
  // const difference = targetDate - new Date().getTime();
  // const countDownDate = new Date(targetDate).getTime();
  // const [countDown, setCountDown] = useState(difference > 0 ? difference : 0);

  // const intervalRef = useRef()

  // useEffect(() => {
  //   intervalRef.current = setTimeout(() => {
  //     setCountDown(countDown - 1000);
  //   }, 1000);

  //   return () => clearInterval(intervalRef.current);
  // }, [countDown]);

  return getReturnValues(timeLeft);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export default useCountdown;
