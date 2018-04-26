import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTodo, addTick } from '../../ducks/routeDetail';
import { Modal, Header, Button } from 'semantic-ui-react';
import axios from 'axios';

class ImageTicks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            style: null,
            date: null,
            pitches: 1,
            notes: null,
            leadStyle: null
        }
    }

    handleInput(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    handleTodo() {
        axios.get('/api/session').then(res => {
            if (res.data.user === false) {
                alert('Must be logged in to add todo')
            } else {
                this.props.addTodo(this.props.id);
            }
        })
    }

    cancel() {
        this.setState({
            showModal: false,
            style: null,
            date: null,
            pitches: 1,
            notes: null,
            leadStyle: null,
            difficulty: null
        })
    }

    handleSubmit() {
        let body = {
            style: this.state.style,
            date: this.state.date,
            pitches: this.state.pitches,
            notes: this.state.notes,
            leadStyle: this.state.leadStyle,
            difficulty: this.state.difficulty
        }
        axios.get('/api/session').then(res => {
            if (res.data.user === false) {
                alert('Must be logged in to add tick')
            } else {
                this.props.addTick(this.props.id, body);
                this.cancel();
            }
        })

    }

    render() {
        return (
            <div className='similar-tick'>
                <div className='you-and-this-route'>
                    <h3>{'You & This Route'}</h3>
                    <div className='you-sub'>
                        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Your To-Do List:</span>
                        <span style={{ cursor: 'pointer' }} onClick={() => this.handleTodo()}>Add To-Do</span>
                    </div>
                    <div className='you-sub'>
                        <span style={{ fontWeight: 'bold' }}>Your Star Rating:</span>
                        <Rating maxRating={5} icon='star' onRate={null} size='massive' />
                    </div>
                    <div className='you-sub'>
                        <span style={{ fontWeight: 'bold' }}>Your Difficulty Rating:</span>
                        {
                            this.props.type === 'Boulder'
                                ?
                                <select>
                                    <option value='V0'>V0</option>
                                    <option value='V1'>V1</option>
                                    <option value='V2'>V2</option>
                                    <option value='V3'>V3</option>
                                    <option value='V4'>V4</option>
                                    <option value='V5'>V5</option>
                                    <option value='V6'>V6</option>
                                    <option value='V7'>V7</option>
                                    <option value='V8'>V8</option>
                                    <option value='V9'>V9</option>
                                    <option value='V10'>V10</option>
                                    <option value='V11'>V11</option>
                                    <option value='V12'>V12</option>
                                    <option value='V13'>V13</option>
                                    <option value='V14'>V14</option>
                                    <option value='V15'>V15</option>
                                    <option value='V16'>V16</option>
                                    <option value='V17'>V17</option>
                                </select>
                                :
                                <select onChange={(e) => this.handleInput('difficuly', e.target.value)}>
                                    <option>Select</option>
                                    <option>5.7</option>
                                    <option>5.8</option>
                                    <option>5.9</option>
                                    <option>5.10</option>
                                    <option>5.11</option>
                                    <option>5.12</option>
                                    <option>5.13</option>
                                    <option>5.14</option>
                                    <option>5.15</option>
                                </select>
                        }
                    </div>
                    <div className='you-sub'>

                        <span style={{ fontWeight: 'bold' }}>Your Ticks:</span>
                        <Modal
                            open={this.state.showModal}
                            size='tiny'
                            trigger={<span onClick={() => this.handleModal()} style={{ cursor: 'pointer' }}>Add New Tick</span>}>
                            <Modal.Header>Add New Tick</Modal.Header>
                            <Modal.Content>
                                <h3>Date</h3>
                                <input
                                    style={{ height: '25px' }}
                                    onChange={(e) => this.handleInput('date', e.target.value)}
                                    placeholder='mm/dd/yyy'
                                />
                                <h3>Pitches</h3>
                                <input
                                    style={{ height: '25px', }}
                                    value={this.state.pitches}
                                    onChange={(e) => this.handleInput('pitches', e.target.value)}
                                />
                                <h3>Notes</h3>
                                <textarea
                                    onChange={(e) => this.handleInput('notes', e.target.value)}
                                    placeholder='Optional. Gear? Fails?'
                                    style={{ height: '100px', width: '95%', margin: 'auto' }} />
                                <h3>Style</h3>
                                <select onChange={(e) => this.handleInput('style', e.target.value)}>
                                    <option>Select</option>
                                    <option value='Solo'>Solo</option>
                                    <option value='TR'>TR</option>
                                    <option value='Lead'>Lead</option>
                                </select>
                                {
                                    this.state.style === 'Lead'
                                        ?
                                        <select onChange={(e) => this.handleInput('leadStyle', e.target.value)}>
                                            <option>Select</option>
                                            <option value='onsight'>Onsight</option>
                                            <option value='flash'>Flash</option>
                                            <option value='redpoint'>Redpoint</option>
                                            <option value='fell'>Fell / Hung</option>
                                        </select>
                                        : null
                                }
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='blue' content='Submit' onClick={() => this.handleSubmit()} />
                                <Button content='Cancel' onClick={() => this.cancel()} />
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addTodo, addTick })(ImageTicks);

