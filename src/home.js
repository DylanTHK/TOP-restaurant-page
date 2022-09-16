export default function createHomePage() {
    // items required to assist in creating contents
    const imageAttributes = {
        id: "karen-icon",
        src: "/src/images/karen.png",
        alt: "Karen Emoji"
    };
    const mottoList = ["Our Motto", 
                    "Great Burgers & Rude Service", 
                    "Get Ready to live out your", 
                    "Karen Dreams"];
    const opsList = ["Operating Hours", "Yes"];
    
    // header content
    const content = document.querySelector("#content");
    const cafeName = document.createElement("h1");
    const header = document.createElement("header");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    
    cafeName.textContent = "Karen's Kafe";
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    homeTab.classList.add("header-tabs", "active");
    menuTab.classList.add("header-tabs");
    contactTab.classList.add("header-tabs");

    header.append(homeTab, menuTab, contactTab);

    // main content 
    const mainContent = document.createElement("div");
    const logoImage = document.createElement("img");
    const mottoSection = document.createElement("div");
    const operatingSection = document.createElement("div");

    Object.keys(imageAttributes).forEach(attribute => {
        logoImage.setAttribute(attribute, imageAttributes[attribute]);
    });
    mainContent.classList.add("main-content");
    mottoSection.classList.add("motto", "sections");
    mottoList.forEach(motto => {
        const para = document.createElement("p");
        if (motto === "Our Motto") {
            para.classList.add("section-head");
        };
        para.textContent = motto;
        mottoSection.append(para);
    })
    operatingSection.classList.add("ops-hours", "sections");
    opsList.forEach(ops => {
        const para = document.createElement("p");
        if (ops === "Operating Hours") {
            para.classList.add("section-head");
        };
        para.textContent = ops;
        operatingSection.append(para);
    })

    // appending HTML elements to content
    content.append(cafeName, header, mainContent);
    mainContent.append(logoImage, mottoSection, operatingSection);
}
