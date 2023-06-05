import logoSrc from "../imgs/logo.svg";

const header = function () {
  const container = document.createElement("div");
  let nav = document.createElement("ul");
  nav.classList.add("navigation-bar");

  var logo = document.createElement("li");
  logo.classList.add("nav-element");
  var logoImg = document.createElement("img");
  logoImg.src = logoSrc;
  logoImg.alt = "Logo Image";

  logo.appendChild(logoImg);
  nav.appendChild(logo);

  const listItems = ["Home", "Services", "Our Chefs", "Contact Us"];

  const homeButton = document.createElement("li");
  homeButton.classList.add("nav-element");
  homeButton.textContent = listItems[0];
  homeButton.setAttribute("id", "homeButton");
  nav.appendChild(homeButton);

  const servicesButton = document.createElement("li");
  servicesButton.classList.add("nav-element");
  servicesButton.textContent = listItems[1];
  servicesButton.setAttribute("id", "servicesButton");
  nav.appendChild(servicesButton);

  const chefsButton = document.createElement("li");
  chefsButton.classList.add("nav-element");
  chefsButton.textContent = listItems[2];
  chefsButton.setAttribute("id", "chefsButton");
  nav.appendChild(chefsButton);

  const contactButton = document.createElement("li");
  contactButton.classList.add("nav-element");
  contactButton.textContent = listItems[3];
  contactButton.setAttribute("id", "contactButton");
  nav.appendChild(contactButton);

  container.appendChild(nav);

  const content = document.getElementById("content");
  content.appendChild(container);
};

export default header;
