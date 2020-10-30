import React from "react";

class PersonalInfoDisplay extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {names, address, email, phone} = this.props.data
    return (
      <div className={"personal"}>
        <h2>{names}</h2>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default PersonalInfoDisplay;