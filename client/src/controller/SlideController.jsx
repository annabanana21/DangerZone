import React from 'react';
import Complete from '../components/Complete/Complete';
import Slide from '../components/Slide/Slide';

class SlideController extends React.Component {

    state = {
        stage: '',
        finish: false
    }

    componentDidMount() {
        this.setState({
            stage: this.props.story.tree.root
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.story !== this.props.story) {
            this.setState({
                stage: this.props.story.tree.root,
                finish: false
            })
        }
    }

    nextSlide(slide) {
        if (slide.right && slide.left) {
            this.setState(
                {
                    stage: slide
                }
            )
        } else {
            this.setState(
                {
                    finish: true,
                    stage: slide
                }
            )
        }
    }

    render() {
        if (!this.state.finish) {
            return <Slide story={this.state.stage} nextHandler={(slide) => this.nextSlide(slide)}/>
        } else {
            return <Complete story={this.state.stage} change={this.props.change} lose={this.props.lose} nextStory={this.props.nextStory}/>
        }
    }
}

export default SlideController;