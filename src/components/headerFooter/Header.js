import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div id='header'>
            <div className='header-top'>

            </div>

            <div className='header-bottom'>
                <div>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                </div>

                <div className='header-bottom-right'>

                </div>
            </div>
        </div>
    )
}

export default Header;