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
                    <div className='news__box'>{iconPicker(this.props.weather)[0]}</div>
                </div>
            )
        }
    }
}

export default News;