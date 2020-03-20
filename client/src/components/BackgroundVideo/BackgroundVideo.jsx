import React from 'react';
import tornado from '../../assets/videos/Tornado.mp4';
import './BackgroundVideo.scss';

const BackgroundVideo = (props) => {
    return (
        <div className='video'>
            {props.children}
            <div className='video__container'>
                <video autoPlay='autoplay' loop='loop' muted>
                    <source src={tornado} type='video/mp4'/>
                </video>
            </div>
        </div>
    )
}

export default BackgroundVideo;