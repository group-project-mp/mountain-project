import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot4, getDescription } from '../../ducks/areas';
import { Link } from 'react-router-dom';
import Map from './Map';
import Footer from '../headerFooter/Footer'


class Slot_4 extends Component {
    componentDidMount() {
        this.props.getSlot4(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area);
    }

    render() {
        const areas = this.props.areas.slot_4[0]
        const mappedAreas = this.props.areas.slot_4.map((area, i ) => {
            // {console.log(area.slot_4)}
               return < div className = 'area-count-container' key = {i} > 
               
                {(area.slot_5) ? <Link to={`/subarea5/${area.slot_4}`}><p>{area.slot_4}</p></Link>
                   : <Link to={`/finalarea/${area.slot_4}`}><p>{area.slot_4}</p></Link>}
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
                    <Map className='map-container' areas={this.props.areas.slot_4} />
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

export default connect(mapStateToProps, { getSlot4, getDescription })(Slot_4)