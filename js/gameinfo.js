
export function showTopGame2(response) {
    for (let i = 0; i < response.results.length; i++) {


        // Création cards
        const gameCard = document.createElement("div");
        gameCard.classList.add("gameCard");
        sectionCards.append(gameCard);

        // Zone titre et meta
        const titleMeta = document.createElement("div");
        titleMeta.classList.add("titleMeta");
        gameCard.append(titleMeta);

        // Titre
        const title = document.createElement("h2");
        title.classList.add("title");
        titleMeta.append(title);
        title.textContent = response.results[i].name;
    }
}


document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.includes("displayinfo.html")) {
        getgameinfo2();

        showValueLocal();
    }
});
