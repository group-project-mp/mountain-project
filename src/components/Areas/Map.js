import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class Map extends Component {
    render() {
        const { areas } = this.props
        // console.log(areas)
         const defaultLat = areas[0] ? areas.reduce((acc, area) => parseFloat(area.latitude) + acc, 0)/areas.length :null
        const defaultLng = areas[0] ? areas.reduce((acc, area) => parseFloat(area.longitude) + acc, 0)/areas.length :null

        //default zoom quantifier logic
        const latArray = areas[0] ? areas.map(area => (parseFloat(area.latitude))): null
        const lngArray = areas[0] ? areas.map(area => (parseFloat(area.longitude))): null
        const maxLatArray =  areas[0] ? Math.max(...latArray) : null
        const minLatArray = areas[0] ? Math.min(...latArray) : null
        const maxLngArray = areas[0] ? Math.max(...lngArray) : null
        const minLngArray = areas[0] ? Math.min(...lngArray) : null
        
        const coordinateDiff = Math.abs(maxLatArray - minLatArray + maxLngArray - minLngArray)
        console.log(coordinateDiff)
        //setting zoom
        const zoom = coordinateDiff > 1.5 ? 8
                    :coordinateDiff > 1  ? 9
                    :coordinateDiff > .75  ? 10
                    :coordinateDiff > .5 ? 10
                    :coordinateDiff > .1 ? 11
                    :coordinateDiff > .01 ? 13
                    : 14

                    
        const markers = areas.map(area => {
            return <Marker 
            label = {area.slot_2 || area.slot_3 || area.slot_4 || area.slot_5 || area.slot_6 }
            position={{lat: parseFloat(area.latitude), lng: parseFloat(area.longitude)}}/>
        })
        // console.log(markers)
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={zoom}
                defaultCenter={{ lat: defaultLat, lng: defaultLng}} >
            {markers}
  </GoogleMap>
        ))
        return (
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px`, width: '600px' }} />}
                mapElement={<div style={{ height: `400px` }} />}
            />
        )
    }
}