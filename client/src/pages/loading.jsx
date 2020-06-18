import React, {useState, useEffect} from 'react';
import './loading.scss';
import open from '../assets/open.png';

const Loading = (props) => {
    let [dialog, changeDialogue] = useState(true);
    let interval;

    useEffect(() =>{
        // if (navigator.geolocation) {
        //     switchDialog(props.getLocation)
        // }
        // interval = setInterval(()=> {
        //     if (navigator.geolocation) {
        //         switchDialog(props.getLocation)
        //     }
        // }, 1000)

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {

    }, [dialog])

    const switchDialog = (func) => {
        changeDialogue(false);
        let cover = document.querySelector('.cover');
        cover.classList.remove("cover")
        setTimeout(()=> {
            func()
        }, 3000)
    }

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
                                <div className='load__button' onClick={() => switchDialog(props.getLocation)}>Use Location</div>
                                <div className='load__button' onClick={() => switchDialog(props.randomReset)}>Continue Anyways</div>
                            </div>
                    }
                </div>
            </div>
            </div>
        )
}

export default Loading;