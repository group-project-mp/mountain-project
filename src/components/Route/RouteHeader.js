import React from 'react';
import Stars from './Stars';

export default function RouteHeader(props) {
    const { route } = props;
    return (
        <div className='route-header-main'>
            <div className='route-locations'>
                <span>{route.slot_1}</span>
                {
                    route.slot_2
                        ? <span>{' > ' + route.slot_2}</span>
                        : null
                }
                {
                    route.slot_3
                        ? <span>{' > ' + route.slot_3}</span>
                        : null
                }
                {
                    route.slot_4
                        ? <span>{' > ' + route.slot_4}</span>
                        : null
                }
                {
                    route.slot_5
                        ? <span>{' > ' + route.slot_5}</span>
                        : null
                }
                {
                    route.slot_6
                        ? <span>{' > ' + route.slot_6}</span>
                        : null
                }
            </div>
            <div className='detail-name'>
                <h1>{route.name}</h1>
                <div>
                    <span>Imporove This Page</span>
                    <span>Add To Page</span>
                </div>
            </div>
            <div className='route-stars-rating'>
                <h2>{route.rating}</h2>
                <Stars stars={route.stars} />
                <span>Avg: {route.stars} from {route.star_votes} votes</span>
            </div>
            <hr />
        </div>
    )
}