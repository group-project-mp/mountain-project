import React, { Component } from 'react';
import Select from './Select';
import { connect } from 'react-redux';
import { getSlot2, getSlot3, getSlot4, getSlot5, getSlot6 } from '../../ducks/routes';

class AreaDropdowns extends Component {
    render() {
        const { getSlot2, slot2, slot3, selected, getSlot4, getSlot5, getSlot6, states, getSlot3, slot4, slot5, slot6 } = this.props;

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
                <br />
                {
                    slot3.length > 0
                        ? <div>
                            <h5>Select Slot 3</h5>
                            <Select options={slot3} action={getSlot4} />
                        </div>
                        : null
                }
                {
                    slot4.length > 0
                        ? <div>
                            <h5>Select 4</h5>
                            <Select options={slot4} action={getSlot5} />
                        </div>
                        : null
                }
                {
                    slot5.length > 0
                        ? <div>
                            <h5>Select Sub Area</h5>
                            <Select options={slot5} action={getSlot6} />
                        </div>
                        : null
                }
                {
                    slot6.length > 0
                        ? <div>
                            <h5>Select Sub Area</h5>
                            <Select options={slot6} action={null} />
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
        slot4: state.routes.slot4,
        slot5: state.routes.slot5,
        slot6: state.routes.slot6
    }
}

export default connect(mapStateToProps, { getSlot2, getSlot3, getSlot4, getSlot5, getSlot6 })(AreaDropdowns);