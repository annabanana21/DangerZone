import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = (props) => {
    //const pingURL = process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:8080';
    const pingURL = process.env.REACT_APP_BACKEND;
    if (!props.story.background) {
        return null;
    } else {
        return (
            <div
                style={{
                    backgroundImage: `url(${pingURL + props.story.background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="video"
            >
                {props.children}
            </div>
        );
    }
};

export default BackgroundVideo;
