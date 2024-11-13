let time = document.getElementById("timer");

setInterval(() =>{
    let t = new Date();
    time.innerHTML = t.toLocaleTimeString();
})

let date = document.getElementById("date");

setInterval(() =>{
    var d = new Date();
    var da = d.getDay();
    date.innerHTML = d.toLocaleDateString();

    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.querySelector("#day").innerHTML = dayList[da];

})

function ggsearch(){
    var searchval = document.getElementById("searchvalue");

    googleurl = "https://www.google.com/search?q="+searchval.value;
    window.open(googleurl);
}