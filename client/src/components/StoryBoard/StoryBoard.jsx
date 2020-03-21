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
        console.log(this.props.story)
        const amount = this.props.story.length - this.props.storyLeft.length;
        let display = [];
        this.props.story.forEach((story, index) => {
            if (index === amount) {
                display.push(<h3 className='story__stage' onClick={this.props.change}>{story.title}</h3>)
            } else if (index > amount) {
                display.push(<h3 className='story__stage--blur'>{story.title}</h3>)
            } else {
                display.push(<h3 className='story__stage--cross'>{story.title}</h3>)
            }
        })
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