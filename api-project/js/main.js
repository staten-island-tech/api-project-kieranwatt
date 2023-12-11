import '../styles/style.css';
const URL = "https://data.cityofnewyork.us/resource/ycrg-ses3.json"

async function getData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    }
getData(URL);

/* const boro = data.filter(data => data.bor_ === "QNS");
console.log(boro); */