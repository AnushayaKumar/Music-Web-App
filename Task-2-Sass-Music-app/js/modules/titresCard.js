// titres page
// Function to create titres item
export const titresCard = (artistsData, section) => {
    artistsData.slice(0, 6).forEach(data => {
        const titresTr = `
        <tr class="titres-item cursor-pointer">

                <td><img src="${data.songImg}" alt="Image of the artist"></td>
                    
                <td class="font-bold">${data.songName} </td>
       
                <td><h6>${data.artist}</h6></td>

                <td>${data.publisher}</td>
                    
                <td>${data.publishYear}</td>
    
                <td class="font-bold">${data.duration}</td>
         
                <td><ul class="flex gap-1 items-center">
                    <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" stroke="#fe5266" fill="#fe5266" />
                        </svg>
                    </li>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" stroke="#000" fill="#fff" />
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                            <path d="M480.571-115.334q-29.071 0-49.654-20.467-20.583-20.467-20.583-49.293 0-28.339 20.419-49.455 20.418-21.117 49.176-21.117 29.571 0 49.654 21.087 20.083 21.086 20.083 49.582 0 28.497-20.012 49.08-20.013 20.583-49.083 20.583Zm0-295q-29.071 0-49.654-20.419-20.583-20.418-20.583-49.176 0-29.571 20.419-49.654 20.418-20.083 49.176-20.083 29.571 0 49.654 20.012 20.083 20.013 20.083 49.083 0 29.071-20.012 49.654-20.013 20.583-49.083 20.583Zm0-294q-29.071 0-49.654-20.796-20.583-20.795-20.583-50.083 0-29.287 20.419-49.704 20.418-20.416 49.176-20.416 29.571 0 49.654 20.511 20.083 20.511 20.083 49.798 0 29.287-20.012 49.988-20.013 20.702-49.083 20.702Z"/>
                        </svg>
                    </li>
                </ul></td></tr>`;

        // const titresTr = document.createElement("tr");
        // titresTr.className = "titres-item cursor-pointer";

        // const imgTd = document.createElement("td");
        // const img = document.createElement("img");
        // img.src = data.songImg;
        // img.alt = "Image of the artist";
        // imgTd.appendChild(img);

        // const titleTd = document.createElement("td");
        // titleTd.className = "font-bold";
        // titleTd.textContent = data.songName;

        // const artistTd = document.createElement("td");
        // const artistH6 = document.createElement("h6");
        // artistH6.textContent = data.artist;
        // artistTd.appendChild(artistH6);

        // const labelTd = document.createElement("td");
        // labelTd.textContent = data.publisher;

        // const yearTd = document.createElement("td");
        // yearTd.textContent = data.publishYear;

        // const ratingTd = document.createElement("td");
        // ratingTd.className = "font-bold";
        // ratingTd.textContent = data.duration;

        // const buttonListTd = document.createElement("td");
        // const buttonList = document.createElement("ul");
        // buttonList.className = "flex gap-1 items-center";

        // const button1Li = document.createElement("li");
        // const button1 = document.createElement("button");
        // button1.className = "btn";
        // button1.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"
        //             stroke="#fe5266" fill="#fe5266" /></svg>`;

        // button1.addEventListener("click", () => {
        //     const svg = button1.querySelector("svg path");
        //     const fillColor = svg.getAttribute("fill");
        //     svg.setAttribute("fill", fillColor === "#fe5266" ? "#fff" : "#fe5266");
        // });

        // const button2Li = document.createElement("li");
        // const button2 = document.createElement("button");
        // button2.className = "btn";
        // button2.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C14.09 4.81 15.76 4 17.5 4 20.58 4 23 6.42 23 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"
        //             stroke="#000" fill="#fff" /></svg>`;

        // button2.addEventListener("click", () => {
        //     const svg = button2.querySelector("svg path");
        //     const fillColor = svg.getAttribute("fill");
        //     svg.setAttribute("fill", fillColor === "#fff" ? "#000" : "#fff");
        // });

        // const linkLi = document.createElement("li");
        // const link = document.createElement("a");
        // link.href = "javascript:void(0)";
        // link.innerHTML = `<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="12.5" cy="7" r="2" fill="black" />
        //         <circle cx="12.5" cy="12.5" r="2" fill="black" />
        //         <circle cx="12.5" cy="18" r="2" fill="black" /></svg>`;

        // button1Li.appendChild(button1);
        // button2Li.appendChild(button2);
        // linkLi.appendChild(link);

        // buttonList.appendChild(button1Li);
        // buttonList.appendChild(button2Li);
        // buttonList.appendChild(linkLi);

        // buttonListTd.appendChild(buttonList);

        // titresTr.appendChild(imgTd);
        // titresTr.appendChild(titleTd);
        // titresTr.appendChild(artistTd);
        // titresTr.appendChild(labelTd);
        // titresTr.appendChild(yearTd);
        // titresTr.appendChild(ratingTd);
        // titresTr.appendChild(buttonListTd);


        // return titresTr;
        const titresBody = document.querySelector(section);
        titresBody.innerHTML += titresTr;
    });
}
