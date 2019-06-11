import React, { Component } from "react";
// import Card from "./Card";
import BookSearch from "./BookSearch";
// import SelectCurrency from "./SelectCurrency";

export default class MyDive extends Component {
  state = {
    datax: [],
    loading: true,
    info: []
  };

  render() {
    return (
      <div className="conainer">
        <BookSearch />
      </div>
    );
  }
}
