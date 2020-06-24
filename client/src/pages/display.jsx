import React, {useState, useEffect} from 'react';
import './display.scss';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import SlideController from '../controller/SlideController';
import Intro from '../components/Intro/Intro';

const Display = props => {

    let [intro, setIntro] = useState(true);
    let [showButton, setShowButton] = useState(false);
    let audio = false;

    const pingURL = process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:8080';

    useEffect(() => {
        setIntro(true)
        setShowButton(false)
        if (audio) {
            audio.pause()
        }
        audio = new Audio(pingURL+props.story.audio);
        audio.load();
        audio.loop = true;
        playAudio();
        setTimeout(() => {
            setShowButton(true);
        }, 4000)

        return () => {
            audio.pause();
            audio = null;
        }
    }, [props.story]);

    useEffect(()=> {

    }, [intro, showButton])


    const playAudio = () => {
        const audioPromise = audio.play()
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

    const startStory = () => {
        setIntro(false)
    }

    if (intro) {
        return <Intro showButton={showButton} intro={props.story.intro} startStory={startStory}/>
    } else {
        return <BackgroundVideo story={props.story}><SlideController lastStory={props.lastStory} health={props.health} lose={props.lose} story={props.story} change={props.change} nextStory={props.nextStory}/></BackgroundVideo>  
    }
}

export default Display;