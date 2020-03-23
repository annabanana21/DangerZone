import React from 'react';
import './Intro.scss';

const Intro = (props) => {

    return (
        <div className='intro'>
            <h2 className='intro__story'>{props.intro}</h2>
            {
                props.showButton && <h3 className='intro__button fade-in' onClick={props.startStory}>NEXT</h3>
            }
        </div>
    )
}

export default Intro;