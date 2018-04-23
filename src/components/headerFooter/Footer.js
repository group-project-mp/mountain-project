import React from 'react';
import mountain from '../../logo.svg';
import trail from './trail.svg';
import powder from './powder.svg';
import mtb from './mtb.svg';
import hiking from './hiking.svg';
import national from './national.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer-links'>
                <Link to='/'><img src={mountain} alt='mountain' /></Link>
                <a href="https://www.trailrunproject.com/"><img src={trail} alt='trail' /></a>
                <a href="https://www.powderproject.com/"><img src={powder} alt='powder' /></a>
                <a href="https://www.mtbproject.com/"><img src={mtb} alt='mtb' /></a>
                <a href="https://www.hikingproject.com/"><img src={hiking} alt='hiking' /></a>
                <a href="https://www.hikingproject.com/nationalparks"><img src={national} alt='national' /></a>
            </div>
        </div>
                )
}