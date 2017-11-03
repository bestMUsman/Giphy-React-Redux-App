import React, { Component } from "react";
// import logo from "./logo.svwg";
import AddInput from "./components/AddInput";
import Results from "./components/Results";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
    };
    this.handleForm = this.handleForm.bind(this);
    this.trimSpaces = this.trimSpaces.bind(this);
  }

  trimSpaces(value) {
    if (value.trim() === "") {
      return false;
    } else {
      value = value.trim();
      return true;
    }
  }

  handleForm(e) {
    e.preventDefault();
    let userInput = e.target.searchBox.value;
    if (!this.trimSpaces(userInput)) return false;
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=zFRBGyY2Tigp2Es8DUs6oDKHssUtl5iI&q=${e}&limit=6&rating=PG&lang=en`
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          apiData: responseJson.data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <AddInput handleForm={this.handleForm} />
        <Results apiData={this.state.apiData} />
      </div>
    );
  }
}

export default App;
