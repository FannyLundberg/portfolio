// Funktion som körs om "Om mig" är klickad
export function aboutMeList() {

    //document.querySelector("#menuBtn").classList.remove("open");

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
    aboutMeP1.innerText = "Jag testade enkel HTML, som många andra i tonåren, men sommaren 2020 testade jag en kurs hos Tjejer kodar - och förstod då att programmering är något för mig. Sedan starten av utbildningen i oktober 2021 kan jag nu ägna mig åt att koda på heltid, vilket är otroligt kul. Det finns ju så mycket att lära sig!"
    
    // P
    const aboutMeP2 = document.createElement("p");
    aboutMeP2.innerText = "Utöver att koda tycker jag om att vara med min familj, lyssna på podd och se dokumentärer. När världen tillåter tycker jag även om att resa och gå på konsert."

    // Appenda nya element
    sectionContent.append(profileImgAboutMe, aboutMeH1, aboutMeH2, aboutMeP1, aboutMeP2);
}