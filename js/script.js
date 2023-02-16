// © Lambros Hatzinikolaou, 2023
// SMOOTH SCROLLING

  const links = document.querySelectorAll(".nav .nav-link a");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(el) {
    el.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }


// SCROLL TOP

  // Set a variable for our button element.
  const scrollTopButton = document.getElementById('js--back-to-top');

  // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
  const scrollFunc = function scrollFunc() {
    // Get the current scroll value
    let scrollY = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (scrollY > 250) {
      scrollTopButton.className = "back-to-top show";
    } else {
      scrollTopButton.className = "back-to-top hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = function scrollToTop() {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const topDistance = document.documentElement.scrollTop || document.body.scrollTop;

    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (topDistance > 0) {
      window.requestAnimationFrame(scrollToTop);
      // ScrollTo takes an x and a y coordinate.
      // Increase the '10' value to get a smoother/slower scroll!
      window.scrollTo(0, topDistance - topDistance / 10);
    }
  };

  // When the button is clicked, run our ScrolltoTop function above!
  scrollTopButton.onclick = function(el) {
    el.preventDefault();
    scrollToTop();
  }


  // TOGGLE
  const toggleMenu = document.querySelector(".toggle-menu");
  const nav = document.querySelector(".nav--js");
  const icon = document.querySelector(".toggle-menu ion-icon");

// Listen for click event on toggle var
  toggleMenu.addEventListener('click', function() {
    nav.classList.toggle("show");
    const menuIcon = document.getElementsByTagName('ion-icon')[0];
    const closeIcon = document.getElementsByTagName('ion-icon')[1];

    if (menuIcon.classList.contains('show')) {
      menuIcon.classList.add('close');
      menuIcon.classList.remove('show');
      closeIcon.classList.remove('close');
      closeIcon.classList.add('show');
    } else {
      menuIcon.classList.add('show');
      menuIcon.classList.remove('close');
      closeIcon.classList.remove('show');
      closeIcon.classList.add('close');
    }
  }, false);

// Mode changer
const mode_button = document.querySelector('#switch');
const body = document.querySelector('body');
const link = document.querySelectorAll('a');

mode_button.addEventListener("click", (el)=> {
    const elem = el.target;
    const getAriaChecked = elem.getAttribute("aria-checked");
    const isAriaChecked = (getAriaChecked === "true");


    elem.setAttribute("aria-checked", isAriaChecked ? false : true);
    body.classList.toggle('dark-mode');
    for(let i = 0; i < link.length; i++){
        link[i].classList.toggle('dark-link');
    }
})