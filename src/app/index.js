import React from "react";
import "./app.scss";
import LoginContainer from "../components/wrappers/login-container";

class App extends React.Component {
  state = {
    isMoodleFormOnFocus: false,
    isMoodleFormComplete: false,
    isTrelloFormComplete: false,
    isTrelloAuthSuccess: true,
    isMoodleAuthSuccess: true,
    form: {
      login: "",
      password: "",
    },
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    const [, field] = String(name).split("-");
    const copyState = Object.assign({}, this.state);
    copyState.form[field] = value;
    this.setState(copyState);
  };

  onInputFocus = ({ target }) => {
    const { name } = target;
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
    const copyState = Object.assign({}, this.state);
    fetch("http://localhost:3000/moodle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: this.state.form.login,
        password: this.state.form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          copyState.isMoodleFormComplete = true;
          this.setState(copyState);
          return;
        }
        copyState.isMoodleAuthSuccess = false;
        this.setState(copyState);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  authenticationFailure = () => {
    // Вывести текст об ошибке и написать повторите еще раз
    console.log("Fail");
  };

  authenticationSuccess = () => {
    const copyState = Object.assign({}, this.state);
    copyState.isTrelloFormComplete = true;
    copyState.isMoodleFormOnFocus = true;
    this.setState(copyState);
    const token = window.Trello.token();
    const key = window.Trello.key();
    fetch("http://localhost:3000/trello", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key, token }),
    })
      .then(console.log("Request handled"))
      .catch((err) => {
        console.log(err);
      });
  };

  onTrelloAuth = (e) => {
    e.preventDefault();
    window.Trello.authorize({
      type: "popup",
      name: "Moodle Trello Application",
      scope: {
        read: "true",
        write: "true",
      },
      expiration: "never",
      success: this.authenticationSuccess,
      error: this.authenticationFailure,
    });
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
          onAuthSuccess={this.state.isMoodleAuthSuccess}
        />
        <LoginContainer
          style="trello"
          isMoodleFormOnFocus={this.state.isMoodleFormOnFocus}
          isTrelloFormOnFocus={this.state.isTrelloFormOnFocus}
          isMoodleFormComplete={this.state.isMoodleFormComplete}
          isTrelloFormComplete={this.state.isTrelloFormComplete}
          onFormSubmit={this.onTrelloAuth}
          onAuthSuccess={this.state.isTrelloAuthSuccess}
        />
      </div>
    );
  }
}

export default App;
