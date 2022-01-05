// Hämta variabler
const sectionContent = document.getElementById("sectionContent");
const menuBtn = document.getElementById("menuBtn");


// Skapa element - profilbild
const profileImgHome = document.createElement("img");
profileImgHome.src = "./img/profilbild.jpg";
profileImgHome.id = "bigProfileImg";

// Skapa element till förstasidan- H1
const homeH1 = document.createElement("h1");
homeH1.innerText = "Fanny Lundberg"

// Skapa element till förstasidan - H2
const homeH2 = document.createElement("h2");
homeH2.innerHTML = "Blivande Front End Developer" + "</br>" + "Examen i juni 2023"

// Appenda nya element på förstasidan
sectionContent.append(profileImgHome, homeH1, homeH2);


// Klick på hamburgarmeny
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


// Funktion som körs om "Utbildning" är klickad
function aboutEducationList() {

    sectionContent.innerHTML = "";

    // H1
    const educationH1 = document.createElement("h1");
    educationH1.id = "educationH1";
    educationH1.innerText = "Utbildning";

    // Div Medieinstitutet
    const divMedieinstitutet = document.createElement("div");
    divMedieinstitutet.className = "divEducation";

    // H2 Medieinstitutet
    const educationH2Mi = document.createElement("h2");
    educationH2Mi.className = "h2Education";
    educationH2Mi.innerHTML = "Medieinstitutet (&nbsp;2021&nbsp;-&nbsp;2023&nbsp;)";

    // H3 Medieinstitutet
    const educationH3Mi = document.createElement("h3");
    educationH3Mi.innerText = "Front End Developer";

    // P Medieinstitutet
    const educationPMi = document.createElement("p");
    educationPMi.innerHTML = "<b>Utbildningen inkluderar främst:</b><br> HTML, CSS (Sass), JavaScript <br><br> <b>Ramverk:</b><br> React <br><br><b>Bibliotek:</b><br> jQuery <br><br><b>Övrigt:</b><br> Användbarhet, tillgänglighet, UX, API:er, projekt- och arbetsmetodik för utvecklare";

    // Div Södertörns högskola
    const divSH = document.createElement("div");
    divSH.className = "divEducation";
    divSH.id = "divSH";

    // H2 Södertörns högskola
    const educationH2Sh = document.createElement("h2");
    educationH2Sh.className = "h2Education";
    educationH2Sh.innerHTML = "Södertörns högskola (&nbsp;2012&nbsp;-&nbsp;2015&nbsp;)";

    // H3 Södertörns högskola
    const educationH3Sh = document.createElement("h3");
    educationH3Sh.innerText = "Internationella ekonomprogrammet";
    
    // P Södertörns högskola
    const educationPSh = document.createElement("p");
    educationPSh.innerHTML = "<b>Utbildningen inkluderar:</b><br> Företagsekonomi (A, B och C) <br><br> Statisik för ekonomer <br><br> Engelska A <br><br> Nationalekonomi A <br><br> Handelsrättslig översiktskurs<br> ";

    // Div övrigt utbildning
    const divDiverse = document.createElement("div");
    divDiverse.className = "divEducation";
    divDiverse.id = "divDiverse";
   
    // H2 övrigt utbildning
    const educationH2Diverse = document.createElement("h2");
    educationH2Diverse.innerText = "Övrigt"
   
    // P övrigt utbildning
    const educationPDiverse = document.createElement("p");
    educationPDiverse.innerHTML= "<b>Code Institute</b><br> 5 Day Code Challenge <br><br> <b>Tjejer kodar</b><br> 4-dagars kurs"

    // Div Jensen gymnasium Södra
    const divJensen = document.createElement("div");
    divJensen.className = "divEducation";
    divJensen.id = "divJensen";

    // H2 Jensen gymnasium Södra
    const educationH2Jgs = document.createElement("h2");
    educationH2Jgs.innerHTML = "Jensen Gymnasium Södra <wbr> (&nbsp;2007&nbsp;-&nbsp;2010&nbsp;)"

    // P Jensen gymnasium Södra
    const educationPJgs = document.createElement("p");
    educationPJgs.innerText = "Företagande och försäljning"

    // Appenda nya element
    sectionContent.append(educationH1, divMedieinstitutet, divSH, divDiverse, divJensen);
    divMedieinstitutet.append(educationH2Mi, educationH3Mi, educationPMi);
    divSH.append(educationH2Sh, educationH3Sh, educationPSh);
    divDiverse.append(educationH2Diverse, educationPDiverse);
    divJensen.append(educationH2Jgs, educationPJgs);
    
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

    // H2 Sergel Kredittjänster Bemanningsplanering
    const workH3Sergel1 = document.createElement("h3");
    workH3Sergel1.className = "h3Work";
    workH3Sergel1.innerText = "Personnel Planning Officer"

    // P Sergel Kredittjänster Bemanningsplanering
    const workPSergel1 = document.createElement("p");
    workPSergel1.innerText = "Bemanningsplanerare med huvudansvar för systemförvaltning och utveckling av telefonisystem (CallGuide/ACE, Puzzel)"

    // H3 Sergel Kredittjänster Inkassohandläggare
    const workH3Sergel2 = document.createElement("h3");
    workH3Sergel2.className = "h3Work";
    workH3Sergel2.innerText = "Inkasso- och reskontrahandläggare"

    // P Sergel Kredittjänster Inkassohandläggare
    const workPSergel2 = document.createElement("p");
    workPSergel2.innerText = "Handläggning av ärenden via telefon, chatt och mail"

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
    divSergel.append(workH2Sergel, workH3Sergel1, workPSergel1, workH3Sergel2, workPSergel2, workPSergel2);
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
}


// Funktion som körs om "Om mig" är klickad
function aboutMeList() {

    sectionContent.innerHTML = "";

    // Skapa element - profilbild
    const profileImgAboutMe = document.createElement("img");
    profileImgAboutMe.src = "./img/profilbild2.jpg";
    profileImgAboutMe.id = "profileImgAboutMe";

    // H1
    const aboutMeH1 = document.createElement("h1");
    aboutMeH1.id = "aboutMeH1";
    aboutMeH1.innerText = "Hej, Jag heter Fanny Lundberg."

    // H2
    const aboutMeH2 = document.createElement("h2");
    aboutMeH2.innerText = "Provade på programmering och fastnade direkt."

    // P
    const aboutMeP1 = document.createElement("p");
    aboutMeP1.innerText = "Jag testade enkel HTML, som många andra i tonåren, men testade för några år sedan en kurs hos Tjejer kodar - och fastnade direkt. Jag förstod då att programmering var något för mig. Sedan starten av utbildningen i oktober 2021 kan jag nu ägna mig åt att koda på heltid, vilket är otrligt kul. Det finns ju så mycket att lära sig!"
    
    // P
    const aboutMeP2 = document.createElement("p");
    aboutMeP2.innerText = "Utöver att koda tycker jag om att vara med min familj, lyssna på podd och se dokumentärer. När världen tillåter tycker jag även om att resa och gå på konsert."

    // Appenda nya element
    sectionContent.append(profileImgAboutMe, aboutMeH1, aboutMeH2, aboutMeP1, aboutMeP2);
}