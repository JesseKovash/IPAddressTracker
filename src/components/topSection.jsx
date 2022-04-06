import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TopSection(props) {
  return (
    <div className="topSection" style={{ backgroundImage: 'url("../../../images/pattern-bg.png")' }}>
      <h2>IP Address Tracker</h2>
      <div className="input_container">
        <input type="text" placeholder="Search for any IP address or domain" className="IP_input"></input>
        <button className="IP_input_button"><img src="../../../images/icon-arrow.svg"></img></button>
      </div>

    </div>


  )
};

export default TopSection;