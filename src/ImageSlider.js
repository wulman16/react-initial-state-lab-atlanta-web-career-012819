import React from 'react';

class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

export default ImageSlider
