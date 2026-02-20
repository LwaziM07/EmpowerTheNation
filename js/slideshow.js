// W3Schools (2024), demonstrates how to implement an automatic slideshow.
let index = 0;
carousel();

// To give slideshow functionality (W3Schools, 2024).
function carousel() {
  let subIndex;
  let slides = document.getElementsByClassName("slides-image");

  for (subIndex = 0; subIndex < slides.length; subIndex++) {
    slides[subIndex].style.display = "none";
  }

  index++;

  if (index > slides.length) {
    index = 1
  }

  slides[index - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}

/*
Reference List:

W3Schools. 2024. How TO - Slideshow. [Online]. Available at: https://www.w3schools.com/howto/howto_js_slideshow.asp [Accessed 16 October 2024].
*/