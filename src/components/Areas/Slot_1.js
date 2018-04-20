import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot1 } from '../../ducks/areas'
import { Link } from 'react-router-dom'


class slot_1 extends Component {
    componentDidMount() {
        this.props.getSlot1();
    }

    render() {
        const mappedAreas = this.props.areas.slot_1.map((area) => {
            // {console.log(area.slot_1)}
            return <div className='mapped-routes'>
                <Link to={`/state/${area.slot_1}`}><p>{area.slot_1}</p></Link>
                <p>  _ _ _ _ _ _ _ _ _ _ _ _   </p>
                <p>{area.count}</p>

                <p>{area.slot_2}</p>
            </div>
        })
        // console.log(mappedAreas)
        return (

            <div className='mapped-routes-display'>
              
                    {mappedAreas}
                
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

export default connect(mapStateToProps, { getSlot1 })(slot_1)