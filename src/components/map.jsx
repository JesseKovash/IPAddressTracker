import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

function Map(props) {
  console.log(props.location)
  // var map = L.map('map').setView([51.505, -0.09], 13);
  return (
      <MapContainer center={[props.location.location.lat, props.location.location.lng]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
  )
};

export default Map;