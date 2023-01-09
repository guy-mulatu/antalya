import React from 'react';
import { motion } from 'framer-motion';
import { useState, useRef , useEffect } from 'react';
import sites from '../sites'
import CarouselItem from '../partials/carouselItem';
import NavBar from '../header/navBar';

function Main() {

    const [width, setWidth] = useState(0);
    const [title, setTitle] = useState('Cliquez sur une image pour lire une description');
    const [description, setDescription] = useState('Click on an image to see its description')
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    function updateText(title, description) {
        setDescription(description);
        setTitle(title);
    }
   
    return ( 
    <div id="main">
        <div className='container local-infos-container py-4 my-4'>
            <h1>A propos d'Antalya</h1>

            <NavBar />
        </div>
        
        <motion.div className='carousel'>
            <div className='container px-3'>
                <h2>Sites a visiter</h2>
            </div>
            <motion.div 
                drag='x' 
                ref={carousel}
                dragConstraints={{ right: 0 , left: -width}} 
                whileTap={{cursor: "grabbing"}}
                className='inner-carousel'
            >
                {sites.map((site) => 
                    <motion.div className='item' key={site.id}>
                        <CarouselItem 
                            site={site}
                            textUpdate={(title, description) => updateText(title, description)}
                        />
                    
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
        <div className='container descriptions'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
            
    </div>
    );
}

export default Main;