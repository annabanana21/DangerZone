import React from 'react';
import Main from '../pages/main';
import axios from 'axios';
import Display from '../pages/display';
import BinarySearchTree from '../functions/binary';
import iconPicker from '../functions/iconPicker';

class GameController extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHome: true,
            isPlaying: false,
            story: [],
            storyLeft: [],
            userStats: {
                health: 100,
                lost: false
            },
            weather: []
        }
        this.apiKey = '4774ad80334f760f9b45af484c39e9fe';
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getLocation = this.getLocation.bind(this);
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

    getCoordinates(position) {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+this.apiKey).then(results => {
          this.setState({
              weather: iconPicker(results.data)
          })
          this.getStoryLine()
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        }
    }

    getStoryLine() {
        axios.get('http://localhost:8080/story/'+this.state.weather[2]).then(res => {
            let storyLine = this.formatData(res.data)
            this.setState({
                story: storyLine,
                storyLeft: [... storyLine]
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

    lose(healthLoss) {
        console.log('I go here');
        if (this.state.userStats.health - healthLoss <= 0) {
            this.setState({
                userStats: {
                    health: this.state.userStats.health - healthLoss,
                    lost: true
                }
            })
        } else {
            console.log(this.state.storyLeft)
            let newArr = this.state.storyLeft.slice(1);
            console.log(newArr)
            this.setState({
                isHome: true,
                storyLeft: newArr,
                isPlaying: false
            })
        }
    }

    render() {
        console.log('play', this.state.isPlaying, 'home', this.state.isHome);
        if (this.state.isHome) {
            return (
                <Main health={this.state.userStats} weather={this.state.weather} story={this.state.story} storyLeft={this.state.storyLeft} change={() => this.change()}/>
            )
        } else if (this.state.isPlaying) {
            return <Display story={this.state.storyLeft[0]} change={() => this.change()} lose={(i) => this.lose(i)} nextStory={() => this.nextStory()}/>;
        }
    }
}

export default GameController;