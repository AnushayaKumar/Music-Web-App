export const recommendationItem = (artistsData, sectionId) => {
    artistsData.slice(0, 6).forEach(data => {
        const card = `<ul class="recommendation-item flex items-center justify-between cursor-pointer">
                            <li>
                                <img src="${data.songImg}" alt="Image of an artist" class="recommendation-item-img">
                            </li>
                            <li class="flex flex-col">
                                <h6>${data.artist}</h6>
                                <p class="fs-13 font-bold recommendation-item-p">${data.songName}</p>
                                <p class="fs-13">${data.publisher}</p>
                            </li>                 
                            <li class="flex items-center gap-1">
                                <p class="font-bold">${data.duration}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                                    <path d="M373.167-296.5v-368.333l289 184.166-289 184.167Z" stroke="#fe5266" fill="#fe5266"/>
                                </svg>
                            </li>
                        </ul>`;
        const section = document.querySelector(sectionId);
        section.innerHTML += card;
    });
}

// const handleRecommendationButtonClick = (data) => {
//     const songImg = document.getElementById("player-image");
//     songImg.src = data.songImg;

//     const songArtist = document.getElementById("song-artist");
//     songArtist.textContent = data.artist;

//     const songName = document.getElementById("song-name");
//     songName.textContent = data.songName;

//     const songDuration = document.getElementById("song-duration");
//     songDuration.textContent = data.duration;

//     const myAudio = document.getElementById("myAudio");
//     myAudio.src = data.songUrl;
//     myAudio.play();

//     const playerPlay = document.getElementById("player-play-img");
//     playerPlay.src = 'images/pause.svg';
// }




// const recommendationItem = document.createElement("ul");
// recommendationItem.className = "recommendation-item flex items-center justify-between cursor-pointer";

// // Create list item 1
// const li1 = document.createElement("li");
// const img = document.createElement("img");
// img.src = data.songImg;
// img.alt = "Image of an artist";
// img.className = "recommendation-item-img";
// li1.appendChild(img);

// // Create list item 2
// const li2 = document.createElement("li");
// li2.className = "flex flex-col";

// const h6 = document.createElement("h6");
// h6.textContent = data.artist;

// const p1 = document.createElement("p");
// p1.className = "fs-13 font-bold recommendation-item-p";
// p1.textContent = data.songName;

// const p2 = document.createElement("p");
// p2.className = "fs-13";
// p2.textContent = data.publisher;

// li2.appendChild(h6);
// li2.appendChild(p1);
// li2.appendChild(p2);

// // Create list item 3
// const li3 = document.createElement("li");
// li3.className = "flex items-center gap-1";

// const p3 = document.createElement("p");
// p3.className = "font-bold";
// p3.textContent = data.duration;

// const button = document.createElement("button");

// button.addEventListener("click", () => handleRecommendationButtonClick(data));

// const playButtonImg = document.createElement("img");
// playButtonImg.src = "images/play-button.png";
// playButtonImg.alt = "Play a video icon";
// playButtonImg.id = 'recommendation-play';

// button.appendChild(playButtonImg);
// li3.appendChild(p3);
// li3.appendChild(button);

// recommendationItem.appendChild(li1);
// recommendationItem.appendChild(li2);
// recommendationItem.appendChild(li3);

// return recommendationItem;
