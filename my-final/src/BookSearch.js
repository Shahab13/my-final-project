import React, { Component } from "react";
import Card from "./Card";

export default class BookSearch extends Component {
  value = "";
  myApi = "xxx";
  searchedTitle = "";
  state = {
    myForm: "",
    datax: ""
  };

  formPreventDefault = e => {
    //alert(this.myApi);
    if (this.value === "") {
      alert("You should type a title!");
    } else {
      this.setState({ datax: this.value });
      this.searchedTitle = this.value;
      console.log(this.searchedTitle);
      e.preventDefault();
    }
  };

  handleChangeFrom = event => {
    this.setState({ myForm: event.target.value });
    this.value = event.target.value;
  };

  render() {
    return (
      <div className="container">
        <br />

        <div className="container">
          <form
            onSubmit={this.formPreventDefault}
            onChange={this.handleChangeFrom}
          >
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type a book title"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                &nbsp;
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <Card xx={this.searchedTitle} />
      </div>
    );
  }
}
