import React, { Component } from "react";
import { connect } from "react-redux";
import { updateMenu } from ".././actions/giphyActions";

class Results extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (
      this.props.giphy.fetched !== newProps.giphy.fetched ||
      this.props.giphy.giphy !== newProps.giphy.giphy
    ) {
      return true;
    } else {
      return false;
    }
  }

  saveList = url => {
    let savedItemsArr = JSON.parse(localStorage.getItem("savedItems")) || [];
    // debugger
    if (savedItemsArr.indexOf(url) === -1) {
      savedItemsArr.push(url);
      localStorage.setItem("savedItems", JSON.stringify(savedItemsArr));
      this.props.dispatch(updateMenu());
    }
  };

  renderList = () => {
    if (this.props.giphy.fetched !== false) {
      return this.props.giphy.giphy.map(e => {
        return (
          <li key={e.id} className="list" onClick={() =>this.saveList(e.images.original.webp)}>
            <img src={e.images.original.webp} alt="" />
            <div className="save-item">+</div>
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div className="results">
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(Results);
