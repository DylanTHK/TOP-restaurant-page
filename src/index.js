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
    homeTab.textContent = "Home";
    homeTab.classList.add("header-tabs", "active");
    homeTab.addEventListener("click", () => createHomePage());
    
    const menuTab = document.createElement("div");
    menuTab.textContent = "Menu";
    menuTab.classList.add("header-tabs");
    menuTab.addEventListener("click", () => console.log("Initialise menu-Tab"));
    
    const contactTab = document.createElement("div");
    contactTab.textContent = "Contact";
    contactTab.classList.add("header-tabs");
    contactTab.addEventListener("click", () => console.log("Initialise Contact Tab"));
    
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



