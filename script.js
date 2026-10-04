/* =========================
   PEOPLE DATA
========================= */

const people = {

    nessa: {
        name: "nadia",
        role: "longor & lemot side",

        image: "person1.jpg",

        description:
            "orang yang mikirnya kadang loading lama, terus jawaban akhirnya bikin emosi.",

        traits: [
            "random",
            "longor",
            "kosong",
            "funny"
        ],

        instagram: "https://instagram.com/ndyaalla_/",
        tiktok: "https://tiktok.com/nnndyaa____/"
    },


    person2: {
        name: "raraa",
        role: "bingung & galak side",

        image: "person2.jpg",

        description:
            "extrovert, galak dan keras suaranya, kalo ngapa-ngapain lama soalnya kebanyakan bingung.",

        traits: [
            "chaos",
            "rajin",
            "random",
            "pemarah"
        ],

        instagram: "https://instagram.com/ratnamahiraanakya1/",
        tiktok: "https://tiktok.com/raaaa_11810/"
    },


    person3: {
        name: "devit",
        role: "heboh & crewet side",

        image: "person3.jpg",

        description:
            "hopeless, criwis banget wow, ga sabaran banget, realistis dan idiot banget.",

        traits: [
            "chaotic",
            "yapping",
            "funny",
            "energetic"
        ],

        instagram: "https://instagram.com/devitalyss/",
        tiktok: "https://tiktok.com/devie0o/"
    },


    person4: {
        name: "nessa",
        role: "lantam & idiot side",

        image: "zipzup.jpg",

        description:
            "mulutnya kaya gapernah sekolah, idiot final, kelakuan diluar nalar dan prediksi.",

        traits: [
            "funny",
            "energetic",
            "idiot",
            "mikirnya lama"
        ],

        instagram: "https://instagram.com/nnaisyarst4_/",
        tiktok: "https://tiktok.com/nesaauwy_/"
    }

};


/* =========================
   MEMORY DATA
========================= */

const memories = [

    {
        image: "memory01.jpeg",
        title: "the beginning",
        text: "one of those ordinary moments that eventually became something special."
    },

    {
        image: "memory02.jpeg",
        title: "random afternoon",
        text: "nothing planned. somehow one of the memories we remember the most."
    },

    {
        image: "memory03.jpeg",
        title: "just us",
        text: "four people doing absolutely nothing and still having the best time."
    },

    {
        image: "memory04.jpeg",
        title: "that day",
        text: "we probably didn't realize how memorable this moment would become."
    },

    {
        image: "memory05.jpeg",
        title: "little chaos",
        text: "the kind of chaos that only makes sense when we're together."
    },

    {
        image: "memory06.jpeg",
        title: "good times",
        text: "another tiny piece of our story."
    },

    {
        image: "memory07.jpeg",
        title: "somewhere between",
        text: "between jokes, conversations and random plans."
    },

    {
        image: "memory08.jpeg",
        title: "another memory",
        text: "a moment worth keeping."
    },

    {
        image: "memory09.jpeg",
        title: "same people",
        text: "different day, same energy."
    },

    {
        image: "memory10.jpeg",
        title: "laughing again",
        text: "probably laughing at something that wasn't even funny."
    },

    {
        image: "memory11.jpeg",
        title: "small moments",
        text: "the little things always end up meaning the most."
    },

    {
        image: "memory12.jpeg",
        title: "another chapter",
        text: "one more chapter in our little story."
    },

    {
        image: "memory13.jpeg",
        title: "together",
        text: "just being around each other was enough."
    },

    {
        image: "memory14.jpeg",
        title: "random day",
        text: "another completely random day that became a favorite."
    },

    {
        image: "memory15.jpeg",
        title: "good company",
        text: "some people just make everything feel easier."
    },

    {
        image: "memory16.jpeg",
        title: "no plans",
        text: "the best memories are sometimes the ones we never planned."
    },

    {
        image: "memory17.jpeg",
        title: "another one",
        text: "one more photo, one more story."
    },

    {
        image: "memory18.jpeg",
        title: "the usual chaos",
        text: "nothing unusual. just us being us."
    },


];


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1500);

});


/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


window.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* =========================
   PROFILE MODAL
========================= */

const profileModal =
    document.getElementById("profileModal");

