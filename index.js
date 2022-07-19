let kontostand = 100;
document.querySelector("#kontostand").innerHTML = kontostand + "€";

function run() {
    const dice = Math.round(Math.random() * 5 + 1);
    // document.querySelector("#dice").innerHTML = dice;
    console.log(dice)

    switch (dice) {
        case 1: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-one fa-4x wuerfel niete"; break;
        case 2: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-two fa-4x wuerfel niete"; break;
        case 3: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-three fa-4x wuerfel niete"; break;
        case 4: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-four fa-4x wuerfel niete"; break;
        case 5: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-five fa-4x wuerfel niete"; break;
        case 6: document.querySelector(".wuerfel").classList = "fa-solid fa-dice-six fa-4x wuerfel gewinn";
        const music = new Audio('sounds/mixkit-retro-game-notification-212.wav');
        music.play();
        music.loop = false;
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