//
// Scripts
//
window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Scrollspy
  const section = document.querySelectorAll("section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, (e) => {
    sections[e.id] = e.offsetTop;
  });

  const scrollSpy = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    scrollPosition += 80;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector("a[href*=" + i + "]")?.classList.add("active");
      }
    }
  };

  window.onscroll = scrollSpy;
  scrollSpy();

  // Close menu
  const menuItems = document.querySelectorAll(".navbar-nav a");
  const checkbox = document.getElementById("navbar-checkbox");
  Array.prototype.forEach.call(menuItems, (item) => {
    item.addEventListener("click", () => {
      checkbox.checked = false;
    });
  });
});
