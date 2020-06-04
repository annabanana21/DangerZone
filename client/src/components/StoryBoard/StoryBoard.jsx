import React, {useState, useEffect} from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './StoryBoard.scss';
import clip from '../../assets/Icons/clipboard-clip.png';
import check from '../../assets/Icons/checkmark.png';
import uuid from 'uuid-random';


const StoryBoard = props => {

    let [displayBoard, toggle] = useState(false)

    const show = () => {
        toggle(!displayBoard)
    }

    useEffect(() => {
        console.log("toggled")
    }, [displayBoard]);

    const stopPropagation = event => {
        //Clipboard won't close when pressed
        event.stopPropagation();
    }

    const displayList = () => {
        const {story, storyLeft, change} = props;
        let display = [];
        story.forEach((slide, index) => {
            if (index === storyLeft) {
                display.push(<div className='story__row' key={uuid()}><div className='story__check'></div><h3 className='story__stage--current' onClick={() => change("playing")}>{slide.title}</h3></div>)
            } else if (index > storyLeft) {
                display.push(<div className='story__row' key={uuid()}><div className='story__check'></div><h3 className='story__stage--blur'>{slide.title}</h3></div>)
            } else {
                display.push(<div className='story__row' key={uuid()}><div className='story__check'><img src={check} className='story__mark' alt='Green check mark'/></div><h3 className='story__stage'>{story.title}</h3></div>)
            }
        })
        return display;
    }


        return (
            <div>
                {
                    displayBoard &&
                    <div className='story' onClick={show}>
                    <div className='story__wrap' onClick={stopPropagation}>
                        <img src={clip} className='story__board' alt='Cartoon clipboard'/>
                        <div className='story__write'>
                            <h3 className='story__title'>CHECKLIST</h3>
                            {displayList()}
                        </div>
                    </div>
                    </div>
                }
                { !displayBoard &&
                <ToggleButton display={show}/>}
            </div>
        )
}

export default StoryBoard;