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
            userStats: [],
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
                category: object.category,
                tree: newTree
            }
        })
    }

    getCoordinates(position) {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log(lat, long);
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
                storyLeft: storyLine
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

    render() {
        console.log(this.state.story)
        if (this.state.isHome) {
            return (
                <Main weather={this.state.weather} story={this.state.story} storyLeft={this.state.storyLeft} change={() => this.change()}/>
            )
        } else if (this.state.isPlaying) {
            return <Display story={this.state.storyLeft[0]} change={() => this.change()}/>;
        }
    }
}

export default GameController;