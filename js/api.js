import {showTopGame} from "./main.js";

let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const API_KEY = "af429b274fef4438b2554a5d186eb036"; // Put your API key here (https://rawg.io/apidocs)

export async function getInfos() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const resParsed = await res.json();
        showTopGame(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
};
