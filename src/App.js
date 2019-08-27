import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './App.css';
import './Carousel.css';


class App extends Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 }
  }

  stagePadding = {
    paddingLeft: 30,
    paddingRight: 30,
  }

  render() {
    return (
      <div className="app" id="app">
        <h1 className="h1">React Alice Carousel</h1>
        <AliceCarousel
          duration={600}
          showSlideInfo={false}
          mouseDragEnabled={true}
          onSlideChanged={console.log('Hello')}
          startIndex={0}
          infinite={false}
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        >
          <div className="item"><img src="/biology-doctor-health-4154.jpg" alt="Science" height="100%" width="100%"/></div>
          <div className="item"><img src="/commerce-connection-data-132700.jpg" alt="Engineering" height="100%" width="100%"/></div>
          <div className="item"><img src="/artificial-intelligence-code-codes-34676.jpg" alt="IT" height="100%" width="100%"/></div>
          <div className="item"><h1>4</h1></div>
          <div className="item"><h1>5</h1></div>
        </AliceCarousel>
      </div>
    )
  }
}

export default App;
