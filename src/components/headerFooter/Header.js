import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react';
import reilogo from './reilogo.png';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            user: false,
            img: null
        }
    }
    componentDidMount() {

        axios.get('/api/session').then(res => {
            this.setState({
                user: res.data.user,
                img: res.data.image
            })
        })

    }
    render() {
        const { user, img } = this.state;
        return (
            <div id='header'>
                <div className='header-top'>
                    <div>
                        <a href='https://www.rei.com/'><span>Shop REI</span></a>
                        <a href='https://www.rei.com/rei-garage'><span>REI Garage</span></a>
                        <a href='https://www.rei.com/adventures'><span>REI Adventures</span></a>
                        <a href='https://www.rei.com/learn.html'><span>{'Classes & Events'}</span></a>
                        <a href='https://www.rei.com/learn/expert-advice'><span>Expert Advice</span></a>
                        <a href='https://www.rei.com/blog'><span>Co-op Journal</span></a>
                        <a href='https://www.rei.com/opt-outside'><span>{'#optoutside'}</span></a>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                        <Link to='/'><img src={logo} alt='logo' /></Link>
                        <div>
                            <Link to='/'><span>Home</span></Link>
                            <Link to='/add'><span>Add New Route</span></Link>
                            <Link to='/results'><span>Route Finder</span></Link>
                        </div>
                    </div>
                    <div className='header-bottom-right'>


                        {
                            user && img
                                ? <Link to='/user'><img src={img} alt='user' className='user-icon' /></Link>
                                : user && !img
                                    ? <Link to='/user'><Icon name='user circle' color='grey' size='big' /></Link>
                                    : null
                        }
                        {
                            user
                                ? <a href={process.env.REACT_APP_LOGOUT}><span> Logout <Icon name='log out' /></span></a>
                                : <a href={process.env.REACT_APP_LOGIN} ><span>Login / Register <Icon name='user outline' /></span></a>
                        }
                        <a href='https://www.rei.com/'><img src={reilogo} alt='rei' className='rei-logo' style={{ height: '30px' }} /></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
// test() {
//     axios.post(`/api/test`).then(res => {
//         console.log(res)
//     })
// }
{/* <button onClick={this.test}>click me</button> */ }
