import React, { Component } from "react";
import Header from "./Header";
import Results from "./Results";
import Menu from "./Menu";
import ZoomImage from "./ZoomImage";
import { connect } from "react-redux";
import { zoomImage } from ".././actions/giphyActions";

class Main extends Component {
  shouldComponentUpdate(newProps, newState) {
    return false;
  }

  checkTarget = e => {
    let zoomImageContainer = document.querySelector(".zoom-image-container");
    if (zoomImageContainer !== null) {
      let sidebar = document.querySelector(".sidebar");
      let target = e.target;
      if (
        zoomImageContainer !== target &&
        !zoomImageContainer.contains(target) &&
        !sidebar.contains(target) &&
        sidebar !== target
      ) {
        this.props.dispatch(zoomImage(null, false));
      }
    }
  };

  render() {
    return (
      <div id="outer-container" onClick={this.checkTarget}>
        <Menu />
        <ZoomImage />
        <main id="page-wrap">
          <Header />
          <Results />
        </main>
      </div>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(Main);
