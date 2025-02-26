let menuItems = [];

async function fetchMenuData() {
  try {
    const response = await fetch("./menu.json");
    const data = await response.json();
    menuItems = data.menu;
    displayMenu("all");
  } catch (error) {
    console.error("Error fetching the menu data:", error);
  }
}

function displayMenu(category) {
  const menuList = document.getElementById("menu-list");
  menuList.innerHTML = "";

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category.toLowerCase() === category);

  filteredItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemImage = document.createElement("div");
    menuItemImage.classList.add("menu-item-image");
    menuItemImage.style.backgroundImage = `url(${item.image})`;

    const menuItemDetails = document.createElement("div");
    menuItemDetails.classList.add("menu-item-details");

    const dishName = document.createElement("h2");
    dishName.classList.add("dish-name");
    dishName.textContent = item.name;

    const dishPrice = document.createElement("span");
    dishPrice.classList.add("dish-price");
    dishPrice.textContent = item.price;

    const dishDescription = document.createElement("p");
    dishDescription.classList.add("dish-description");
    dishDescription.textContent = item.description;

    menuItemDetails.appendChild(dishName);
    menuItemDetails.appendChild(dishPrice);
    menuItemDetails.appendChild(dishDescription);

    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemDetails);

    menuList.appendChild(menuItem);
  });
}

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const category = event.target.getAttribute("data-category");
    displayMenu(category);
  });
});

fetchMenuData();
