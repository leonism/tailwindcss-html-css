const toggleNavigation = () => {
  const navigationLinks = document.querySelector("[data-nav-links]");

  // checking the class name, if navigation link has  hidden name or not
  if (navigationLinks.classList.contains("hidden")) {
    // if found, remove the class
    navigationLinks.classList.remove("hidden");
  } else {
    // if not, add the class
    navigationLinks.classList.add("hidden");
  }
};
