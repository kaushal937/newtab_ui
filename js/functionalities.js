setInterval(function (){
    let q = document.getElementById("title");
    let con;
    if(con == 0){
        q.textContent = "Old Tab";
        con = 1;
    }else{
        q.textContent = "New Tab";
        con = 0;
    }
}, 800);

window.addEventListener("keypress", mainfunc);

var aff = Math.floor(Math.random()*10);

var sH = window.screen.height - 30;

function mainfunc(event){
    var ans = (event.key);
    if(ans == "Enter")
    {
        var searchval = document.getElementById("searchvalue");

        googleurl = "https://www.google.com/search?q="+searchval.value;
        window.open(googleurl);

        searchHist(searchval);
        // document.getElementById("searchvalue").value="";
    }
}

function searchHist(val){

}

var b;
function change1(){
    if(b==1){
        document.getElementById("nonn").style.marginLeft="-300px";
        document.getElementById("ui").style.transform = "rotate(0deg)";
        document.getElementById("blanc").style.display = "none";
        return b=0;
    }
    else{
        document.getElementById("nonn").style.marginLeft = "30px";
        document.getElementById("ui").style.transform = "rotate(-180deg)";
        document.getElementById("blanc").style.display = "inline";
        return b=1;
    }
}

function hider(){
    document.getElementById("nonn").style.marginLeft="-300px";
    document.getElementById("ui").style.transform = "rotate(0deg)";
    document.getElementById("blanc").style.display = "none";
    return b=0;
}

function search(){
    let inp = document.getElementById("bse").value.toUpperCase();

    let list = document.getElementById("bm");

    let sl = list.getElementsByTagName("li");

    for(var i=0; i<sl.length; i++){
        let a = sl[i].getElementsByTagName("a")[0];

        let tContent = a.textContent;

        if(tContent.toUpperCase().indexOf(inp) > -1){
            sl[i].style.display = "";
        }else{
            sl[i].style.display = "none";
        }
    }
}

document.addEventListener("keydown", yoink);

function yoink(eve){
    var a = (eve.key.toUpperCase());
    if(
        a == "Y"
        && eve.ctrlKey
    ){
        var searchval = document.getElementById("searchvalue");

        googleurl = "https://www.youtube.com/results?search_query="+searchval.value;
        window.open(googleurl);

        // document.getElementById("searchvalue").value="";
    }
    if(
        a == "U"
        && eve.ctrlKey
    ){
        var searchval = document.getElementById("searchvalue");

        googleurl = "https://"+searchval.value;
        window.open(googleurl);

        // document.getElementById("searchvalue").value="";
    }

    if(
        a == "1"
        && eve.ctrlKey
    ){
        window.open("https://www.netflix.com/in/");
    }
    if(
        a == "2"
        && eve.ctrlKey
    ){
        window.open("https://mail.google.com/");
    }
    if(
        a == "3"
        && eve.ctrlKey
    ){
        window.open("https://www.primevideo.com/")
    }
    if(
        a == "4"
        && eve.ctrlKey
    ){
        window.open("https://aniwatch.to/home")
    }
    if(
        a == "5"
        && eve.ctrlKey
    ){
        window.open("https://www.youtube.com/")
    }
    if(
        a == "6"
        && eve.ctrlKey
    ){
        window.open("https://www.reddit.com/")
    }
    if(
        a == "7"
        && eve.ctrlKey
    ){
        window.open("https://www.instagram.com/")
    }
    if(
        a == "8"
        && eve.ctrlKey
    ){
        window.open("https://web.whatsapp.com/")
    }
}

let muteIcon = true

let allGirlsAreTheSame = new Audio("audio/allGirlsAreTheSame.mp3");
let romanticHomicide = new Audio("audio/romanticHomicide.mp3");
let nightWorkSlowed = new Audio("audio/nightWorkSlowed.mp3");
let apocalypseInst = new Audio("audio/apocalypseInstrumental.mp3");
let bloodPop = new Audio("audio/bloodpop.mp3");
apocalypseInst.loop = true;
allGirlsAreTheSame.loop = true;
romanticHomicide.loop = true;
nightWorkSlowed.loop = true;
bloodPop.loop = true;

let song = apocalypseInst;

function auduino(music){
    if(a == false){
        music.play();
        mbutt.setAttribute("src", "ui/icons/mute.svg");
        a = true;
    }else{
        a = false;
        mbutt.setAttribute("src", "ui/icons/muted.svg");
        stop(music);
    }
}

