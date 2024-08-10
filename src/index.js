import "./style.css";
import initialPage from "./initial-page-load";
import createMenuPage from "./menu";
import createAboutPage from "./about";

const content = document.querySelector(".content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  initialPage();
});
menuBtn.addEventListener("click", () => {
  content.textContent = "";
  createMenuPage();
});
aboutBtn.addEventListener("click", () => {
  content.textContent = "";
  createAboutPage();
});

initialPage();
