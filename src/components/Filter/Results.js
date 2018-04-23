import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Stars from '../Route/Stars';


class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: this.props.filter.routes,
            currentPage: 1,
            routesPerPage: 20,
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }


    render() {

        const filter = this.props.filter



        const { currentPage, routesPerPage } = this.state;

        const indexOfLastRoute = currentPage * routesPerPage;
        const indexOfFirstRoute = indexOfLastRoute - routesPerPage;
        const currentRoutes = Array.isArray(filter.routes) ? filter.routes.slice(indexOfFirstRoute, indexOfLastRoute) : null;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filter.routes.length / routesPerPage); i++) {
            pageNumbers.push(i)
        }

        const renderPageNumbers = pageNumbers.map(num => {
            return (
                <li key={num} id={num} onClick={this.handleClick}> {num} </li>
            )
        })

        let routeDisplay = currentRoutes.map((route, index) => {
            return (
                <div key={index} className='routes'>
                    <span className='route-name' > <Link to={`/route/${route.id}`}>{route.name}</Link></span>

                    <span>
                        <Link to={`/state/${route.slot_1}`}><p>{route.slot_1}</p></Link>
                        {route.slot_2 ? <Link to={`/state/${route.slot_2}`}><p>{'>' + route.slot_2}</p></Link> : null}
                        {/* {route.slot_3 ? <Link to={`/state/${route.slot_3}`}> <p>{'>' + route.slot_3}</p></Link> : null} */}
                        {route.slot_4 ? <Link to={`/state/${route.slot_4}`}> <p>{'>' + route.slot_4}</p></Link> : null}
                        {route.slot_5 ? <Link to={`/state/${route.slot_5}`}> <p>{'>' + route.slot_5}</p></Link> : null}
                        {/* {route.slot_6 ? <Link to={`/state/${route.slot_6}`}> <p>{'>' + route.slot_6}</p></Link> : null } */}
                    </span>

                    <span style={{ alignItems: 'right' }}> <Stars stars={Number(route.stars)} size={'small'} /> </span>
                    <span style={{ textAlign: 'right' }}> {route.rating}</span>
                    <span style={{ textAlign: 'right' }}> {route.type}</span>
                    <span style={{ textAlign: 'right' }}>{route.pitches > 1 ? route.pitches + 'pitches' : route.pitches + 'pitch'}</span>
                </div>
            )
        })

        return (
            <div className='results-wrapper'>
                <Filter />
                <div className='results'>
                    <span>
                        <h1>Filtered Routes</h1>
                        {routeDisplay}
                    </span>
                    <ul id='page-numbers'>
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        filter: state.filter,
        routes: state.routes,
    }
}


export default connect(mapStateToProps)(Results);