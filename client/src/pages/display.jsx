import React from 'react';
import './display.scss';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import SlideController from '../controller/SlideController';
import Intro from '../components/Intro/Intro';

class Display extends React.Component {

    state={
        intro: true,
        showButton: false
    }

    componentDidMount() {
        this.audio = new Audio('http://localhost:8080/public/audio/'+this.props.story.audio);
        this.audio.load();
        this.audio.loop = true;
        this.playAudio();

        setTimeout(() => {
            this.setState({
                showButton: true
            })
        }, 6000)
    }

    componentWillUnmount() {
        this.audio.pause();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.story !== this.props.story) {
            this.audio.pause();
            this.audio = new Audio('http://localhost:8080/public/audio/'+this.props.story.audio);
            this.audio.load();
            this.audio.loop = true;
            this.playAudio();

            this.setState({
                intro: true,
                showButton: false
            })

            setTimeout(() => {
                this.setState({
                    showButton: true
                })
            }, 4000)
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

    startStory() {
        this.setState({
            intro: false
        })
    }

    render() {
        if (this.state.intro) {
            return <Intro showButton={this.state.showButton} intro={this.props.story.intro} startStory={() => this.startStory()}/>
        } else {
            return <BackgroundVideo story={this.props.story}><SlideController lastStory={this.props.lastStory} health={this.props.health} lose={this.props.lose} story={this.props.story} change={this.props.change} nextStory={this.props.nextStory}/></BackgroundVideo>  
        }
    }
}

export default Display;