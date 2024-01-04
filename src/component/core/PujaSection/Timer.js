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
                <p className=' text-lg lg:text-2xl font-bold text-orange-500 '>{days}</p>
                <p className='text-orange-500'>Days</p>
            </div> 
            <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className='  text-lg lg:text-2xl font-bold text-orange-500 '>{hours}</p>
                <p className='text-orange-500'>Hours</p>
            </div> <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className='  text-lg lg:text-2xl font-bold text-orange-500'>{minutes}</p>
                <p className='text-orange-500'>Minutes</p>
            </div> <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className=' text-lg lg:text-2xl font-bold text-orange-500'>{seconds}</p>
                <p className='text-orange-500'>Seconds</p>
            </div>
           </div>
          ) : (
            <div className=' flex items-center gap-5'>
            <div className='  flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className=' text-lg lg:text-2xl font-bold text-orange-500  animate-pulse'>0</p>
                <p className='text-orange-500'>Days</p>
            </div> 
            <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className='  text-lg lg:text-2xl font-bold text-orange-500  animate-pulse'>0</p>
                <p className='text-orange-500'>Hours</p>
            </div> <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className='  text-lg lg:text-2xl font-bold text-orange-500 animate-pulse'>0</p>
                <p className='text-orange-500'>Minutes</p>
            </div> <div className=' flex bg-orange-200 lg:flex-row flex-col items-center lg:items-end lg:p-3 p-1 rounded-xl gap-1 lg:gap-3'>
                <p className=' text-lg lg:text-2xl font-bold text-orange-500 animate-pulse'>0</p>
                <p className='text-orange-500'>Seconds</p>
            </div>
           </div>
          )}
        </div>
  )
}

export default Timer