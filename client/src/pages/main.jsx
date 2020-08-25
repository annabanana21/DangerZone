import React from 'react';
import './main.scss';
import News from '../components/News/News';
import StoryBoard from '../components/StoryBoard/StoryBoard';
import Health from '../components/Health/Health';

function Main(props) {

    const {popSetter, weather, population, story, storyLeft, change, health} = props;

    return (
        <main className='page'>
            <News popSetter={popSetter} weather={weather} population={population}/>
            <StoryBoard story={story} storyLeft={storyLeft} change={change}/>
            <div className='page__health'><Health health={health.health}/></div>
        </main>
    )
}

export default Main;