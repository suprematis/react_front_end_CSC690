import React from 'react';
import { formatPrice } from "../helpers";

class Property extends React.Component {
  render() {
    const {HASH, LON, LAT, NUMBER, STREET, POSTCODE} = this.props.details;
    return (
      <div className="col s10">
        <div className="row">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <li className="menu-property">
                <p>
                  <span>Longitude: {LON}</span><br/>
                  <span>Latitude: {LAT}</span><br/>
                  <span>Street Address: {NUMBER} {STREET}</span><br/>
                  <span>Zipcode: {POSTCODE}</span>
                </p>
                <h3 className="property-name">
                  <span className="price"></span>
                </h3>
              </li>
            </div>
          </div>
        </div>
      </div>
        )
  }
}

export default Property ;
