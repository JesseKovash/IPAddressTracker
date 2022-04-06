import React from "react";

function IPDetails(props) {
  return (
    <div className="IPDetails_container">
      <div className="IPDetail_section">
        <h3>IP ADDRESS</h3>
        <h4>192.212.174.101</h4>
      </div>
      <div className="IPDetail_section">
        <h3>LOCATION</h3>
        <h4>Brooklyn, NY 10001</h4>
      </div>
      <div className="IPDetail_section">
        <h3>TIMEZONE</h3>
        <h4>UTC -05:00</h4>
      </div>
      <div className="IPDetail_section">
        <h3>ISP</h3>
        <h4>SpaceX Starlink</h4>
      </div>
    </div>
  )
};

export default IPDetails;