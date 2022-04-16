import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from "leaflet";

function Map(props) {
  // var map = L.map('map').setView([51.505, -0.09], 13);
  let position = [props.location.location.lat, props.location.location.lng];

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <ChangeView center={position} zoom={12} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          key="ABC"
          position={position}
          Icon={Icon}
        />
      </MapContainer>
  )
};

export default Map;