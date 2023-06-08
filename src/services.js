import imgSrc from "./imgs/v21_102.png";

export default function services() {
  document.body.style.background = "";
  const header = document.querySelector(".navigation-bar");
  header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  const content = document.querySelector("#content");
  content.style = "overflow: scroll";
  const servicesContainer = document.createElement("div");
  const mainTxt = document.createElement("span");
  mainTxt.classList.add("main-text");
  mainTxt.innerHTML = "Our Offerings";
  servicesContainer.appendChild(mainTxt);

  const articles = document.createElement("div");
  articles.classList.add("articles");
  servicesContainer.appendChild(articles);

  const article1 = document.createElement("div");
  article1.classList.add("article");
  const h41 = document.createElement("h4");
  h41.classList.add("bold");
  h41.innerHTML = "Personalized Menus";
  article1.appendChild(h41);
  article1.innerHTML +=
    "One of the main benefits of hiring a private chef is that you get to have a personalized menu that is tailored to your tastes and dietary needs. Your private chef can work with you to design a menu that suits your preferences, whether you're looking for a formal multi-course dinner or a casual family-style meal.";
  articles.appendChild(article1);

  const article2 = document.createElement("div");
  article2.classList.add("article");
  const h42 = document.createElement("h4");
  article2.appendChild(h42);
  h42.classList.add("bold");
  h42.innerHTML = "In-Home Cooking";

  article2.innerHTML +=
    " Another advantage of booking a private chef is that they come to your home to cook. This means you don't have to worry about going out to a restaurant or hosting a large group in a public space. Instead, you can enjoy a high-quality dining experience in the comfort of your own home.";

  articles.appendChild(article2);

  const article3 = document.createElement("div");
  article3.classList.add("article");
  const h43 = document.createElement("h4");
  h43.classList.add("bold");
  h43.innerHTML = "Professional Service";
  article3.appendChild(h43);
  article3.innerHTML +=
    "When you hire a private chef, you can expect a high level of professionalism and attention to detail. Your chef will take care of all the cooking and presentation, as well as clean-up, so you can relax and enjoy your meal without any stress.";

  articles.appendChild(article3);

  const article4 = document.createElement("div");
  article4.classList.add("article");
  const h44 = document.createElement("h4");
  h44.classList.add("bold");
  h44.innerHTML = "Flexibility";
  article4.appendChild(h44);
  article4.innerHTML +=
    "Private chefs are often very flexible when it comes to scheduling and menu options. They can accommodate different dietary restrictions and preferences.";

  articles.appendChild(article4);

  const article5 = document.createElement("div");
  article5.classList.add("article");
  const h45 = document.createElement("h4");
  h45.classList.add("bold");
  h45.innerHTML = "Special Occasions";
  article5.appendChild(h45);
  article5.innerHTML +=
    "Private chefs are a great option for special occasions such as birthdays, anniversaries, or other celebrations. They can help make your event extra special by creating a customized menu and providing a high-quality dining experience that your guests will always remember.";

  articles.appendChild(article5);

  articles.appendChild(article1);
  articles.appendChild(article2);
  articles.appendChild(article3);
  articles.appendChild(article4);
  articles.appendChild(article5);

  const bImg = document.createElement("img");
  bImg.classList.add("bk-photo");
  bImg.src = imgSrc;
  bImg.alt = "Image";
  servicesContainer.appendChild(bImg);

  content.appendChild(servicesContainer);
}
