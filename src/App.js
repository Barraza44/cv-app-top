import './App.css';
import React from "react";
import PersonalInfo from "./formcomponents/personalInfo";
import SchoolInfo from "./formcomponents/schoolInfo";
import WorkInfo from "./formcomponents/workInfo";

import PersonalInfoDisplay from "./displayComponents/personalInfoDisplay";
import SchoolInfoDisplay from "./displayComponents/schoolInfoDisplay";
import WorkInfoDisplay from "./displayComponents/workInfoDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: "",
      address: "",
      email: "",
      phone: "",
      schoolName: "",
      schoolDegree: "",
      schoolStartDate: "",
      schoolFinishDate: "",
      company: "",
      position: "",
      tasks:"",
      workStart:"",
      workEnd: "",
      editing: true
    }
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
    this.handleEdit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      editing: false
    })
  }

  handleEdit = () => {
    this.setState({
      editing: true
    })
  }

  render() {
    const editing = this.state.editing;
    if(editing){
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <PersonalInfo state={this.state} handleChange={this.handleChange}/>
            <SchoolInfo state={this.state} handleChange={this.handleChange}/>
            <WorkInfo state={this.state} handleChange={this.handleChange} />
            <button type={"submit"}>Send!</button>
          </div>
        </form>
      );
    }
    else {
      return (
        <div>
        <PersonalInfoDisplay data={this.state} />
        <SchoolInfoDisplay data={this.state} />
        <WorkInfoDisplay data={this.state} />
        <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }

  }
}

export default App;
