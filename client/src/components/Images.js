import React, { Component } from "react";
import Axios from "axios";
import InifiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount = () => {
    const { count, start } = this.state;
    Axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({ images: res.data })
    );
  };

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    Axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({ images: this.state.images.concat(res.data) })
    );
  };

  render() {
    return (
      <div className="images">
        <InifiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </InifiniteScroll>
      </div>
    );
  }
}

export default Images;
