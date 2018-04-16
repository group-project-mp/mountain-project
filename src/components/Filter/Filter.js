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
        super(props)
        this.state = {
            routes: []
        }
    }


    handleSelect(event, data) {
        this.props.inputChange(data.placeholder, data.value || data.checked)
    }

    findRoutes() {
        this.props.getRoutes
    }
    render() {
        const { route } = this.props
        return (
            <div className='filtermain'>
                <h1>Route Finder</h1>
                <br />
                <h3>Tell us what you like, we'll tell you what to climb!</h3>
                <br />
                <Form.Field>
                    <label>Quality</label>
                    <Dropdown placeholder='All Routes'
                        selection options={quality} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Pitches</label>
                    <Dropdown placeholder='Any Number'
                        selection options={pitches} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Type</label>
                    <Dropdown placeholder='' selection options={route.typeOptions} onChange={this.handleSelect.bind(this)} />
                </Form.Field>
                <br />
                <Form.Field>
                    {route.type === 'Boulder' ?
                        <Dropdown placeholder='Min' search selection options={vSystem} /> :
                        <Dropdown placeholder='Min' search selection options={difficulty} />}
                    <h4>to</h4>
                    {route.type === 'Boulder' ?
                        <Dropdown placeholder='Max' search selection options={vSystem} /> :
                        <Dropdown placeholder='Max' search selection options={difficulty} />}
                </Form.Field>
                <br />
                <Button onClick={getRoutes}>Find Routes</Button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        route: state.routes,
    }
}

export default connect(mapStateToProps, { inputChange, getRoutes })(Filter);