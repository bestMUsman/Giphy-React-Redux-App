import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: this.props.apiData,
    };
    this.renderList = this.renderList.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.apiData);
  }

  renderList() {
    if (this.props.apiData) {
      return this.props.apiData.map(e => {
        <li key={e.id}>
          <img src={e.embed_url} alt="" />
        </li>;
      });
    }
  }

  render() {
    return (
      <div className="results">
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default Results;
