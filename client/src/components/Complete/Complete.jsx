import React, {useState, useEffect, useRef} from 'react';
import './Complete.scss';
import Health from '../Health/Health';

const Complete = props => {

    let [completed, setComplete] = useState(false);
    let [died, setDeathStatus] = useState(false);
    let [health, setHealth] = useState(props.health.health);

    const timerToClearSomewhere = useRef(false)
    function callback() {
        setHealth(health--);
    }

    useEffect(() => {

        timerToClearSomewhere.current = setInterval(callback, 20)


        //If health dips below 0 hide home and next button and prepare for losing screen
        if (props.health.health - props.story.loss*100 <= 0) {
            setDeathStatus(true);
            setTimeout(() => {
                props.lose(props.story.loss*100, true);
            }, 6000)
        //User encounters the last scenario in the story prepare for winning screen
        } else if (props.lastStory) {
            setComplete(true);
            setTimeout(() => {
                props.lose(props.story.loss*100, false);
            }, 6000)
        }

        return () => {
            clearInterval(timerToClearSomewhere.current);
        }
    }, [])

    useEffect(() => {
        //Stop showing health decrease when the health meter has shown the complete percent lost
        if (timerToClearSomewhere && (health === props.health.health - props.story.loss*100 || health === 0)) {
            clearInterval(timerToClearSomewhere.current)
        }
    }, [health])


    return (
        <div className='complete'>
            {!died ? <h3 className='complete__status--success'>SCENARIO COMPLETE</h3> : <h3 className='complete__status--fail'>SCENARIO FAILED</h3>}
            <div className='complete__prompt'>{props.story.story}</div>
            <Health health={health}/>
            {!died && !completed && <div className='complete__wrap'>
                <div className='complete__button' onClick={() => {
                    props.lose(props.story.loss*100, false, "home")}}>Home</div>
                <div className='complete__button' onClick={() => props.lose(props.story.loss*100, false, false)}>Next</div>
            </div>}
        </div>
    )
}

export default Complete;