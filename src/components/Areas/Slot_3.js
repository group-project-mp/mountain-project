import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot3, getDescription } from '../../ducks/areas'
import { Link } from 'react-router-dom'
import Map from './Map'


class slot_3 extends Component {
    componentDidMount() {
        this.props.getSlot3(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area)
        console.log(this.props.match.params.area)
    }

    render() {
        const mappedAreas = this.props.areas.slot_3.map((area) => {
            // {console.log(area.slot_3)}
            return < div > 
                {(area.slot_4) ? <Link to={`/subarea/${area.slot_3}`}><p>{area.slot_3}</p></Link>
                   : <Link to={`/finalarea/${area.slot_3}`}><p>{area.slot_3}</p></Link>}
                      <p>{area.count}</p>
                </div >
        })
        // console.log(mappedAreas)
        return (
            <div>
                <h2>{this.props.match.params.area}</h2>

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
                    <h3>Areas</h3>
                    <Link to = {'/'}><p>All Locations</p></Link>
                {mappedAreas}
                <div>
                <Map areas = {this.props.areas.slot_3}/>
                </div>
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

export default connect(mapStateToProps, { getSlot3, getDescription })(slot_3)