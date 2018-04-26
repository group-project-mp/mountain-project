import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSlot2, getDescription } from '../../ducks/areas';
import Map from './Map';
import { Link } from 'react-router-dom';
import Footer from '../headerFooter/Footer'

class slot_2 extends Component {
    componentDidMount() {
        this.props.getSlot2(this.props.match.params.area);
        this.props.getDescription(this.props.match.params.area)
        // this.props.getDescription(this.props.match.params.area);
    }
    render() {

        const areas = this.props.areas.slot_2[0]
        console.log(areas)
        const mappedAreas = this.props.areas.slot_2.map((area, i) => {
            { console.log(area) }
            return < div key={i} className='area-count-container' >
                <Link to={`/area/${area.slot_2}`}><p>{area.slot_2}</p></Link>
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
                    <Map className='map-container' areas={this.props.areas.slot_2} />
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
}
}
function mapStateToProps(state) {
    // console.log(state, "hit state")
    return {
        areas: state.areas
    }
}
export default connect(mapStateToProps, { getSlot2, getDescription })(slot_2)