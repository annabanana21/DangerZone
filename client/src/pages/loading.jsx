import React, {useState, useEffect} from 'react';
import './loading.scss';
import open from '../assets/open.png';

const Loading = (props) => {
    let [dialog, changeDialogue] = useState(true);
    let interval;

    useEffect(() =>{
        setTimeout(() => {
            // interval = setInterval(()=> {
            //     if (navigator.geolocation) {
            //         props.getLocation();
            //     } else {
            //         changeDialogue(false)
            //     }
            // }, 3000)
        }, 3000);

        return () => clearInterval(interval);
    }, [])

        return (
            <div className='load'>
            <div className='cover'>
                <div className='load__container'>
                    {
                        !dialog &&
                        <div>
                        <h2 className='load__title'>LOADING</h2>
                        <div className='load__visual'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </div>
                    }
                    {
                        dialog && 
                            <div className='load__screen'>
                                <img className="load__icon" src={open}/>
                                <h4>Permission Request</h4>
                                <p>In order to use the location based features you must allow location services.
                                Otherwise click below to continue without them.</p>
                                <div className='load__button'>Continue Anyways</div>
                            </div>
                    }
                </div>
            </div>
            </div>
        )
}

export default Loading;