import React from 'react';
import './Complete.scss';
import Health from '../Health/Health';

class Complete extends React.Component {

    state = {
        completed: false,
        died: false,
        health: this.props.health.health,
        interval: ''
    }

    componentDidMount() {
        this.state.interval = setInterval(() => {
            this.setState({
                health: this.state.health - 1
            })
        }, 20)
        if (this.props.health.health - this.props.story.loss*100 <= 0) {
            this.setState({
                died: true
            })
            setTimeout(() => {
                this.props.lose(this.props.story.loss*100, true);
            }, 6000)
        } else if (this.props.lastStory) {
            this.setState({
                completed: true
            })
            setTimeout(() => {
                this.props.lose(this.props.story.loss*100, true);
            }, 6000)
        }
    }

    componentDidUpdate() {
        if (this.state.health === this.props.health.health - this.props.story.loss*100 || this.state.health === 0) {
            clearInterval(this.state.interval)
        }
    }

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
                <Health health={this.state.health}/>
                {!this.state.died && !this.state.completed && <div className='complete__wrap'>
                    <div className='complete__button' onClick={() => this.props.lose(this.props.story.loss*100, true)}>Home</div>
                    <div className='complete__button' onClick={() => this.props.lose(this.props.story.loss*100, false)}>Next</div>
                </div>}
            </div>
        )
    }
}

export default Complete;