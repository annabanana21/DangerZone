import React from 'react';
import './News.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconPicker from '../../functions/iconPicker';

class News extends React.Component {

    render() {
        if (!this.props.weather.weather) {
            return null;
        } else {
            return (
                <div className='news'>
                    <div className='news__row'>
                        <div className='news__box'>{this.props.weather.weather[0].main}</div>
                        <FontAwesomeIcon icon={iconPicker(this.props.weather.weather[0].id)}/>
                    </div>
                </div>
            )
        }
    }
}

export default News;