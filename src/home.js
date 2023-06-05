import plant from "./imgs/plant.png";

const homePage = function () {
  document.body.style.background = "";
  const content = document.getElementById("content");
  const header = document.querySelector(".navigation-bar");
  header.style.backgroundColor = "#efd3b8";

  const container = document.createElement("div");
  container.setAttribute("id", "container");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");
  heroText.textContent = "Booking a private chef has never been easier.";

  setTimeout(function () {
    heroText.classList.add("after");
  }, 2500);

  hero.appendChild(heroText);

  const bookbtn = document.createElement("button");
  bookbtn.setAttribute("id", "bookbtn");
  bookbtn.textContent = "Book Now";
  hero.appendChild(bookbtn);

  container.appendChild(hero);

  const plantImg = document.createElement("img");
  plantImg.setAttribute("id", "plant");
  plantImg.src = plant;
  plantImg.alt = "Plant imgh";
  container.appendChild(plantImg);

  content.appendChild(container);
};

export default homePage;
