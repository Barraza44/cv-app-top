import React from "react";

class WorkInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {company, position, tasks, workStart, workEnd } = this.props.data;
    return (
      <div className={"Work"}>
        <h2>Work</h2>
        <h3>{company}</h3>
        <p>{position}</p>
        <p>{tasks}</p>
        <p>From {workStart} to {workEnd}</p>
      </div>
    );
  }
}

export default WorkInfoDisplay;