import React from 'react';
import './loading.scss';

class Loading extends React.Component {

    render() {
        return (
            <div className='load'>
                <div className='load__container'>
                    <h2 className='load__title'>LOADING</h2>
                    <div className='load__visual'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;