var navbtn = document.getElementById("navbar-btn");
var nav    = document.getElementById("navigation");

console.log("hej");

navbtn.addEventListener("click", function() {
    console.log("clikc");
    nav.classList.toggle("shown-navigation");
})

