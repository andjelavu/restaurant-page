import "./styles/style.css";
import "./styles/services.css";
import "./styles/chefs.css";
import "./styles/contact.css";
import render from "./functions/render";
import header from "./functions/header";
import homePage from "./home";
import servicesPage from "./services";
import chefPage from "./chefs";
import contactPage from "./contact";

header();
homePage();

const homeButton = document.getElementById("homeButton");
const servicesButton = document.getElementById("servicesButton");

homeButton.addEventListener("click", () => {
  render();
  homePage();
});

servicesButton.addEventListener("click", () => {
  render();
  servicesPage();
});

const chefsButton = document.getElementById("chefsButton");
chefsButton.addEventListener("click", () => {
   render();
  chefPage();
});

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", () => {
  render();
  contactPage();
});
