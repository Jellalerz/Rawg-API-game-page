
//showTopGame function is imported from main.js file
import {showTopGame} from "./main.js";
//showTopGame2 is imported from main2.js file
import { showTopGame2 } from "./main2.js";

import { showImages } from "./index.js";

//creates a new date value so that we can use it in the covers
let dateObj = new Date();
let year = dateObj.getUTCFullYear();

const API_KEY = "af429b274fef4438b2554a5d186eb036"; // Put your API key here (https://rawg.io/apidocs)

//function getInfos for our firstpage
export async function getInfos() {
    try {
    
            const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=30`);
            const resParsed = await res.json();
            showTopGame(resParsed);
            return resParsed;
        
       
    } catch (error) {
        throw new Error(error);
    };
};

//function getInfos2 four our second page
export async function getInfos2() {
    try {
    
            const res2 = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=30`);
            const resParsed2 = await res2.json();
            showTopGame2(resParsed2);
            return resParsed2;
        
       
    } catch (error) {
        throw new Error(error);
    };
};

//function getInfos3 four our third page
export async function getInfos3() {
    try {
    
            const res2 = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=30`);
            const resParsed2 = await res2.json();
            showTopGame2(resParsed2);
            return resParsed2;
        
       
    } catch (error) {
        throw new Error(error);
    };
};

//function getInfos4 four our fourth page
export async function getInfos4() {
    try {
    
            const res2 = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=4&page_size=30`);
            const resParsed2 = await res2.json();
            showTopGame2(resParsed2);
            return resParsed2;
        
       
    } catch (error) {
        throw new Error(error);
    };
};

export async function getInfos5() {
    try {
    
            const res2 = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=5&page_size=30`);
            const resParsed2 = await res2.json();
            showTopGame2(resParsed2);
            return resParsed2;
        
       
    } catch (error) {
        throw new Error(error);
    };
};

export async function getgameinfo() {
    try {
    
            const res2 = await fetch(`https://api.rawg.io/api/games/${i}?key=${API_KEY}&page=2&page_size=30`);
            const resParsed2 = await res2.json();
            showTopGame2(resParsed2);
            return resParsed2;
        
       
    } catch (error) {
        throw new Error(error);
    };
};

export async function getImages() {
    try {
    
            const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=5`);
            const resParsed = await res.json();
            showImages(resParsed);
             
        
            return resParsed;
        
       
    } catch (error) {
        throw new Error(error);
    };
};










