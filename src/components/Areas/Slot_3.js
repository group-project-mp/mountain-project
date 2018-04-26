import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot3, getDescription } from '../../ducks/areas';
import { Link } from 'react-router-dom';
import Map from './Map';
import Footer from '../headerFooter/Footer'


class slot_3 extends Component {
    componentDidMount() {
        this.props.getSlot3(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area)
    }

    render() {
        const areas = this.props.areas.slot_3[0]
        const mappedAreas = this.props.areas.slot_3.map((area, i) => {
            // {console.log(area.slot_3)}
            return < div key = {i} className='area-count-container'>
                {(area.slot_4) ? <Link to={`/subarea/${area.slot_3}`}><p>{area.slot_3}</p></Link>
                    : <Link to={`/finalarea/${area.slot_3}`}><p>{area.slot_3}</p></Link>}
                <p>{area.count}</p>
            </div >
        })
        // console.log(mappedAreas)
        return (
            <div className='area-wrapper'>
                <div className='area-header-main-wrapper'>
                    <div className='route-header-main'>
                        {areas ?
                            <div className='route-locations'>
                                <Link to={'/'}><span>All Locations</span></Link>
                                <Link to={`/state/${areas.slot_1}`}><span>{' > ' + areas.slot_1}</span></Link>
                            </div> : null}
                        <div className='detail-name'>
                            <h1>{this.props.match.params.area}</h1>
                        </div>
                    </div>
                </div>
                <div className='areas-main'>
                    {this.props.areas.description[0] ?
                        <div className='description-getting-there-wrapper'>
                            <div className='description-getting-there'>
                                <h2>Description</h2>
                                <p>{this.props.areas.description[0].description}</p>
                            </div>
                            <div className='description-getting-there'>
                                <h2>Getting There</h2>
                                <p>{this.props.areas.description[0].getting_there}</p>
                            </div>
                        </div>
                        : null}
                    <div className='sub-area-container'>
                        <h2>Areas</h2>
                        {mappedAreas}
                    </div>
                </div>
                <div className='areas-map'>
                    <h2 className='map-header'>Map of Areas within {this.props.match.params.area}</h2>
                    <Map className='map-container' areas={this.props.areas.slot_3} />
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state, "hit state")
    return {
        areas: state.areas

    }
}

export default connect(mapStateToProps, { getSlot3, getDescription })(slot_3)






