// Hämta variabler
let smallImgMenu = document.getElementById("smallImgMenu");
let educationBtn = document.getElementById("educationBtn");
let workExperienceBtn = document.getElementById("workExperienceBtn");
let aboutMeBtn = document.getElementById("aboutMeBtn");
let projectBtn = document.getElementById("projectBtn");
let contactBtn = document.getElementById("contactBtn");
let sectionContent = document.getElementById("sectionContent");

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


// Klick på lilla bilden i menyn / hemknapp
smallImgMenu.addEventListener("click", (homePage));

function homePage() {
    sectionContent.innerHTML = ""

    sectionContent.append(profileImg, homeH1, homeH2);
}


// Klick på Utbildningsknappen
educationBtn.addEventListener("click", (education));

function education() {
    sectionContent.innerHTML = ""

    // Skapa element - H1
    let headingEducation = document.createElement("h1");
    headingEducation.innerText = "Utbildning"

    // Skapa element - p
    let pEducation = document.createElement("p");
    pEducation.innerText = "Här ska det stå om utbildning."

    // Appenda nya elementen
    sectionContent.append(headingEducation, pEducation);
}


// Klick på Arbetslivserfarenhetsknappen
workExperienceBtn.addEventListener("click", (workExperience));

function workExperience() {
    sectionContent.innerHTML = ""

    // Skapa element - H1
    let headingWork = document.createElement("h1");
    headingWork.innerText = "Arbetslivserfarenhet"
    
    // Skapa element - p
    let pWork = document.createElement("p");
    pWork.innerText = "Här ska det stå om arbetslivserfarenhet."

    // Appenda nya elementen
    sectionContent.append(headingWork, pWork);
}


// Klick på Om mig-knappen
aboutMeBtn.addEventListener("click", (aboutMe));

function aboutMe() {
    sectionContent.innerHTML = ""

    // Skapa element - H1
    let headingMe = document.createElement("h1");
    headingMe.innerText = "Om mig"

    // Skapa element - p
    let pMe = document.createElement("p");
    pMe.innerText = "Här ska det stå om mig."

    // Appenda nya elementen
    sectionContent.append(headingMe, pMe);
}


// Klick på Projektknappen
projectBtn.addEventListener("click", (projects));

function projects() {
    sectionContent.innerHTML = ""

    // Skapa element - H1
    let headingProject = document.createElement("h1");
    headingProject.innerText = "Projekt"
    sectionContent.append(headingProject);

    // Skapa element - p
    let pProjects = document.createElement("p");
    pProjects.innerText = "Här ska det länkas till projekt."

    // Appenda nya elementen
    sectionContent.append(headingProject, pProjects);
}


// Klick på Kontaktknappen
contactBtn.addEventListener("click", (contact));

function contact() {
    sectionContent.innerHTML = ""

    // Skapa element - H1
    let headingContact = document.createElement("h1");
    headingContact.innerText = "Kontakt"

    // Skapa element - p
    let pContact = document.createElement("p");
    pContact.innerText = "Här ska det stå om hur man kontaktar mig."

    // Appenda nya elementen
    sectionContent.append(headingContact, pContact);
}