import React from 'react';
import Slide from '../components/Slide/Slide';
import axios from 'axios';

class Main extends React.Component {

    state = {
        stage: {}
    }

    componentDidMount() {
        axios.get('http://localhost:8080/scenarios').then(data => {
            console.log(data.data.root)
            this.setState(
                {
                    stage: data.data.root
                }
            )
        })
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
            <main>
                <Slide story={this.state.stage} nextHandler={this.nextSlide.bind(this)}/>
            </main>
        )
    }
}

export default Main;