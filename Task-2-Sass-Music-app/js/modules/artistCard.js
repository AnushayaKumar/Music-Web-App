// Artist card
const artistDataCard = (data) => {

    return `<li class="artist-item cursor-pointer">
            <img src="${data.artistImage}" alt="Image of an artist">
            <h3 class="text-center mt-5">${data.artistName}</h3>
    </li>`;


    // const artistItem = document.createElement("li");
    // artistItem.className = "artist-item cursor-pointer";

    // const img = document.createElement("img");
    // img.src = data.artistImage;
    // img.alt = "Image of an artist";

    // const h3 = document.createElement("h3");
    // h3.className = "text-center mt-5";
    // h3.textContent = data.artistName;

    // artistItem.appendChild(img);
    // artistItem.appendChild(h3);

    // return artistItem;
}
export const artistData = (artistsData) => {
    artistsData.slice(0, 6).forEach(data => {
        const artistList = document.querySelector("#artistList");
        artistList.innerHTML += artistDataCard(data);
    });
}


