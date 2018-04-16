import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import vSystem from './VSystem';
import difficulty from './Difficulty';
import quality from './Quality';
import pitches from './Pitches';
import { inputChange, getRoutes } from '../../ducks/filterroutes';
import { get } from 'https';





class Filter extends Component {

constructor(props) {
    super(props);
    this.state = {
        route: props.routes
    }
    this.handleSelect = this.handleSelect.bind(this)
}
    

    handleSelect(event, data) {
      
       
       this.props.inputChange(data.placeholder, data.value)
    }

    findRoutes() {
        this.props.getRoutes
    }
    render() {
    
        const { filter } = this.props
    //     let routeDisplay = this.state.route.map((routes, index) => (
    //         <div key={index} className='filteredRoutes'>
    //             <div className='routes'>
    //                 <p>{routes.name}</p>
    //                 <p>{routes.areas}</p>
    //                 <p>{routes.stars}</p>
    //                 <p>{routes.difficulty}</p>
    //                 <p>{routes.type}</p>
    //                 <p>{routes.pitches}</p>
    //             </div>
    //         </div>
    //     )
    // )

    console.log(this.props.type)
        return (
            <div className='filtermain'>
                <h1>Route Finder</h1>
                <br />
                <h3>Tell us what you like, we'll tell you what to climb!</h3>
                <br />
                <Form.Field>
                    <label>Quality</label>
                    <Dropdown placeholder='All Routes'
                        selection options={quality} onChange={this.handleSelect} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Pitches</label>
                    <Dropdown placeholder='Any Number'
                        selection options={pitches} onChange={this.handleSelect} />
                </Form.Field>
                <br />
                <Form.Field>
                    <label>Type</label>
                    <Dropdown placeholder='type' selection options={filter.typeOptions} onChange={this.handleSelect} />
                </Form.Field>
                <br />
                <Form.Field>
                    {filter.type === 'Boulder' ?
                        <Dropdown placeholder='Min' search selection options={vSystem} /> :
                        <Dropdown placeholder='Min' search selection options={difficulty} onChange={this.handleSelect} />}
                    <h4>to</h4>
                    {filter.type === 'Boulder' ?
                        <Dropdown placeholder='Max' search selection options={vSystem} /> :
                        <Dropdown placeholder='Max' search selection options={difficulty} onChange={this.handleSelect} />}
                </Form.Field>
                <br />
                <Button onClick={getRoutes}>Find Routes</Button>

                <h1>Filtered Routes</h1>
                {/* {routeDisplay} */}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        filter: state.filter,
        type: state.type,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (placeholder, data) => dispatch(inputChange(placeholder, data)),
        getRoutes: () => dispatch(getRoutes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);