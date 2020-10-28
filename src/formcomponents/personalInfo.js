import React from "react";

class PersonalInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {names, address, email, phone} = this.props.state;
    const {handleChange} = this.props;

    return(
      <div>
        <label htmlFor="cv-name">Your name</label>
        <input type="text" name="names" id="cv-name" onChange={handleChange}/>

        <label htmlFor="cv-address">Address</label>
        <input type="text" name="address" id="cv-address" onChange={handleChange}/>

        <label htmlFor="cv-email">Your email</label>
        <input type="email" name="email" id="cv-email" onChange={handleChange}/>

        <label htmlFor="cv-phone">Your phone</label>
        <input type="tel" name="phone" id="cv-phone" onChange={handleChange}/>
      </div>
    );
  }
}

export default PersonalInfo;