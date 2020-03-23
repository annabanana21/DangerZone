import React from 'react';
import './News.scss';
import iconPicker from '../../functions/iconPicker';
import skull from '../../assets/Icons/Danger.svg';


class News extends React.Component {


    render() {
        
        if (!this.props.weather.length > 0) {
            return null;
        } else {
            return (
                <div className='news'>
                    <div className='news__box'>
                        <img src={this.props.weather[1]} className='news__icon'/>
                        <div className='news__font'>
                            <h3 className='news__weather flash'>{this.props.weather[0]}</h3>
                        </div>
                    </div>
                    <div className='news__wrap'>
                        <div className='news__box--small'>
                            <img src={skull} className='news__icon--small'/>
                            <h4 className='news__num'>{this.props.population[1]}</h4>
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