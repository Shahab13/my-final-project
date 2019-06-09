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
    //console.log("zzzzzzzzzzzzzzzzzzz");
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
        // console.log(this.state.bookData);
        //console.log(this.myData);
      })
      .catch(error => {
        this.setState({ error: true });
        //console.log("Oops!");
      });
  };

  stringCheck = str => {
    // console.log(str);
    if (typeof str !== "undefined") {
      return str.substring(0, 80);
    } else {
      return "No description";
    }
  };

  render() {
    let temp = this.state.bookData.map((x, i) => {
      return (
        <div className="container" key={i}>
          <div className="card my-card" style={{ width: "15rem" }}>
            <img
              className="card-img-top my-image"
              src={x.volumeInfo.imageLinks.thumbnail}
              alt="Oops!"
            />
            <div className="card-body my-card">
              <h5 className="card-title">Title: {x.volumeInfo.title}</h5>
              <p className="card-text">
                {this.stringCheck(x.volumeInfo.description)}...
              </p>
              <p>
                <b>Number of Pages:</b> {x.volumeInfo.pageCount}
              </p>
              <a href={x.volumeInfo.infoLink} className="btn btn-primary">
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
      return (
        <div className="my-div container-fluid card-columns ">{temp}</div>

        // <div className="row container">
        //   <div className="col-sm-4">{temp}</div>
        //   {/* <div class="col-sm-6">Card 2</div> */}
        // </div>
      );
    } else {
      return <div className="container">Search somthing!</div>;
    }
  }
}
