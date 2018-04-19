import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot6, getDescription } from '../../ducks/areas'
import { Link } from 'react-router-dom'


class Slot_6 extends Component {
    componentDidMount() {
        this.props.getSlot6(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area);
    }

    render() {
        const mappedAreas = this.props.areas.slot_6.map((area) => {
               return < div > 
                 <Link to={`/finalarea/${area.slot_6}`}><p>{area.slot_5}</p></Link>
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

export default connect(mapStateToProps, { getSlot6, getDescription })(Slot_6)