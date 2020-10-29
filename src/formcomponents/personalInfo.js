import React from "react";

class PersonalInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {handleChange} = this.props;
    const {names, address, email, phone} = this.props.state;
    return(
      <div>
        <label htmlFor="cv-name">Your name</label>
        <input type="text" name="names" id="cv-name" value={names} onChange={handleChange}/>

        <label htmlFor="cv-address">Address</label>
        <input type="text" name="address" id="cv-address" value={address}  onChange={handleChange}/>

        <label htmlFor="cv-email">Your email</label>
        <input type="email" name="email" id="cv-email" value={email} onChange={handleChange}/>

        <label htmlFor="cv-phone">Your phone</label>
        <input type="tel" name="phone" id="cv-phone" value={phone} onChange={handleChange}/>
      </div>
    );
  }
}

export default PersonalInfo;