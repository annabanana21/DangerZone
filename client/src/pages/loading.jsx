import React, { useState, useEffect } from 'react';
import './loading.scss';
import open from '../assets/open.png';

const Loading = (props) => {
    let [dialog, changeDialogue] = useState(false);
    let manual = false;

    const locationAllowed = () => {
        navigator.permissions &&
            navigator.permissions
                .query({ name: 'geolocation' })
                .then(function (PermissionStatus) {
                    if (PermissionStatus.state === 'granted') {
                        //If permission is allowed begin information request
                        console.log('secure location')
                        switchDialog(props.getLocation);
                        localStorage.setItem(
                            'isApproved',
                            JSON.stringify(true)
                        );
                    } else if (PermissionStatus.state === 'denied') {
                        //User must interact with pop-up option
                        console.log('denied!!')
                    } else {
                        // prompt - not yet grated or denied
                        navigator.geolocation.getCurrentPosition(
                            () => {},
                            () => {},
                            {}
                        );
                    }
                });
    };

    useEffect(() => {
        if (localStorage.getItem('isApproved')) {
            switchDialog(props.getLocation);
        } else {
            changeDialogue(true);
            const intervalId = setInterval(() => {
                locationAllowed();
            }, 1000)
            return () => {
                clearInterval(intervalId);
              };
        }
    }, []);

    useEffect(() => {}, [dialog]);

    const switchDialog = (func) => {
        changeDialogue(false);
        setTimeout(func, 2500);
    };

    return (
        <div className="load">
            {!dialog && (
                <div className="load__wrap--alt">
                    <div className="load__container">
                        <h2 className="load__title">LOADING</h2>
                        <div className="load__visual">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            )}
            {dialog && (
                <div className="load__wrap">
                    <div className="cover">
                        <div className="load__screen">
                            <img className="load__icon" src={open} />
                            <h4>Permission Request</h4>
                            <p>
                                In order to use the location based features you
                                must allow location services. Otherwise your survival scenario will be chosen at random.
                            </p>
                            <div
                                className="load__button"
                                onClick={() => {
                                    manual = true;
                                    switchDialog(props.randomReset);
                                }}
                            >
                                Continue Anyways
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Loading;
