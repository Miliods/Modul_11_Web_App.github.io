let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#3b3b3b"

let remove_btn1 = document.getElementById("remove_btn1");
let add_btn1 = document.getElementById("add_btn1");

let remove_btn2 = document.getElementById("remove_btn2");
let add_btn2 = document.getElementById("add_btn2");

let remove_btn3 = document.getElementById("remove_btn3");
let add_btn3 = document.getElementById("add_btn3");


let item = " "
let num_count = 0
let num_count1 = 0
let num_count2 = 0

number = document.getElementById("count");
number1 = document.getElementById("count1");
number2 = document.getElementById("count2");

add_btn1.addEventListener("click", function () {
    tg.MainButton.setText("Burger");
    item = "Burger/$4.99/" + num_count.innerText;
    tg.MainButton.show();
    number.innerText = num_count += 1;
    number.style.display = "block";
})

remove_btn1.addEventListener("click", function () {
    if (num_count > 0) {
        number.innerText = num_count -= 1;
    }
    tg.MainButton.setText("Burger");
    item = "Burger/$4.99";
    tg.MainButton.show();
    number.style.display = "block";
})

add_btn2.addEventListener("click", function () {
    tg.MainButton.setText("Hot-Dog");
    item = "Hot-Dog/$3.99";
    tg.MainButton.show();
    number1.innerText = num_count1 += 1;
    number1.style.display = "block";
})

remove_btn2.addEventListener("click", function () {
    tg.MainButton.setText("Hot-Dog");
    item = "Hot-Dog/$3.99";
    tg.MainButton.show();
    number1.innerText = num_count1 -= 1;
    number1.style.display = "block";
})

add_btn3.addEventListener("click", function () {
    tg.MainButton.setText("Pizza");
    item = "Pizza/$5.99";
    tg.MainButton.show();
    number2.innerText = num_count2 += 1;
    number2.style.display = "block";
})

remove_btn3.addEventListener("click", function () {
    tg.MainButton.setText("Pizza");
    item = "Pizza/$5.99";
    tg.MainButton.show();
    number2.innerText = num_count2 -= 1;
    number2.style.display = "block";
})

// btn1.addEventListener("click", function () {
    
//     tg.MainButton.setText("Burger");
//     item = "Burger/$4.99";
//     tg.MainButton.show();
// });
// btn2.addEventListener("click", function () {
//     tg.MainButton.setText("Hot-Dog");
//     item = "Hot-Dog/$3.99";
//     tg.MainButton.show();
// });
// btn4.addEventListener("click", function () {
//     tg.MainButton.setText("Pizza");
//     item = "Pizza/$5.99";
//     tg.MainButton.show();
// });

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});
