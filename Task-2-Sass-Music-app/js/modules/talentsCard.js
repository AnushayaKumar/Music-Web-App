export const talentsCard = (artistsData, sectionId) => {

    // sorting artist from highest to lowest on the basis of likes they earned.
    artistsData.sort((a, b) => b.artistLikes - a.artistLikes);

    artistsData.slice(0, 3).forEach((data, index) => {

        const card = `<li class="card-talents cursor-pointer p-5 mr-5 mb-9" style="background-image: url('${data.songImg}')">

                <h2>${index + 1}<sup class="fs-10">er</sup></h2>
                
                <h4>${data.artist}</h4>
                
                <p>${data.genre}</p>

                <svg id="star-btn-${index}" class="star-btn" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 64 64" fill="#fff" stroke="#fff" stroke-width="2">
                <polygon points="32 0 40.0622 20.5641 62.5501 23.1803 45.078 37.4359 48.9374 60.8197 32 48.084 15.0626 60.8197 18.922 37.4359 1.4499 23.1803 23.9378 20.5641"></polygon>
                </svg>
                
                <svg class="card-talents-heart" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fe5266" fill="#fff">
                <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"/>
                </svg>
                
                <svg class="card-talents-heart black" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#fff">
                <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" />
                </svg>
                </li>`;
        const section = document.querySelector(sectionId);
        section.innerHTML += card;

        handleClick(index);

    });

}

function handleClick(index) {
    const svg = document.getElementById(`star-btn-${index}`);
    svg.addEventListener('click', () => {
        const fillColor = svg.getAttribute("fill");
        svg.setAttribute("fill", fillColor === '#fe5266' ? '#fff' : '#fe5266');
        console.log(index);
    });
}


// const handleCardClick = (data) => {
//     const artistName = document.getElementById("artistName");
//     artistName.textContent = data.songName;

//     const tendanesProfileGenre = document.getElementById("tendanesProfileGenre");
//     tendanesProfileGenre.textContent = data.genre;

//     const tendancesProfilePic = document.getElementById("tendancesProfilePic");
//     tendancesProfilePic.src = data.songImg;

//     const tendancesProfileAlbumCount = document.getElementById("tendancesProfileAlbumCount");
//     tendancesProfileAlbumCount.textContent = `2 albums`;

//     const tendancesProfilePublish = document.getElementById("tendancesProfilePublish");
//     tendancesProfilePublish.textContent = data.publisher;

//     const tendancesProfileYear = document.getElementById("tendancesProfileYear");
//     tendancesProfileYear.textContent = data.publishYear;

//     const tendancesProfileDescription = document.getElementById("tendancesProfileDescription");
//     tendancesProfileDescription.textContent = data.description;

//     const tendancesProfileViews = document.getElementById("tendancesProfileViews");
//     tendancesProfileViews.textContent = data.likes + data.dislikes;

//     const tendancesProfileLikes = document.getElementById("tendancesProfileLikes");
//     tendancesProfileLikes.textContent = data.likes;

//     const tendancesProfileComments = document.getElementById("tendancesProfileComments");
//     tendancesProfileComments.textContent = data.commentsCount;

//     const tendanesProfileId = document.getElementById("tendanesProfileId");
//     tendanesProfileId.innerHTML = `${index + 1}<sup class="fs-10">er</sup>`;

//     const button1 = document.getElementById("tendancesProfileButton1");
//     button1.addEventListener("click", () => {
//         const svg = button1.querySelector("svg path");
//         const fillColor = svg.getAttribute("fill");
//         svg.setAttribute("fill", fillColor === "#fe5266" ? "#fff" : "#fe5266");
//     });

//     const button2 = document.getElementById("tendancesProfileButton2");
//     button2.addEventListener("click", () => {
//         const svg = button2.querySelector("svg path");
//         const fillColor = svg.getAttribute("fill");
//         svg.setAttribute("fill", fillColor === "#fff" ? "#000" : "#fff");
//     });
// }








// const card = document.createElement("li");
// card.className = "card-talents cursor-pointer p-5 mr-5 mb-9";
// card.style.backgroundImage = `url('${data.songImg}')`;

// const h2 = document.createElement("h2");
// h2.innerHTML = `${index + 1}<sup class="fs-10">er</sup>`;

// const h4 = document.createElement("h4");
// h4.textContent = data.artist;

// const p = document.createElement("p");
// p.textContent = data.genre;

// const button = createButton(`star-${id + index}`, "images/star-white.svg", "images/star.svg");
// button.className = "star-btn";

// const buttonList = document.createElement("ul");
// buttonList.className = "flex justify-center items-center gap-1";

// const buttonListItem = document.createElement("li");
// const button1 = createButton(`like-${id + index}`, "images/heart-stroke.svg", "images/heart.svg");
// // const button1 = document.createElement("button");
// // button1.className = "btn";
// // button1.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" stroke="#fe5266" fill="#fff" /></svg>';
// // button1.addEventListener("click", () => {
// //     const svg = button1.querySelector("svg path");
// //     const fillColor = svg.getAttribute("fill");
// //     svg.setAttribute("fill", fillColor === "#fff" ? "#fe5266" : "#fff");

// //     // Deselect the other button (button2)
// //     const svg2 = button2.querySelector("svg path");
// //     svg2.setAttribute("fill", "#fff");
// // });

// const buttonListItem1 = document.createElement("li");
// const button2 = createButton(`dislike-${id + index}`, "images/heart-stroke-black.svg", "images/heart-black-fill.svg");
// // const button2 = document.createElement("button");
// // button2.className = "btn";
// // button2.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" stroke="#000" fill="#fff" /></svg>';
// // button2.addEventListener("click", () => {
// //     const svg = button2.querySelector("svg path");
// //     const fillColor = svg.getAttribute("fill");
// //     svg.setAttribute("fill", fillColor === "#fff" ? "#000" : "#fff");

// //     // Deselect the other button (button1)
// //     const svg1 = button1.querySelector("svg path");
// //     svg1.setAttribute("fill", "#fff");
// // });


// buttonListItem1.appendChild(button2);
// buttonListItem.appendChild(button1);

// buttonList.appendChild(buttonListItem);
// buttonList.appendChild(buttonListItem1);

// card.appendChild(h2);
// card.appendChild(h4);
// card.appendChild(p);
// card.appendChild(buttonList);
// card.appendChild(button);


// card.addEventListener("click", () => handleCardClick(data))

// return card;
