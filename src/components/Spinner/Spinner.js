import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';



export default class Spinner extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: false,
        }
    }

    onShow = () => {
        this.setState({loading: true})
    }
    onHide = () => {
        this.setState({loading: false})
    }


    render(){
        console.log(this.state.loading)
        return (
            
            <div style={{background: 'grey', height: 200, width: 1000,}}>
               <Loading show={this.state.loading} color='red'/>
               <button onClick={this.onShow}>Show</button>
               <button onClick={this.onHide }>Hide</button>
            </div>
        )
    }
}


// function mapStateToProps(state) {
//     return{
//         loading: state.loading
//     }
// }
