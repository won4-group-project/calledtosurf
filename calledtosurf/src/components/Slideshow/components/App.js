import React, {Component} from 'react';

import DressOne from  './DressCampaign/DressOne/DressOne';
import DressTwo from './DressCampaign/DressTwo/DressTwo';
import DressThree from  './DressCampaign/DressThree/DressThree';
// import SlideFour from  './Slides/SlideFour/SlideFour';
// import SlideFive from  './Slides/SlideFive/SlideFive';
// import SlideSix from  './Slides/SlideSix/SlideSix';

import './App.css';
import Slideshow from './Slideshow/Slideshow';

class App extends Component {
  constructor(){
    super();
    this.state = {
      GroupA: [<DressOne />, <DressTwo />, <DressThree />],
      // GroupB: [<SlideFour />, <SlideFive />, <SlideSix />]
    }
  }
  render(){
  return (
    <div className="App">
      <Slideshow 
        slides={this.state.GroupA}
      />
    </div>
  );
}
}

export default App;
