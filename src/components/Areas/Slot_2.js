import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot2, getDescription } from '../../ducks/areas';
import Map from './Map'
import { Link } from 'react-router-dom'


class slot_2 extends Component {
    componentDidMount() {
        this.props.getSlot2(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area)
        // this.props.getDescription(this.props.match.params.area);
    }

    render() {

        const mappedAreas = this.props.areas.slot_2.map((area) => {
            // {console.log(area.slot_2)}
            return < div >

                <Link to={`/area/${area.slot_2}`}><p>{area.slot_2}</p></Link>
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
                <Link to={'/'}><p>All Locations</p></Link>
                {mappedAreas}
                <div>
                    <Map areas={this.props.areas.slot_2} />
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

export default connect(mapStateToProps, { getSlot2, getDescription })(slot_2)