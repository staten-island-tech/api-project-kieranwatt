import '../styles/style.css';
// import { domselectors } from "./selectors";


const boro = "MAN";

const manurl = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=${boro}`;

fetch(manurl)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("poopyerror");
        }
    })
    .then(data => {
        console.log("yipeee");
        const uniquesbsroute1 = new Set();
        const uniquesbsroute2 = new Set();

        data.forEach(entry => {
            uniquesbsroute1.add(entry.sbs_route1);
            uniquesbsroute2.add(entry.sbs_route2);
        });

        uniquesbsroute1.forEach(value1 => {
            console.log(value1);
        });
        uniquesbsroute2.forEach(value2 => {
            console.log(value2);
        });
    })
    .catch(error => {
        console.error(error.message);
    });

// Idea of the project -allows you too filter by boro and lane type too see what sbs busses operate on it

//use buttons to make 1 card pop up showing the m15 image as the header and a list of sbs routes for that filter (ie. "Staten Island" would show "S 79" and "Busway" would show "M 14A, M 14D, etc")
//remove button too remove the card too allow you too use other filter buttons

//if there is time make website look much better