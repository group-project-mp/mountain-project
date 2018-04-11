import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';

class Profile extends Component {
    
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <div>
                <h1>User</h1>
                <div>name</div>
                <div>ticks</div>
                <div>todo</div>
            </div>
        )
    }
}

function mapStateToProps( state) {
    console.log(state, "hit state")
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(Profile)