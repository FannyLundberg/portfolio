/* Import av moduler */
// Startsida + vid klick på Hem i menyn
import { homePage } from './modules/homepage.mjs';
// Vid klick på Utbildning i menyn
import { aboutEducationList } from './modules/education.mjs';
// Vid klick på Arbetslivserfarenhet i menyn
import { aboutWorkList } from './modules/workExperience.mjs';
// Vid klick på Projekt i menyn
import { aboutProjectList } from './modules/projects.mjs';
// Vid klick på Om mig i menyn
import { aboutMeList } from './modules/aboutMe.mjs';

// Funktion för att visa startsida
homePage();

// Hämta variabler
const sectionContent = document.getElementById("sectionContent");
const menuBtn = document.getElementById("menuBtn");


let menuOpen = false;

// Klick på hamburgermeny
menuBtn.addEventListener("click", () => {

    if (!menuOpen) {
        menuBtn.classList.add("open");
        console.log("Kommer in i if")
        openMenu();
    }/* else {
        menuBtn.classList.remove("open");
        console.log("Kommer in i else")
    }*/
});


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
    
    // Göra li till länkar/knappar
    homeMenu.addEventListener("click", (homePage));
    aboutEducationMenu.addEventListener("click", (aboutEducationList));
    aboutWorkMenu.addEventListener("click", (aboutWorkList));
    aboutMeMenu.addEventListener("click", (aboutMeList));
    aboutProjectMenu.addEventListener("click", (aboutProjectList));

    /*
    // För att inte skapa fler ul och li vid tryck på meny
    const menuDisplayed = viewOpenMenu + homeMenu + aboutEducationMenu + aboutWorkMenu + + aboutProjectMenu + aboutMeMenu;
    
    if (menuDisplayed) {
        menuBtn.addEventListener("click", () => { 
            homePage()   
            console.log("In i if-sats meny visas")   
        });
    }
    */
};