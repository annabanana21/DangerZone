import React from 'react';
import Slide from '../components/Slide/Slide';
import axios from 'axios';
import './main.scss';
import News from '../components/News/News';
import StoryBoard from '../components/StoryBoard/StoryBoard';
import Health from '../components/Health/Health';

class Main extends React.Component {

    render() {
        return (
            <main className='page'>
                <News weather={this.props.weather}/>
                <StoryBoard story={this.props.story} storyLeft={this.props.storyLeft} change={this.props.change}/>
                <Health health={100}/>
            </main>
        )
    }
}

export default Main;