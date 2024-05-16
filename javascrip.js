let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"


let item1 = " "
let n_count1 = 0


let count1 = document.getElementById("count1");
let remove_btn1 = document.getElementById("rbtn1");
let add_btn1 = document.getElementById("abtn1");

add_btn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Burger");
    tg.MainButton.show();
    item1 = "Burger/3.49/" + count1.innerText;

});
remove_btn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Burger/3.49/" + count1.innerText;
    tg.MainButton.setText("Burger");
    tg.MainButton.show();
});

let count2 = document.getElementById("count2");
let remove_btn2 = document.getElementById("rbtn2");
let add_btn2 = document.getElementById("abtn2");
let item2 = " ";
let n_count2 = 0;
remove_btn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "Hot-Dog/2.48/" + count2.innerText;
    tg.MainButton.setText("Hot-Dog");
    tg.MainButton.show();
});



add_btn2.addEventListener("click", function (){
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "Hot-Dog/2.48/" + count2.innerText;
    tg.MainButton.setText("Hot-Dog");
    tg.MainButton.show();
});


let count3 = document.getElementById("count3");
let remove_btn3 = document.getElementById("rbtn3");
let add_btn3 = document.getElementById("abtn3");
let item3 = " ";
let n_count3 = 0;
remove_btn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "Pizza/3.99/" + count3.innerText;

    tg.MainButton.setText("Pizza");
    tg.MainButton.show();
});



add_btn3.addEventListener("click", function (){
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "Pizza/3.99/" + count3.innerText;
    tg.MainButton.setText("Pizza");
    tg.MainButton.show();
});


count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = " ";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "inline-block";
    item4 = "Lavash/5/" + count4.innerText;

    tg.MainButton.setText("Lavash");
    tg.MainButton.show();
});



abtn4.addEventListener("click", function (){
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "Lavash/5/" + count4.innerText;

    tg.MainButton.setText("Lavash");
    tg.MainButton.show();
});



Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 +  "|" + item3 + "|" + item4
    tg.sendData(data);
});
