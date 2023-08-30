
var drumButtons = document.querySelectorAll(".drum");
var numberOfDrums = drumButtons.length;
const soundArray = [
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/crash.mp3"
];

for(var i = 0; i < numberOfDrums ; i++) {
    drumButtons[i].addEventListener("click",function () {
        playSound(this.innerHTML);
        playAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function() {
    playSound(event.key);
    playAnimation(event.key);
});

function playSound(key) {
    switch(key) {
        case "w":
            new Audio(soundArray[0]).play();
            break;
        case "a":
            new Audio(soundArray[1]).play();
            break;
        case "s":
            new Audio(soundArray[2]).play();
            break;
        case "d":
            new Audio(soundArray[3]).play();
            break;
        case "j":
            new Audio(soundArray[4]).play();
            break;
        case "k":
            new Audio(soundArray[5]).play();
            break;
        case "l":
            new Audio(soundArray[6]).play();
            break;
        default:
            break;
    }
}

function playAnimation(key) {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed")},1000);
}