import "./index.css";
import "./mobile.css";
import "@fortawesome/fontawesome-free/js/all";
import jump from "../node_modules/jump.js/dist/jump.module";
import AOS from "../node_modules/aos/dist/aos";
import "../node_modules/aos/dist/aos.css";

// Counter
(function () {
  setInterval(() => {
    const eventDate = new Date("oct 30 2020, 10:00:00").getTime();
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
  logo = document.querySelector(".site-logo img");
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.add("header-nav");
    logo.classList.add("logo-sm");
  } else {
    navbar.classList.remove("header-nav");
    logo.classList.remove("logo-sm");
  }

  if (screen.width > 768) {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
  }
};

document.querySelector(".hamburger").addEventListener("click", function () {
  const burger = document.querySelectorAll(".line");
  const navLinks = document.querySelectorAll(".nav-list-item");
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("open");

  this.classList.toggle("menu-active");

  burger.forEach((line) => {
    line.classList.toggle("blue-x");
  });
  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      navbar.classList.remove("open");
      burger.forEach((line) => {
        line.classList.remove("blue-x");
      });
      this.classList.remove("menu-active");
    });
  });
});

// Smooth Scroll

const links = [
  { id: "home-link", anchor: "#home" },
  { id: "about-link", anchor: "#about" },
  { id: "registration-link", anchor: "#registration" },
  { id: "schedule-link", anchor: "#schedule" },
  { id: "pricing-link", anchor: "#pricing" },
  { id: "contact-link", anchor: "#contact" },
  { id: "registration-link-btn", anchor: "#registration" },
  { id: "topics-link-btn", anchor: ".topics" },
];

links.forEach((link) => {
  document
    .getElementById(link.id)
    .addEventListener("click", () => jump(link.anchor));
});

// Topics fade-in

AOS.init({
  offset: 100,
  duration: 1500,
});
