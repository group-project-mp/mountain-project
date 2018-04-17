import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import vSystem from './VSystem';
import difficulty from './Difficulty';
import quality from './Quality';
import pitches from './Pitches';
import { inputChange, getRoutes } from '../../ducks/filterroutes';






class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: props.routes
        }
        this.handleSelect = this.handleSelect.bind(this)
    }


    handleSelect(event, data) {
        this.props.inputChange(data.placeholder, data.value)
    }
    render() {

        const { filter } = this.props



        return (
            <div className='filtermain'>
                <h1>Route Finder</h1>
                <br />
                <h3>Tell us what you like, we'll tell you what to climb!</h3>
                <br />
                <Form.Field>
                    <label>Quality</label>
                    <Dropdown placeholder='quality'
                        selection options={quality} onChange={this.handleSelect} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Pitches</label>
                    <Dropdown placeholder='pitches'
                        selection options={pitches} onChange={this.handleSelect} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Type</label>
                    <Dropdown placeholder='type' selection options={filter.typeOptions} onChange={this.handleSelect} />
                </Form.Field>
                <br />
                <div className='difficulty'>
                    <Form.Field>
                        {filter.type === 'Boulder' ?
                            <Dropdown placeholder='min' search selection options={vSystem} /> :
                            <Dropdown placeholder='min' search selection options={difficulty} onChange={this.handleSelect} />}
                        <h4>to</h4>
                        {filter.type === 'Boulder' ?
                            <Dropdown placeholder='max' search selection options={vSystem} /> :
                            <Dropdown placeholder='max' search selection options={difficulty} onChange={this.handleSelect} />}
                    </Form.Field>
                </div>
                <br />
                <button onClick={() => getRoutes(this.props.filter)} color='rgb(44,92,142)'>Find Routes</button>

                <h1>Filtered Routes</h1>

            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log(state)
    return {
        filter: state.filter,
        type: state.type,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (placeholder, data) => dispatch(inputChange(placeholder, data)),
        getRoutes: (min, max, quality, pitches, type) => dispatch(getRoutes(min, max, quality, pitches, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);