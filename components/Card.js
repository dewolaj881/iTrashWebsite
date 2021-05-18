import React, { Component } from "react";

class Card extends Component {
  render() {
    let src = `${this.props.src}`;
    let alt = `${this.props.alt}`;
    let heading = `${this.props.heading}`;
    return (
      <div class="flex-col justify-center text-center p-6 w-40 bg-gray-200">
        <img class=" justify-center" src={src} alt={alt} />
        <h1 class="text-xl my-4 font-semibold">{heading}</h1>
      </div>
    )
  }
}

export default Card