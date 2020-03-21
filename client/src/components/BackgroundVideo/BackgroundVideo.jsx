import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = (props) => {
    if (!props.story.background) {
        console.log('no back', props)
        return null
    } else if (props.story.background.includes('.jpg')) {
        return (
            <div className='video' style={{background: `url(${'http://localhost:8080/public/videos/'+props.story.background})`}}>
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