import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = (props) => {
    if (!props.story.background) {
        console.log('no back', props)
        return null
    } else if (props.story.background.includes('.jpg') || props.story.background.includes('.gif')) {
        return (
            <div style={{background: `url(${'http://localhost:8080/public/videos/'+props.story.background})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='video'>
                {props.children}
            </div>
        )
    }
    else {
        return (
            <div className='video'>
                {props.children}
                <div className='video__container'>
                    <video autoPlay='autoplay' loop='loop' muted>
                        <source src={'http://localhost:8080/public/videos/'+props.story.background} type='video/mp4'/>
                    </video>
                    
                </div>
            </div>
        )
    }
}

export default BackgroundVideo;