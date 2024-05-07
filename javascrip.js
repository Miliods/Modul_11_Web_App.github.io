let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#fff";
tg.MainButton.color = "orange"

let btn1 = document.getElementBuId("btn1")

let btn2 = document.getElementBuId("btn2")

let btn3 = document.getElementBuId("btn3")


btn1.addEventListener("click", function(){
    tg.MainButton.setText("btn1 clicked"):
    tg.MainButton.show();
})