const profileImage =
    document.getElementById("profileImage");

const profileName =
    document.getElementById("profileName");

const profileRole =
    document.getElementById("profileRole");

const profileDescription =
    document.getElementById("profileDescription");

const profileTraits =
    document.getElementById("profileTraits");

const instagramLink =
    document.getElementById("instagramLink");

const tiktokLink =
    document.getElementById("tiktokLink");

const profileClose =
    document.getElementById("profileClose");


document
    .querySelectorAll(".person-card")
    .forEach((card) => {

        card.addEventListener("click", () => {

            const personID =
                card.dataset.person;

            const person =
                people[personID];

            if (!person) return;


            profileImage.src =
                person.image;

            profileImage.alt =
                person.name;


            profileName.textContent =
                person.name;

            profileRole.textContent =
                person.role;

            profileDescription.textContent =
                person.description;


            profileTraits.innerHTML = "";


            person.traits.forEach((trait) => {

                const tag =
                    document.createElement("span");

                tag.textContent =
                    trait;

                profileTraits.appendChild(tag);

            });


            instagramLink.href =
                person.instagram;

            tiktokLink.href =
                person.tiktok;


            profileModal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });


function closeProfileModal() {

    profileModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


profileClose.addEventListener(
    "click",
    closeProfileModal
);


profileModal
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeProfileModal
    );


/* =========================
   MEMORY MODAL
========================= */

const memoryModal =
    document.getElementById("memoryModal");

const memoryImage =
    document.getElementById("memoryImage");

const memoryNumber =
    document.getElementById("memoryNumber");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryText =
    document.getElementById("memoryText");

const memoryClose =
    document.getElementById("memoryClose");

const prevMemory =
    document.getElementById("prevMemory");

const nextMemory =
    document.getElementById("nextMemory");


let currentMemory = 0;


function showMemory(index) {

    if (index < 0) {

        index =
            memories.length - 1;

    }


    if (index >= memories.length) {

        index = 0;

    }


    currentMemory = index;


    const memory =
        memories[currentMemory];


    memoryImage.src =
        memory.image;

    memoryImage.alt =
        memory.title;


    memoryNumber.textContent =
        `${String(currentMemory + 1).padStart(2, "0")} / 25`;


    memoryTitle.textContent =
        memory.title;


    memoryText.textContent =
        memory.text;

}


document
    .querySelectorAll(".memory")
    .forEach((memory) => {

        memory.addEventListener("click", () => {

            const index =
                Number(memory.dataset.index);

            showMemory(index);

            memoryModal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });


nextMemory.addEventListener("click", () => {

    showMemory(currentMemory + 1);

});


prevMemory.addEventListener("click", () => {

    showMemory(currentMemory - 1);

});


function closeMemoryModal() {

    memoryModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


memoryClose.addEventListener(
    "click",
    closeMemoryModal
);


memoryModal
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeMemoryModal
    );


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape"
    ) {

        closeProfileModal();

        closeMemoryModal();

        playlist.classList.remove("open");

    }


    if (
        memoryModal.classList.contains("active")
    ) {

        if (event.key === "ArrowRight") {

            showMemory(currentMemory + 1);

        }


        if (event.key === "ArrowLeft") {

            showMemory(currentMemory - 1);

        }

    }

});


/* =========================
   MUSIC PLAYER
========================= */

const audio =
    document.getElementById("audioPlayer");

const musicPlayer =
    document.getElementById("musicPlayer");

const musicNavBtn =
    document.getElementById("musicNavBtn");

const playPause =
    document.getElementById("playPause");

const prevSong =
    document.getElementById("prevSong");

const nextSong =
    document.getElementById("nextSong");

const songTitle =
    document.getElementById("songTitle");

const songArtist =
    document.getElementById("songArtist");

const progressBar =
    document.getElementById("progressBar");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const volumeBar =
    document.getElementById("volumeBar");

const playlist =
    document.getElementById("playlist");

const playlistToggle =
    document.getElementById("playlistToggle");

const closePlaylist =
    document.getElementById("closePlaylist");

const playlistItems =
    document.getElementById("playlistItems");

const albumArt =
    document.getElementById("albumArt");


const musicPlaylist = [

    {
        title: "Lihat Dengar Rasakan",
        artist: "Sheila On 7",
        file: "LihatDengarRasakan.mp3"
    },

    {
        title: "song two",
        artist: "artist name",
        file: "music/song02.mp3"
    },

    {
        title: "song three",
        artist: "artist name",
        file: "music/song03.mp3"
    },

];


let currentSong = 0;


audio.volume =
    Number(volumeBar.value);


function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "0:00";
    }


    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        Math.floor(seconds % 60);


    return `${minutes}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;

}


function loadSong(index) {

    currentSong = index;

    const song =
        musicPlaylist[currentSong];


    audio.src =
        song.file;


    songTitle.textContent =
        song.title;


    songArtist.textContent =
        song.artist;


    progressBar.value = 0;

    currentTime.textContent =
        "0:00";


    playlistItems
        .querySelectorAll(".playlist-item")
        .forEach((item, itemIndex) => {

            item.classList.toggle(
                "active",
                itemIndex === currentSong
            );

        });

}


function playSong() {

    audio.play()
        .then(() => {

            playPause.textContent = "❚❚";

            musicPlayer.classList.add("active");

        })
        .catch(() => {

            console.log(
                "browser blocked playback until user interaction."
            );

        });

}


function pauseSong() {

    audio.pause();

    playPause.textContent = "▶";

}


playPause.addEventListener("click", () => {

    if (audio.paused) {

        playSong();

    } else {

        pauseSong();

    }

});


nextSong.addEventListener("click", () => {

    currentSong++;

    if (
        currentSong >= musicPlaylist.length
    ) {

        currentSong = 0;

    }

    loadSong(currentSong);

    playSong();

});


prevSong.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {

        currentSong =
            musicPlaylist.length - 1;

    }

    loadSong(currentSong);

    playSong();

});


audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;


    const progress =
        (audio.currentTime /
            audio.duration) *
        100;


    progressBar.value =
        progress;


    currentTime.textContent =
        formatTime(audio.currentTime);

});


audio.addEventListener(
    "loadedmetadata",
    () => {

        duration.textContent =
            formatTime(audio.duration);

    }
);


progressBar.addEventListener(
    "input",
    () => {

        if (!audio.duration) return;


        audio.currentTime =
            (progressBar.value / 100) *
            audio.duration;

    }
);


volumeBar.addEventListener(
    "input",
    () => {

        audio.volume =
            Number(volumeBar.value);

    }
);


audio.addEventListener(
    "ended",
    () => {

        currentSong++;

        if (
            currentSong >= musicPlaylist.length
        ) {

            currentSong = 0;

        }


        loadSong(currentSong);

        playSong();

    }
);


/* NAV MUSIC BUTTON */

musicNavBtn.addEventListener(
    "click",
    () => {

        musicPlayer.classList.toggle(
            "active"
        );

    }
);


/* PLAYLIST */

function renderPlaylist() {

    playlistItems.innerHTML = "";


    musicPlaylist.forEach(
        (song, index) => {

            const item =
                document.createElement("div");


            item.className =
                "playlist-item";


            if (
                index === currentSong
            ) {

                item.classList.add(
                    "active"
                );

            }


            item.innerHTML = `

                <span class="playlist-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <div class="playlist-details">

                    <strong>
                        ${song.title}
                    </strong>

                    <small>
                        ${song.artist}
                    </small>

                </div>

                ${
                    index === currentSong
                        ? `<span class="playlist-playing">♪</span>`
                        : ""
                }

            `;


            item.addEventListener(
                "click",
                () => {

                    loadSong(index);

                    playSong();

                }
            );


            playlistItems.appendChild(item);

        }
    );

}


playlistToggle.addEventListener(
    "click",
    () => {

        playlist.classList.toggle(
            "open"
        );

    }
);


closePlaylist.addEventListener(
    "click",
    () => {

        playlist.classList.remove(
            "open"
        );

    }
);


/* INITIAL SONG */

loadSong(0);

renderPlaylist();


/* =========================
   MARQUEE PAUSE ON HOVER
========================= */

const marquee =
    document.querySelector(".marquee-track");


marquee.addEventListener(
    "mouseenter",
    () => {

        marquee.style.animationPlayState =
            "running";

    }
);


marquee.addEventListener(
    "mouseleave",
    () => {

        marquee.style.animationPlayState =
            "running";

    }
);