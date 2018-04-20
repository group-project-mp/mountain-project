import React from 'react';
import Slot_1 from '../Areas/Slot_1'
import Carousel from '../Carousel/Carousel';
import Filter from '../Filter/Filter';


export default function Home() {

   return (

       <div className='main'>
           <div className='mainheader'>
               <div className='carousel'>
                   <Carousel />
               </div>
               <div className='filter'>
                   <Filter />
               </div>
           <div>
               <Slot_1 />
           </div>
           </div>
       </div>
   )
}

