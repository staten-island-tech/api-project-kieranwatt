import '../styles/style.css';
// import { domselectors } from "./selectors";
const URL = "https://data.cityofnewyork.us/resource/ycrg-ses3.json"

async function getData(URL){
    try {
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data);   
        document.getElementById("api-response").textContent = data.content;
    } catch (error) {
        console.log(error);
    }
    
}
getData(URL);

// Idea of the project -allows you too filter by boro and lane type too see what sbs busses operate on it