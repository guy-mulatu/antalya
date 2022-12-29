import React, { useState, useEffect} from 'react';
import { FaRegClock } from 'react-icons/fa';

function LocalTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-UK', {timeZone: 'Europe/Istanbul'}));
  
    useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date().toLocaleTimeString('en-UK', {timeZone: 'Europe/Istanbul'}));
            }, 1000)
        }
    )

    return (
        <div className='mx-2 text-center pt-4 d-flex flex-column justify-content-around'>
            <FaRegClock value={{ style: { paddingBottom: '10px' } }}/>
            <span className='display-4 local-time'>{time}</span>
        </div>
        
    );
}

export default LocalTime;
