const body = document.body;
const btnLight = document.querySelector(".light");
const btnDark = document.querySelector(".dark");

function darkMode() {
  body.classList.add("dark-mode");
  btnLight.style.display = "inline-block";
  btnDark.style.display = "none";
}

function lightMode() {
  body.classList.remove("dark-mode");
  btnDark.style.display = "inline-block";
  btnLight.style.display = "none";
}
