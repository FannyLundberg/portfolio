// Hämta variabler
const sectionContent = document.getElementById("sectionContent");
const menuBtn = document.getElementById("menuBtn");


// Skapa element - profilbild
let profileImg = document.createElement("img");
profileImg.src = "./img/profilbild.jpg";
profileImg.id = "bigProfileImg";

// Skapa element till förstasidan- H1
let homeH1 = document.createElement("h1");
homeH1.innerText = "Fanny Lundberg"

// Skapa element till förstasidan - H2
let homeH2 = document.createElement("h2");
homeH2.innerHTML = "Blivande Front End Developer" + "</br>" + "Examen i juni 2023"

// Appenda nya element på förstasidan
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

    // För att inte skapa fler ul och li vid tryck på meny
    let menuDisplayed = viewOpenMenu + homeMenu + aboutEducationMenu + aboutWorkMenu + + aboutProjectMenu + aboutMeMenu;

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


// Funktion som körs om "Utbildning" är klickad
function aboutEducationList() {

    sectionContent.innerHTML = "";

    // H1 Utbildning
    const educationH1 = document.createElement("h1");
    educationH1.id = "educationH1";
    educationH1.innerText = "Utbildning"

    // H2 Medieinstitutet
    const educationH2Mi = document.createElement("h2");
    educationH2Mi.innerText = "Medieinstitutet (2021 - 2023)"

    // P Medieinstitutet
    const educationPMo = document.createElement("p");
    educationPMo.innerText = "Front End Developer"

    // H2 Södertörns högskola
    const educationH2Sh = document.createElement("h2");
    educationH2Sh.innerText = "Södertörns högskola (2012 - 2015)"

    // P Södertörns högskola
    const educationPSh = document.createElement("p");
    educationPSh.innerText = "Internationella ekonomprogrammet"

    // H2 Gymnasium
    const educationH2Jgs = document.createElement("h2");
    educationH2Jgs.innerText = "Jensen Gymnasium Södra (2007 - 2010)"

    // P Gymnasium
    const educationPJgs = document.createElement("p");
    educationPJgs.innerText = "Företagande och försäljning"

    // Appenda nya element
    sectionContent.append(educationH1, educationH2Mi, educationPMo, educationH2Sh, educationPSh, educationH2Jgs, educationPJgs);
}


// Funktion som körs om "Arbetslivserfarenhet" är klickad
function aboutWorkList() {

    sectionContent.innerHTML = "";

    // H1
    const workH1 = document.createElement("h1");
    workH1.id = "workH1";
    workH1.innerText = "Arbetslivserfarenhet"

    // Div Sergel
    const divSergel = document.createElement("div");
    divSergel.className = "divWork";

    // H2 Sergel Kredittjänster
    const workH2Sergel = document.createElement("h2");
    workH2Sergel.className = "h2Work";
    workH2Sergel.innerText = "Sergel Kredittjänster (2015 - nuvarande)"

    // P Sergel Kredittjänster Bemanningsplanering
    const workPSergel1 = document.createElement("p");
    workPSergel1.innerText = "Bemanningsplanering med huvudansvar för systemförvaltning och utveckling av telefonisystem (CallGuide/ACE, Puzzel)"

    // P Sergel Kredittjänster Inkassohandläggare
    const workPSergel2 = document.createElement("p");
    workPSergel2.innerText = "Inkassohandläggare"

    // Div Student consulting
    const divSc = document.createElement("div");
    divSc.className = "divWork";

    // H2 Student consulting
    const workH2Sc = document.createElement("h2");
    workH2Sc.className = "h2Work";
    workH2Sc.innerText = "Student consulting (2013 - 2015)"

    // P Student consulting
    const workPSc = document.createElement("p");
    workPSc.innerText = "Business support - Personaladministratör"

    // Div KappAhl
    const divKappahl = document.createElement("div");
    divKappahl.className = "divWork";

    // H2 Student consulting
    const workH2Kappahl = document.createElement("h2");
    workH2Kappahl.className = "h2Work";
    workH2Kappahl.innerText = "KappAhl (2009 - 2013)"

    // P Student consulting
    const workPKappahl = document.createElement("p");
    workPKappahl.innerText = "Säljare med ansvar för upplärning av nyanställda, praktikanter etc."

    // Appenda nya element
    sectionContent.append(workH1, divSergel, divSc, divKappahl);
    divSergel.append(workH2Sergel, workPSergel1, workPSergel2, workPSergel2);
    divSc.append(workH2Sc, workPSc);
    divKappahl.append(workH2Kappahl, workPKappahl);
}


// Funktion som körs om "Projekt" är klickad
function aboutProjectList() {

    sectionContent.innerHTML = "";

    // H1
    const projectH1 = document.createElement("h1");
    projectH1.id = "projectH1";
    projectH1.innerText = "Projekt"
    sectionContent.append(projectH1);

    fetch("https://api.github.com/users/FannyLundberg/repos")
    .then(response => response.json())
    .then(data => {
        printProjects(data[6]);
    });
}

// Skriv ut projekt som klickbara
function printProjects(data) {

    // H2
    const projectH2 = document.createElement("h2");
    projectH2.innerText = "Övning 'Strängpoesi': " + " " + data.clone_url;
    sectionContent.append(projectH2);

    projectH2.addEventListener("click", () => {
        console.log(data.clone_url);
    });  
}


// Funktion som körs om "Om mig" är klickad
function aboutMeList() {

    sectionContent.innerHTML = "";

    // H1
    const aboutMeH1 = document.createElement("h1");
    aboutMeH1.id = "aboutMeH1";
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