// let womb = 0;
// 
// slider = document.getElementById("volumes");
// progVal = document.getElementById("vol");
// slider.addEventListener("input", span);
// function span(){
    // progVal.textContent = slider.value;
    // allGirlsAreTheSame.volume = slider.value/100;
    // romanticHomicide.volume = slider.value/100;
    // nightWorkSlowed.volume = slider.value/100;
    // apocalypseInst.volume = slider.value/100;
    // if(womb == 0){
       // :)   
    // }else{
        // if(slider.value == 0){
            // mbutt.setAttribute("src", "ui/icons/muted.svg");
        // }else{
            // mbutt.setAttribute("src", "ui/icons/mute.svg");
        // }
    // }
// }
// progVal.textContent = slider.value;
// let mbutt = document.getElementById("buts");
// let muter = document.getElementById("muter");
// muter.addEventListener("click", setv);
// let mutes;
// function setv(){
    // if(mutes == 0){
        // allGirlsAreTheSame.volume = slider.value/100;
        // romanticHomicide.volume = slider.value/100;
        // nightWorkSlowed.volume = slider.value/100;
        // apocalypseInst.volume = slider.value/100;
// 
        // mbutt.setAttribute("src", "ui/icons/mute.svg");
        // mutes = 1;
    // }else{
        // allGirlsAreTheSame.volume = 0;
        // romanticHomicide.volume = 0;
        // nightWorkSlowed.volume = 0;
        // apocalypseInst.volume = 0;
// 
        // mbutt.setAttribute("src", "ui/icons/muted.svg");
        // mutes = 0;
    // }
// }
// 
// var a = false;
// let allGirlsAreTheSame = new Audio("audio/allGirlsAreTheSame.mp3");
// let romanticHomicide = new Audio("audio/romanticHomicide.mp3");
// let nightWorkSlowed = new Audio("audio/nightWorkSlowed.mp3");
// let apocalypseInst = new Audio("audio/apocalypseInstrumental.mp3");
// let bloodPop = new Audio("audio/bloodpop.mp3");
// apocalypseInst.loop = true;
// allGirlsAreTheSame.loop = true;
// romanticHomicide.loop = true;
// nightWorkSlowed.loop = true;
// bloodPop.loop = true;
// 
// let song = apocalypseInst;
// 
// function auduino(music){
    // if(a == false){
        // music.play();
        // mbutt.setAttribute("src", "ui/icons/mute.svg");
        // a = true;
    // }else{
        // a = false;
        // mbutt.setAttribute("src", "ui/icons/muted.svg");
        // stop(music);
    // }
// }
// function stop(music){
    // music.pause();
    // music.currentTime = 0;
// }
// 
// window.addEventListener("keyup", stmusic)
// function stmusic(eve){
    // var x = (eve.key.toUpperCase())
    // if(
        // x == "H"
        // && eve.altKey
    //    ){
        // setmusic()
    // }
    // if(
        // x == "V"
        // && eve.altKey
    //    ){
        // setv();
    // }
// }
// 
//function setmusic(music){
//    stop(song)
// 
//    song = music
// 
//    song.volume = slider.value/100;
//        // 
//    auduino(song);
//    if(womb == 0){
//        womb = 1;
//    }else{
//        womb = 0;
//    }
//}
// 
// var count;
// var sb = document.getElementById("set");
// var sbb = document.getElementById("sbb");
// var settings = document.getElementById("settings");
// var cont = document.getElementById("conterr");
// let closer = document.getElementById("seCloser");
// sb.addEventListener("click", setter)
// function setter(){
    // if(count == 0){
        // sbb.style.transform = "rotate(0deg)";
        // settings.style.width = "42px";
        // settings.style.height = "42px";
        // cont.style.display = "none";
        // closer.style.display = "none";
        // return count=1;
    // }else{
        // sbb.style.transform = "rotate(-180deg)";
        // settings.style.width = "400px";
        // settings.style.height = "500px";
        // cont.style.display = "flex";
        // closer.style.display = "inline";
        // return count=0;
    // }
// }


function searchSet(){
    let inp = document.getElementById("ssearch").value.toUpperCase();

    let list = document.getElementById("scon");

    let sl = list.getElementsByTagName("section");

    for(var i=0; i<sl.length; i++){
        let a = sl[i].getElementsByTagName("a")[0];

        let tContent = a.textContent;

        if(tContent.toUpperCase().indexOf(inp) > -1){
            sl[i].style.display = "";
        }else{
            sl[i].style.display = "none";
        }
    }
}