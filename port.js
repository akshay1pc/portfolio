function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }


  // Select the navbar
const navbar = document.getElementById("macbook-nav");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove the sticky class when you leave the scroll position
function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute makeSticky function
window.onscroll = function() {
  makeSticky();
};
