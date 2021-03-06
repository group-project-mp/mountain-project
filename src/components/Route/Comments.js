import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { getComments, addComment } from '../../ducks/routeDetail';
import { connect } from 'react-redux';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newComment: '',
            current: null,
            user: null
        }
    }

    componentDidMount() {
        this.props.getComments(this.props.match.params.id);
        axios.get('/api/session').then(res => {
            this.setState({
                user: res.data.user
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/api/comments/${this.props.match.params.id}`).then(res => {
                this.setState({ comments: res.data })
            })
        } else {
            this.setState({ current: [] })
        }
    }

    handleInput(value) {
        this.setState({ newComment: value })
    }

    handleSubmit(id, body) {
        this.state.user
            ? this.props.addComment(id, body)
            : alert('Must be logged in to leave comment')
    }
    render() {
        const { newComment } = this.state;
        const { comments } = this.props;
        const { id } = this.props.match.params;

        let commentList = comments.map((x, i) => {
            return (
                <div key={i} className='comment-container'>
                    <div className='name-date-container'>
                        <span style={{ fontWeight: 'bold' }}>{x.user_name}</span>
                        <span>{x.date || '04/27/2018'}</span>
                    </div>
                    <span className='comment'>{x.comment}</span>
                    <span className='flag-button' onClick={() => alert('Admin has been notified of flag')}>Flag</span>
                </div>
            )
        })

        return (
            <div>
                <h1>{comments.length} Comments</h1>
                <div className='comment-input-container'>
                    <input placeholder='Write a comment' onChange={(e) => this.handleInput(e.target.value)} />
                    <Button color='blue' onClick={() => this.handleSubmit(id, { comment: newComment })}>Submit</Button>
                </div>
                {comments ? commentList : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.detail.comments
    }
}

export default withRouter(connect(mapStateToProps, { getComments, addComment })(Comments));