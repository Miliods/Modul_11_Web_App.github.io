let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function () {
        tg.MainButton.setText("Burger qoshildi!");
        item = "Burger $4.99";
        tg.MainButton.show();
});

btn2.addEventListener("click", function () {
        tg.MainButton.setText("Hot-Dog qosholdi!");
        item = "Hot-Dog $3.99";
        tg.MainButton.show();
});

btn3.addEventListener("click", function () {
        tg.MainButton.setText("Pizza qoshildi!");
        item = "Pizza $5.99";
        tg.MainButton.show();
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});


// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p);







