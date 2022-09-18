export default function createHomePage() {
    const mainContent = document.querySelector(".main-content");
    mainContent.textContent = "";

    const logoImage = document.createElement("img");
    logoImage.id = "karen-icon";
    logoImage.src = "images/karen.png";
    logoImage.alt = "Karen Emoji";
    
    // creating Motto Section
    const mottoSection = document.createElement("div");
    const mottoList = [ "Our Motto",
                    "Great Burgers & Rude Service",
                    "Get Ready to live out your",
                    "Karen Dreams"];
    mottoSection.classList.add("motto", "sections");
    mottoList.forEach(motto => {
        const para = document.createElement("p");
        if (motto === "Our Motto") {
            para.classList.add("section-head");
        };
        para.textContent = motto;
        mottoSection.append(para);
    })

    // creating Operating Hours Section
    const operatingSection = document.createElement("div");
    const opsList = ["Operating Hours", "Yes"];
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
    mainContent.append(logoImage, mottoSection, operatingSection);
}
