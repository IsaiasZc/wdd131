// Footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const menuBtn = document.getElementById("menu-btn");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("open");
  menuBtn.innerHTML = mainNav.classList.contains("open") ? "&#10005;" : "&#9776;";
});
