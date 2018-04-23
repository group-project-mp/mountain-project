import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFinalAreaRoutes, getDescription } from '../../ducks/areas';
import { Link } from 'react-router-dom';
import FinalAreaMap from './FinalAreaMap';
import Stars from '../Route/Stars';


class FinalArea extends Component {
    componentDidMount() {
        this.props.getFinalAreaRoutes(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area)
    }

    render() {
        const areas = this.props.areas.finalAreaRoutes[0]
        const finalAreaRoutes = this.props.areas.finalAreaRoutes
        const mappedRoutes = finalAreaRoutes.map((route, i) => {
            // console.log(this.props.areas.finalAreaRoutes)
            // console.log(route)
            return < div key={i} className='area-route-container' >
                <div className='routes-list'>
                    <Link to={`/route/${route.id}`}><p>{route.name}</p></Link>
                </div>
                <div className='routes-list'>
                    <Stars stars={Number(route.stars)} size='small' />
                    <p>{route.star_votes}</p>
                </div>
                <div className='routes-list'>
                    <p>  {route.rating}</p>
                </div>
                <div className = 'routes-list'>
                    <p>{route.type}</p>
                </div>
            </div >
        })
        // console.log(mappedRoutes)
        return (
            <div className='area-wrapper'>
                <div className='area-header-main-wrapper'>
                    <div className='route-header-main'>
                        {finalAreaRoutes[0] ?
                            <div className='route-locations'>
                                <Link to={'/'}><span>All Locations</span></Link>
                                <Link to={`/state/${finalAreaRoutes[0].slot_1}`}> <span>{'> ' + finalAreaRoutes[0].slot_1}</span></Link>
                                <Link to={`/area/${finalAreaRoutes[0].slot_2}`}> <span>{'> ' + finalAreaRoutes[0].slot_2}</span></Link>
                                {this.props.match.params.area !== finalAreaRoutes[0].slot_3 && finalAreaRoutes[0].slot_3 !== null ? <Link to={`/subarea/${finalAreaRoutes[0].slot_3}`}> <span>{'> ' + finalAreaRoutes[0].slot_3}</span></Link> : null}
                                {this.props.match.params.area !== finalAreaRoutes[0].slot_4 && finalAreaRoutes[0].slot_4 !== null ? <Link to={`/subarea5/${finalAreaRoutes[0].slot_4}`}> <span>{'> ' + finalAreaRoutes[0].slot_4}</span></Link> : null}
                                {this.props.match.params.area !== finalAreaRoutes[0].slot_5 && finalAreaRoutes[0].slot_5 !== null ? <Link to={`/subarea6/${finalAreaRoutes[0].slot_5}`}> <span>{'> ' + finalAreaRoutes[0].slot_5}</span></Link> : null}
                                {console.log(finalAreaRoutes[0])}
                            </div> : null}
                        <div className='detail-name'>
                            <h1>{this.props.match.params.area}</h1>
                        </div>
                    </div>
                </div>
                <div className='areas-main'>
                    {this.props.areas.description[0] ?
                        <div className='description-getting-there-wrapper'>
                            <div className='description-getting-there'>
                                <h2>Description</h2>
                                <p>{this.props.areas.description[0].description}</p>
                            </div>
                            <div className='description-getting-there'>
                                <h2>Getting There</h2>
                                <p>{this.props.areas.description[0].getting_there}</p>
                            </div>
                        </div>
                        : null}
                    <div className='sub-area-container'>
                        <h2>Routes</h2>
                        {mappedRoutes}
                    </div>
                </div>
                <div className='areas-map'>
                    <h2 className='map-header'>Map of Areas within {this.props.match.params.area}</h2>
                    <FinalAreaMap className='map-container' routes={finalAreaRoutes} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state, "hit state")
    return {
        areas: state.areas
    }
}

export default connect(mapStateToProps, { getFinalAreaRoutes, getDescription })(FinalArea)