import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div id='header'>
            <div className='header-top'>
                {/* <button onClick={this.test}>click me</button> */}
            </div>

            <div className='header-bottom'>
                <div>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                </div>

                <div className='header-bottom-right'>
                    <a href={'http://localhost:3009/auth'}><button>Login/Register</button></a>
                </div>
            </div>
        </div>
    )
}

export default Header;



// test() {
//     axios.post(`/api/test`).then(res => {
//         console.log(res)
//     })
// }