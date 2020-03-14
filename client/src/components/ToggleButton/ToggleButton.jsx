import React from 'react';
import clip from '../../assets/Icons/clipboard.png';
import './ToggleButton.scss';

function ToggleButton(props) {
    return (
        <div>
            <img src={clip} className='button__task' onClick={props.display}/>
            <div className='button__alert'>!</div>
        </div>
    )
}

export default ToggleButton;