import './App.css';
import React from "react";
import PersonalInfo from "./formcomponents/personalInfo";
import SchoolInfo from "./formcomponents/schoolInfo";

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
      schoolFinishDate: ""
    }
    this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        <div>
          <PersonalInfo state={this.state} handleChange={this.handleChange}/>
          <SchoolInfo handleChange={this.handleChange}/>
        </div>
      </form>
    );
  }
}

export default App;
