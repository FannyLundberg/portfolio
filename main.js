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
const menuBtn = document.getElementById("menuBtn");
const homeMenu = document.getElementById("homeMenu");
const aboutEducationMenu = document.getElementById("aboutEducationMenu");
const aboutWorkMenu = document.getElementById("aboutWorkMenu");
const aboutMeMenu = document.getElementById("aboutMeMenu");
const aboutProjectMenu = document.getElementById("aboutProjectMenu");


// Klick på hamburgermeny
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open');
});


// Klick i menyn kallar funktion som skriver ut rätt sida
homeMenu.addEventListener("click", (homePage));
aboutEducationMenu.addEventListener("click", (aboutEducationList));
aboutWorkMenu.addEventListener("click", (aboutWorkList));
aboutProjectMenu.addEventListener("click", (aboutProjectList));
aboutMeMenu.addEventListener("click", (aboutMeList));