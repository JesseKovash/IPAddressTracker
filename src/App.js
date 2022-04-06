
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import TopSection from "./components/topSection.jsx";
import Map from "./components/map.jsx";
import IPDetails from "./components/IPDetails.jsx";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { APIkey } from "../config.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        "ip": "72.20.77.193",
        "location": {
            "country": "US",
            "region": "North Dakota",
            "city": "Dickinson",
            "lat": 46.87918,
            "lng": -102.78962,
            "postalCode": "58601",
            "timezone": "-06:00",
            "geonameId": 5688789
        },
        "domains": [
            "lefor-193.ctcinet.com"
        ],
        "as": {
            "asn": 400439,
            "name": "CONSOLIDATEDTELCOM-AS",
            "route": "72.20.64.0/19",
            "domain": "",
            "type": ""
        },
        "isp": "Consolidated Telcom"
    }
    }
    this.getNewLocation = this.getNewLocation.bind(this);
  }

  getNewLocation = function (ipAddress) {
    axios.get()
  }

  render() {
    const {location} = this.state;
    return (
      <div>
        <div className="components_container">
          <TopSection />
          <IPDetails location={location}/>
        </div >
        <div className="leaflet-container">
          <Map location={location}/>
        </div>
      </div>
    );
  }
}

export default hot(App);
