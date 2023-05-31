const buttonClick = document.getElementById("button-toggle");
const body = document.querySelector("body");
const buttonImg = document.querySelector(".button-img");

buttonClick.addEventListener("click", () => {
  const darkMode = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkMode) {
    buttonImg.setAttribute("src", "./src/img/sun.png");
  } else {
    buttonImg.setAttribute("src", "./src/img/moon.png");
  }
});
