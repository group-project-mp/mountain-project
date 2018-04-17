import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot5, getDescription } from '../../ducks/areas'
import { Link } from 'react-router-dom'


class Slot_5 extends Component {
    componentDidMount() {
        this.props.getSlot5(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area);
    }

    render() {
        const mappedAreas = this.props.areas.slot_5.map((area) => {
            // {console.log(area.slot_4)}
               return < div > 
                {(area.slot_6) ? <Link to={`/subarea6/${area.slot_5}`}><p>{area.slot_5}</p></Link>
                   : <Link to={`/finalarea/${area.slot_5}`}><p>{area.slot_5}</p></Link>}
                      <p>{area.count}</p>
                </div >
    })
    // console.log(mappedAreas)
    return(
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
                {mappedAreas}
            </div>
        )
}
}

function mapStateToProps(state) {
    return {
        areas: state.areas

    }
}

export default connect(mapStateToProps, { getSlot5, getDescription})(Slot_5)