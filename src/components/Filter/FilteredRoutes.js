import React, {Component} from 'react';
import { connect } from 'react-redux';


class FilteredRoutes extends Component {
    constructor(props){
        super(props)
        this.state = {
            routes: props.routes
        }
    }

    render(){
        // let routeDisplay = this.props.routes.map((route, index) => {
        //     <div>{route.name}</div>
        // })
        return {

        }
    }
}


function mapStateToProps(state){
    return {
        routes: state.routes
    }
}

export default connect(mapStateToProps)(FilteredRoutes)

