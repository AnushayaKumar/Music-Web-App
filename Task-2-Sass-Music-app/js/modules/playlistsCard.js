// Function to create playlist card
const createPlaylistCard = (data, section, index) => {
    return `
    <li class="card-playlist flex items-center cursor-pointer p-5 mr-5" style="background-image: url('${data.image}')">
    
    <h2 class="text-center p-5">${data.playlistName}</h2>

    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
        <path d="M373.167-296.5v-368.333l289 184.166-289 184.167Z" stroke="#fe5266" fill="#fe5266"/>
    </svg>

   <div>
        <h4>${data.playlistName}</h4>
        <p>${data.genreDescription}</p>
    </div>

    </li>`;
}

// Function to clone and append cards to a section
export const playlistCards = (playlists, sectionId) => {
    playlists.slice(0, 3).forEach((data, index) => {
        const section = document.querySelector(sectionId);
        section.innerHTML += createPlaylistCard(data, sectionId, index);
    });
}

// Function to create and append cards for a specific genre section
export const genrePlaylistCards = (playlists, genre, sectionId) => {
    const section = document.querySelector(sectionId);
    playlists.forEach((playlist, index) => {
        if (playlist.genre === genre) {
            section.innerHTML += createPlaylistCard(playlist, sectionId, index);
        }
    });
}










// const playlistCard = document.createElement("li");
// playlistCard.className = "card-playlist flex items-center cursor-pointer p-5 mr-5";
// playlistCard.style.backgroundImage = `url('${data.image}')`;

// const h2 = document.createElement("h2");
// h2.className = "text-center p-5";
// h2.textContent = data.playlistName;

// const button = createButton(`${section + index + 1}`, "images/play-button.png", "images/pause.svg");
// // const button = document.createElement("button");
// // const img = document.createElement("img");
// // img.src = "images/play-button.png";
// // img.alt = "play button";
// // button.appendChild(img);

// // button.addEventListener("click", () => {
// //     const src = img.getAttribute("src");
// //     img.setAttribute("src", src === "images/pause.svg" ? "images/play-button.png" : "images/pause.svg");
// // });

// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const h4 = document.createElement("h4");
// h4.textContent = data.playlistName;
// const li2 = document.createElement("li");
// const p = document.createElement("p");
// p.textContent = data.genreDescription;

// li1.appendChild(h4);
// li2.appendChild(p);
// ul.appendChild(li1);
// ul.appendChild(li2);

// playlistCard.appendChild(h2);
// playlistCard.appendChild(button);
// playlistCard.appendChild(ul);

// return playlistCard;
