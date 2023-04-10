import {getImages} from "./api.js";



var cover = sessionStorage.getItem("cover");
var cover1 = sessionStorage.getItem("cover1");
var cover2 = sessionStorage.getItem("cover2");
var cover3 = sessionStorage.getItem("cover3");
var cover4 = sessionStorage.getItem("cover4");
var cover5 = sessionStorage.getItem("cover5");
var images = document.getElementById("coverImage")   
const gameImg1 = document.createElement("img"); 
const gameImg2 = document.createElement("img"); 
const gameImg3 = document.createElement("img");
const gameImg4 = document.createElement("img");
const gameImg5 = document.createElement("img");


export function showImages(response) {
    for (let i = 0; i < response.results.length; i++) {

        // Image
        const gameImg = document.createElement("img");
        gameImg.classList.add("gameImg");
        gameImg.src = response.results[i].background_image;
        cover = gameImg.src;
        images = cover;
        document.getElementById('algo').src = cover;

        console.log(images);
        console.log(cover);
        
     console.log(gameImg)
     console.log(i)
       
    }

    gameImg1.src = response.results[0].background_image;
    cover1 = gameImg1.src;
    document.getElementById('algo1').src = cover1;
    console.log(cover2)

    gameImg2.src = response.results[1].background_image;
    cover2 = gameImg2.src;
    document.getElementById('algo2').src = cover2;
    console.log(cover2)

    gameImg3.src = response.results[2].background_image;
    cover3 = gameImg3.src;
    document.getElementById('algo3').src = cover3;
    
    gameImg4.src = response.results[3].background_image;
    cover4 = gameImg4.src;
    document.getElementById('algo4').src = cover4;
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    
    if (window.location.pathname.includes("index.html")) {
        getImages();

        showValueLocal();
    } 
});


