import React from 'react';
import Carousel from 'nuka-carousel';


export default function () {
    return (
        <Carousel className='carousel' wrapAround={true} autoplay={true} autoplayInterval={6000}>
            <div className='mainLanding'>

                <img src="https://images.pexels.com/photos/303040/pexels-photo-303040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />

            </div>
            <div className='mainLanding'>

                <img src="https://images.pexels.com/photos/213966/pexels-photo-213966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className='mainLanding'>

                <img src="https://images.pexels.com/photos/45242/wolf-torque-wolf-moon-cloud-45242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
        </Carousel>
    )
}