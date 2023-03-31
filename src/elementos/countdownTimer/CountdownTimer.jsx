import React, { useState, useEffect } from 'react';
import styles from './countdownTimer.module.css'


const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const { hours, minutes, seconds } = timeLeft;

  return (
    <div className={styles.contador}>
     {/* <span>{hours < 10 ? `0${hours}` : hours}</span>: */} 
      <div className={styles.kk}>
        <span>00:</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className={styles.gg}>
        <p>Hor</p>
        <p>Min</p>
        <p>Seg</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
