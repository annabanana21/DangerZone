import React from 'react';
import './main.scss';
import News from '../components/News/News';
import StoryBoard from '../components/StoryBoard/StoryBoard';
import Health from '../components/Health/Health';

class Main extends React.Component {

    render() {
        return (
            <main className='page'>
                <News popSetter={this.props.popSetter} weather={this.props.weather} population={this.props.population}/>
                <StoryBoard story={this.props.story} storyLeft={this.props.storyLeft} change={this.props.change}/>
                <div className='page__health'><Health health={this.props.health.health}/></div>
            </main>
        )
    }
}

export default Main;