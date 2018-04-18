import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Slot_1 from '../Areas/Slot_1'
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

            <div>
                <Carousel/>
                Home
                <div>

                    <button onClick={this.test}>click me</button>
                    <a href={'http://localhost:3009/auth'}><button>Login/Register</button></a>
                </div>
                <div>
                    <Slot_1/>

                <button onClick={this.test}>click me</button>
                <br/>


                </div>
            </div>
        )
    }
}