import React, { Component } from 'react';
import axios from 'axios';
import States from './States';
import Slot2 from './Slot2';

export default class AreaList extends Component {
    constructor() {
        super();

        this.state = {
            states: [],
            slot_2: null
        }
        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
        axios.get('/api/stateCount').then(res => {
            this.setState({ states: res.data })
        })
    }

    handleSelection(prop) {
        axios.get(`/api/area?slot_1=${prop}`).then(res => {
            this.setState({ slot_2: res.data })
        })
    }

    render() {
        const { states, slot_2 } = this.state;
        // console.log(this.state)
        return (
            <div>
                <States options={states} action={this.handleSelection} />
                {slot_2
                    ? <Slot2 options={slot_2 ? slot_2 : null} />
                    : <div></div>
                }
            </div>
        )
    }
}