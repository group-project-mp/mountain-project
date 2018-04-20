import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';

class Header extends Component {

    componentDidMount(){
        this.props.getUserInfo();
    }
    render() {
        const user = this.props.users.user[0]
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
        <a href= {user ? process.env.REACT_APP_LOGOUT : process.env.REACT_APP_LOGIN} ><button>{user ? <p>Logout</p> : <p>Login/Register</p>}</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state, "hit state")
    return {
        users: state.users

    }
}

export default connect(mapStateToProps, { getUserInfo })(Header)



// test() {
//     axios.post(`/api/test`).then(res => {
//         console.log(res)
//     })
// }`