const n = generateRandomInteger(1000, 5000);
let time = 0;
let myTime = 0;
let light1 = document.querySelector("#light1");
let light2 = document.querySelector("#light2");
let light3 = document.querySelector("#light3");
let light4 = document.querySelector("#light4");
let light5 = document.querySelector("#light5");
let light6 = document.querySelector("#light6");
let light7 = document.querySelector("#light7");
let light8 = document.querySelector("#light8");
let light9 = document.querySelector("#light9");
let light11 = document.querySelector("#light11");
let light12 = document.querySelector("#light12");
let light13 = document.querySelector("#light13");
let light14 = document.querySelector("#light14");
let light15 = document.querySelector("#light15");
let light16 = document.querySelector("#light16");
let light17 = document.querySelector("#light17");
let light18 = document.querySelector("#light18");
let light19 = document.querySelector("#light19");
let light20 = document.querySelector("#light20");

function generateRandomInteger(min = 1000,  max = 5000){
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
}

function fila1(){
    light1.classList.add("light-on");
    light5.classList.add("light-on");
    light9.classList.add("light-on");
    light13.classList.add("light-on");
    light17.classList.add("light-on");
    setTimeout(fila2, 2000);
}

function fila2(){
    light2.classList.add("light-on");
    light6.classList.add("light-on");
    light10.classList.add("light-on");
    light14.classList.add("light-on");
    light18.classList.add("light-on");
    setTimeout(fila3, 2000);
}

function fila3(){
    light3.classList.add("light-on");
    light7.classList.add("light-on");
    light11.classList.add("light-on");
    light15.classList.add("light-on");
    light19.classList.add("light-on");
    n = 0;
    getRandom(1000, 5000);
    setTimeout(start, n);
}

function start(){
    let date1 = new Date();
    time = date1.getTime();
    light4.classList.add("light-start");
    light8.classList.add("light-start");
    light12.classList.add("light-start");
    light16.classList.add("light-start");
    light20.classList.add("light-start");
    return time;
}

function handleClick(event1) {
    setTimeout(fila1, 2000);
}

function handleClick(event2) {
    let footer;
    let button = document.querySelector("#avviamento");
    let date = new Date();
    myTime = date.getTime();
    if ((myTime - time) / 1000 > 100){
        footer = document.querySelector("#footer").innerHTML = "HAI CLICCATO TROPPO PRESTO!";
    } else{
        footer = document.querySelector("#footer").innerHTML = (myTime - time) / 1000;
    }
}

let avviamento = document.querySelector("#avviamento");
avviamento.addEvent1Listener("click", handleClick);

let partenza = document.querySelector("#partenza");
partenza.addEvent2Listener("click", handleClick);