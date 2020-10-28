import './App.css';
import React from "react";
import PersonalInfo from "./formcomponents/personalInfo";

class App extends React.Component {
  render() {
    return (
      <form>
        <div>
          <PersonalInfo/>
        </div>
      </form>
    );
  }
}

export default App;
