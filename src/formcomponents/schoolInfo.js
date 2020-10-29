import React from  "react";

class SchoolInfo extends React.Component{
  constructor(props) {
    super(props);
  }


  render() {
    const { schoolName, schoolDegree, schoolStartDate, schoolFinishDate } = this.props.state;
    const {handleChange} = this.props;
    return(
      <div>
        <label htmlFor="school-nm-cv">School Name</label>
        <input type="text" name="schoolName" id="school-nm-cv" value={schoolName} onChange={handleChange}/>

        <label htmlFor="degree-cv">Degree </label>
        <input type="text" name="schoolDegree" id="degree-cv" value={schoolDegree} onChange={handleChange}/>

        <label htmlFor="start-date-cv">Studied from:</label>
        <input type="date" name="schoolStartDate" id="start-date-cv" value={schoolStartDate} onChange={handleChange}/>

        <label htmlFor="finish-date-cv">To:</label>
        <input type="date" name="schoolFinishDate" id="finish-date-cv" value={schoolFinishDate} onChange={handleChange}/>
      </div>
    );
  }
}

export default SchoolInfo;