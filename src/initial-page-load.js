import Img from "./assets/la-plaza-bar-grill.jpg";

export default function initialPage() {
  const content = document.querySelector(".content");
  const title = document.createElement("h1");
  const img = new Image();
  img.src = Img;
  const subtitle = document.createElement("h2");
  const description = document.createElement("p");

  title.textContent = "Delicious Eats Restaurant";
  subtitle.textContent = "Welcome to Delicious Eats";
  description.textContent =
    "At Delicious Eats, we believe in serving up only the finest, most mouth-watering dishes. Our chefs use only the freshest ingredients to create meals that are both beautiful and delicious. Whether you're in the mood for a quick bite or a full-course meal, we've got something for everyone. Come visit us today and experience the best food in town!";

  content.appendChild(title);
  content.appendChild(img);
  content.appendChild(subtitle);
  content.appendChild(description);

  return content;
}
