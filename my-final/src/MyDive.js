import React, { Component } from "react";
import Card from "./Card";
import SelectCurrency from "./SelectCurrency";

export default class MyDive extends Component {
  state = {
    datax: [],
    loading: true,
    info: []
  };

  componentDidMount = () => {
    // fetch()
    //   // "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=033X8KBM2MWLUQ34"
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ datax: data["Realtime Currency Exchange Rate"] });
    //     this.setState({ info: data });
    //     console.log(data["Realtime Currency Exchange Rate"]);
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //     console.log("Oops!");
    //   });
  };

  render() {
    return (
      <div>
        <SelectCurrency />

        <Card />
      </div>
    );
  }
}
