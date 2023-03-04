import {getgameinfo, getInfos2} from "./api.js";


const sectionCards = document.getElementById('gamesCards');
const btnsend = document.getElementById('btnsend');
const sectionIdentity = document.getElementById('identity');

export function showTopGame2(response) {
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

        // Titre
        const title2 = document.createElement("h2");
        title2.classList.add("title");
        titleMeta.append(title2);
        title2.textContent = response.results[i].slug;
        
        var slug = response.results[i].slug

        getgameinfo();

        for (let i = 0; i < response.results.length; i++) {
           
            async function getgameinfo() {
                try {
                
                        const res2 = await fetch(`https://api.rawg.io/api/games/${slug}?key=${API_KEY}&page=2&page_size=30`);
                        const resParsed2 = await res2.json();
                        showTopGame2(resParsed2);
                        return resParsed2;
                        console.log(resParsed2)
                    
                   
                } catch (error) {
                    throw new Error(error);
                };}


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
    
    if (window.location.pathname.includes("games2.html")) {
        getInfos2();
        showValueLocal();
        getgameinfo();
    } 
});