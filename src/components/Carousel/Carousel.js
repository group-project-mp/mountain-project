import React from 'react';
import Carousel from 'nuka-carousel';
import Filter from '../Filter/Filter';



export default function () {



    return (
        <div className='carousel-body'>
            {/* <div className='crsl'> */}
                <Carousel wrapAround={true} autoplay={true} autoplayInterval={6000} width='70%' slidewidth='100%' fixedHeight={false}>
                    <img src="https://images.unsplash.com/photo-1494964227851-d31bec6b1363?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d45d8a49bd10325735fad373780526ad&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1420393000485-4697383da9ec?ixlib=rb-0.3.5&s=389270e55cc1aadcf0093ffa356d2a3b&auto=format&fit=crop&w=967&q=80" alt="" />
                    <img src="https://images.pexels.com/photos/213966/pexels-photo-213966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <img src="https://images.pexels.com/photos/303040/pexels-photo-303040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <img src="https://images.unsplash.com/photo-1517508512633-d4fabc4f2f6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=496ba0cbc777b2f51d236410d29f8d1e&auto=format&fit=crop&w=1052&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1521488517399-2b4ed09655fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f3da5cfb3dda76d1c4c59fc42d53b9f&auto=format&fit=crop&w=1350&q=80" alt="" />
                </Carousel>
            {/* </div> */}

            <div className='fltr'>
                <Filter />
            </div>

        </div>
    )
}