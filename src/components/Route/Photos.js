import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Modal } from 'semantic-ui-react';

class Photos extends Component {
    constructor() {
        super();

        this.state = {
            photos: [],
            current: ''
        }
    }

    componentDidMount() {
        axios.get(`/api/getPhotos/${this.props.match.params.id}`).then(res => {
            this.setState({ photos: res.data })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/api/getPhotos/${nextProps.match.params.id}`).then(res => {
                this.setState({ photos: res.data })
            })
        } else {
            this.setState({current: []})
        }
    }

    render() {
        const { photos } = this.state;
        const photoList = photos.map((pic, i) => {
            return (
                <Modal trigger={<img src={pic.url} alt='route' style={{ height: '150px', margin: '15px' }} />} key={i} basic size='large' >
                    <Modal.Content>
                        <img src={pic.url} alt='large' style={{maxWidth: '95%', margin: 'auto'}}/>
                    </Modal.Content>
                </Modal>
            )
        })
        return (
            <div>
                <h1>Photos</h1>
                <div>
                    {
                        photos.length > 0
                        ? photoList
                        : <p>No photos added for this route. Click the link on the top of this page to add your own!</p>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Photos);