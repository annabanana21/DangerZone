import React from 'react';
import './Complete.scss';

class Complete extends React.Component {

    render() {
        let word = '';
        if (this.props.story.loss === 0) {
            word = 'SUCCESS';
        } else {
            word = `-${this.props.story.loss*100}%`;
        }
        return (
            <div className='complete'>
                <div className='complete__prompt'>{this.props.story.story}</div>
                <h4>{word}</h4>
                <div className='complete__wrap'>
                    <div className='complete__button' onClick={this.props.lose}>Home</div>
                    <div className='complete__button'>Next</div>
                </div>
            </div>
        )
    }
}

export default Complete;