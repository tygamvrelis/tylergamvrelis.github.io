/* Toggle between adding and removing the "responsive" class to topnav when the
   user clicks on the icon */
function resize() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    // For future reference, '.menubtn' is the classname in the html
    if (!event.target.matches(".menubtn")) {

      var dropdowns = document.getElementById("myTopnav");
      if (dropdowns.classList.contains('responsive')) {
          dropdowns.classList.remove('responsive');
      }
    }
    
}
