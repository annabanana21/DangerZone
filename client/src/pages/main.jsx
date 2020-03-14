import React from 'react';
import Slide from '../components/Slide/Slide';
import axios from 'axios';
import './main.scss';
import News from '../components/News/News';
import StoryBoard from '../components/StoryBoard/StoryBoard';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stage: {},
            weather: {}
        }
        this.apiKey = '4774ad80334f760f9b45af484c39e9fe';
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount() {
        this.getLocation();
        axios.get('http://localhost:8080/scenarios').then(data => {
            console.log(data.data)
            this.setState(
                {
                    stage: data.data.root
                }
            )
        })
    }


    getCoordinates(position) {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log(lat, long);
        axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+this.apiKey).then(results => {
            console.log(results.data);
          this.setState({
              weather: results.data
          }) 
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        }
    }

    

    nextSlide(slide) {
        this.setState(
            {
                stage: slide
            }
        )
    }

    render() {
        return (
            <main className='page'>
                <News weather={this.state.weather}/>
                {/*<Slide story={this.state.stage} nextHandler={this.nextSlide.bind(this)}/>*/}
                <StoryBoard />
            </main>
        )
    }
}

export default Main;