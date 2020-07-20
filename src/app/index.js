import React from "react";
import "./app.scss";
import TrelloLogo from "~a/images/trello_logo.svg";
import TUIlmLogo from "~a/images/tu-ilmenau_logo.svg";
import Input from "~c/input";
import Label from "~c/label";
import Button from "../components/button";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-wrapper wrapper part">
          <img src={TUIlmLogo} />
          <div className="form">
            <div className="form-group">
              <Label name="Login" />
              <Input type="moodle-input" placeholder="Your login" />
            </div>
            <div className="form-group">
              <Label name="Password" />
              <Input type="moodle-input" placeholder="Your password" />
            </div>
            <Button type="moodle" text="Enter" />
          </div>
        </div>
        <div className="right-wrapper wrapper part">
          <img src={TrelloLogo} />
          <div className="form">
            <Input type="trello" placeholder="Enter email" />
            <Input type="trello" placeholder="Enter password" />
            <Button type="trello" text="Log in" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
