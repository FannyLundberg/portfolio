// Funktion som körs om "Om mig" är klickad
export function aboutMeList() {

    sectionContent.innerHTML = "";

    /* Skapa element */
    // Profilbild
    const divAboutMe = document.createElement("div");
    divAboutMe.id = "divAboutMe";

    // H1
    const aboutMeH1 = document.createElement("h1");
    aboutMeH1.id = "aboutMeH1";
    aboutMeH1.innerText = "Hej, Jag heter Fanny Lundberg."

    // H2
    const aboutMeH2 = document.createElement("h2");
    aboutMeH2.innerText = "Jag älskar att koda!"

    // P Koda
    const aboutMeP1 = document.createElement("p");
    aboutMeP1.innerText = "Jag testade på enkel HTML, som många andra, i tonåren men sommaren 2020 testade jag en fyra-dagarskurs hos Tjejer kodar - och förstod då att programmering är något för mig. Jag sökte mig då till Medieinstitutet för att bli Front End Developer. Sedan starten av utbildningen i oktober 2021 kan jag nu ägna mig åt att koda på heltid, vilket är otroligt kul. Det finns ju så mycket att lära sig!"
    
    // P Fritid
    const aboutMeP2 = document.createElement("p");
    aboutMeP2.innerText = 'Utöver att koda tycker jag om att vara med mina nära och kära, inredning, se dokumentärer, lyssna på musik och poddar. Jag tycker även om att resa och gå på konsert.'

    // Appenda nya element
    sectionContent.append(divAboutMe);
    divAboutMe.append(aboutMeH1, aboutMeH2, aboutMeP1, aboutMeP2);
}