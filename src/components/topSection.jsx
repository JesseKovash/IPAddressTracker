import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TopSection(props) {
  return (
    <div id="topSection" style={{ backgroundImage: 'url("../../../images/pattern-bg.png")' }}>
      <h2>IP Address Tracker</h2>
      <div id="input_container">
        <input type="text" placeholder="Search for any IP address or domain" id="IP_input"></input>
        <button id="IP_input_button"><img src="../../../images/icon-arrow.svg"></img></button>
      </div>

    </div>


  )
};

export default TopSection;