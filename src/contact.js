import imgSrc from "./imgs/contact.png";
const contactUs = function () {
  document.body.style.background = "";

  const container = document.createElement("div");
  container.classList.add("fl-1");

  const header = document.querySelector(".navigation-bar");
  header.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

  const img = document.createElement("img");
  img.classList.add("img-11");
  img.src = imgSrc;
  img.alt = "Image";

  const content = document.getElementById("content");
  container.appendChild(img);

  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.name = "email";
  inputEmail.placeholder = "Your email";
  inputEmail.required = true;
  inputEmail.classList.add("frm");

  const inputMsg = document.createElement("textarea");
  inputMsg.name = "message";
  inputMsg.placeholder = "Would you like to book us?..";
  inputMsg.required = true;
  inputMsg.rows = 20;
  inputMsg.style.width = "600px";
  inputMsg.classList.add("frm");

  const submit = document.createElement("button");
  submit.name = "submit";
  submit.innerHTML = "submit";
  submit.classList.add("submit");

  form.appendChild(inputEmail);
  form.appendChild(inputMsg);
  form.appendChild(submit);
  container.appendChild(form);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  content.appendChild(container);
};

export default contactUs;
