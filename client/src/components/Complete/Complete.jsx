import React from 'react';
import './Complete.scss';

const Complete = (props) => {

    return (
        <div className='complete'>
            <div className='complete__wrap'>
                <div className='complete__button' onClick={props.change}>Home</div>
                <div className='complete__button'>Next</div>
            </div>
        </div>
    )
}

export default Complete;