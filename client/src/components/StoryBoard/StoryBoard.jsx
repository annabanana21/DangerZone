import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './StoryBoard.scss';
import clip from '../../assets/Icons/clipboard.png';


export default class StoryBoard extends React.Component {

    state ={
        displayBoard: false
    }

    toggle() {
        this.setState({
            displayBoard: !this.state.displayBoard
        })
    }

    stopPropagation(event) {
        event.stopPropagation();
    }


    render() {
        return (
            <div>
                {
                    this.state.displayBoard &&
                    <div className='story' onClick={() => this.toggle()}>
                        <img src={clip} className='story__board' onClick={this.stopPropagation}/>
                    </div>
                }
                { !this.state.displayBoard &&
                <ToggleButton display={() => this.toggle()}/>}
            </div>
        )
    }
}