import React from 'react';
import './loading.scss';

class Loading extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.startGame()
        }, 4000)

    }

    render() {
        return (
            <div className='load'>
                <h2 className='load__title'>LOADING</h2>
            </div>
        )
    }
}

export default Loading;