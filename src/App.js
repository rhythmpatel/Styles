import Theme from "./resources/theme";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import {ThemeProvider} from "theming";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
        <ThemeProvider theme={Theme}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
    );
  }
}
