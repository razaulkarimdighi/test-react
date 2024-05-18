import React from "react";
import razaul from '../images/razaul.jpg';

export default function ContactCard(props) {
    const {id, name, email} = props.contact
  return (
    <div className="item">
        <img className="ui avatar image" src={razaul} alt="razaul"/>
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </div>
  );
}
