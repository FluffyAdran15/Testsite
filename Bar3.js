var i = 0;

window.onload = move()


function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("Bar");
    var width = 0;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 90) {
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
