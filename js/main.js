import {getgameinfo, getInfos} from "./api.js";


const sectionCards = document.getElementById('gamesCards');
const btnsend = document.getElementById('btnsend');
const sectionIdentity = document.getElementById('identity');

export function showTopGame(response) {
    for (let i = 0; i < response.results.length; i++) {

        
        // Création cards
        const gameCard = document.createElement("div");
        gameCard.classList.add("gameCard");
        sectionCards.append(gameCard);

        // Image
        const gameImg = document.createElement("img");
        gameImg.classList.add("gameImg");
        gameImg.src = response.results[i].background_image;
        gameCard.append(gameImg);

        // Zone titre et meta
        const titleMeta = document.createElement("div");
        titleMeta.classList.add("titleMeta");
        gameCard.append(titleMeta);

        // Titre
        const title = document.createElement("h2");
        title.classList.add("title");
        titleMeta.append(title);
        title.textContent = response.results[i].name;
        title.addEventListener('click', getgameinfo2);
    
        async function getgameinfo2() {

            try {
                const API_KEY = "af429b274fef4438b2554a5d186eb036";
                const res3 = await fetch(`https://api.rawg.io/api/games/${response.results[i].slug}?key=${API_KEY}`);
                const resParsed3 = await res3.json();

                //screen

                const res4 = await fetch(`https://api.rawg.io/api/games/${response.results[i].slug}/screenshots?key=${API_KEY}`);
                const resParsed4 = await res4.json();

                sessionStorage.setItem('image_01', resParsed4.results[0].image);
                sessionStorage.setItem('image_02', resParsed4.results[1].image);
                sessionStorage.setItem('image_03', resParsed4.results[2].image);
                sessionStorage.setItem('image_04', resParsed4.results[3].image);
                
                //console.log(resParsed3);
                //var valordes = resParsed3.description


                //we use sessionStorage to save the values we got from our JSON which values are saved in resParsed3.
                //all of this data will be saved to be used in another page to show info about the games
                sessionStorage.setItem("cover", resParsed3.background_image);
                sessionStorage.setItem("gamenam", resParsed3.name);
                sessionStorage.setItem("descrip", resParsed3.description_raw);

                //this function will open a new tab in our browser that will display all the data we saved before.
                function display() {

                    window.location.replace("displayinfo.html");

                }
                display();
                return resParsed3, resParsed4;

            } catch (error) {
                throw new Error(error);
            };



        }




        
        // Metacritic
        const gameMetacritic = document.createElement("div");
        gameMetacritic.classList.add("gameMetacritic");

        if (response.results[i].metacritic === null) {
            gameMetacritic.classList.add("hide");
        } else {
            gameMetacritic.innerHTML = response.results[i].metacritic;
        }
        
        titleMeta.append(gameMetacritic);

        
        // Date de sortie
        const gameDate = document.createElement("p");
        gameDate.classList.add("gameDate");
        gameDate.innerHTML = response.results[i].released;
        gameCard.append(gameDate);
        
        // Genres
        const gameGenres = document.createElement("p");
        gameGenres.classList.add("gameGenres");
        gameGenres.innerHTML = response.results[i].genres[0].name;
        gameCard.append(gameGenres);
         
        // Screenshots
        const screenTxt = document.createElement("p");
        screenTxt.classList.add("screenTxt");
        screenTxt.textContent = "Screenshots:";
        const zoneImg = document.createElement("div");
        zoneImg.classList.add("zoneImg");
        const gameScreenshots = document.createElement("img");
        gameScreenshots.classList.add("gameScreenshots");
        gameScreenshots.setAttribute("src", response.results[i].short_screenshots[1].image);
        gameCard.append(screenTxt);
        gameCard.append(zoneImg);
        zoneImg.append(gameScreenshots);
    }
    
    for (let i = 0; i < response.results.length; i++) {

        const descrip = document.createElement("p");
        descrip.classList.add("descrip");
        descrip.innerHTML = response.results[i];
        descrip.append(showTopGame);
    }

   

    
}


document.addEventListener('DOMContentLoaded', () => {
    
    if (window.location.pathname.includes("games.html")) {
        getInfos();

        showValueLocal();
    } 
});