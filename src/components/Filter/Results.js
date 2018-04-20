import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';


class Results extends Component {

    constructor(props) {
        super(props);

        this.sate = {
            routes: this.props.filter.routes,
            pageNumber: 1,
            routesPerPage: 20,

        }
    }


    render() {
        console.log(this.sate.routes)
        const filter = this.props.filter

        const paginationStart = this.sate.pageNumber * 20 -20
        const paginationEnd = this.sate.pageNumber * 20 -1



        let paginatedRoutes = () => {}

        let routeDisplay = Array.isArray(filter.routes) ? filter.routes.map((route, index) => {
            return (
                <div key={index} className='routes'>
                    <p className='route-name' > <Link to={`/route/${route.id}`}>{route.name}</Link></p>
                    <div>{route.stars}</div>
                    <div> {route.rating}</div>
                    <div className='route-type'>{route.type}</div>
                </div>
            )
        }) : null

        return (
            <div className='results-wrapper'>
            <Filter/>
                <div className='results'>
                    <span>
                        <h1>Filtered Routes</h1>
                        {routeDisplay}
                    </span>
                    {/* <Pagination /> */}
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