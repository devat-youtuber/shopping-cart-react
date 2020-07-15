import React from "react";
import "./css/Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <h1 style={{margin:'0 0 25px 0'}}>CONTACT US</h1>
        <p> We are experiencing a high volume of contacts and wait times
        may be longer than usual. Please also note deliveries are currently
        taking longer than usual. To check the status of an order, please visit
        your orders page. Thank you for your patience.</p>
      </div>
    );
  }
}
