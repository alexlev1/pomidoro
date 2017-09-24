/* -- Старт программы -- */

function myPomidor() {
    var start = document.getElementById("start");
    var work = document.getElementById("work");
    var rest = document.getElementById("rest");
    var time = document.getElementById("time");

    start.className = 'pomidor-start unvis clear';
    work.className = 'pomidor-work vis clear';
    setTimeout(timer20, 300000);
    setTimeout(timer15, 600000);
    setTimeout(timer10, 900000);
    setTimeout(timer5, 1200000);
    setTimeout(soundRest, 1500000);

}

function soundRest() {
    work.className = 'pomidor-work unvis clear';
    rest.className = 'pomidor-rest vis clear';
    var audio = new Audio();
    audio.src = "sound.mp3";
    audio.autoplay = true;
    setTimeout(soundWork, 305000);
}

function soundWork() {
    rest.className = 'pomidor-rest unvis clear';
    start.className = 'pomidor-start vis clear';
    var audio = new Audio();
    audio.src = "sound.mp3";
    audio.autoplay = true;
}

function timer20() {
    time.className = "pomidor-foto time-20"
}

function timer15() {
    time.className = "pomidor-foto time-15"
}

function timer10() {
    time.className = "pomidor-foto time-10"
}

function timer5() {
    time.className = "pomidor-foto time-5"
}