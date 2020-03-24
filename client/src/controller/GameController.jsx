import React from 'react';
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

class GameController extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHome: false,
            isPlaying: false,
            load: true,
            ended: false,
            lastStory: false,
            story: [],
            storyLeft: [],
            userStats: {
                health: 100,
                lost: false
            },
            weather: [],
            population: Math.floor(Math.random() * 2000000) + 250000
        }
        this.apiKey = '4774ad80334f760f9b45af484c39e9fe';
        this.games = [['TORNADO WARNING', tornado, 'wind'], ['DEEP FREEZE', cold, 'freeze'], ['EARTHQUAKE WARNING', earth, 'earth']]
    }

    refresh(keyWord) {
        console.log(keyWord)
        if (!keyWord) {
            this.getLocation();
        } else {
            this.manualSet(keyWord);
            this.getStoryLine(keyWord);
        }
        this.setState({
            isHome: true,
            isPlaying: false,
            ended: false,
            lastStory: false,
            userStats: {
                health: 100,
                lost: false
            }
        })
    }

    manualSet = (keyWord) => {
        let details = this.games.find(game => game[2] === keyWord);
        let weather = this.state.weather[3]
        if (weather < -20 && details[0] !== 'DEEP FREEZE') {
            weather = weather + 40;
        } else if (weather > -40 && details[0] === 'DEEP FREEZE') {
            weather = weather-40;
        }
        this.setState({
            weather: [...details, weather]
        })
    }

    popSetter(newPopulation) {
        this.setState(
            {
                population: newPopulation
            }
        )
    }


    formatData(arr) {
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

    getCoordinates = (position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+this.apiKey).then(results => {
          this.setState({
              weather: iconPicker(results.data)
          })
          this.getStoryLine(this.state.weather[2])
        })
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        }
    }

    getStoryLine(category) {
        axios.get(pingURL+'/story/'+category).then(res => {
            let storyLine = this.formatData(res.data)
            this.setState({
                story: storyLine,
                storyLeft: [...storyLine]
            })
        })
    }

    componentDidMount() {
        this.getLocation();
    }

    change() {
        this.setState({
            isHome: !this.state.isHome,
            isPlaying: !this.state.isPlaying
        })
    }

    lose(healthLoss, home) {

        let goHome = home;
        let newHealth = this.state.userStats.health - healthLoss
        let theyLost = false;
        let ended = false;
        let isPlaying = !home;
        if (newHealth <= 0) {
            theyLost = true;
            newHealth = 0;
            ended = true;
            isPlaying = false
            goHome = false
        }
        if (this.state.lastStory && newHealth > 0) {
            this.setState({
                isHome: false,
                ended: true,
                isPlaying: false,
                userStats: {
                    health: newHealth,
                    lost: false
                }
            })
        } else {
           let lastStory = false;
            let newArr = this.state.storyLeft.slice(1);
            if (newArr[0] === this.state.story[this.state.story.length-1]) {
                lastStory = true
            }
            this.setState({
                isHome: goHome,
                ended: ended,
                storyLeft: newArr,
                isPlaying: isPlaying,
                lastStory,
                userStats: {
                    health: newHealth,
                    lost: theyLost
                }
            }) 
        }
    }

    startGame() {
        this.setState({
            load: false,
            isHome: true
        })
    }

    render() {
        if (this.state.isHome) {
            return (
                <Main popSetter={(x) => this.popSetter(x)} population={this.state.population} health={this.state.userStats} weather={this.state.weather} story={this.state.story} storyLeft={this.state.storyLeft} change={() => this.change()}/>
            )
        } else if (this.state.isPlaying) {
            return <Display lastStory={this.state.lastStory} health={this.state.userStats} story={this.state.storyLeft[0]} change={() => this.change()} lose={(i,x) => this.lose(i,x)} nextStory={() => this.nextStory()}/>;
        } else if (this.state.ended) {
            return <EndScreen weather={this.state.weather} stats={this.state.userStats} refresh={(x) => {this.refresh(x)}}/>
        }
        else {
            return <Loading startGame={() => this.startGame()}/>
        }
    }
}

export default GameController;