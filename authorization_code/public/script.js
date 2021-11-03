console.log("i hate u js");

var isam = false;
var ispm = false;

function getAM(){
    console.log("clicked");
    isam = true;
    ispm = false;
    document.getElementById("ampmLabel").innerHTML = "<b> AM </b>";
};

function getPM(){
    isam = false;
    ispm = true;
    document.getElementById("ampmLabel").innerHTML = "<b> PM </b>";
};

function check(){
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    
    console.log(hours);
    console.log(minutes);
    console.log(isam);
    console.log(ispm);
};