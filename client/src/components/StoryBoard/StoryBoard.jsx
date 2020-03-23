import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './StoryBoard.scss';
import clip from '../../assets/Icons/clipboard-clip.png';
import check from '../../assets/Icons/checkmark.png';
import uuid from 'uuid-random';


export default class StoryBoard extends React.Component {

    state ={
        displayBoard: false
    }

    toggle = () => {
        this.setState({
            displayBoard: !this.state.displayBoard
        })
    }

    stopPropagation = event => {
        //Clipboard won't close when pressed
        event.stopPropagation();
    }

    displayList() {
        const amount = this.props.story.length - this.props.storyLeft.length;
        let display = [];
        this.props.story.forEach((story, index) => {
            if (index === amount) {
                display.push(<div className='story__row' key={uuid()}><div className='story__check'></div><h3 className='story__stage--current' onClick={this.props.change}>{story.title}</h3></div>)
            } else if (index > amount) {
                display.push(<div className='story__row' key={uuid()}><div className='story__check'></div><h3 className='story__stage--blur'>{story.title}</h3></div>)
            } else {
                display.push(<div className='story__row' key={uuid()}><div className='story__check'><img src={check} className='story__mark' alt='Green check mark'/></div><h3 className='story__stage'>{story.title}</h3></div>)
            }
        })
        return display;
    }


    render() {
        return (
            <div>
                {
                    this.state.displayBoard &&
                    <div className='story' onClick={this.toggle}>
                    <div className='story__wrap' onClick={this.stopPropagation}>
                        <img src={clip} className='story__board' alt='Cartoon clipboard'/>
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