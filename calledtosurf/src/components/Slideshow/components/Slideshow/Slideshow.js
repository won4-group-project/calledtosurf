
import React, { Component } from 'react';

class Slideshow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            SLIDES: props.slides,
            currentSlide: 0 
        };

        this.interval = null;

        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide() {
        let current = this.state.currentSlide;

        let next = ++current % this.state.SLIDES.length;
        this.setState({ currentSlide: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextSlide, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
   
        const slide = this.state.SLIDES[this.state.currentSlide];
        return (
            <div >
                {slide}
            </div>
        );
    }
}

export default Slideshow;