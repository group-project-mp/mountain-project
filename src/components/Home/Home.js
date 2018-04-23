import React from 'react';
import Slot_1 from '../Areas/Slot_1'
import Carousel from '../Carousel/Carousel';
import Filter from '../Filter/Filter';
import Top20 from './Top20';
import Footer from '../headerFooter/Footer';

export default function Home() {

    return (

        <div className='main'>
            <div className='mainheader'>
                <Carousel />
                <div>
                    <Slot_1 />
                </div>
                <div>
                    <Top20 />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )

}

