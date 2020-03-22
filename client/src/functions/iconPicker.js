import hurricane from '../assets/Icons/Cyclone.svg';
import earth from '../assets/Icons/Earthquake.svg';
import cold from '../assets/Icons/ColdWave.svg';
import astroid from '../assets/Icons/FallingAsteroid.svg';
import heat from '../assets/Icons/HeatWave.svg';
import rain from '../assets/Icons/Danger.svg';
import tornado from '../assets/Icons/Hurricane.svg';


const iconPicker = (weatherObj) => {
    console.log(weatherObj)
    if (weatherObj.wind.speed > 8) {
        return ['Tornado Warning', tornado, 'wind'];
    }
    else if (weatherObj.weather[0].id >=600 && weatherObj.weather[0].id < 623 || weatherObj.main.temp < 273.15) {
        return ['Deep Freeze', cold, 'freeze'];
    } 
    else {
        return ['Earthquake', earth, 'earth'];
    }
}

export default iconPicker;