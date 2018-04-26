import React, { Component } from 'react';
import axios from 'axios';
import Stars from './Stars';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoute } from '../../ducks/routeDetail';

class SimilarArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            area: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.area !== this.props.area) {
            axios.get(`/api/similar/${nextProps.area}`).then(res => {
                this.setState({ area: res.data })
                console.log(res.data)
            })
        } else {
            this.setState({area: []})
        }
    }

    render() {
        const { area } = this.state;
        const { getRoute } = this.props;
        let similarList;
        area.length > 0 ? similarList = area.map((area, i) => {
            return (
                <div key={i} className='similar-route-container'>
                    <Stars stars={Number(area.stars)} size='small' />
                    <Link to={`/route/${area.id}`}><span onClick={() => getRoute(area.id)} className='area-name'>{area.name}</span></Link>
                    <span className='area-type'>{area.rating}</span>
                    <span className='area-type'>{area.type}</span>
                </div>
            )
        })
            : similarList = similarList;
        return (
            <div className='similar-tick similar-container'>
                <h4>Routes in the {this.props.area}</h4>
                {similarList}
            </div >
        )
    }
}


export default connect(null, { getRoute })(SimilarArea);
