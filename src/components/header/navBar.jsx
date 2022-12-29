import React from 'react';
import LocalTime from './localTime';
import Weather from './weather';

function NavBar() {
    const time = setInterval(function() {
        <LocalTime />
    }, 1000);

    return (
        <div id="nav" className='d-flex flex-row justify-content-around'>
            <LocalTime />
            <Weather />
        </div>
    );
}

export default NavBar;