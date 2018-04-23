import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class Map extends Component {
    render() {
        const { routes } = this.props
        // console.log(routes)
         const defaultLat = routes[0] ? routes.reduce((acc, route) => parseFloat(route.latitude) + acc, 0)/routes.length :null
        const defaultLng = routes[0] ? routes.reduce((acc, route) => parseFloat(route.longitude) + acc, 0)/routes.length :null

        //default zoom quantifier logic
        const latArray = routes[0] ? routes.map(route => (parseFloat(route.latitude))): null
        const lngArray = routes[0] ? routes.map(route => (parseFloat(route.longitude))): null
        const maxLatArray =  routes[0] ? Math.max(...latArray) : null
        const minLatArray = routes[0] ? Math.min(...latArray) : null
        const maxLngArray = routes[0] ? Math.max(...lngArray) : null
        const minLngArray = routes[0] ? Math.min(...lngArray) : null
        
        const coordinateDiff = Math.abs(maxLatArray - minLatArray + maxLngArray - minLngArray)
        // console.log(coordinateDiff)
        // setting zoom
        const zoom = coordinateDiff > 1.5 ? 8
                    :coordinateDiff > 1  ? 9
                    :coordinateDiff > .75  ? 10
                    :coordinateDiff > .5 ? 10
                    :coordinateDiff > .1 ? 11
                    :coordinateDiff > .01 ? 13
                    : 14

        const markers = routes.map(route => {
            return <Marker 
            label = {route.name}
            position={{lat: parseFloat(route.latitude), lng: parseFloat(route.longitude)}}/>
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
                containerElement={<div style={{ height: `600px`, width: '900px' }} />}
                mapElement={<div style={{ height: `600px` }} />}
            />
        )
    }
}