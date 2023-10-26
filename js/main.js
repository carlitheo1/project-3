// JS scripts placed here
function myFunction() {
    var x = document.getElementById("brokenav");
    if (x.className === "broke-bear-header-bar") {
      x.className += " responsive";
    } else {
      x.className = "broke-bear-header-bar";
    }
  }