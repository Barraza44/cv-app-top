import './App.css';
import React from "react";
import PersonalInfo from "./formcomponents/personalInfo";
import SchoolInfo from "./formcomponents/schoolInfo";
import WorkInfo from "./formcomponents/workInfo";

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
      editing: false
    }
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      editing: true
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <PersonalInfo state={this.state} handleChange={this.handleChange}/>
          <SchoolInfo state={this.state} handleChange={this.handleChange}/>
          <WorkInfo state={this.state} handleChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default App;
