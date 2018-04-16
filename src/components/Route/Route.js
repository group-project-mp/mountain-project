import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoute } from '../../ducks/routeDetail';
import RouteHeader from './RouteHeader';

class Route extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getRoute(id);
    }

    render() {
        const { route } = this.props;
        console.log(route)
        return (
            <div>
                <RouteHeader route={route}/>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        route: state.detail.route
    }
}

export default connect(mapStateToProps, { getRoute })(Route);