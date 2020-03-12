import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';


const iconPicker = (weatherId) => {
    if (weatherId < 300) {
        return faSun;
    }
    else if (weatherId < 500) {
        return faUmbrella;
    }
    else if (weatherId < 600) {
        return faCloudShowersHeavy;
        
    }
    else if (weatherId > 800) {
        return faCloud;
    }
}

export default iconPicker;