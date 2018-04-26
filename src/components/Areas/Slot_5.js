import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot5, getDescription } from '../../ducks/areas';
import { Link } from 'react-router-dom';
import Map from './Map';
import Footer from '../headerFooter/Footer'


class Slot_5 extends Component {
    componentDidMount() {
        this.props.getSlot5(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area);
    }

    render() {
        const areas = this.props.areas.slot_5[0]
        const mappedAreas = this.props.areas.slot_5.map((area, i) => {
            // {console.log(area.slot_4)}
               return < div className = 'area-count-container' key = {i} > 
                {(area.slot_6) ? <Link to={`/subarea6/${area.slot_5}`}><p>{area.slot_5}</p></Link>
                   : <Link to={`/finalarea/${area.slot_5}`}><p>{area.slot_5}</p></Link>}
                      <p>{area.count}</p>
                </div >
    })
    // console.log(mappedAreas)
    return(
        <div className='area-wrapper'>
                <div className='area-header-main-wrapper'>
                    <div className='route-header-main'>
                        {areas ?
                            <div className='route-locations'>
                                <Link to={'/'}><span>All Locations</span></Link>
                                <Link to={`/state/${areas.slot_1}`}><span>{' > ' + areas.slot_1}</span></Link>
                                {
                            areas.slot_2
                                ? <Link to={`/area/${areas.slot_2}`}><span>{' > ' + areas.slot_2}</span></Link>
                                : null
                        }
                        {
                            areas.slot_3
                                ? <Link to={areas.slot_4 ? `/subarea/${areas.slot_3}` : `/finalarea/${areas.slot_3}`}><span>{' > ' + areas.slot_3}</span></Link>
                                : null
                        }
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
                    <Map className='map-container' areas={this.props.areas.slot_5} />
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
}
}

function mapStateToProps(state) {
    return {
        areas: state.areas

    }
}

export default connect(mapStateToProps, { getSlot5, getDescription})(Slot_5)