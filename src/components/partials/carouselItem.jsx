import React from 'react';
import { useState } from 'react';

function CarouselItem(props) {
    const { site, textUpdate } = props;

    return ( 
        <img 
            src={site.url} 
            alt={site.name} 
            onClick={() => textUpdate(site.name, site.description)}
        />
        
     );
}


export default CarouselItem;