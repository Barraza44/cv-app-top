import React from "react";

class SchoolInfoDisplay extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    const {schoolName, schoolDegree, schoolStartDate, schoolFinishDate} = this.props.data
    return(
      <div className={"Education"}>
        <h2>Education</h2>
        <h3>{schoolDegree}</h3>
        <p>{schoolName}</p>
        <p>From: {schoolStartDate} To: {schoolFinishDate}</p>
      </div>
    );
  }

}

export default SchoolInfoDisplay