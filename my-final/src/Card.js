import React, { Component } from "react";

export default class Card extends Component {
  state = {
    bookData: []
  };
  oldvalue = "";
  picLink = "";
  myData = [];
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
        // this.picLink = data["items"][0].volumeInfo.imageLinks.thumbnail;
        //console.log(this.picLink);
        this.setState({ bookData: data.items });
        this.myData = data.items;
        console.log(this.state.bookData);
        //console.log(this.myData);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log("Oops!");
      });
  };

  render() {
    let temp = this.state.bookData.map((x, i) => {
      return (
        // <ol key={i}>{i}</ol>
        <div className="container" key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={x.volumeInfo.imageLinks.thumbnail}
              alt="Oops!"
            />
            <div className="card-body my-card">
              <h5 className="card-title">Title: {x.volumeInfo.title}</h5>
              <p className="card-text">{x.volumeInfo.description}</p>
              <a href="#/" className="btn btn-primary">
                More info
              </a>
            </div>
          </div>
        </div>
      );
    });
    //console.log(this.myData);

    if (this.props.xx !== "") {
      if (this.oldvalue !== this.props.xx) {
        this.titleChange();
        this.oldvalue = this.props.xx;
      }
      console.log(this.myData);
      return <div>{temp}</div>;
    } else {
      return <div className="container">Search somthing!</div>;
    }
  }
}
