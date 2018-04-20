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
                <div className='nav-bar'>
                    <a href={'http://localhost:3009/auth'}><button>Login/Register</button></a>
                </div>
                <div className='main-header'>
                    <div className='crsl'>
                        <Carousel />
                    </div>
                    <div className='fltr'>
                        <Filter />
                    </div>
                </div>

                <div className='main-body'>
                    <div>
                        <Slot_1 />
                    </div>
                </div>
            </div>
        )
    }
}