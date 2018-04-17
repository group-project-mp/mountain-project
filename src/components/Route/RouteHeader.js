import React, { Component } from 'react';
import Stars from './Stars';
import { Button, Header, TextArea, Modal } from 'semantic-ui-react'

export default class RouteHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    handleModal(){
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render() {
        const { route } = this.props;
        return (
            <div className='route-header-main'>
                <div className='route-locations'>
                    <span>{route.slot_1}</span>
                    {
                        route.slot_2
                            ? <span>{' > ' + route.slot_2}</span>
                            : null
                    }
                    {
                        route.slot_3
                            ? <span>{' > ' + route.slot_3}</span>
                            : null
                    }
                    {
                        route.slot_4
                            ? <span>{' > ' + route.slot_4}</span>
                            : null
                    }
                    {
                        route.slot_5
                            ? <span>{' > ' + route.slot_5}</span>
                            : null
                    }
                    {
                        route.slot_6
                            ? <span>{' > ' + route.slot_6}</span>
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
                                    placeholder='Protection? Description? Sun/Shade? Approach/Descent Details?'
                                    style={{height: '100px', width: '95%', margin: 'auto'}}/>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='blue' content='Submit'/>
                                <Button  content='Cancel' onClick={() => this.handleModal()}/>
                            </Modal.Actions>
                        </Modal>
                        <span>Add To Page</span>
                    </div>
                </div>
                <div className='route-stars-rating'>
                    <h2>{route.rating}</h2>
                    <Stars stars={route.stars} />
                    <span>Avg: {route.stars} from {route.star_votes} votes</span>
                </div>
                <hr />
            </div>
        )
    }
}