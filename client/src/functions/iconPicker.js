import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';


const iconPicker = (weatherObj) => {
    if (weatherObj.weather[0].id < 300) {
        return ['Hurricane'];
    }
    else if (weatherObj.wind.speed > 8) {
        return ['Tornado'];
    }
    else if (weatherObj.weather[0].id < 322) {
        return ['Acid Rain'];
    }
    else if (weatherObj.weather[0].id > 800) {
        return ['Meteor Showers'];
    }
    else if (weatherObj.weather[0].id >=600 && weatherObj.weather[0].id < 623) {
        return ['Deep Freeze'];
    } 
    else if (weatherObj.main.temp > 281) {
        return ['Heat Wave'];
    } else {
        return ['Flu Season'];
    }
}

export default iconPicker;