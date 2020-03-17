import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './StoryBoard.scss';
import clip from '../../assets/Icons/clipboard-clip.png';


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

    displayList() {
        const amount = this.props.story.length - this.props.storyLeft.length;
        let display = [];
        for (let i=0; i<=amount; i++) {
            display.push(<h3 className='story__stage' onClick={this.props.change}>{this.props.story[i]}</h3>)
        }
        for (let i=amount+1; i < this.props.story.length; i++) {
            display.push(<h3 className='story__stage--blur'>{this.props.story[i]}</h3>)
        }
        return display;
    }


    render() {
        return (
            <div>
                {
                    this.state.displayBoard &&
                    <div className='story' onClick={() => this.toggle()}>
                    <div className='story__wrap'>
                        <img src={clip} className='story__board' onClick={this.stopPropagation}/>
                        <div className='story__write'>
                            <h3 className='story__title'>CHECKLIST</h3>
                            {this.displayList()}
                        </div>
                    </div>
                    </div>
                }
                { !this.state.displayBoard &&
                <ToggleButton display={() => this.toggle()}/>}
            </div>
        )
    }
}