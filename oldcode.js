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
        data.forEach(entry => {
            uniquesbsroute1.add(entry.sbs_route1);
            uniquesbsroute1.add(entry.sbs_route2);
        });
        console.log(uniquesbsroute1)
        function cardinsert(bladeebus) {
            if (bladeebus.sbs_route2) {
                domselectors.cards.insertAdjacentHTML("beforeend",
                    `<div class="card hidden" id="allcards">
                    <img src="m15sbs.jpg" alt="img" class="card-img">
                    <h2 class="card-route1">${bladeebus.sbs_route1}</h2>
                    <h2 class="card-route2">${bladeebus.sbs_route2}</h2>
                </div>`
                );
            } else {
                domselectors.cards.insertAdjacentHTML("beforeend",
                    `<div class="card hidden" id="allcards">
                    <img src="m15sbs.jpg" alt="img" class="card-img">
                    <h2 class="card-route1">${bladeebus.sbs_route1}</h2>
                </div>`
                );
            }
        }
        uniquesbsroute1.forEach(value1 => {
            if (value1) {
                const filteredData = data.filter(entry => entry.sbs_route1 === value1 || entry.sbs_route2 === value1);
                cardinsert(filteredData[1])
            }
        });
    } catch (error) {
        console.error(error.message);
    }

}

const filterButtons = document.querySelectorAll('.filterbtns');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll("#allcards").forEach((card) => card.remove());
        if (button.textContent === "Brooklyn") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=BK`
            processRoutes(url)
        }
        else if (button.textContent === "Staten Island") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=SI`
            processRoutes(url)
        }
        else if (button.textContent === "Manhattan") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=MAN`
            processRoutes(url)
        }
        else if (button.textContent === "Queens") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=QNS`
            processRoutes(url)
        }
        else if (button.textContent === "The Bronx") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?bor_=BX`
            processRoutes(url)
        }
        else if (button.textContent === "Busway") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?lane_type=Busway`
            processRoutes(url)
        }
        else if (button.textContent === "Single") {
            const url = `https://data.cityofnewyork.us/resource/ycrg-ses3.json?lane_type=Single`
            processRoutes(url)
        }
    });
});
