import React from 'react';
import './EndScreen.scss';
import lose from '../../assets/lose.png';
import win from '../../assets/win.png';

class EndScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            health: 0,
            interval: ''
        }
    }

    componentDidMount() {
        if (!this.props.stats.lost) {
            this.state.interval = setInterval(() => {
                this.setState({
                    health: this.state.health + 1
                })
            }, 20)
        }
    }

    componentDidUpdate() {
        if (this.props.stats.health === this.state.health) {
            clearInterval(this.state.interval)
        }
    }

    render() {
        return (
            <div className='end'>
                {
                    this.props.stats.lost && (
                        <>
                            <img src={lose} className='end__image'/>
                            <h2 className='end__title'>YOU LOSE</h2>
                        </>
                        )
                }
                {
                    !this.props.stats.lost && (
                        <>
                        <img src={win} className='end__image' />
                        <h2 className='end__title'>YOU WIN</h2>
                        <h3 className='end__percent'>{this.state.health}% HEALTH REMAINING</h3>
                        </>
                        )
                }
                <div className='end__button' onClick={this.props.refresh}>PLAY AGAIN</div>
            </div>
        )
    }
}

export default EndScreen;