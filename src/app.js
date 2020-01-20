import "./index.css";
import "@fortawesome/fontawesome-free/js/all";

// Counter
(function() {
  setInterval(() => {
    const eventDate = new Date("apr 3 2020, 10:00:00").getTime();
    const currentTime = new Date().getTime();

    const diff = eventDate - currentTime;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
})();

// Navbar
const navbar = document.querySelector("header"),
  logo = document.querySelector(".site-logo img"),
  navList = document.querySelector(".nav-list");
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.add("header-nav");
    logo.classList.add("logo-sm");
  } else {
    navbar.classList.remove("header-nav");
    logo.classList.remove("logo-sm");
  }
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("open");
  document.querySelectorAll(".line").forEach(line => {
    line.classList.toggle("blue-x");
  });
});
