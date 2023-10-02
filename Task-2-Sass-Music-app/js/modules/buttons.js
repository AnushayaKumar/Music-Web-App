export const createButton = (id, img1, img2) => {
    const button = document.createElement("button");
    button.className = "btn";

    const img = document.createElement("img");
    img.src = img1;
    img.id = id;
    button.appendChild(img);

    const imgId = img.id;
    button.addEventListener("click", () => {
        const toggleImg = document.getElementById(imgId);
        if (img2 === undefined)
            toggleImg.src = img1;
        else if (toggleImg.src.endsWith(img1))
            toggleImg.src = img2;
        else
            toggleImg.src = img1;
    });

    return button

}

