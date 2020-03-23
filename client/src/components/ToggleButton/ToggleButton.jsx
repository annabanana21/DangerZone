import React from 'react';
import clip from '../../assets/Icons/clipboard-clip.png';
import './ToggleButton.scss';

function ToggleButton(props) {
    return (
        <div>
            <img src={clip} className='button__task' onClick={props.display} alt='Cartoon clipboard'/>
            <div className='button__alert getBig'>!</div>
        </div>
    )
}

export default ToggleButton;