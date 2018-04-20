import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Dropdown, Pagination } from 'semantic-ui-react';
import vSystem from './VSystem';
import difficulty from './Difficulty';
import quality from './Quality';
import pitches from './Pitches';
import typeOptions from './TypeOptions';
import Spinner from '../Spinner/Spinner';
// import Pagination from 'react-js-pagination';
import { inputChange, getRoutes } from '../../ducks/filterroutes';






class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleSelect = this.handleSelect.bind(this)
    }


    handleSelect(event, data) {
        this.props.inputChange(data.placeholder, data.value)
    }
    render() {
        const filter = this.props.filter;


        return (
            <div className='filtermain'>
                <div className='filterbody'>
                    <h1>Route Finder</h1>

                    <h3>Tell us what you like, we'll tell you what to climb!</h3>

                    <Form.Field>
                        <label>Quality</label>
                        <Dropdown placeholder='quality'
                            selection options={quality} onChange={this.handleSelect} />
                    </Form.Field>
                    <br />
                    <Form.Field>
                        <label>Pitches</label>
                        <Dropdown placeholder='pitches'
                            selection options={pitches} onChange={this.handleSelect} />
                    </Form.Field>
                    <br />
                    <Form.Field>
                        <label>Type</label>
                        <Dropdown placeholder='type' selection options={typeOptions} onChange={this.handleSelect} />
                    </Form.Field>
                    <br />
                    <div className='difficulty'>
                        <Form.Field>
                            {filter.type === 'Boulder' ?
                                <Dropdown placeholder='min' search selection options={vSystem} /> :
                                <Dropdown placeholder='min' search selection options={difficulty} onChange={this.handleSelect} />}
                            <h4>to</h4>
                            {filter.type === 'Boulder' ?
                                <Dropdown placeholder='max' search selection options={vSystem} /> :
                                <Dropdown placeholder='max' search selection options={difficulty} onChange={this.handleSelect} />}
                        </Form.Field>
                    </div>
                    <br />
                   <Link to={`/results`}> <button onClick={() => this.props.getRoutes(filter)} color='rgb(44,92,142)'>Find Routes</button></Link>
                </div>
                {/* <Spinner /> */}
            </div>
        )
    }
}


function mapStateToProps(state) {

    return {
        filter: state.filter,
        type: state.type,
        loading: state.loading,
        routes: state.routes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (placeholder, data) => dispatch(inputChange(placeholder, data)),
        getRoutes: (filter) => dispatch(getRoutes(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);