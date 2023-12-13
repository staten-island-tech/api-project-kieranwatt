import '../styles/style.css';
const URL = "https://data.cityofnewyork.us/resource/ycrg-ses3.json"

async function getData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    const boro = data.filter(boro => boro.bor_ === "MAN");
    console.log(boro); 
    const bus = data.filter(bus => bus.sbs_route2 === "M14 D");
    console.log(bus);
    const lanebusway = data.filter(lane => lane.lane_type === "Busway");
    console.log(lanebusway);
    const lanesingle = data.filter(lane => lane.lane_type === "Single");
    console.log(lanesingle);
    const lanedual = data.filter(lane => lane.lane_type === "Dual");
    console.log(lanedual);
    };
getData(URL);
