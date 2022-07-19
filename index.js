let kontostand = 100;
document.querySelector("#kontostand").innerHTML = kontostand + "€";

function run() {
    const dice = Math.round(Math.random() * 5 + 1);
    // document.querySelector("#dice").innerHTML = dice;
    console.log(dice)

    switch (dice) {
        case 1: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-one fa-4x wuerfel niete";
        const music2 = new Audio('sounds/mixkit-losing-bleeps-2026.wav');
        music2.play();
        music2.volume = 0.2;
        music2.loop = false;
        music2.playbackRate = 2;
        music2.pause; 
        break;

        case 2: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-two fa-4x wuerfel niete"; 
        const music1 = new Audio('sounds/mixkit-losing-bleeps-2026.wav');
        music1.play();
        music1.volume = 0.2;
        music1.loop = false;
        music1.playbackRate = 2;
        music1.pause;
        break;

        case 3: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-three fa-4x wuerfel niete";
        const music3 = new Audio('sounds/mixkit-losing-bleeps-2026.wav');
        music3.play();
        music3.volume = 0.2;
        music3.loop = false;
        music3.playbackRate = 2;
        music3.pause; 
        break;

        case 4: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-four fa-4x wuerfel niete"; 
        const music4 = new Audio('sounds/mixkit-losing-bleeps-2026.wav');
        music4.play();
        music4.volume = 0.2;
        music4.loop = false;
        music4.playbackRate = 2;
        music4.pause;
        break;

        case 5: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-five fa-4x wuerfel niete";
        const music5 = new Audio('sounds/mixkit-losing-bleeps-2026.wav');
        music5.play();
        music5.volume = 0.2;
        music5.loop = false;
        music5.playbackRate = 2;
        music5.pause; 
        break;

        case 6: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-six fa-4x wuerfel gewinn";
        const music = new Audio('sounds/mixkit-retro-game-notification-212.wav');
        music.play();
        music.loop = false;
        music.volume = 0.2;
        music.playbackRate = 2;
        music.pause;
        break;
    }

    if (dice == 6) {
        kontostand += 5;
    } else {
        kontostand -= 1;
    };

    document.querySelector("#kontostand").innerHTML = kontostand + "€";
};

function reset() {
    kontostand = 100;
    document.querySelector("#kontostand").innerHTML = kontostand + "€";
}; 