var totalpoints=0;
var moleInterval;
var intervalTime = 1000;

function start(){
    console.log('start');
    document.getElementById("mole").style.visibility='hidden';
    document.getElementById("dirt").style.visibility="hidden";
    document.getElementById("start").style.visibility='hidden';
    document.getElementById("home").style.visibility='visible';
    for(var i=0;i<2;i++){
        document.getElementsByClassName("points")[i].style.visibility="visible";
    }
    for(var i=0;i<6;i++){
        document.getElementsByClassName("dirt")[i].style.visibility="visible";
    }
    moleInterval = setInterval(appearMole, intervalTime);
}

function appearMole() {
    console.log('1');
    console.log('2');
    var random=Math.floor(Math.random()*6)+1;
    document.getElementById("mole"+random).style.visibility="visible";
    setTimeout(() => {
        for(var i=0;i<6;i++){
            document.getElementsByClassName("mole")[i].style.visibility="hidden";
        }
    }, 900);
}

function home() {
    console.log('home page');
    gameRunning = false;
    clearInterval(moleInterval);

    for(var i=0;i<2;i++){
        document.getElementsByClassName("points")[i].style.visibility="hidden";
    }
    for(var i=0;i<6;i++){
        document.getElementsByClassName("dirt")[i].style.visibility="hidden";
    }
    document.getElementById("mole").style.visibility='visible';
    document.getElementById("dirt").style.visibility="visible";
    document.getElementById("start").style.visibility='visible';
    document.getElementById("home").style.visibility='hidden';
    totalpoints=0;
    document.getElementById("totalpoints").innerHTML=totalpoints;
}



function clicked(){
    document.getElementById("totalpoints").innerHTML=totalpoints++;
}