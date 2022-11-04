const toggleNavigation = () => {
  const navigationLinks = document.querySelector("[data-nav-links]")
  
  // checking the class name, if navigation link has  hidden name or not
  if (navigationLinks.classList.contains("hidden")) {
  // if found, remove the class
    navigationLinks.classList.remove("hidden");
  } else {
    navigationLinks.classList.add("hidden");
  }
}