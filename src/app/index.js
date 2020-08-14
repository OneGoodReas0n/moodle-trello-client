import React from "react";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import routes from "~r/";

class App extends React.Component {
  render() {
    const routeElements = routes.map((el) => {
      return (
        <Route
          key={el.url}
          path={el.url}
          exact={el.exact}
          component={el.component}
        />
      );
    });
    return (
      <div className="">
        <Switch>{routeElements}</Switch>
      </div>
    );
  }
}

export default App;
