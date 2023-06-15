import React, { useState, useEffect } from 'react';
import Main from '../pages/main';
import axios from 'axios';
import Display from '../pages/display';
import BinarySearchTree from '../functions/binary';
import iconPicker from '../functions/iconPicker';
import Loading from '../pages/loading';
import EndScreen from '../components/EndScreen/EndScreen';
import earth from '../assets/Icons/Earthquake.svg';
import cold from '../assets/Icons/ColdWave.svg';
import tornado from '../assets/Icons/Hurricane.svg';

const pingURL = process.env.REACT_APP_BACKEND;

const GameController = (props) => {
    //TODO: Refine tracker to use strings to indicate where user is
    // Combine story with story left or use number variable
    let [tracker, changeTrack] = useState('load');
    let [lastStory, isLast] = useState(false);
    let [story, setStory] = useState([]);
    let [storyLeft, setStoryLeft] = useState(0);
    let [userStats, updateUserStats] = useState({
        health: 100,
        lost: false,
    });
    let [weather, setWeather] = useState([]);
    let [population, setPopulation] = useState(
        Math.floor(Math.random() * 2000000) + 250000
    );

    //Local constant variables
    const apiKey = process.env.REACT_APP_API_KEY;
    const games = [
        ['TORNADO WARNING', tornado, 'wind'],
        ['DEEP FREEZE', cold, 'freeze'],
        ['EARTHQUAKE WARNING', earth, 'earth'],
    ];

    const refresh = (keyWord) => {
        /*Determine whether the app manually starts based on user choice of storyline
        OR starts based on computer location (default process when app loads)*/
        if (!keyWord) {
            getLocation();
        } else {
            manualSet(keyWord);
            getStoryLine(keyWord);
        }
        changeTrack('home');
        isLast(false);
        updateUserStats({
            health: 100,
            lost: false,
        });
    };

    const randomReset = () => {
        const rand = Math.floor(Math.random() * games.length);
        const keyword = games[rand][2];
        let temp;
        switch (keyword) {
            case 'wind':
                temp = 15;
                break;
            case 'freeze':
                temp = -60;
                break;
            default:
                temp = 20;
        }

        setWeather([...games[rand], temp]);
        getStoryLine(keyword);
        isLast(false);

        changeTrack('home');
        updateUserStats({
            health: 100,
            lost: false,
        });
    };

    const manualSet = (keyWord) => {
        /*Makes updates to weather when game is manually reset
            - Only relevant when deep freeze manipulates temperature */
        let details = games.find((game) => game[2] === keyWord);
        let weatherNow = weather[3];
        if (weatherNow < -20 && details[0] !== 'DEEP FREEZE') {
            weatherNow = weatherNow + 40;
        } else if (weather > -40 && details[0] === 'DEEP FREEZE') {
            weatherNow = weatherNow - 40;
        }
        setWeather([...details, weatherNow]);
    };

    const popSetter = (newPopulation) => {
        setPopulation(newPopulation);
    };

    const formatData = (arr) => {
        return arr.map((object) => {
            let newTree = new BinarySearchTree();
            newTree.insertAll(object.scenario);
            return {
                intro: object.intro,
                title: object.title,
                background: object.background,
                audio: object.sound,
                category: object.category,
                tree: newTree,
            };
        });
    };

    const getCoordinates = (position) => {
        /*Retrieves user's coordinates and makes a request to the weather api. 
        Based on weather output a story line is selected*/

        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log(long + ' ' + lat);
        axios
            .get(
                'https://api.openweathermap.org/data/2.5/weather?lat=' +
                    lat +
                    '&lon=' +
                    long +
                    '&appid=' +
                    apiKey +
                    '&units=metric'
            )
            .then((results) => {
                console.log(results);
                const info = iconPicker(results.data);
                setWeather(info);
                getStoryLine(info[2]);
            })
            .catch((err) => {
                //In case api key is unavailable
                console.log(err);
                const info = ['EARTHQUAKE WARNING', earth, 'earth', 20];
                setWeather(info);
                getStoryLine(info[2]);
            });
    };

    const getLocation = () => {
        //TODO: prompt user to allow location access
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates);
        }
    };

    const getStoryLine = (category) => {
        axios.get(pingURL + '/story/' + category).then((res) => {
            let storyLine = formatData(res.data);
            setStoryLeft(0);
            setStory(storyLine);

            changeTrack('home');
        });
    };

    useEffect(() => {
        // Triggers re-render of screen every time tracker value is reset.
        console.log(tracker);
    }, [tracker, storyLeft]);

    const change = (trackName) => {
        // Basic change track function
        changeTrack(trackName);
    };

    const lose = (healthLoss, lostTheGame, trackName) => {
        let newHealth = userStats.health - healthLoss;

        if (lostTheGame) {
            //Checks if the player lost the game
            updateUserStats({
                health: 0,
                lost: true,
            });
            changeTrack('end');
        } else if (lastStory && newHealth > 0) {
            updateUserStats({
                health: newHealth,
                lost: false,
            });
            changeTrack('end');
        } else {
            let left = storyLeft + 1;
            setStoryLeft(left);
            if (left === story.length - 1) {
                isLast(true);
            }
            updateUserStats({
                health: newHealth,
                lost: false,
            });
            if (trackName) {
                change(trackName);
            }
        }
    };

    const nextStory = () => {
        setStoryLeft(storyLeft + 1);
    };

    //Depending on tracker state the game controller renders a screen
    switch (tracker) {
        case 'home':
            return (
                <Main
                    popSetter={(x) => popSetter(x)}
                    population={population}
                    health={userStats}
                    weather={weather}
                    story={story}
                    storyLeft={storyLeft}
                    change={change}
                />
            );
            break;
        case 'playing':
            return (
                <Display
                    lastStory={lastStory}
                    health={userStats}
                    story={story[storyLeft]}
                    change={change}
                    lose={lose}
                    nextStory={nextStory}
                />
            );
            break;
        case 'end':
            return (
                <EndScreen
                    weather={weather}
                    stats={userStats}
                    refresh={(x) => {
                        refresh(x);
                    }}
                />
            );
            break;
        default:
            // Loading screen is default
            return (
                <Loading getLocation={getLocation} randomReset={randomReset} />
            );
    }
};

export default GameController;
