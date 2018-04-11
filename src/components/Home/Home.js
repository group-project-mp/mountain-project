import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();

        this.test = this.test.bind(this);
    }

    test() {
        axios.post(`/api/test`).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                Home
                <button onClick={this.test}>click me</button>
            </div>
        )
    }
}