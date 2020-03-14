import React from 'react';
import './News.scss';
import iconPicker from '../../functions/iconPicker';
import epidemic from '../../assets/Icons/Epidemic.svg';
import danger from '../../assets/Icons/Danger.svg';


class News extends React.Component {


    render() {
        
        if (!this.props.weather.weather) {
            return null;
        } else {
            let info = iconPicker(this.props.weather);
            return (
                <div className='news'>
                    <div className='news__box'>
                        <img src={info[1]} className='news__icon'/>
                        <div className='news__font'>
                            <h3 className='news__weather'>{info[0]}</h3>
                        </div>
                    </div>
                    <div className='news__wrap'>
                        <div className='news__box--small'>
                            <img src={epidemic} className='news__icon--small'/>
                        </div>
                        <div className='news__box--small'></div>
                    </div>
                    <div className='news__wrap'>
                        <div className='news__box--small'></div>
                        <div className='news__box--small'>
                            <img src={danger} className='news__icon--small'/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default News;