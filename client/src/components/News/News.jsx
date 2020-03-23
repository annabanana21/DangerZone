import React from 'react';
import './News.scss';
import skull from '../../assets/Icons/Danger.svg';


class News extends React.Component {

    state = {
        population: this.props.population,
        interval: ''
    }

    componentDidMount() {
        //Increases the death count every 3 seconds
        this.setState({
            population: this.props.population,
            interval: setInterval(() => {
                this.setState({
                    population: this.state.population + 1
                })
            }, 3000)
        })
    }

    componentWillUnmount() {
        //Clears the death counter and passes back new value to game controller
        clearInterval(this.state.interval)
        this.props.popSetter(this.state.population)
    }

    numberWithCommas(x) {
        //Converts a number to a string with commas in the appropriate place
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        if (!this.props.weather.length > 0) {
            return null;
        } else {
            return (
                <div className='news'>
                    <div className='news__box'>
                        <img src={this.props.weather[1]} className='news__icon' alt='Weather warning icon'/>
                        <div className='news__font'>
                            <h3 className='news__weather flash'>{this.props.weather[0]}</h3>
                        </div>
                    </div>
                    <div className='news__wrap'>
                        <div className='news__box--small'>
                            <img src={skull} className='news__icon--small' alt='Skull and crossbones icon'/>
                            <h4 className='news__num'>{this.numberWithCommas(this.state.population)}</h4>
                        </div>
                        <div className='news__box--small'>
                            <h4 className='news__temp'>{this.props.weather[3]}°C</h4>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default News;