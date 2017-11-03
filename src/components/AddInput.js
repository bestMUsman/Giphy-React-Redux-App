import React, { Component } from "react";

class AddInput extends Component {
  render() {
    return (
      <div className="add-input">
        <form onSubmit={e => this.props.handleForm(e)}>
          <div className="form-wrapper" name="checkListForm">
            <input type="text" id="thing" name="searchBox" required />
            <button className="button" id="addbttn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInput;
