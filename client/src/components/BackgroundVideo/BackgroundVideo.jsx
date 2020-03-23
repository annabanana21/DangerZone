import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = (props) => {
    if (!props.story.background) {
        return null
    } else {
        return (
            <div style={{backgroundImage: `url(${'http://localhost:8080/public/videos/'+props.story.background})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='video'>
                {props.children}
            </div>
        )
    }
}

export default BackgroundVideo;