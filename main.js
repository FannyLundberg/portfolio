/* Import av moduler */
// Vid klick på Utbildning i menyn
import { aboutEducationList } from './modules/education.mjs';
// Vid klick på Arbetslivserfarenhet i menyn
import { aboutWorkList } from './modules/workExperience.mjs';
// Vid klick på Projekt i menyn
import { aboutProjectList } from './modules/projects.mjs';
// Vid klick på Om mig i menyn
import { aboutMeList } from './modules/aboutMe.mjs';


// Hämta variabler
const sectionContent = document.getElementById("sectionContent");
const menuBtn = document.getElementById("menuBtn");


/* Skapa element */
// Profilbild till första sidan
const profileImgHome = document.createElement("img");
profileImgHome.src = "./img/profilbild.jpg";
profileImgHome.id = "bigProfileImg";

// H1 till första sidan
const homeH1 = document.createElement("h1");
homeH1.innerText = "Fanny Lundberg"

// H2 till första sidan
const homeH2 = document.createElement("h2");
homeH2.innerHTML = "Blivande Front End Developer" + "</br>" + "Examen i juni 2023"

// Appenda nya elementen
sectionContent.append(profileImgHome, homeH1, homeH2);


// Klick på hamburgermeny
menuBtn.addEventListener("click", (openMenu));


// Visa meny
function openMenu() {

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

    // För att inte skapa fler ul och li vid tryck på meny
    const menuDisplayed = viewOpenMenu + homeMenu + aboutEducationMenu + aboutWorkMenu + + aboutProjectMenu + aboutMeMenu;
    
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


// Funktion som körs om "Hem" är klickad
function homePage() {
    location.reload();
}