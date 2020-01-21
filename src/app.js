import "./index.css";
import "@fortawesome/fontawesome-free/js/all";
import jump from "../node_modules/jump.js/dist/jump.module";
import AOS from "../node_modules/aos/dist/aos";
import "../node_modules/aos/dist/aos.css";

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

// Smooth Scroll

document
  .getElementById("home-link")
  .addEventListener("click", () => jump("#home"));
document
  .getElementById("about-link")
  .addEventListener("click", () => jump("#about"));
document
  .getElementById("registration-link")
  .addEventListener("click", () => jump("#registration"));
document
  .getElementById("schedule-link")
  .addEventListener("click", () => jump("#schedule"));
document
  .getElementById("pricing-link")
  .addEventListener("click", () => jump("#pricing"));
document
  .getElementById("contact-link")
  .addEventListener("click", () => jump("#contact"));
document
  .getElementById("registration-link-btn")
  .addEventListener("click", () => jump("#registration"));
document
  .getElementById("topics-link-btn")
  .addEventListener("click", () => jump(".topics"));

// Topics fade-in

AOS.init({
  offset: 100,
  duration: 1500
});

// function appearOnScroll() {
//   const topics = document.querySelectorAll(".topic");
//   const screenPos = window.innerHeight - 150;
//   topics.forEach(topic => {
//     const pos = topic.getBoundingClientRect().top;
//     if (pos < screenPos) {
//       topic.classList.add("appear");
//     }
//   });
// }

// window.addEventListener("scroll", appearOnScroll);
