import React, {useState, useEffect} from 'react';
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
const pingURL = process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:8080';

const GameController = props => {

    //Set up state hooks and setters
    let [isHome, setIsHome] = useState(false);
    let [isPlaying, setIsPlaying] = useState(false);
    let [load, isLoading] = useState(true);
    let [ended, didEnd] = useState(false);
    let [lastStory, isLast] = useState(false);
    let [story, setStory] = useState([]);
    let [storyLeft, setStoryLeft] = useState([]);
    let [userStats, updateUserStats] = useState({
        health: 100,
        lost: false
    });
    let [weather, setWeather] = useState([]);
    let [population, setPopulation] = useState(Math.floor(Math.random() * 2000000) + 250000);

    //Local constant variables
    const apiKey = '4774ad80334f760f9b45af484c39e9fe';
    const games = [['TORNADO WARNING', tornado, 'wind'], ['DEEP FREEZE', cold, 'freeze'], ['EARTHQUAKE WARNING', earth, 'earth']]

    const refresh = (keyWord) => {
        /*Determine whether the app manually starts based on user choice of storyline
        OR starts based on computer location (default process when app loads)*/ 
        console.log(keyWord)
        if (!keyWord) {
            getLocation();
        } else {
            manualSet(keyWord);
            getStoryLine(keyWord);
        }
        setIsHome(true);
        setIsPlaying(false)
        didEnd(false);
        isLast(false);
        updateUserStats({
            health: 100,
            lost: false
        })
    }

    const manualSet = (keyWord) => {
        /*Makes updates to weather when game is manually reset
            - Only relevant when deep freeze manipulates temperature */
        let details = games.find(game => game[2] === keyWord);
        let weatherNow = weather[3]
        if (weatherNow < -20 && details[0] !== 'DEEP FREEZE') {
            weatherNow = weatherNow + 40;
        } else if (weather > -40 && details[0] === 'DEEP FREEZE') {
            weatherNow = weatherNow - 40;
        }
        setWeather([...details, weatherNow])
    }

    const popSetter = (newPopulation) => {
        setPopulation(newPopulation)
    }


    const formatData = (arr) => {
        return arr.map(object => {
            let newTree = new BinarySearchTree()
            newTree.insertAll(object.scenario)
            return {
                intro: object.intro,
                title: object.title,
                background: object.background,
                audio: object.sound,
                category: object.category,
                tree: newTree
            }
        })
    }

    const getCoordinates = (position) => {
        /*Retrieves user's coordinates and makes a request to the weather api. 
        Based on weather output a story line is selected*/
        
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+apiKey).then(results => {
          setWeather(iconPicker(results.data))
          getStoryLine(weather[2])
        })
    }

    const getLocation = () => {
        //TODO: prompt user to allow location access 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates);
        }
    }

    const getStoryLine = (category) => {
        axios.get(pingURL+'/story/'+category).then(res => {
            let storyLine = formatData(res.data)
            setStoryLeft([...storyLine]);
            setStory(storyLine);
        })
    }

    useEffect = (() => {
        getLocation();
    }, [])

    useEffect( () => {
        console.log("Changes were made")
    }, [isHome, isPlaying, load, ended])

    const change = () => {
        setIsHome(!isHome);
        setIsPlaying(!isPlaying);
    }

    const lose = (healthLoss, home) => {

        let goHome = home;
        let newHealth = userStats.health - healthLoss
        let theyLost = false;
        let ended = false;
        let keepPlaying = !home;
        if (newHealth <= 0) {
            theyLost = true;
            newHealth = 0;
            ended = true;
            keepPlaying = false
            goHome = false
        }
        if (this.state.lastStory && newHealth > 0) {
            setIsHome(false)
            didEnd(true);
            setIsPlaying(false);
            updateUserStats({
                health: newHealth,
                lost: false
            })
        } else {
            let last = false;
            let newArr = storyLeft.slice(1);
            if (newArr[0] === story[story.length-1]) {
                lastStory = true
            }
            setIsHome(goHome);
            didEnd(ended);
            setStoryLeft(newArr);
            setIsPlaying(keepPlaying);
            isLast(last);
            updateUserStats({
                health: newHealth,
                lost: theyLost
            })
        }
    }

    const startGame = () => {
        isLoading(false);
        setIsHome(true);
    }

        if (isHome) {
            return (
                <Main popSetter={(x) => popSetter(x)} population={population} health={userStats} weather={weather} story={story} storyLeft={storyLeft} change={() => change()}/>
            )
        } else if (isPlaying) {
            return <Display lastStory={lastStory} health={userStats} story={storyLeft[0]} change={() => change()} lose={(i,x) => lose(i,x)} nextStory={() => nextStory()}/>;
        } else if (ended) {
            return <EndScreen weather={weather} stats={userStats} refresh={(x) => {refresh(x)}}/>
        }
        else {
            return <Loading startGame={() => startGame()}/>
        }
}

export default GameController;