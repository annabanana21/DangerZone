import React from 'react';
import './EndScreen.scss';
import lose from '../../assets/lose.png';
import win from '../../assets/win.png';

const EndScreen = (props) => {
    return (
        <div className='end'>
            {
                props.lost && <img src={lose} className='end__image'/>
            }
            {
                !props.lost && <img src={win} className='end__image' />
            }
        </div>
    )

}

export default EndScreen;