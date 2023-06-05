const render = function () {
  const content = document.getElementById("content");
  content.style = "";

  while (content.children.length > 1) {
    content.children[1].remove();
  }
};

export default render;
