import React, { Component } from "react";
import { connect } from "react-redux";
import { zoomImage } from ".././actions/giphyActions";
import closeBttnImg from ".././images/closeBttnImg.png";


class ZoomImage extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (
      this.props.giphy.zoomImageUrl !== newProps.giphy.zoomImageUrl ||
      this.props.giphy.showZoomImage !== newProps.giphy.showZoomImage
    ) {
      return true;
    } else {
      return false;
    }
  }

  closeImage = () => {
    this.props.dispatch(zoomImage(null, false));
  };

  render() {
    if (this.props.giphy.showZoomImage) {
      return (
        <div className="zoom-image-container">
          <img
            className="close-bttn-img"
            src={closeBttnImg}
            alt="Close Button"
            onClick={this.closeImage}
          />
          <img
            className="zoom-image"
            src={this.props.giphy.zoomImageUrl}
            alt="Item"
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(ZoomImage);
