import React, { Component } from 'react';
import Stars from './Stars';
import { Button, Header, Modal } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class RouteHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            message: ''
        }
        this.addMessage = this.addMessage.bind(this)
    }

    handleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    addMessage(value) {
        this.setState({ message: value })
    }


    submitChange() {
        let body = {
            text: this.state.message,
            subject: `Changes to ${this.props.route.id} / ${this.props.route.name}`
        }
        axios.post('/api/email', body).then(res => {
            this.setState({
                showModal: false,
                message: ''
            })
        })
    }

    render() {
        const { route } = this.props;
        return (
            <div className='route-header-main'>
                <div className='route-locations'>
                    <Link to={`/state/${route.slot_1}`}><span>{route.slot_1}</span></Link>
                    {
                        route.slot_2
                            ? <Link to={`/area/${route.slot_2}`}><span>{' > ' + route.slot_2}</span></Link>
                            : null
                    }
                    {
                        route.slot_3
                            ? <Link to={`/subarea/${route.slot_3}`}><span>{' > ' + route.slot_3}</span></Link>
                            : null
                    }
                    {
                        route.slot_4
                            ? <Link to={`/subarea5/${route.slot_4}`}><span>{' > ' + route.slot_4}</span></Link>
                            : null
                    }
                    {
                        route.slot_5
                            ? <Link to={`/subarea6/${route.slot_5}`}><span>{' > ' + route.slot_5}</span></Link>
                            : null
                    }
                    {
                        route.slot_6
                            ? <Link to={`/finalarea/${route.slot_6}`}><span>{' > ' + route.slot_6}</span></Link>
                            : null
                    }
                </div>
                <div className='detail-name'>
                    <h1>{route.name}</h1>
                    <div>
                        <Modal
                            open={this.state.showModal}
                            size='tiny'
                            trigger={<span onClick={() => this.handleModal()}>Improve This Page</span>}>
                            <Modal.Header>Improve {route.name}</Modal.Header>
                            <Modal.Content>
                                <h4>Mountain Project is built by climbers like you. Help make it better!</h4>
                                <textarea
                                    onChange={(e) => this.addMessage(e.target.value)}
                                    placeholder='Protection? Description? Sun/Shade? Approach/Descent Details?'
                                    style={{ height: '100px', width: '95%', margin: 'auto' }} />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='blue' content='Submit' onClick={() => this.submitChange()} />
                                <Button content='Cancel' onClick={() => this.handleModal()} />
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
                <div className='route-stars-rating'>
                    <h2>{route.rating}</h2>
                    <Stars stars={route.stars} size='large' />
                    <span>Avg: {route.stars} from {route.star_votes} votes</span>
                </div>
                <hr />
            </div>
        )
    }
}