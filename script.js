// Hämta variabler
const smallImgMenu = document.getElementById("smallImgMenu");
const educationBtn = document.getElementById("educationBtn");
const workExperienceBtn = document.getElementById("workExperienceBtn");
const aboutMeBtn = document.getElementById("aboutMeBtn");
const projectBtn = document.getElementById("projectBtn");
const contactBtn = document.getElementById("contactBtn");
const sectionContent = document.getElementById("sectionContent");
const menuBtn = document.getElementById("menuBtn");


// Skapa element - profilbild
let profileImg = document.createElement("img");
profileImg.src = "./img/profilbild.jpg";
profileImg.id = "bigProfileImg";

// Skapa element - H1
let homeH1 = document.createElement("h1");
homeH1.innerText = "Fanny Lundberg"

// Skapa element - H2
let homeH2 = document.createElement("h2");
homeH2.innerHTML = "Blivande Front End Developer." + "</br>" + "Examen i juni 2023."

// Appenda nya element
sectionContent.append(profileImg, homeH1, homeH2);


// Klick på hamburgarmeny
menuBtn.addEventListener("click", (openMenu));

// Visa meny
function openMenu() {
    console.log("Klick på knappen")

    sectionContent.innerHTML = "";

    // Skapa en ul
    const viewOpenMenu = document.createElement("ul");
    sectionContent.append(viewOpenMenu);

    // Skapa listan - Hem
    const homeMenu = document.createElement("li");
    homeMenu.innerText = "Hem";

    // Skapa listan - Utbildning
    const aboutEducationMenu = document.createElement("li");
    aboutEducationMenu.innerText = "Utbildning";
    
    // Skapa listan - Arbetslivserfarenhet
    const aboutWorkMenu = document.createElement("li");
    aboutWorkMenu.innerText = "Arbetslivserfarenhet";

    // Skapa listan - Projekt
    const aboutProjectMenu = document.createElement("li");
    aboutProjectMenu.innerText = "Projekt";

    // Skapa listan - Om mig
    const aboutMeMenu = document.createElement("li");
    aboutMeMenu.innerText = "Om mig";

    // Appenda li på ul
    viewOpenMenu.append(homeMenu, aboutEducationMenu, aboutWorkMenu, aboutProjectMenu, aboutMeMenu);

    let menuDisplayed = viewOpenMenu + homeMenu + aboutEducationMenu + aboutWorkMenu + aboutMeMenu + aboutProjectMenu;

    // För att inte skapa fler ul och li vid tryck på meny
    if (menuDisplayed) {
        menuBtn.addEventListener("click", () => { 
            viewOpenMenu.remove();            
        });
    }

    // Göra li till länkar/knappar
    homeMenu.addEventListener("click", (homePage));
    aboutEducationMenu.addEventListener("click", (aboutEducationList));
    aboutWorkMenu.addEventListener("click", (aboutWorkList));
    aboutMeMenu.addEventListener("click", (aboutMeList));
    aboutProjectMenu.addEventListener("click", (aboutProjectList));
}

// Funktion som körs om "Utbildning" är klickad
function homePage() {
    location.reload();
}

// Funktion som körs om "Utbildning" är klickad
function aboutEducationList() {

    sectionContent.innerHTML = "";

    // H1
    const aboutSchoolH1 = document.createElement("h1");
    aboutSchoolH1.innerText = "Utbildning"
    sectionContent.append(aboutSchoolH1);
}

// Funktion som körs om "Arbetslivserfarenhet" är klickad
function aboutWorkList() {

    sectionContent.innerHTML = "";

    // H1
    const aboutWorkH1 = document.createElement("h1");
    aboutWorkH1.innerText = "Arbetslivserfarenhet"
    sectionContent.append(aboutWorkH1);
}

// Funktion som körs om "Kontakt" är klickad
function aboutProjectList() {

    sectionContent.innerHTML = "";

    // H1
    const aboutContactH1 = document.createElement("h1");
    aboutContactH1.innerText = "Projekt"
    sectionContent.append(aboutContactH1);
}

// Funktion som körs om "Om mig" är klickad
function aboutMeList() {

    sectionContent.innerHTML = "";

    // H1
    const aboutMeH1 = document.createElement("h1");
    aboutMeH1.innerText = "Hej, Jag heter Fanny Lundberg."

    // H2
    const aboutMeH2 = document.createElement("h2");
    aboutMeH2.innerText = "Jag är blivande Front End Developer."

    // P
    const aboutMeP = document.createElement("p");
    aboutMeP.innerText = "Jag studerar just nu på Medieinstitutet där jag har lär mig HTML, CSS (Sass) och JavaScript (React). Jag tar examen i juni 2023."
    
    // Appenda nya element
    sectionContent.append(aboutMeH1, aboutMeH2, aboutMeP);
}

// Funktion som körs om "Kontakt" är klickad
function aboutContactList() {

    sectionContent.innerHTML = "";

    // H1
    const aboutContactH1 = document.createElement("h1");
    aboutContactH1.innerText = "Kontakt"
    sectionContent.append(aboutContactH1);
}