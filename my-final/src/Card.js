import React, { Component } from "react";

export default class Card extends Component {
  state = {
    bookData: ""
  };
  oldvalue = "";
  picLink = "";
  componentDidMount = () => {};
  titleChange = () => {
    console.log("zzzzzzzzzzzzzzzzzzz");
    this.myApi = `https://www.googleapis.com/books/v1/volumes?q=${
      this.props.xx
    }`;
    fetch(this.myApi)
      .then(response => response.json())
      .then(data => {
        // this.setState({ bookData: data["items"] });
        // this.value = data["items"];
        this.picLink = data["items"][0].volumeInfo.imageLinks.thumbnail;
        console.log(this.picLink);
        this.setState({ bookData: data["items"] });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log("Oops!");
      });
  };

  render() {
    // console.log(this.myApi);
    if (this.oldvalue !== this.props.xx) {
      this.titleChange();
      this.oldvalue = this.props.xx;
    }
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={this.picLink} alt="Oops!" />
          <div className="card-body my-card">
            <h5 className="card-title">Title: {this.props.xx}</h5>
            <p className="card-text">
              sdfgsl;kdfjgsl;kdfjgslsldkjhflk skjdfhkgjhf
              sdklfhkldhflkjdfhglksjhdfghdtyertyetr
            </p>
            <a href="#/" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>
      </div>
    );
  }
}
