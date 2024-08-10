// Function to create a menu section
function createMenuSection(title, items) {
  const section = document.createElement("div");
  section.classList.add("menu-section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;
  section.appendChild(sectionTitle);

  items.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    menuItem.appendChild(itemDescription);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;
    itemPrice.style.fontWeight = "bold";
    menuItem.appendChild(itemPrice);

    section.appendChild(menuItem);
  });

  return section;
}

// Function to create the entire menu page
export default function createMenuPage() {
  const container = document.querySelector(".content");
  const menuContainer = document.createElement("div");

  // Define your menu sections and items
  const appetizers = [
    {
      name: "Traditional Soup",
      description:
        "A delicious, hearty soup made with fresh vegetables and spices.",
      price: 5.99,
    },
    {
      name: "Grilled Corn",
      description: "Corn on the cob grilled to perfection, served with butter.",
      price: 3.99,
    },
  ];

  const mainCourses = [
    {
      name: "Grilled Chicken",
      description: "Juicy chicken grilled with traditional herbs and spices.",
      price: 12.99,
    },
    {
      name: "Beef Stew",
      description: "Tender beef slow-cooked in a rich, savory sauce.",
      price: 14.99,
    },
  ];

  const desserts = [
    {
      name: "Rice Pudding",
      description: "Creamy rice pudding with a hint of cinnamon.",
      price: 4.99,
    },
    {
      name: "Fruit Tart",
      description: "Fresh fruit tart with a buttery crust.",
      price: 5.99,
    },
  ];

  // Create sections and append them to the menu container
  menuContainer.appendChild(createMenuSection("Appetizers", appetizers));
  menuContainer.appendChild(createMenuSection("Main Courses", mainCourses));
  menuContainer.appendChild(createMenuSection("Desserts", desserts));
  container.appendChild(menuContainer);

  return container;
}
