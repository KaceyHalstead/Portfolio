const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar_menu')

//Display Mobile Menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


var FoodDrinkVideo = document.getElementById("FoodDrink");
var FDButton = document.getElementById("FDButton");

var InteractionVideo = document.getElementById("Interaction");
var IButton = document.getElementById("IButton");

var DayNight = document.getElementById("DayNight");
var DNButton = document.getElementById("DNButton");

var PickUp = document.getElementById("PickUp");
var PUButton = document.getElementById("PUButton");

var Inventory = document.getElementById("Inventory");
var InButton = document.getElementById("InButton");

var Trolley = document.getElementById("Trolley");
var TButton = document.getElementById("TButton");

var WholeLevel = document.getElementById("WholeLevel");
var WLButton = document.getElementById("WLButton");

var UserInterfaces = document.getElementById("UserInterfaces");
var UIButton = document.getElementById("UIButton");

var Sort = document.getElementById("Sort");
var SButton = document.getElementById("SButton");

var WLSC = document.getElementById("WLSC");
var WLSCButton = document.getElementById("WLSCButton");

var LogIn = document.getElementById("LogIn");
var LIButton = document.getElementById("LIButton");

function FDPlayPause() {
    if (FoodDrinkVideo.paused) {
        FoodDrinkVideo.play();
        FDButton.innerHTML = "Pause";
    }
    else{
        FoodDrinkVideo.pause();
        FDButton.innerHTML = "Play";
    }
}

function IPlayPause(){
    if (InteractionVideo.paused) {
        InteractionVideo.play();
        IButton.innerHTML = "Pause";
    }
    else{
        InteractionVideo.pause();
        IButton.innerHTML = "Play";
    }
}

function DNPlayPause(){
    if (DayNight.paused) {
        DayNight.play();
        DNButton.innerHTML = "Pause";
    }
    else{
        DayNight.pause();
        DNButton.innerHTML = "Play";
    }
}

function PUPlayPause(){
    if (PickUp.paused) {
        PickUp.play();
        PUButton.innerHTML = "Pause";
    }
    else{
        PickUp.pause();
        PUButton.innerHTML = "Play";
    }
}

function InPlayPause(){
    if (Inventory.paused) {
        Inventory.play();
        InButton.innerHTML = "Pause";
    }
    else{
        Inventory.pause();
        InButton.innerHTML = "Play";
    }
}

function TPlayPause(){
    if (Trolley.paused) {
        Trolley.play();
        TButton.innerHTML = "Pause";
    }
    else{
        Trolley.pause();
        TButton.innerHTML = "Play";
    }
}

function WLPlayPause(){
    if (WholeLevel.paused) {
        WholeLevel.play();
        WLButton.innerHTML = "Pause";
    }
    else{
        WholeLevel.pause();
        WLButton.innerHTML = "Play";
    }
}

function UIPlayPause(){
    if (UserInterfaces.paused) {
        UserInterfaces.play();
        UIButton.innerHTML = "Pause";
    }
    else{
        UserInterfaces.pause();
        UIButton.innerHTML = "Play";
    }
}

function SPlayPause(){
    if (Sort.paused) {
        Sort.play();
        SButton.innerHTML = "Pause";
    }
    else{
        Sort.pause();
        SButton.innerHTML = "Play";
    }
}

function WLSCPlayPause(){
    if (WLSC.paused) {
        WLSC.play();
        WLSCButton.innerHTML = "Pause";
    }
    else{
        WLSC.pause();
        WLSCButton.innerHTML = "Play";
    }
}

function LIPlayPause(){
    if (LogIn.paused) {
        LogIn.play();
        LIButton.innerHTML = "Pause";
    }
    else{
        LogIn.pause();
        LIButton.innerHTML = "Play";
    }
}
