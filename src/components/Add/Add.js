import React, { Component } from 'react';
import { Form, Button, Dropdown, Checkbox, Rating, TextArea } from 'semantic-ui-react'
import boulder from './Boulder';
import difficulty from './Difficulty';
import { connect } from 'react-redux';
import { handleInput, getStates, getSlot2, submitNew } from '../../ducks/routes';
import AreaDropdowns from './AreaDropdowns';

class Add extends Component {
    constructor(){
        super();

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.getStates();
    }

    handleSelect(event, data){
        this.props.handleInput(data.placeholder, data.value || data.checked)
    }

    handleRate(event, data) {
        this.props.handleInput('rating', data.rating)
    }

    render() {
        const { route, handleInput, state, submitNew } = this.props;
        let type = state.topRope ? type = state.Type + ', TR' : state.Type;
        let body = {
            name: state.name,
            difficulty: state.Difficulty,
            type: type,
            image: state.image,
            latitude: state.latitude,
            longitude: state.longitude,
            pitches: state.pitches,
            protection: state.protection,
            rating: state.rating,
            location: state.selected,
            description: state.description
        };
        return (
            <div id='add-main'>
                <h1>New Route</h1>
                <div>
                    <Form className='form'>
                        <Form.Field>
                            <label>Route Name</label>
                            <input placeholder='Route Name' onChange={(e) => handleInput('name', e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Number of Pitches</label>
                            <input placeholder='Pitches' onChange={(e) => handleInput('pitches', e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Type</label>
                            <Dropdown placeholder='Type' selection options={route.typeOptions} onChange={this.handleSelect} />
                        </Form.Field>

                        <Form.Field>
                            <label>Difficulty</label>
                            {route.Type === 'Boulder'
                                ? <Dropdown placeholder='Difficulty' search selection options={boulder} onChange={this.handleSelect} />
                                : <Dropdown placeholder='Difficulty' search selection options={difficulty} onChange={this.handleSelect} />
                            }
                        </Form.Field>

                        <Form.Field>
                            <label>Top Rope</label>
                            <Checkbox label='You can set up a TR without leading the route.' placeholder='topRope' onChange={this.handleSelect} />
                        </Form.Field>
                        <br />
                        <Form.Field>
                            <label>Your Star Rating</label>
                            <Rating maxRating={5} icon='star' size='massive' onRate={this.handleRate} />
                        </Form.Field>

                        <Form.Field>
                            <label>Description</label>
                            <TextArea
                                onChange={(e) => handleInput('description', e.target.value)}
                                placeholder="Where's the crux? What's good / bad? How do you find the start? Obvious landmarks? AVOID relative directions such as 'Left of (route next to it)'! Optional but can be critical!" />
                        </Form.Field>

                        <Form.Field>
                            <label>Protection</label>
                            <TextArea
                                onChange={(e) => handleInput('protection', e.target.value)}
                                placeholder="What type of pro? Bolts or fixed gear? Anchors at top?" />
                        </Form.Field>

                        <Form.Field>
                            <label>Image URL</label>
                            <input placeholder="Image URL" onChange={(e) => handleInput('image', e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Latitude</label>
                            <input placeholder="Latitude" type='number' onChange={(e) => handleInput('latitude', e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Longitude</label>
                            <input placeholder="Longitude" type='number' onChange={(e) => handleInput('longitude', e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Select State</label>
                            <AreaDropdowns />
                        </Form.Field>

                        <Button type='submit' onClick={() => submitNew(body)}>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        route: state.routes,
        state: state.routes
    }
}

export default connect(mapStateToProps, { handleInput, getStates, getSlot2, submitNew })(Add);
