import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export default function routeMap(props) {
    const defaultLat = props.latitude ? Number(props.latitude) : null
    const defaultLng = props.longitude ? Number(props.longitude) : null

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: defaultLat, lng: defaultLng }} >
            {props.isMarkerShown && <Marker position={{ lat: defaultLat, lng: defaultLng }} />}
        </GoogleMap>
    ))



    return (
        defaultLat && defaultLng
            ?
            <MyMapComponent
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            :
            <div>No Map Data</div>
    )
}