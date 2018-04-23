import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoute } from '../../ducks/routeDetail';
import RouteHeader from './RouteHeader';
import ImageTicks from './ImageTicks';
import SimilarArea from './SimilarArea';
import Comments from './Comments';
import { withRouter } from 'react-router';
import { Icon } from 'semantic-ui-react';
import Routemap from './Routemap';

class Route extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getRoute(id);
        // this.props.getComments(id);
        window.scrollTo(0,0)
    }

    render() {
        const { route } = this.props;
        const { slot_6, slot_5, slot_4, slot_3 } = route;
        return (
            <div>
                <RouteHeader route={route} />
                <div className='route-detail-main'>

                    <div className='route-detail-top'>
                        <div className='detail-image-container'>
                            {
                                route.image
                                    ? <img src={route.image} alt='route' />
                                    : <div className='no-photo'><Icon name='photo' size='massive' color='grey' /></div>
                            }

                        </div>

                        <div className='similar-tick-container'>
                            <SimilarArea area={slot_6 ? slot_6 : slot_5 ? slot_5 : slot_4 ? slot_4 : slot_3} />
                            <ImageTicks type={route.type} pitches={route.pitches} id={route.id} />
                        </div>
                    </div>

                    <div className='route-detail-bottom'>
                        <div className='bottom-section-container'>
                            <h1>Description</h1>
                            {route.description ? route.description : <p>No description for this route.</p>}
                        </div>
                        <div className='bottom-section-container'>
                            <h1>Protection</h1>
                            {route.protection ? route.protection : <p>No protection details for this route.</p>}

                        </div>
                        <div className='bottom-section-container'>
                            <h1>Location</h1>
                            <Routemap latitude={route.latitude} longitude={route.longitude} />
                        </div>
                        {/* <div>
                            <h1>Photos</h1>
                        </div> */}

                        <div className='bottom-section-container'>
                            <Comments />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        route: state.detail.route,
        comments: state.detail.comments
    }
}

export default withRouter(connect(mapStateToProps, { getRoute })(Route));
