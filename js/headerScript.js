// W3Schools (2024), demonstrates how to implement functionality to a dropdown list.
function dropdownFunction() {
  document.getElementById("dropdown-items").classList.toggle("showLinks");
}

function dropdownFunctionResponsive() {
  document.getElementById("dropdown-items-responsive").classList.toggle("showLinksResponsive");
}

// Close the dropdown if the user clicks anywhere else on the website (W3Schools, 2024).
window.onclick = function(event) {
  // Website view
  if (!event.target.matches('.course-btn-style')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let index;

    for (index = 0; index < dropdowns.length; index++) {
      let openDropdown = dropdowns[index];
      if (openDropdown.classList.contains('showLinks')) {
          openDropdown.classList.remove('showLinks');
      }
    }
  }

  // Mobile view
  if (!event.target.matches('.drop-btn-responsive')) {
    let dropdowns = document.getElementsByClassName("dropdown-content-responsive");
    let index;

    for (index = 0; index < dropdowns.length; index++) {
      let openDropdown = dropdowns[index];
      if (openDropdown.classList.contains('showLinksResponsive')) {
          openDropdown.classList.remove('showLinksResponsive');
      }
    }
  }
}

/*
Reference List:

W3Schools. 2024. How TO - Clickable Dropdown. [Online]. Available at: https://www.w3schools.com/howto/howto_js_dropdown.asp [Accessed 06 October 2024].

*/