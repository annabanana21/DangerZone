import React from 'react';
import './Health.scss';

function Health(props) {
    return (
        <div className='health__box'>
            <h4 className='health__title'>HEALTH</h4>
            <div className='health'>
                <div className='health__bar' style={{width: `${props.health}%`}}></div>
            </div>
        </div>
    )
}

export default Health;