import React, { Component } from 'react';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import Filter from '../Filter/Filter';

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
            <div className='main'>
                {/* <div className='mainheader'> */}
                    <div className='carousel'>
                        <Carousel />
                    </div>
                    <div className='filter'>
                        <Filter />
                    {/* </div> */}
                </div>
            </div>
        )
    }
}