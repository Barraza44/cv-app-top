import React from "react";

class WorkInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange } = this.props;
    return(
      <div>
        <label htmlFor="company-cv">Company:</label>
        <input type="text" name="company" id="company-cv" onChange={handleChange}/>
        <label htmlFor="">Title or position:</label>
        <input type="text" name="position" id="position-cv" onChange={handleChange}/>
        <label htmlFor="">Your work (What did you do?):</label>
        <input type="text" name="tasks" id="tasks-cv" onChange={handleChange}/>

        <label htmlFor="work-start-cv">Worked since: </label>
        <input type="date" name="workStart" id="work-start-cv"/>
        <label htmlFor="work-end-cv">To: </label>
        <input type="date" name="workEnd" id="work-end-cv"/>
      </div>
    );
  }
}

export default WorkInfo