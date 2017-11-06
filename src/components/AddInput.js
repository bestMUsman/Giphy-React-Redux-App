import React, { Component } from "react";
import { connect } from "react-redux";

import {
  changeUserInput,
  changeShouldFetch,
  changeComingFromInput,
} from "../actions/giphyActions";

class AddInput extends Component {
  trimSpaces = value => {
    if (value.trim() === "") {
      return false;
    } else {
      value = value.trim();
      return true;
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!this.trimSpaces(e.target.searchBox.value)) return false;

    if (this.props.giphy.userInput !== e.target.searchBox.value) {
      this.props.dispatch(changeUserInput(e.target.searchBox.value));
      this.props.dispatch(changeShouldFetch(true));
      this.props.dispatch(changeComingFromInput(true));
    }
  };

  render() {
    return (
      <div className="add-input">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            id="thing"
            name="searchBox"
            required
            placeholder="Hi!"
          />
          <button className="bttn"></button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(AddInput);
