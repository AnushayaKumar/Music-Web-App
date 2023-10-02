import { svgOnClick } from "./svg.js";
// tendances page
// Function for creating tendances talents rest card
export const tendancesTalentsRest = (musicData) => {
    musicData.slice(6).forEach((data, index) => {
        const talents = `<ul class="tendences-talents-rest flex justify-evenly items-center mb-9">

            <li><img src="${data.songImg}" alt="Image of the artist" class="tendences-talents-rest-profile"></li>

            <li><h2 class="color-primary pl-10">${index + 7}<sup class="fs-10">er</sup></h2></li>

            <li class="font-bold">${data.genre}</li>

            <li class="font-bold fs-p">${data.artist}</li>

            <li>${data.publisher}</li>

            <li>${data.publishYear}</li>

            <li class="font-bold">${data.duration}</li>

            <li>
                <svg id="svg${index}" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fe5266" fill="#fff" >
                    <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"/>
                </svg>
                <p class="text-center color-primary">${data.likes}</p>
            </li>

            
            <li>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#fff" >
                    <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"/>
                </svg>
                <p class="text-center color-primary">${data.dislikes}</p>
            </li>

           
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="#fe5266">
                    <path d="M427.667-668.668 383-624q-15.334 15.333-36.5 15.333-21.167 0-36.833-15.667-15.334-15.333-15.334-36.666t15.334-36.667L442.334-831Q458-846.667 480-846.667q22 0 37.666 15.667l132.667 133.333q15.334 15.334 15.5 36.5.167 21.167-15.5 36.833Q635-609 613.667-608.5T577-624l-44.667-44.668v524.335q0 22-15.167 37.166Q502-92 480-92q-22 0-37.166-15.167-15.167-15.166-15.167-37.166v-524.335Z"/>
                </svg>
                <p class="text-center color-primary">${data.dislikes + data.likes}</p>
            </li>
        </ul>`;

        const tendencesTalentsRest = document.querySelector('#tendencesTalentsRest');
        tendencesTalentsRest.innerHTML += talents;

        const svg = document.querySelector(`#svg${index}`);
        svg.addEventListener("click", () => {
            const fillColor = svg.getAttribute("fill");
            svg.setAttribute("fill", fillColor === '#fff' ? '#fe5266' : '#fff');

        })
    })
}

// const newUl = document.createElement('ul');
// newUl.className = 'tendences-talents-rest flex justify-evenly items-center mb-9';

// // Create the first <li> element with an <img> inside
// const li1 = document.createElement('li');
// const img1 = document.createElement('img');
// img1.src = data.songImg;
// img1.alt = "Image of the artist";
// img1.className = 'tendences-talents-rest-profile';
// li1.appendChild(img1);


// // Create the second <li> element with an <h2> inside
// const li2 = document.createElement('li');
// const h2 = document.createElement('h2');
// h2.className = 'color-primary pl-10';
// h2.innerHTML = `${index + 7}<sup class="fs-10">er</sup>`
// li2.appendChild(h2);


// const li3 = document.createElement('li');
// li3.className = 'font-bold';
// li3.textContent = data.genre;


// const li4 = document.createElement('li');
// li4.className = 'font-bold fs-p';
// li4.textContent = data.artist;


// const li5 = document.createElement('li');
// li5.textContent = data.publisher;

// const li6 = document.createElement('li');
// li6.textContent = data.publishYear;


// const li7 = document.createElement('li');
// li7.className = 'font-bold';
// li7.textContent = data.duration;


// const li8 = document.createElement('li');
// const button1 = document.createElement("button");
// button1.className = "btn";
// button1.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" stroke="#fe5266" fill="#fff" /></svg>';
// button1.addEventListener("click", () => {
//     const svg = button1.querySelector("svg path");
//     const fillColor = svg.getAttribute("fill");
//     svg.setAttribute("fill", fillColor === "#fff" ? "#fe5266" : "#fff");

//     // Deselect the other button (button2)
//     const svg2 = button2.querySelector("svg path");
//     svg2.setAttribute("fill", "#fff");
// });

// li8.appendChild(button1);

// const p1 = document.createElement('p');
// p1.className = 'text-center color-primary';
// p1.textContent = data.likes;
// li8.appendChild(p1);


// const li9 = document.createElement('li');
// const button2 = document.createElement("button");
// button2.className = "btn";
// button2.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" stroke="#000" fill="#fff" /></svg>';
// button2.addEventListener("click", () => {
//     const svg = button2.querySelector("svg path");
//     const fillColor = svg.getAttribute("fill");
//     svg.setAttribute("fill", fillColor === "#fff" ? "#000" : "#fff");

//     // Deselect the other button (button1)
//     const svg1 = button1.querySelector("svg path");
//     svg1.setAttribute("fill", "#fff");
// });
// li9.appendChild(button2);


// const p2 = document.createElement('p');
// p2.className = 'text-center color-primary';
// p2.textContent = data.dislikes;
// li9.appendChild(p2);


// const li10 = document.createElement('li');
// const img3 = document.createElement('img');
// img3.src = 'images/views-increase.svg';
// img3.alt = 'Views increase or decrease icon';
// img3.className = 'tendences-talents-rest-views';
// li10.appendChild(img3);


// const p3 = document.createElement('p');
// p3.className = 'text-center color-primary';
// p3.textContent = data.dislikes + data.likes;
// li10.appendChild(p3);


// newUl.appendChild(li1);
// newUl.appendChild(li2);
// newUl.appendChild(li3);
// newUl.appendChild(li4);
// newUl.appendChild(li5);
// newUl.appendChild(li6);
// newUl.appendChild(li7);
// newUl.appendChild(li8);
// newUl.appendChild(li9);
// newUl.appendChild(li10);


// newUl.addEventListener("click", () => {

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
//     tendanesProfileId.innerHTML = `${index + 7}<sup class="fs-10">er</sup>`;
// })