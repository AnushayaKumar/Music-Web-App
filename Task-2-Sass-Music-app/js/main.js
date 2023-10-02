import { asideBar } from './modules/aside.js';
import { musicPlayer } from './modules/musicPlayer.js';
import { talentsCard } from './modules/talentsCard.js';
import { playlistCards, genrePlaylistCards } from './modules/playlistsCard.js';
import { recommendationItem } from './modules/recommendationCard.js';
import { artistData } from './modules/artistCard.js';
import { titresCard } from './modules/titresCard.js';
import { tendancesTalentsRest } from './modules/tendancesTalentsRest.js';




function rendorMusicData() {
    // artist data
    const artistsDetails = [

        {
            "artistId": 1,
            "artistName": "Emily",
            "artistDescription": "Piano Virtuoso Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Classical",
            "artistImage": "images/musician-1.png",
            "artistLikes": 7500,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 12000
        },
        {
            "artistId": 2,
            "artistName": "Carlos",
            "artistDescription": "Latin Guitarist Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Latin",
            "artistImage": "images/musician-2.jpeg",
            "artistLikes": 6200,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 9500
        },
        {
            "artistId": 3,
            "artistName": "Sophie",
            "artistDescription": "Indie Singer-Songwriter Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Indie",
            "artistImage": "images/musician-1.png",
            "artistLikes": 4300,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 7500
        },
        {
            "artistId": 4,
            "artistName": "David",
            "artistDescription": "Jazz Saxophonist Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Jazz",
            "artistImage": "images/musician-2.jpeg",
            "artistLikes": 5200,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 8500
        },
        {
            "artistId": 5,
            "artistName": "Mia Rod",
            "artistDescription": "Pop Sensation Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Pop",
            "artistImage": "images/musician-1.png",
            "artistLikes": 10500,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 15000
        },
        {
            "artistId": 6,
            "artistName": "Jamal",
            "artistDescription": "Hip-Hop Lyricist Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Hip-Hop",
            "artistImage": "images/musician-2.jpeg",
            "artistLikes": 8900,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 12000
        },
        {
            "artistId": 7,
            "artistName": "Elena Lopez",
            "artistDescription": "Flamenco Guitarist Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Flamenco",
            "artistImage": "images/musician-1.png",
            "artistLikes": 4800,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 8800
        },
        {
            "artistId": 8,
            "artistName": "Oliver White",
            "artistDescription": "Country Singer Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Country",
            "artistImage": "images/musician-2.jpeg",
            "artistLikes": 5700,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 9300
        },
        {
            "artistId": 9,
            "artistName": "Lila Thompson",
            "artistDescription": "Electronic DJ Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "artistGenre": "Electronic",
            "artistImage": "images/musician-1.png",
            "artistLikes": 7800,
            "artistDislikes": 300,
            "artistViews": 32000,
            "artistComments": 500,
            "artistFollowers": 11000
        }
    ]
    // setting
    localStorage.setItem('artistsData', JSON.stringify(artistsDetails));
    // getting
    const getArtistsData = localStorage.getItem('artistsData');


    // playlist data
    const playlistDetails = [
        {
            "playlistId": "pl1",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Mix Zen",
            "genre": "Relaxing",
            "genreDescription": "Wind down with these soothing tracks",
        },
        {
            "playlistId": "pl2",
            "image": "images/playlist-bg1.jpeg",
            "playlistName": "Mix Electro",
            "genre": "Acoustic",
            "genreDescription": "The best acoustic performances",
        },
        {
            "playlistId": "pl3",
            "image": "images/playlist-bg2.png",
            "playlistName": "Mix Soire",
            "genre": "Acoustic",
            "genreDescription": "The best acoustic performances",
        },
        {
            "playlistId": "pl4",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Relax Hits",
            "genre": "Acoustic",
            "genreDescription": "Relax with these laid-back tunes",
        },
        {
            "playlistId": "pl5",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Classic Hits",
            "genre": "Classical",
            "genreDescription": "Timeless classical music",
        },
        {
            "playlistId": "pl6",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Rock Anthe",
            "genre": "Classical",
            "genreDescription": "Epic rock classics",
        },
        {
            "playlistId": "pl7",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Count Jams",
            "genre": "Relaxing",
            "genreDescription": "The hottest hip-hop tracks",
        },
        {
            "playlistId": "pl8",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Count Jams",
            "genre": "Classical",
            "genreDescription": "Country music at its finest",
        },
        {
            "playlistId": "pl9",
            "image": "images/playlist-bg1.jpeg",
            "playlistName": "Pop Party",
            "genre": "Pop",
            "genreDescription": "Dance to the latest pop hits",
        },
        {
            "playlistId": "pl10",
            "image": "images/playlist-bg.jpg",
            "playlistName": "Pop Party",
            "genre": "Relaxing",
            "genreDescription": "Smooth jazz for your coffee break",
        },
        {
            "playlistId": "pl11",
            "image": "images/playlist-bg1.jpeg",
            "playlistName": "Indie Vibes",
            "genre": "Pop",
            "genreDescription": "Discover indie gems",
        },
        {
            "playlistId": "pl12",
            "image": "images/playlist-bg2.png",
            "playlistName": "EDM Party",
            "genre": "Pop",
            "genreDescription": "Get the party started with electronic beats",
        },
        {
            "playlistId": "pl13",
            "image": "images/playlist-bg1.jpeg",
            "playlistName": "R&B Groove",
            "genre": "Reggae",
            "genreDescription": "Smooth R&B tracks for your soul",
        },
        {
            "playlistId": "pl14",
            "image": "images/playlist-bg2.png",
            "playlistName": "Reggae Vibes",
            "genre": "Reggae",
            "genreDescription": "Feel the reggae rhythm",
        },
        {
            "playlistId": "pl15",
            "image": "images/playlist-bg1.jpeg",
            "playlistName": "Metal Mad",
            "genre": "Reggae",
            "genreDescription": "Hard-hitting metal tracks",
        }
    ]
    // setting
    localStorage.setItem('playlistData', JSON.stringify(playlistDetails));
    // getting
    const getPlaylistData = localStorage.getItem('playlistData');


    const musicDetails = [
        {
            "songName": "Thriller",
            "publishYear": "1982",
            "publisher": "Epic",
            "artist": "Jackson",
            "duration": "5:57",
            "songImg": "images/musician-1.png",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-1.ogg",
            "genre": "Pop",
            "likes": 1500,
            "dislikes": 100,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 250
        },
        {
            "songName": "Bohemian",
            "publishYear": "1975",
            "publisher": "EMI",
            "artist": "Queen",
            "duration": "5:55",
            "songImg": "images/musician-2.jpeg",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/lose.ogg",
            "genre": "Rock",
            "likes": 2200,
            "dislikes": 80,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 350
        },
        {
            "songName": "Billie Jean",
            "publishYear": "1983",
            "publisher": "Epic",
            "artist": "Jackson",
            "duration": "4:54",
            "songImg": "images/musician-1.png",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg",
            "genre": "Pop",
            "likes": 1800,
            "dislikes": 120,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 180
        },
        {
            "songName": "Hotel Cal",
            "publishYear": "1976",
            "publisher": "Asylum",
            "artist": "Eagles",
            "duration": "6:30",
            "songImg": "images/musician-2.jpeg",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg",
            "genre": "Rock",
            "likes": 2000,
            "dislikes": 90,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 300
        },
        {
            "songName": "Stairway",
            "publishYear": "1971",
            "publisher": "Atlantic",
            "artist": "Zeppelin",
            "duration": "8:02",
            "songImg": "images/musician-1.png",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race1.ogg",
            "genre": "Rock",
            "likes": 2100,
            "dislikes": 70,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 400
        },
        {
            "songName": "Imagine",
            "publishYear": "1971",
            "publisher": "Apple",
            "artist": "Lennon",
            "duration": "3:03",
            "songImg": "images/musician-2.jpeg",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg",
            "genre": "Pop",
            "likes": 1900,
            "dislikes": 100,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 220
        },
        {
            "songName": "Smooth",
            "publishYear": "1999",
            "publisher": "Arista",
            "artist": "Santana",
            "duration": "4:58",
            "songImg": "images/musician-2.jpeg",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-1.ogg",
            "genre": "Rock",
            "likes": 2300,
            "dislikes": 60,
            "description": "Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 280
        },
        {
            "songName": "Hallelujah",
            "publishYear": "1984",
            "publisher": "Columbia",
            "artist": "Cohen",
            "duration": "4:38",
            "songImg": "images/musician-1.png",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg",
            "genre": "Folk",
            "likes": 1750,
            "dislikes": 80,
            "description": "A soul-stirring folk ballad! Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 190
        },
        {
            "songName": "Radioactive",
            "publishYear": "2012",
            "publisher": "Interscope",
            "artist": "Dragons",
            "duration": "3:08",
            "songImg": "images/musician-2.jpeg",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg",
            "genre": "Alternative",
            "likes": 2000,
            "dislikes": 110,
            "description": "Energetic and powerful alternative track! Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 320
        },
        {
            "songName": "Faded",
            "publishYear": "2015",
            "publisher": "NoCopyrightSounds",
            "artist": "Alan Walker",
            "duration": "3:33",
            "songImg": "images/musician-1.png",
            "songUrl": "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg",
            "genre": "Electronic",
            "likes": 1900,
            "dislikes": 90,
            "description": "A captivating electronic journey! Jeune artiste, de nature créative, j’ai noyé mes sentiments, mes douleurs et mes bonheurs dans la musique. Comme une extension de mon coeur, elle retranscrit mes émotions.",
            "commentsCount": 260
        }
    ]
    // setting
    localStorage.setItem('musicData', JSON.stringify(musicDetails));
    // getting
    const getMusicData = localStorage.getItem('musicData');

    // parsing data
    const artistsData = JSON.parse(getArtistsData);
    const playLists = JSON.parse(getPlaylistData);
    const musicData = JSON.parse(getMusicData);


    // Aside bar 
    asideBar();

    // Home page
    // Home Page's talents card
    talentsCard(musicData, "#talentCardList");
    // Home page's playlist card
    playlistCards(playLists, "#playlistList");
    // Home page's recommendation card
    recommendationItem(musicData, "#recommendationList");
    // Home page's artist data card
    artistData(artistsData);
    // musicPlayer
    musicPlayer(musicData);


    // Bibliotheques
    // Bibliotheques page talents card
    talentsCard(musicData, "#clonedTalentCardList");
    // Bibliotheques page's playlist card
    playlistCards(playLists, "#clonedPlaylistList");
    // bibliotheque page's recommendation card
    recommendationItem(musicData, "#clonedRecommendationList");
    // bibliotheque page's titres card
    titresCard(musicData, "#titresBody");


    // Tendances
    // Tendances page's talents card
    talentsCard(musicData, "#clonedTalentCardListOne");
    // Tendances page's rest talents card
    tendancesTalentsRest(musicData);


    // Playlists
    // Playlists page's relaxing playlists
    genrePlaylistCards(playLists, "Relaxing", "#myPlaylist");
    // Playlists page's acoustic playlist
    genrePlaylistCards(playLists, "Acoustic", "#actualitesPlaylist");
    // Playlists page's classical playlists
    genrePlaylistCards(playLists, "Classical", "#popularPlaylist");
    // Playlists page's pop playlists
    genrePlaylistCards(playLists, "Pop", "#mixPlaylist");
    // Playlists page's reggea playlists
    genrePlaylistCards(playLists, "Reggae", "#genrePlaylist");
}


rendorMusicData();

// By default home page is block.
const home = document.getElementById("showHome");
home.style.display = "block";

// Get the links from the nav bar to make them active 
const nav = document.getElementById("nav");
const links = document.getElementsByClassName("nav-item");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {

        // Remove active class from all links
        const currentActive = nav.querySelector(".active");
        if (currentActive) {
            currentActive.classList.remove("active");
        }

        // Add active class to the clicked link
        this.classList.add("active");

        // Get the target ID from the href attribute
        // .substring(1) removes the # from the href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Hide all elements with class 'hidden'
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(element => {
            element.style.display = 'none';
        });

        // Show the target element
        targetElement.style.display = 'block';
    });
}


















