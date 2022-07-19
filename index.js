let kontostand = 100;
document.querySelector("#kontostand").innerHTML = kontostand + "€";

function run() {
    const dice = Math.round(Math.random() * 5 + 1);
    document.querySelector("#dice").innerHTML = dice;

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