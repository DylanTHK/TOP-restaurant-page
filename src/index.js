import "./home.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";


// functions for initialising
function createHeaders() {
    const cafeName = document.createElement("h1");
    cafeName.textContent = "Karen's Kafe";
    return cafeName;
}

function createNavBar() {
    const navBar = document.createElement("header");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");

    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    homeTab.classList.add("header-tabs", "active");
    menuTab.classList.add("header-tabs");
    contactTab.classList.add("header-tabs");

    navBar.append(homeTab, menuTab, contactTab);

    return navBar;
}

function createMainContent() {
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    return mainContent
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © 2022 DylanTHK`;
  
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/DylanTHK";
    githubLink.target = "blank_";
  
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
  
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
  
    return footer;
}

function initialisePage() {
    const content = document.querySelector("#content");
    const header = createHeaders();
    const nav = createNavBar();
    const mainContent = createMainContent();
    const footer = createFooter();

    content.append(header, nav, mainContent, footer);
    createHomePage();
}

initialisePage();

// event listeners to call relevant modules
// headerButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const content = button.textContent;
//         if (content === "Home") {
//             createHomePage();
//         } else if (content === "Menu") {
//             createMenuPage();
//         } else {
//             createContactPage();
//         }
//     })
// })

