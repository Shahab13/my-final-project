import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        {/* <button class
        Name="btn btn-primary buttonStyle">Read more</button> */}
        <div className="card ">
          <img className="card-img-top" src="./Koala.jpg" alt="Oops!" />
          <div className="card-body my-card">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              b
            </p>
            <a href="#/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
