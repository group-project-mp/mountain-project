import React, { Component } from 'react';
import Select from './Select';
import { connect } from 'react-redux';
import { getSlot2, getSlot3, getSlot4 } from '../../ducks/routes';

class AreaDropdowns extends Component {
    render() {
        const { getSlot2, slot2, slot3, selected, states, getSlot3 } = this.props;
        console.log(selected, slot3)
        return (
            <div>
                <Select options={states} action={getSlot2} />
                {
                    slot2.length > 0
                        ? <div>
                            <h5>Select Sub Area</h5>
                            <Select options={slot2} action={getSlot3} />
                        </div>
                        : null
                    }
                    <br/>
                {
                    slot3.length > 0
                        ? <div>
                            <h5>Select Sub Area</h5>
                            <Select options={slot3} action={getSlot4} />
                        </div>
                        : null
                    }
                    <br />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        states: state.routes.states,
        selected: state.routes.selected,
        slot2: state.routes.slot2,
        slot3: state.routes.slot3,
        slot4: state.routes.slot4
    }
}

export default connect(mapStateToProps, { getSlot2, getSlot3, getSlot4 })(AreaDropdowns);