import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TopSection(props) {
  return (
    <div id="topSection" style={{ backgroundImage: 'url("../../../images/pattern-bg.png")'}}>
      <h2>IP Address Tracker</h2>
      <input type="text"></input>
      <button>></button>
    </div>


  )
};

export default TopSection;