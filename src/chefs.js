import imgSrc from "./imgs/v35_121.png";
import render from "./functions/render"
import contactPage from "./contact"

const chefPage = () => {
  const bImg = document.createElement("img");
  bImg.src = imgSrc;
  bImg.alt = "Image";
  bImg.classList.add("chef-img");

  const header = document.querySelector(".navigation-bar");
  header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

  const content = document.getElementById("content");
  document.body.style.background = "black";
  content.appendChild(bImg);

  const button1 = document.createElement("button");
  button1.classList.add("btn-1");
  button1.innerHTML = "CONTACT";
  content.appendChild(button1);

  const h11 = document.createElement("h2");
  h11.classList.add("h11-1");
  h11.innerHTML =
    "Chef Marco's Culinary Creations: Elevating the art of cooking";
  content.appendChild(h11);

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = "Hover to see the menu";

  const menuText = document.createElement("div");
  menuText.classList.add("menu-text");

  const firstChoice = document.createElement("div");
  firstChoice.innerHTML = "First Choice";
  firstChoice.classList.add("frch");
  menuText.appendChild(firstChoice);

  const appetizer = document.createElement("div");
  appetizer.innerHTML =
    "Appetizer: Spring Vegetable Salad with Burrata and Lemon Vinaigrette";
  menuText.appendChild(appetizer);

  const soup = document.createElement("div");
  soup.innerHTML =
    "Soup: Creamy Carrot and Ginger Soup with Toasted Pistachios";
  menuText.appendChild(soup);

  const entree = document.createElement("div");
  entree.innerHTML =
    "Entrée: Pan-Seared Salmon with Wild Mushroom Risotto and Roasted Asparagus";
  menuText.appendChild(entree);

  const dessert = document.createElement("div");
  dessert.innerHTML =
    "Dessert: Rhubarb and Strawberry Crisp with Vanilla Ice Cream";
  menuText.appendChild(dessert);

  content.appendChild(menu);

  menu.addEventListener("mouseover", () => {
    menu.innerHTML = "";
    menu.classList.add("hover");
    content.removeChild(button1);
    menu.appendChild(menuText);
  });

  menu.addEventListener("mouseout", () => {
    menu.removeChild(menuText);
    menu.classList.remove("hover");
    menu.innerHTML = "Hover to see the menu";
    content.appendChild(button1);
  });

  button1.addEventListener("click", () => {
    render();
    contactPage();
  });
};

export default chefPage;
