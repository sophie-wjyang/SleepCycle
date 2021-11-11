
function submit(){
    var alarm_time = document.getElementById("alarm_time").value;
    var sleep_time = document.getElementById("sleep_time").value;
    console.log("alarm time:")
    console.log(alarm_time);
    console.log("sleep time:");
    console.log(sleep_time);

};

//temporary dropdown for song choice:
function get1(){
    console.log("Song 1 chosen");
    document.getElementById("songLabel").innerHTML = "Song 1";
};

function get2(){
    console.log("Song 2 chosen");
    document.getElementById("songLabel").innerHTML = "Song 2";
};

function get3(){
    console.log("Song 3 chosen");
    document.getElementById("songLabel").innerHTML = "Song 3";
};