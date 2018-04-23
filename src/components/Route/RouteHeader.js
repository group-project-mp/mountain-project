import React, { Component } from 'react';
import Stars from './Stars';
import { Button, Header, Modal } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

const preset = process.env.REACT_APP_CLOUDINARY_PRESET;
const url = process.env.REACT_APP_CLOUDINARY_URL;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;

export default class RouteHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            message: '',
            addPhoto: false,
            photoUrl: ''
        }
        this.addMessage = this.addMessage.bind(this)
    }

    handleModal() {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    addMessage(value) {
        this.setState({ message: value })
    }

    photoModal() {
        this.setState({
            addPhoto: !this.state.addPhoto,
            photoUrl: ''
        })
    }

    handleDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", preset);
            formData.append("api_key", apiKey);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url
                this.setState({ photoUrl: data.url })
            })
        });

        axios.all(uploaders).then(() => {
        });
    }

    submitPhoto() {
        axios.post(`/api/addPhoto/${this.props.route.id}`, {url: this.state.photoUrl}).then(res => {
            res.status === 200
            ?
            this.setState({
                addPhoto: false,
                photoUrl: null
            })
            : alert('Error adding photo')
        })
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

        const dropzoneStyle = {
            width: "50%",
            border: "3px dashed #cdcdcd",
            align: "center",
            margin: "1vw auto",
            padding: "1vw",
            borderRadius: "1vw",
            cursor: "pointer"
        };
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
                            ? <Link to={ route.slot_4 ? `/subarea/${route.slot_3}` : `/finalarea/${route.slot_3}`}><span>{' > ' + route.slot_3}</span></Link>
                            : null
                    }
                    {
                        route.slot_4
                        ? <Link to={ route.slot_5 ? `/subarea6/${route.slot_5}` : `/finalarea/${route.slot_4}`}><span>{' > ' + route.slot_4}</span></Link>
                        : null
                    }
                    {
                        route.slot_5
                        ? <Link to={ route.slot_6 ? `/subarea6/${route.slot_6}` : `/finalarea/${route.slot_5}`}><span>{' > ' + route.slot_5}</span></Link>
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
                            trigger={<span style={{cursor: 'pointer'}} onClick={() => this.handleModal()}>Improve This Page</span>}>
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

                        <Modal
                            open={this.state.addPhoto}
                            size='tiny'
                            trigger={<span style={{cursor: 'pointer'}} onClick={() => this.photoModal()}>Add Photo</span>}>
                            <Modal.Header>Share a photo of {route.name}</Modal.Header>
                            <Modal.Content>
                                <h4>Guidelines</h4>
                                <ul>
                                    <li>Avoid duplicating existing photos and too many "butt-shots".</li>
                                    <li>Photos should be least 600 x 600 pixels.</li>
                                </ul>
                                <Dropzone
                                    onDrop={this.handleDrop}
                                    multiple
                                    accept="image/*"
                                    style={dropzoneStyle}
                                >
                                    <p>Drop your files or click here to upload</p>
                                </Dropzone>
                                {
                                    this.state.photoUrl 
                                    ? <img src={this.state.photoUrl} alt='route' style={{maxWidth: '300px', margin: 'auto'}}/>
                                    : null
                                }
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='blue' content='Submit' onClick={() => this.submitPhoto()} />
                                <Button content='Cancel' onClick={() => this.photoModal()} />
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