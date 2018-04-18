import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function Stars(props) {
    let stars = Math.round(Number(props.stars));
    let starIcons = [];
    for (let i = 0; i < stars; i++) {
        starIcons.push(<Icon name='star' key={i} size={props.size} color='blue' />)
    };
    return (
        <div className='star-container'>
            {starIcons}
        </div>
    )
}


// size options
// mini
// tiny
// small
// large
// big
// huge
// massive

