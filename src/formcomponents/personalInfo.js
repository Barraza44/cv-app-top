import React from "react";

class PersonalInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <label htmlFor="cv-name">Your name</label>
        <input type="text" name="name" id="cv-name"/>

        <label htmlFor="cv-address">Address</label>
        <input type="text" name="address" id="cv-address"/>

        <label htmlFor="cv-email">Your email</label>
        <input type="email" name="email" id="cv-email"/>

        <label htmlFor="cv-phone">Your phone</label>
        <input type="tel" name="phone" id="cv-phone"/>
      </div>
    );
  }
}

export default PersonalInfo;