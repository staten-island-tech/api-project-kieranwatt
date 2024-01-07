import '../styles/style.css';
import { domselectors } from "./selectors";


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("poopyerror");
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

async function processRoutes(url) {
    try {
      
        const data = await fetchData(url);

        const uniquesbsroute1 = new Set();
       // const uniquesbsroute2 = new Set();
        //const test = new Set()
        data.forEach(entry => {
            uniquesbsroute1.add(entry.sbs_route1);
            uniquesbsroute1.add(entry.sbs_route2);

           // uniquesbsroute2.add(entry.sbs_route2);
        });
        console.log(uniquesbsroute1)
        //insert card code here
        const store = function(bladeebus) {
            domselectors.cards.insertAdjacentHTML("beforeend",
            ` <div class="card" id="allcards">
              <img src="m15sbs.jpg" alt="img" class="card-img">
              <h4 class="card-type">${bladeebus.sbs_route1}</h4>
              <h4 class="card-desc">${bladeebus.sbs_route2}</h5>
              </div>
              `)
        }; //for this code figure out how it pulls data from the code below
        uniquesbsroute1.forEach(value1 => {
            if(value1){
                console.log(value1);
                //insert data into card instead of logging data
            }
            
        }); 
    } catch (error) {
        console.error(error.message);
    }
}

const boros = ["MAN", "BK", "QNS", "SI", "BX"];
const laneTypes = ["Busway", "Single"];

boros.forEach(boro => {
    const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=${boro}`;
    processRoutes(url);
});

laneTypes.forEach(laneType => {
    const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?lane_type=${laneType}`;
    processRoutes(url);
});


 
    
// Idea of the project -allows you too filter by boro and lane type too see what sbs busses operate on it

//use buttons to make 1 card pop up showing the m15 image as the header and a list of sbs routes for that filter (ie. "Staten Island" would show "S 79" and "Busway" would show "M 14A, M 14D, etc")
//remove button too remove the card too allow you too use other filter buttons

//if there is time make website look much better