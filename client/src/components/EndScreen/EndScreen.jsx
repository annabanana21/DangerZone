import React from 'react';
import './EndScreen.scss';
import lose from '../../assets/lose.png';
import win from '../../assets/win.png';
import earthquake from '../../assets/Icons/Earthquake.svg';
import freeze from '../../assets/Icons/ColdWave.svg';
import tornado from '../../assets/Icons/Hurricane.svg';

class EndScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            health: 0,
            interval: ''
        }
        this.games = [{type: ['earth', earthquake]}, {type: ['freeze', freeze]}, {type: ['wind', tornado]}]
    }

    componentDidMount() {
        //If the user hasn't lost start counter to show user's end of game health
        if (!this.props.stats.lost) {
            this.setState({
                interval: setInterval(() => {
                    this.setState({
                        health: this.state.health + 1
                    })
                }, 20)
            })
        }
    }

    componentDidUpdate() {
        //Clear the health interval when the user's total health is displayed
        if (this.props.stats.health === this.state.health) {
            clearInterval(this.state.interval)
        }
    }

    showGames = () => {
        let display = [];
        let newList = this.games.filter(obj => obj.type[0] !== this.props.weather[2])
        newList.forEach(game => {
            display.push(<img src={game.type[1]} className='end__icon' onClick={() => this.props.refresh(game.type[0])}/>)
        })
        return display;
    }

    render() {
        return (
            <div className='end'>
                {
                    this.props.stats.lost && (
                        <>
                            <img src={lose} className='end__image' alt='Skull with missing front teeth'/>
                            <h2 className='end__title'>YOU LOSE</h2>
                        </>
                        )
                }
                {
                    !this.props.stats.lost && (
                        <>
                        <div className='end__icon-box'>
                        <h3 className='end__small'>TRY THE OTHER GAMES!</h3>
                        {
                            this.showGames()
                        }
                        </div>
                        <img src={win} className='end__image' alt='Skull with old school pilot hat on'/>
                        <h2 className='end__title'>YOU WIN</h2>
                        <h3 className='end__percent'>{this.state.health}% HEALTH REMAINING</h3>
                        </>
                        )
                }
                <div className='end__button' onClick={() => this.props.refresh(null)}>PLAY AGAIN</div>
            </div>
        )
    }
}

export default EndScreen;