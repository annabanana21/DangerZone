import React from 'react';
import './display.scss';
import Slide from '../components/Slide/Slide';
import Complete from '../components/Complete/Complete';

class Display extends React.Component {

    state = {
        stage: '',
        finish: false
    }

    componentDidMount() {
        this.setState({
            stage: this.props.story.tree.root
        })
    }

    nextSlide(slide) {
        if (slide) {
            this.setState(
                {
                    stage: slide
                }
            )
        } else {
            this.setState(
                {
                    finish: true
                }
            )
        }
    }

    render() {
        if (!this.state.finish) {
            return (
                <Slide story={this.state.stage} nextHandler={(slide) => this.nextSlide(slide)}/>
            )
        } else {
            return <Complete change={this.props.change}/>
        }
    }
}

export default Display;