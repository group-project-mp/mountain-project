import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments, handleInput, addComment } from '../../ducks/routeDetail';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';


class Comments extends Component {

    componentDidMount() {
        this.props.getComments(this.props.match.params.id)
    }

    render() {
        const { comments, handleInput, addComment, newComment } = this.props;
        const { id } = this.props.match.params;
        let commentList = comments.map((x, i) => {
            return (
                <div key={i} className='comment-container'>
                    <div className='name-date-container'>
                        <span style={{ fontWeight: 'bold' }}>{x.user_name}</span>
                        <span>{x.date || '04/17/2018'}</span>
                    </div>
                    <span className='comment'>{x.comment}</span>
                    <span className='flag-button'>Flag</span>

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
                    <input placeholder='Write a comment' onChange={(e) => handleInput('newComment', e.target.value)} />
                    <Button color='blue' onClick={(e) => addComment(id, {date: today, comment: newComment})}>Submit</Button>
                </div>
                {comments ? commentList : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.detail.comments,
        newComment: state.detail.newComment
    }
}

export default withRouter(connect(mapStateToProps, { getComments, handleInput, addComment })(Comments));