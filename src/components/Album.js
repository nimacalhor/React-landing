import React, { Component } from "react";

import PhotoCard from "./PhotoCard";

import axios from "axios";

class Album extends Component {
  constructor(props) {
    super(props);

    // STATE____________________________________
    this.state = {
      photos: [],
    };
  }

  // METHODS_____________________________________________________________________________________
  setPhotos = () => {
    this.setState(() => ({
      photos: this.data.slice(0, this.sliceNum),
    }));
    this.scrollToBottom();
  };

  scrollToBottom = () =>
    // this.state.btnsView.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, document.body.scrollHeight);

  addImgs = (step) => {
    this.sliceNum += step;
    this.setPhotos();
  };

  removeImgs = (step) => {
    this.sliceNum -= step;
    this.setPhotos();
  };

  loading = () => {
    if (this.loaded) {
      return (
        <div>
          <button
            onClick={() => this.addImgs(2)}
            className={"btn btn-outline-info m-4"}
          >
            click to add picture
          </button>
          <button
            onClick={() => this.removeImgs(2)}
            className={"btn btn-outline-danger m-4"}
          >
            click to remove picture
          </button>
        </div>
      );
    } else {
      return (
        <div className={"d-flex w-100 justify-content-center p-5"}>
          <div className={"spinner-border"} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  };

  // VARIABLE_____________________________________________________________________________________
  sliceNum = 7;

  data = [];

  loaded = false;

  // MOUNT________________________________________________________________________________________
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => response.json())
    //   .then((json) => (this.data = json))
    //   .then(() => this.setState({ photos: this.data.slice(0, 7) }));
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.data = response.data;
        this.loaded = true;
      })
      .then(() => {
        this.setPhotos();
      });
  }

  render() {
    const { photos } = this.state;

    return (
      <div ref={this.state.body}>
        <div className={`row justify-content-around`}>
          {photos.map((photo) => (
            <PhotoCard
              className={"col-3 m-3 mb-5 rounded-lg"}
              key={photo.id}
              title={photo.title}
              link={photo.thumbnailUrl}
              albumId={photo.albumId}
              id={photo.id}
            />
          ))}
        </div>

        {/* _____BUTTONS __________________________________________________________________*/}
        {this.loading()}
      </div>
    );
  }
}

export default Album;
