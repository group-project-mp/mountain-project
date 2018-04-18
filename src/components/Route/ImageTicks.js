import React from 'react';
import { Rating } from 'semantic-ui-react';

export default function ImageTicks(props) {
    return (
        <div className='similar-tick'>
            <div className='you-and-this-route'>
                <h3>{'You & This Route'}</h3>
                <div>
                    <h4>Your To-Do List:</h4>
                    <span>Add To-Do</span>
                </div>
                <div>
                    <h4>Your Star Rating:</h4>
                    <Rating maxRating={5} icon='star' onRate={null} size='massive' />
                </div>
                <div>
                    <h4>Your Difficulty Rating:</h4>
                </div>
                <div>
                    <h4>Your Ticks:</h4>
                    <span>Add New Tick</span>
                </div>
            </div>

            <img src={props.photo} alt='route' className='route-detail-image' />
        </div>
    )
}