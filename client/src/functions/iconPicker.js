import earth from '../assets/Icons/Earthquake.svg';
import cold from '../assets/Icons/ColdWave.svg';
import tornado from '../assets/Icons/Hurricane.svg';

const iconPicker = (weatherObj) => {
    /**Recieves weather results from OpenWeatherMap external API.
     * Results are required to be the metric celsius
     * **/

    if (weatherObj.wind.speed > 8) {
        //High winds returns the tornado storyline
        return [
            'TORNADO WARNING',
            tornado,
            'wind',
            Math.round(weatherObj.main.temp),
        ];
    } else if (
        //The API's group 600 ID includes snowy/whiteout conditions
        (weatherObj.weather[0].id >= 600 && weatherObj.weather[0].id < 623) ||
        weatherObj.main.temp < 0
    ) {
        return [
            'DEEP FREEZE',
            cold,
            'freeze',
            Math.round(weatherObj.main.temp - 40),
        ];
    } else {
        return [
            'EARTHQUAKE WARNING',
            earth,
            'earth',
            Math.round(weatherObj.main.temp + 25),
        ];
    }
};

export default iconPicker;
