import React from 'react';
import './display.scss';
import Slide from '../components/Slide/Slide';
import Complete from '../components/Complete/Complete';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import SlideController from '../controller/SlideController';

class Display extends React.Component {

    componentDidMount() {
        this.audio = new Audio('http://localhost:8080/public/audio/'+this.props.story.audio);
        this.audio.load();
        this.audio.loop = true;
        this.playAudio();
    }

    componentWillUnmount() {
        this.audio.pause();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.story !== this.props.story) {
            console.log('here');
            this.audio.pause();
            this.audio = new Audio('http://localhost:8080/public/audio/'+this.props.story.audio);
            this.audio.load();
            this.audio.loop = true;
            this.playAudio();
        }
    }

    playAudio() {
        const audioPromise = this.audio.play()
        if (audioPromise !== undefined) {
          audioPromise
            .then(_ => {
              // autoplay started
            })
            .catch(err => {
              // catch dom exception
              console.info(err)
            })
        }
    }

    render() {
        console.log('I re-mount')
        return (
            <div>
                <BackgroundVideo story={this.props.story}><SlideController lose={this.props.lose} story={this.props.story} change={this.props.change} nextStory={this.props.nextStory}/></BackgroundVideo>
            </div>
        )
    }
}

export default Display;