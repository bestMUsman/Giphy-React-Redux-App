import React, { Component } from "react";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGiphy } from "./actions/giphyActions";

class App extends Component {
  changeUrlToUserInput = match => {
    window.history.pushState(
      null,
      null,
      `Search=${this.props.giphy.userInput}`
    );
  };

  fetch = match => {
    if (!this.props.giphy.comingFromInput && this.props.giphy.shouldFetch) {
      this.props.dispatch(fetchGiphy(match.params.id));
    }
  };

  shouldComponentUpdate(newProps, newState) {
    let oldData = this.props.giphy;
    let newData = newProps.giphy;
    if (
      oldData.userInput !== newData.userInput ||
      oldData.comingFromInput !== newData.comingFromInput ||
      oldData.shouldFetch !== newData.shouldFetch
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.props.giphy.comingFromInput) {
      this.changeUrlToUserInput();
      this.props.dispatch(fetchGiphy(this.props.giphy.userInput));
    }
    return (
      <div className="App">
        <Switch>
          <Route
            path="/Search=:id"
            render={({ match }) => {
              this.fetch(match);
              return <Main />;
            }}
          />
          <Route
            path="/"
            render={({ match }) => {
              if (this.props.giphy.userInput === null) {
                window.history.replaceState(null, null, "/");
              }
              return <Main />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(App);
