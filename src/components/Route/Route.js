import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoute } from '../../ducks/routeDetail';
import RouteHeader from './RouteHeader';
import ImageTicks from './ImageTicks';
import SimilarArea from './SimilarArea';

class Route extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getRoute(id);
    }

    render() {
        const { route } = this.props;
        const { slot_6, slot_5, slot_4, slot_3 } = route;
        return (
            <div>
                <RouteHeader route={route} />
                <div className='route-detail-main'>

                    <div className='similar-tick-container'>
                        <SimilarArea area={slot_6 ? slot_6 : slot_5 ? slot_5 : slot_4 ? slot_4 : slot_3} />
                        <ImageTicks photo={route.image} type={route.type} pitches={route.pitches}/>
                    </div>

                    <div>
                        <h1>Description</h1>
                        {route.description}
                    </div>
                    <div>
                        <h1>Protection</h1>
                        {route.protection}
                    </div>
                    <div>
                        <h1>Location</h1>
                    </div>
                    <div>
                        <h1>Photos</h1>
                    </div>
                    <div>
                        <h1>Comments</h1>
                    </div>
                </div>
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
