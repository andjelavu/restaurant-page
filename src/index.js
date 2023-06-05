import "./styles/style.css";
import "./styles/services.css";
import "./styles/chefs.css";
import "./styles/contact.css";
import render from "./functions/render.js";
import header from "./functions/header.js";
import homePage from "./home.js";
import servicesPage from "./services.js";
import chefPage from "./chefs.js";
import contactPage from "./contact.js";

header();
homePage();

const homeButton = document.getElementById("homeButton");
const servicesButton = document.getElementById("servicesButton");

homeButton.addEventListener("click", function () {
  render();
  homePage();
});

servicesButton.addEventListener("click", function () {
  render();
  servicesPage();
});

const chefsButton = document.getElementById("chefsButton");
chefsButton.addEventListener("click", function () {
  render();
  chefPage();
});

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", function () {
  render();
  contactPage();
});
