import React from 'react';
import Main from '../pages/main';
import axios from 'axios';
import Display from '../pages/display';
import BinarySearchTree from '../functions/binary';

class GameController extends React.Component {

    state = {
        isHome: true,
        isPlaying: false,
        story: [],
        storyLeft: [],
        userStats: []
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

    componentDidMount() {
        axios.get('http://localhost:8080/story/heat').then(res => {
            let storyLine = this.formatData(res.data)
            this.setState({
                story: storyLine,
                storyLeft: storyLine
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
        console.log(this.state.story)
        if (this.state.isHome) {
            return (
                <Main story={this.state.story} storyLeft={this.state.storyLeft} change={() => this.change()}/>
            )
        } else if (this.state.isPlaying) {
            return <Display story={this.state.storyLeft[0]} change={() => this.change()}/>;
        }
    }
}

export default GameController;