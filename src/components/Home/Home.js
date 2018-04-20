import React from 'react';
import Slot_1 from '../Areas/Slot_1'
import Carousel from '../Carousel/Carousel';
import Filter from '../Filter/Filter';




export default function Home() {

    return (

        <div className='main'>
            <div className='mainheader'>
                <Carousel />
                <div>
                    <Slot_1 />
                </div>
            </div>
        </div>
    )

}

