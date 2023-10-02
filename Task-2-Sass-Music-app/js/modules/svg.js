export const svgOnClick = (id, color1, color2) => {
    const svg = document.querySelector(`#${id}`);
    svg.addEventListener("click", () => {
        const fillColor = svg.getAttribute("fill");
        svg.setAttribute("fill", fillColor === color1 ? color2 : color1);

    })
}