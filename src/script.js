// eslint-disable-next-line no-unused-vars
import css from "./styles/style.css";

const prevEl = document.getElementsByClassName("prev")[0];
const nextEl = document.getElementsByClassName("next")[0];

const imgEl1 = document.getElementsByClassName("img1")[0];
const imgEl2 = document.getElementsByClassName("img2")[0];
const imgEl3 = document.getElementsByClassName("img3")[0];

function setActiveElement(el) {
  el.classList.remove("hidden");
  el.classList.add("active");
}

function setHiddenElement(el) {
  el.classList.remove("active");
  el.classList.add("hidden");
}

function carousel(route) {
  const activeItem = document.getElementsByClassName("active")[0];
  if (route === "next") {
    if (activeItem === imgEl1) {
      setActiveElement(imgEl2);
      setHiddenElement(imgEl1);
    } else if (activeItem === imgEl2) {
      setActiveElement(imgEl3);
      setHiddenElement(imgEl2);
    } else {
      setActiveElement(imgEl1);
      setHiddenElement(imgEl3);
    }
  } else if (route === "prev") {
    if (activeItem === imgEl1) {
      setActiveElement(imgEl3);
      setHiddenElement(imgEl1);
    } else if (activeItem === imgEl2) {
      setActiveElement(imgEl1);
      setHiddenElement(imgEl2);
    } else {
      setActiveElement(imgEl2);
      setHiddenElement(imgEl3);
    }
  }
}

prevEl.addEventListener("click", (event) => {
  event.preventDefault();
  carousel("prev");
});

nextEl.addEventListener("click", (event) => {
  event.preventDefault();
  carousel("next");
});

setInterval(() => {
  carousel("next");
}, 2000);
