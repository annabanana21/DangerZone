import React, {useState, useEffect} from 'react';
import Complete from '../components/Complete/Complete';
import Slide from '../components/Slide/Slide';

const SlideController = props => {


    let [stage, setStage] = useState('');
    let [finish, setFinish] = useState(false);

    useEffect(()=> {
        setFinish(false)
        setStage(props.story.tree.root);
    }, [props.story])

    useEffect(() => {

    }, [stage, finish])


    const nextSlide = (slide) => {

        if (slide.right || slide.left) {
            setStage(slide);
        } else {
            setStage(slide);
            setFinish(true);
        }
    }

    if (!finish) {
        return <Slide story={stage} nextHandler={nextSlide}/>
    } else {
        return <Complete lastStory={props.lastStory} health={props.health} story={stage} change={props.change} lose={props.lose} nextStory={props.nextStory}/>
    } 
}

export default SlideController;