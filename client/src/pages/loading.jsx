import React, {useState, useEffect} from 'react';
import './loading.scss';
import open from '../assets/open.png';

const Loading = (props) => {
    let [dialog, changeDialogue] = useState(false);
    let manual = false;
    let interval;

    const locationAllowed = () => {
        navigator.permissions && navigator.permissions.query({name: 'geolocation'})
        .then(function(PermissionStatus) {
            if (PermissionStatus.state === 'granted') {
                //If permission is allowed begin information request
                switchDialog(props.getLocation);
            } else if (PermissionStatus.state === 'denied') {
                //Do nothing
            }
            else  {
                // prompt - not yet grated or denied
                navigator.geolocation.getCurrentPosition(() => {}, () => {}, {});
            }
        })
    }


    useEffect(() =>{
        console.log(navigator.getLocation)
        interval = setInterval(()=> {
            locationAllowed()
        }, 1000)
    }, [])

    useEffect(() => {

    }, [dialog])

    const switchDialog = (func) => {
        clearInterval(interval)
        changeDialogue(false);
        setTimeout(()=> {
            func()
        }, 2000)
    }

        return (
            <div className='load'>
                    {
                        !dialog &&
                        <div className='load__wrap--alt'>
                        <div className='load__container'>
                        <h2 className='load__title'>LOADING</h2>
                        <div className='load__visual'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </div>
                        </div>
                    }
                    {
                        dialog && 
                        <div className='load__wrap'>
                        <div className='cover'>
                            <div className='load__screen'>
                                <img className="load__icon" src={open}/>
                                <h4>Permission Request</h4>
                                <p>In order to use the location based features you must allow location services.
                                Otherwise click below to continue without them.</p>
                                <div className='load__button' onClick={() => {
                                    manual = true;
                                    switchDialog(props.randomReset);
                                    }}>Continue Anyways</div>
                            </div>
                        </div>
                        </div>
                    }
            </div>
        )
}

export default Loading;