// Function to create a section with text and an optional image
function createAboutSection(title, text, imageSrc = null) {
  const section = document.createElement("div");
  section.classList.add("about-section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;
  section.appendChild(sectionTitle);

  const sectionText = document.createElement("p");
  sectionText.textContent = text;
  section.appendChild(sectionText);

  if (imageSrc) {
    const sectionImage = document.createElement("img");
    sectionImage.src = imageSrc;
    sectionImage.alt = title;
    sectionImage.classList.add("about-image");
    section.appendChild(sectionImage);
  }

  return section;
}

// Function to create the entire about page
export default function createAboutPage() {
  const content = document.querySelector(".content");
  const aboutContainer = document.createElement("div");

  // Define your about sections
  const historyText =
    "Delicious Eats Restaurant was founded in 1990 by Chef John Doe, who wanted to bring traditional family recipes to a wider audience. Over the years, we have grown into a beloved local establishment known for our authentic dishes and warm, welcoming atmosphere.";
  const philosophyText =
    "Our philosophy is simple: to create delicious, authentic dishes using the freshest ingredients. We believe that food is more than just sustenance—it's a way to connect with our heritage and bring people together.";
  const chefText =
    "Chef John Doe has over 30 years of experience in the culinary world. He started as an apprentice in his family's kitchen, learning the secrets of traditional cooking, and has since traveled the world, honing his craft and bringing new flavors to our menu.";

  // Create sections and append them to the about container
  aboutContainer.appendChild(
    createAboutSection(
      "Our History",
      historyText,
      "https://elcomercio.pe/resizer/Jt_Lp2r6j5Q7cjJ340BjG21iloc=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/AVUQCSKDPVFCRJPQ6NFSASCTNU.jpg"
    )
  );
  aboutContainer.appendChild(
    createAboutSection("Our Philosophy", philosophyText)
  );
  aboutContainer.appendChild(
    createAboutSection(
      "Meet the Chef",
      chefText,
      "https://d1zzxdyvtq79bu.cloudfront.net/context/frontend/landing/header_hero_masonry/chef/chef-72.jpg"
    )
  );
  content.appendChild(aboutContainer);

  return content;
}
