var i = 0;

window.onload = Java()


function Java() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("dour");
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 30) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}






