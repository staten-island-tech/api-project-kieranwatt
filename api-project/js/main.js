import '../styles/style.css';
const URL = "https//hacker-news.firebaseio.com/v0/"

async function getData(URL) {
    try{
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.content);
    } catch (error) {
        console.log(error);
    }

    
}
getData(URL);