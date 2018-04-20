import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get20 } from '../../ducks/routeDetail';
import Stars from '../Route/Stars';
import { Link } from 'react-router-dom';

class Top20 extends Component {
    componentDidMount() {
        this.props.get20();
    }

    render() {
        const { top20 } = this.props;
        let topTwentyRoutes = top20.map((x, i) => {
            return (
                <div key={i} className='top-routes-row'>
                    <span>{`${i + 1}. `}</span>
                    <Link to={`/route/${x.id}`}><span>{x.name}</span></Link>
                    <div>
                        <Link to={`/area/${x.slot_1}`}><span>{`${x.slot_1} > `}</span></Link>
                        <Link to={`/state/${x.slot_2}`}><span>{x.slot_2}</span></Link>
                    </div>
                    <Stars stars={Number(x.stars)} size='small' />
                    <span>{x.rating}</span>
                </div>
            )
        })

        return (
            <div className='top-routes-container'>
                <h3>Top 20 Routes</h3>
                {topTwentyRoutes}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        top20: state.detail.top20
    }
}

export default connect(mapStateToProps, { get20 })(Top20);