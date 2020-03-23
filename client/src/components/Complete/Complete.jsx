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
        //If user loses any health at all start interval to show health going down
        if (this.props.story.loss > 0) {
            this.setState({
                interval: setInterval(() => {
                    this.setState({
                        health: this.state.health - 1
                    })
                }, 20)
            })
        }

        //If health dips below 0 hide home and next button and prepare for losing screen
        if (this.props.health.health - this.props.story.loss*100 <= 0) {
            this.setState({
                died: true
            })
            setTimeout(() => {
                this.props.lose(this.props.story.loss*100, true);
            }, 6000)
        //User encounters the last scenario in the story prepare for winning screen
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
        //Stop showing health decrease when the health meter has shown the complete percent lost
        if (this.state.interval !== '' && (this.state.health === this.props.health.health - this.props.story.loss*100 || this.state.health === 0)) {
            clearInterval(this.state.interval)
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
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