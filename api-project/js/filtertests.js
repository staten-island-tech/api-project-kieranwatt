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

//some notes

// async function getData(URL){
//     try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         console.log(data);   
//         // document.getElementById("api-response").textContent = data.content;
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData(URL);


// fetch("https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=MAN")
// .then(res => {
//     if (res.ok) {
//         console.log("yipeee")
//     } else {
//         console.log("poopyerror")
//     }
//     res.json()
// })
// .then(data => console.log(data))

// fetch("https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=SI")
// .then(res => res.json())
// .then(data => console.log(data))

// fetch("https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=BK")
// .then(res => res.json())
// .then(data => console.log(data))

// fetch("https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=QNS")
// .then(res => res.json())
// .then(data => console.log(data))

// fetch("https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=BX")
// .then(res => res.json())
// .then(data => console.log(data))



