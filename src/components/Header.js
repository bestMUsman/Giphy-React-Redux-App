import React, { Component } from "react";
import AddInput from "./AddInput";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className={!this.props.giphy.fetched ? "header" : "new-header"}>
        <h1 className="h1">Giphy React App</h1>
        <AddInput />
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(Header);
