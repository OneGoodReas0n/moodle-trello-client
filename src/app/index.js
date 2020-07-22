import React from "react";
import "./app.scss";
import TrelloLogo from "~a/images/trello_logo.svg";
import TUIlmLogo from "~a/images/tu-ilmenau_logo.svg";
import Input from "~c/input";
import Label from "~c/label";
import Button from "../components/button";
import LoginContainer from "../components/login-container";
import complete from "../components/complete";

class App extends React.Component {
  state = {
    isMoodleFormOnFocus: false,
    isTrelloFormOnFocus: false,
    isMoodleFormComplete: false,
    isTrelloFormComplete: false,
    form: {
      moodle: {
        login: "",
        pass: "",
      },
      trello: {
        login: "",
        pass: "",
      },
    },
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    const [type, field] = String(name).split("-");
    const copyState = Object.assign({}, this.state);
    copyState.form[type][field] = value;
    this.setState(copyState);
  };

  onInputFocus = ({ target }) => {
    const { name, value } = target;
    const [type] = String(name).split("-");
    if (type === "moodle") {
      !this.state.isTrelloFormComplete
        ? this.setState({
            isMoodleFormOnFocus: !this.state.isMoodleFormOnFocus,
          })
        : "";
      return;
    }
    !this.state.isMoodleFormComplete
      ? this.setState({ isTrelloFormOnFocus: !this.state.isTrelloFormOnFocus })
      : "";
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const copyState = Object.assign({}, this.state);
    if (name === "moodle") {
      copyState.isMoodleFormComplete = true;
      copyState.isTrelloFormOnFocus = true;
      this.setState(copyState);
      return;
    }
    copyState.isTrelloFormComplete = true;
    copyState.isMoodleFormOnFocus = true;
    this.setState(copyState);
  };

  render() {
    return (
      <div className="container">
        <LoginContainer
          style="moodle"
          isMoodleFormOnFocus={this.state.isMoodleFormOnFocus}
          isTrelloFormOnFocus={this.state.isTrelloFormOnFocus}
          onInputChange={this.onInputChange}
          onInputFocus={this.onInputFocus}
          isMoodleFormComplete={this.state.isMoodleFormComplete}
          isTrelloFormComplete={this.state.isTrelloFormComplete}
          onFormSubmit={this.onFormSubmit}
        />
        <LoginContainer
          style="trello"
          isMoodleFormOnFocus={this.state.isMoodleFormOnFocus}
          isTrelloFormOnFocus={this.state.isTrelloFormOnFocus}
          onInputChange={this.onInputChange}
          onInputFocus={this.onInputFocus}
          isMoodleFormComplete={this.state.isMoodleFormComplete}
          isTrelloFormComplete={this.state.isTrelloFormComplete}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

export default App;
