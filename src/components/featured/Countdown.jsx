import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const eventStart = 'Nov, 20, 2022, 20:00:00';

const Countdown = () => {

   let interval = 0;
   const [time, setTime] = useState({
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0'
   });
   
   useEffect(() => {
      interval = setInterval(() => getTimeLeft(), 1000);
      return () => clearInterval(interval);
   }, []);

   const fillZero = (num, fillStr) => {
      if ((num+'').length >= fillStr.length) {
         return num + '';
      }
      return (fillStr+num).slice(-parseInt(fillStr.length));
   }

   const getTimeLeft = useCallback(()=> {
         const deadline = Date.parse(eventStart);
         const timeDif = deadline - new Date()
         if (timeDif < 0) {
            clearInterval(interval);
            console.log('times Passed!');
            return;
         }
         const seconds = fillZero(Math.floor((timeDif / 1000) % 60), '00');
         const minutes = fillZero(Math.floor((timeDif / (1000 * 60)) % 60), '00');
         const hours   = fillZero(Math.floor((timeDif / (1000 * 60 * 60) % 24)), '00');
         const days    = fillZero(Math.floor((timeDif / (1000 * 60 * 60 * 24))), '00');
         setTime({days, hours, minutes, seconds});
         console.log(fillZero(24, '00'));
   }, []); 

   const renderTimeLeft = (time, value) => (
      <div className="countdown_item">
         <div className="countdown_time">{ time }</div>
         <div className="countdown_tag">{ value }</div>
      </div>
   );
  
   return (
      <Slide left delay={1000}>
         <div className="countdown_wrapper">
            <div className='countdown_top'>
               Event starts in:
            </div>

            <div className='countdown_bottom'>
                  { renderTimeLeft(time.days,   'Days') }
                  { renderTimeLeft(time.hours,  'Hs')   }
                  { renderTimeLeft(time.minutes,'Min')  }
                  { renderTimeLeft(time.seconds,'Sec')  }
            </div>
         </div>
      </Slide>
  );
};

export default Countdown;