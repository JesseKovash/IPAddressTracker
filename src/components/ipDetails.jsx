import React from "react";

const abbreviations = {
  Alabama: 'AL',
  Alaska: 'AK',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Colorado: 'CO',
  Connecticut: 'CT',
  Deleware: 'DE',
  Florida: 'FL',
  Georgia: 'GA',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Pennsylvania: 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY'
}

const stateAbbrev = function(state) {
  let abbreviation = abbreviations[state]
  return abbreviation
}

function IPDetails(props) {
  return (
    <div className="IPDetails_container">
      <div className="IPDetail_section">
        <h3>IP ADDRESS</h3>
        <h4>
          {props.location.ip}
        </h4>
      </div>
      <div className="IPDetail_section">
        <h3>LOCATION</h3>
        <h4>
         { `${props.location.location.city},
          ${stateAbbrev(props.location.location.region)}
          ${props.location.location.postalCode}`}
        </h4>
      </div>
      <div className="IPDetail_section">
        <h3>TIMEZONE</h3>
        <h4>UTC {props.location.location.timezone}</h4>
      </div>
      <div className="IPDetail_section">
        <h3>ISP</h3>
        <h4>{props.location.as.name}</h4>
      </div>
    </div>
  )
};

export default IPDetails;