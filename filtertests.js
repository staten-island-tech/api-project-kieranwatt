import '../styles/style.css';
const URL = "https://data.cityofnewyork.us/resource/ycrg-ses3.json"

async function getData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    //search bar 
    const boro = data.filter(boro => boro.bor_ === "MAN");
    console.log(boro); 
    //make search bar
    const bus = data.filter(bus => bus.sbs_route2 === "M14 D");
    console.log(bus);
    const centerlanebus = data.filter(bus => bus.sbs_route1 === "BX6");
    console.log(centerlanebus);
    //make the next buttons
    const lanebusway = data.filter(lane => lane.lane_type === "Busway");
    console.log(lanebusway);
    const lanesingle = data.filter(lane => lane.lane_type === "Single");
    console.log(lanesingle);
    const lanedual = data.filter(lane => lane.lane_type === "Dual");
    console.log(lanedual);
    //make red lane a button
    const color = data.filter(color=> color.prim_color === "Red");
    console.log(color);
    };
getData(URL);




