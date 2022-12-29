import React from 'react';
import Option from '../partials/option'
import packs from '../packs'
import { FaChevronDown } from '@fortawesome/react-fontawesome';

function Invest() {
   
    return ( 
        <div id='invest' className='container py-4 my-4'>
            <h1>A propos d'Investissement</h1>
            <p>Plusieurs options s'offrent a vous:</p>
            <ol>
                {packs.map((pack) => 
                <li  key={pack.id}>
                    {pack.name} <Option data={pack}/>
                </li>)}
            </ol>
            
            
            
        </div>

     );
}

export default Invest;