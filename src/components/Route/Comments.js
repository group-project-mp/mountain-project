import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            newComment: '',
            current: null
        }
    }

    componentDidMount() {
        axios.get(`/api/comments/${this.props.match.params.id}`).then(res => {
            this.setState({ comments: res.data })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/api/comments/${this.props.match.params.id}`).then(res => {
                this.setState({ comments: res.data })
            })
        } else {
            this.setState({current: []})
        }
    }

    handleInput(value) {
        this.setState({ newComment: value })
    }

    handleSubmit(id, body) {
        axios.post(`/api/comments/${id}`, body).then(res => {
            res.data === false
                ? alert('please login to add comment')
                : this.setState({ comments: [...this.state.comments, res.data], newComment: '' })
        });
    }
    render() {
        const { comments, newComment } = this.state;
        const { id } = this.props.match.params;

        let commentList = comments.map((x, i) => {
            return (
                <div key={i} className='comment-container'>
                    <div className='name-date-container'>
                        <span style={{ fontWeight: 'bold' }}>{x.user_name}</span>
                        <span>{x.date || '04/17/2018'}</span>
                    </div>
                    <span className='comment'>{x.comment}</span>
                    <span className='flag-button' onClick={() => alert('Admin has been notified of flag')}>Flag</span>

                </div>
            )
        })

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;

        return (
            <div>
                <h1>{comments.length} Comments</h1>
                <div className='comment-input-container'>
                    <input placeholder='Write a comment' onChange={(e) => this.handleInput(e.target.value)} />
                    <Button color='blue' onClick={() => this.handleSubmit(id, { date: today, comment: newComment })}>Submit</Button>
                </div>
                {comments ? commentList : null}
            </div>
        )
    }
}


export default withRouter(Comments);