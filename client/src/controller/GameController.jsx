import React from 'react';
import Main from '../pages/main';
import axios from 'axios';

class GameController extends React.Component {

    state = {
        isHome: true,
        isPlaying: false,
        story: [],
        storyLeft: [],
        userStats: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/story/snow').then(res => {
            this.setState({
                story: res.data,
                storyLeft: res.data
            })
        })
    }

    change() {
        this.setState({
            isHome: !this.state.isHome,
            isPlaying: !this.state.isPlaying
        })
    }

    render() {

        if (this.state.isHome) {
            return (
                <Main story={this.state.story} storyLeft={this.state.storyLeft} change={() => this.change()}/>
            )
        } else if (this.state.isPlaying) {
            return null;
        }
    }
}

export default GameController;