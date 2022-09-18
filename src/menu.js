function createMenuPage() {
    // reset main content
    const mainContent = document.querySelector(".main-content");
    mainContent.textContent = "";
    
    // reset nav bar (remove all active and find menu, add active)
    const navTabs = document.querySelectorAll("#content");

    // main content 
    const burgersSection = createMenuItem("The Basic Karen", "Why else are you here?");
    const friesSection = createMenuItem("Karen Fries", "Why else are you here?");
    const drinksSection = createMenuItem("Karen Milkshake", "Why else are you here?");

    // appending HTML elements to content
    mainContent.append(burgersSection, friesSection, drinksSection);
}

// function to create menu
function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("sections");

    const sectionHead = document.createElement("p");
    sectionHead.classList.add("section-head");
    sectionHead.textContent = name;
    
    const foodImage = document.createElement("img");
    foodImage.classList.add("menu-image");
    foodImage.src = `./src/images/${name.toLowerCase().replaceAll(" ", "-")}.jpeg`;
    foodImage.alt = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.append(sectionHead, foodImage, foodDescription);

    return menuItem;
}

export default createMenuPage;