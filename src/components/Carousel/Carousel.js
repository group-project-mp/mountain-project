import React from 'react';
import Carousel from 'nuka-carousel';
import Filter from '../Filter/Filter';



export default function () {



    return (
        <div className='carousel-body'>
            {/* <div className='crsl'> */}
                <Carousel wrapAround={true} autoplay={true} autoplayInterval={6000} width='70%' slidewidth='100%'>
                    <img src="https://images.pexels.com/photos/303040/pexels-photo-303040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <img src="https://images.pexels.com/photos/213966/pexels-photo-213966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <img src="https://images.unsplash.com/photo-1517508512633-d4fabc4f2f6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=496ba0cbc777b2f51d236410d29f8d1e&auto=format&fit=crop&w=1052&q=80" alt="" />
                </Carousel>
            {/* </div> */}

            <div className='fltr'>
                <Filter />
            </div>

        </div>
    )
}