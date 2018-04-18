import React from 'react';
import { Rating } from 'semantic-ui-react';

export default function ImageTicks(props) {
    return (
        <div className='similar-tick'>
            <div className='you-and-this-route'>
                <h3>{'You & This Route'}</h3>
                <div className='you-sub'>
                    <span style={{fontWeight: 'bold', fontSize: '16px'}}>Your To-Do List:</span>
                    <span style={{cursor: 'pointer'}}>Add To-Do</span>
                </div>
                <div className='you-sub'>
                    <span style={{fontWeight: 'bold'}}>Your Star Rating:</span>
                    <Rating maxRating={5} icon='star' onRate={null} size='massive' />
                </div>
                <div className='you-sub'>
                    <span style={{fontWeight: 'bold'}}>Your Difficulty Rating:</span>
                    <select>
                        <option>test</option>
                    </select>
                </div>
                <div className='you-sub'>
                    <span style={{fontWeight: 'bold'}}>Your Ticks:</span>
                    <span style={{cursor: 'pointer'}}>Add New Tick</span>
                </div>
            </div>

        </div>
    )
}