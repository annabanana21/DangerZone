import hurricane from '../assets/Icons/Cyclone.svg';
import earth from '../assets/Icons/Earthquake.svg';
import cold from '../assets/Icons/ColdWave.svg';
import astroid from '../assets/Icons/FallingAsteroid.svg';
import heat from '../assets/Icons/HeatWave.svg';
import rain from '../assets/Icons/Danger.svg';
import tornado from '../assets/Icons/Hurricane.svg';


const iconPicker = (weatherObj) => {
    if (weatherObj.weather[0].id < 300) {
        return ['Hurricane', hurricane];
    }
    else if (weatherObj.wind.speed > 8) {
        return ['Tornado Warning', tornado];
    }
    else if (weatherObj.weather[0].id < 322) {
        return ['Acid Rain', rain];
    }
    else if (weatherObj.weather[0].id > 800) {
        return ['Meteor Showers', astroid];
    }
    else if (weatherObj.weather[0].id >=600 && weatherObj.weather[0].id < 623) {
        return ['Deep Freeze', cold];
    } 
    else if (weatherObj.main.temp > 281) {
        return ['Heat Wave', heat];
    } else {
        return ['Earthquake', earth];
    }
}

export default iconPicker;