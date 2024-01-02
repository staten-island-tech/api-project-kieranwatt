import '../styles/style.css';
import { domselectors } from './selectors';
// import { domselectors } from "./selectors";
const URL = "https://data.cityofnewyork.us/resource/ycrg-ses3.json"
const BKURL = "https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=BK"

async function getData(URL){
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);   
        // document.getElementById("api-response").textContent = data.content;
    } catch (error) {
        console.log(error);
    }
}
getData(URL);

domselectors.brooklyn.addEventListener

// Idea of the project -allows you too filter by boro and lane type too see what sbs busses operate on it

//use buttons to make 1 card pop up showing the m15 image as the header and a list of sbs routes for that filter (ie. "Staten Island" would show "S 79" and "Busway" would show "M 14A, M 14D, etc")
//remove button too remove the card too allow you too use other filter buttons

//if there is time make website look much better