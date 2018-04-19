import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../../ducks/routeDetail';


export default function Comments(props){
    let commentList = props.comments.map((x, i) => {
        return (
            <div key={i}>
                <h3>{x.comment}</h3>
            </div>
        )
    })
    return (
        <div>
            {props.comments ? commentList : null}
        </div>
    )
}
