import React from 'react';
import './Slide.scss';

const Slide = (props) => {
    if (props.story) {
        const {story, leftOption, rightOption, left, right} = props.story;
    
        return (
            <div className='slide'>
                <div className='slide__q'>
                    {story}
                </div>
                <div className='slide__wrap'>
                    <div className='slide__box' onClick={() => props.nextHandler(left)}>{leftOption}</div>
                    <div className='slide__box' onClick={() => props.nextHandler(right)}>{rightOption}</div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Slide;