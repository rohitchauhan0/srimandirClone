import React, { useEffect, useState } from 'react'

const Timer = ({targetDate}) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const { days, hours, minutes, seconds } = timeLeft;
    
      return (
        <div>
          {days !== undefined ? (
           <div className=' flex items-center gap-5'>
            <div className='  flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className=' text-lg lg:text-4xl font-bold '>{days}</p>
                <p>Days</p>
            </div> 
            <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className='  text-lg lg:text-4xl font-bold '>{hours}</p>
                <p>Hours</p>
            </div> <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className='  text-lg lg:text-4xl font-bold '>{minutes}</p>
                <p>Minutes</p>
            </div> <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className=' text-lg lg:text-4xl font-bold '>{seconds}</p>
                <p>Seconds</p>
            </div>
           </div>
          ) : (
            <p>Countdown expired!</p>
          )}
        </div>
  )
}

export default Timer