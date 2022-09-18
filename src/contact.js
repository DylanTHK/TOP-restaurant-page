function createContactPage() {
    const mainContent = document.querySelector(".main-content");
    mainContent.textContent = "";

    const sectionHead = document.createElement("h1");
    sectionHead.textContent = "Contact Us";
    sectionHead.classList.add("section-head");

    const instagramLink = document.createElement("a");
    const instagramLogo = document.createElement("i");
    const instagramText = document.createElement("p");
    instagramLink.classList.add("links");
    instagramLogo.classList.add("fa-brands", "fa-instagram");
    instagramText.textContent = "Instagram";
    instagramLink.append(instagramLogo, instagramText);

    const phoneLink = document.createElement("a");
    const phoneLogo = document.createElement("i");
    const phoneText = document.createElement("p");
    phoneLink.classList.add("links");
    phoneLogo.classList.add("fa-solid", "fa-phone");
    phoneText.textContent = "#123456789";
    phoneLink.append(phoneLogo, phoneText);

    const mapLink = document.createElement("a");
    mapLink.classList.add("links", "map");
    mapLink.textContent = "Having trouble with google maps in 2022?";
    const mapImage = document.createElement("img");
    mapImage.src = "images/karen-location.png";
    mapImage.alt = "Google Maps Location";
    mapImage.classList.add("map-image");
    mapLink.appendChild(mapImage);


    mainContent.append(sectionHead, instagramLink, phoneLink, mapLink);
}

export default createContactPage;