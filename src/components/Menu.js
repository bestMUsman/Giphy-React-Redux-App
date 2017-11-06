import React, { Component } from "react";
import { connect } from "react-redux";
import { zoomImage } from ".././actions/giphyActions";
import zoomBttnImg from ".././images/zoomBttnImg.png";
import delBttnImg from ".././images/delBttnImg.png";
import { scaleRotate as Menu } from "react-burger-menu";

class BurgerMenu extends Component {
  shouldComponentUpdate(newProps, newState) {
    return this.props.giphy.updateMenu !== newProps.giphy.updateMenu;
  }

  deleteItem = url => {
    let savedItemsArr = JSON.parse(localStorage.getItem("savedItems"));
    savedItemsArr.splice(savedItemsArr.indexOf(url), 1);
    localStorage.setItem("savedItems", JSON.stringify(savedItemsArr));
    this.forceUpdate();
  };

  openItem = url => {
    this.props.dispatch(zoomImage(url, true));
  };

  renderList = () => {
    let savedItemsArr = JSON.parse(localStorage.getItem("savedItems"));
    if (savedItemsArr !== null) {
      return savedItemsArr.map((url, i) => {
        return (
          <li key={i}>
            <img src={url} alt="" />
            <div className="options">
              <img
                onClick={e => this.openItem(url)}
                className="open-img-bttn"
                src={zoomBttnImg}
                alt="Zoom Button"
              />
              <img
                onClick={e => this.deleteItem(url)}
                className="delete-img-bttn"
                src={delBttnImg}
                alt="Delete Button"
              />
            </div>
          </li>
        );
      });
    }
  };

  render() {
    return (
      <Menu
        className="sidebar"
        width={"15%"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <ul>{this.renderList()}</ul>
      </Menu>
    );
  }
}

function mapStateToProps({ giphy }) {
  return { giphy };
}

export default connect(mapStateToProps)(BurgerMenu);
