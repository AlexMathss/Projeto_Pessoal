var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("Form3");

var next1 = document.getElementById(next1);
var next2 = document.getElementById(next2);
var back1 = document.getElementById(back1);
var back2 = document.getElementById(back2);

next1.onclick = function() {
    form1.style.left = "-450px";
    form2.style.left = "40px";
}