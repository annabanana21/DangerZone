import earth from '../assets/Icons/Earthquake.svg';
import cold from '../assets/Icons/ColdWave.svg';
import tornado from '../assets/Icons/Hurricane.svg';


const iconPicker = (weatherObj) => {
    if (weatherObj.wind.speed > 8) {
        return ['TORNADO WARNING', tornado, 'wind', Math.round(weatherObj.main.temp - 273.15)];
    }
    else if ((weatherObj.weather[0].id >=600 && weatherObj.weather[0].id < 623) || weatherObj.main.temp < 273.15) {
        return ['DEEP FREEZE', cold, 'freeze', Math.round(weatherObj.main.temp - 273.15 - 40)];
    } 
    else {
        return ['EARTHQUAKE WARNING', earth, 'earth', Math.round(weatherObj.main.temp - 273.15)];
    }
}

export default iconPicker;