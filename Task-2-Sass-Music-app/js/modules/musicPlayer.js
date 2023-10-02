// music player
export const musicPlayer = (data) => {

    const imageElement = document.querySelector("#player-image");
    imageElement.src = data[0].songImg;

    const h3 = document.querySelector("#song-artist");
    h3.textContent = data[0].artist;

    const h6 = document.querySelector("#song-name");
    h6.textContent = data[0].songName;

    const p = document.querySelector("#song-duration");
    p.textContent = data[0].duration;

    const myAudio = document.querySelector("#myAudio");
    myAudio.src = data[0].songUrl;

    const playButton = document.querySelector("#player-play-button");
    playButton.addEventListener("click", () => {
        const playImg = document.querySelector("#player-play-img");
        if (myAudio.paused) {
            myAudio.play();
            playImg.src = "images/pause.svg";
        } else {
            myAudio.pause();
            playImg.src = "images/play-button.png";
        }
    });


    const volumeOffButton = document.querySelector("#player-volume-off");
    const volumeOnButton = document.querySelector("#player-volume-on");
    // Event listener for volume off button
    volumeOffButton.addEventListener('click', () => myAudio.muted = true);

    // Event listener for volume on button
    volumeOnButton.addEventListener('click', () => myAudio.muted = false);
}