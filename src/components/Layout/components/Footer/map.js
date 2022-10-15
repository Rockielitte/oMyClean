import React from 'react'
import Map from 'react-map-gl';

function MapComponent() {
    return <Map
        mapboxAccessToken={"pk.eyJ1IjoiZGFpbWsiLCJhIjoiY2ttbmt2dzc2MXZ1bjJwcGZsZndoaGdkbiJ9.KzEXKpaGb0yYkV8Npdg65g"}
        initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5
        }}

        style={{ width: 400, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
    />;
}

export default MapComponent