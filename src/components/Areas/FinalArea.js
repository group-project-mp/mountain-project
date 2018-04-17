import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFinalAreaRoutes, getDescription } from '../../ducks/areas'
import { Link } from 'react-router-dom'


class FinalArea extends Component {
    componentDidMount() {
        this.props.getFinalAreaRoutes(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area)
    }

    render() {
        const finalAreaRoutes = this.props.areas.finalAreaRoutes
        const mappedRoutes = finalAreaRoutes.map((route) => {
            console.log(this.props.areas.finalAreaRoutes)
            return < div >
                <div>
                    <Link to={`/route/${route.route_id}`}><p>{route.name}</p></Link>
                </div>
                <div>
                    {route.stars}
                    {route.star_votes}
                </div>
                <div>
                    {route.rating}
                    {route.type}
                </div>
            </div >
        })
        console.log(mappedRoutes)
        return (
            <div>
                <div>
                    <h2>{this.props.match.params.area}</h2>
                    {finalAreaRoutes[0]?
                    <div>
                        <Link to={`/state/${finalAreaRoutes[0].slot_1}`}> <p>{finalAreaRoutes[0].slot_1}</p></Link>
                        <Link to={`/area/${finalAreaRoutes[0].slot_2}`}> <p>{finalAreaRoutes[0].slot_2}</p></Link>
                        {this.props.match.params.area !== finalAreaRoutes[0].slot_3 ? <Link to={`/subarea/${finalAreaRoutes[0].slot_3}`}> <p>{finalAreaRoutes[0].slot_3}</p></Link>: null}
                        {this.props.match.params.area !== finalAreaRoutes[0].slot_4 ? <Link to={`/subarea5/${finalAreaRoutes[0].slot_4}`}> <p>{finalAreaRoutes[0].slot_4}</p></Link>: null}
                       {this.props.match.params.area !== finalAreaRoutes[0].slot_5 ? <Link to={`/subarea6/${finalAreaRoutes[0].slot_5}`}> <p>{finalAreaRoutes[0].slot_5}</p></Link>: null}
                    </div>: null}
                </div>
                {this.props.areas.description[0] ? <div>
                    <div>
                        <h3>Directions</h3>
                        <p>{this.props.areas.description[0].description}</p>
                    </div>
                    <div>
                        <h3>Getting There</h3>
                        <p>{this.props.areas.description[0].getting_there}</p>
                    </div>
                </div>
                    : null}
                    <h3>Routes</h3>
                {mappedRoutes}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state, "hit state")
    return {
        areas: state.areas
    }
}

export default connect(mapStateToProps, { getFinalAreaRoutes, getDescription })(FinalArea)