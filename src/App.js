
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import TopSection from "./components/topSection.jsx";
import Map from "./components/map.jsx";
import IPDetails from "./components/IPDetails.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="components_container">
        <TopSection />
        <IPDetails />
        <Map />
        {/* <Button variant="contained">this is a material UI button</Button> */}
      </div>
    );
  }
}

export default hot(App);
