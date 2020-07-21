import React from "react";
import "./app.scss";
import TrelloLogo from "~a/images/trello_logo.svg";
import TUIlmLogo from "~a/images/tu-ilmenau_logo.svg";
import Input from "~c/input";
import Label from "~c/label";
import Button from "../components/button";
import LoginContainer from "../components/login-container";

class App extends React.Component {
  state = {
    isMoodleFormOnFocus: false,
    isTrelloFormOnFocus: false,
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
      this.setState({ isMoodleFormOnFocus: !this.state.isMoodleFormOnFocus });
      return;
    }
    this.setState({ isTrelloFormOnFocus: !this.state.isTrelloFormOnFocus });
  };

  onSubmit = () => {};

  render() {
    return (
      <div className="container">
        <LoginContainer
          style="moodle"
          isMoodleFormOnFocus={this.state.isMoodleFormOnFocus}
          isTrelloFormOnFocus={this.state.isTrelloFormOnFocus}
          onInputChange={this.onInputChange}
          onInputFocus={this.onInputFocus}
        />
        <LoginContainer
          style="trello"
          isMoodleFormOnFocus={this.state.isMoodleFormOnFocus}
          isTrelloFormOnFocus={this.state.isTrelloFormOnFocus}
          onInputChange={this.onInputChange}
          onInputFocus={this.onInputFocus}
        />
      </div>
    );
  }
}

export default App;
