// Get button and set content
scrollBtn = document.getElementById("ScrollToTopBtn");
scrollBtn.title = "Back to top";
scrollBtn.innerHTML = "<span class='material-icons'>north</span>";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {setScrollBtnVisibility()};

function setScrollBtnVisibility() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}