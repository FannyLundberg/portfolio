// Funktion som körs om "Hem" är klickad
export function homePage() {

    sectionContent.innerHTML = "";

    document.querySelector("#menuBtn").classList.remove("open");

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
    homeH2.innerHTML = "Blivande " + "<span id='fedHeading'>Front End Developer</span>";

    // H3 till första sidan
    const homeH3 = document.createElement("h3");

    
    // Nedräkning till examensdatum som uppdateras varje sekund
    const examensDatum = new Date("Juni 9, 2023 12:00:00").getTime();

    const x = setInterval(function() {

        // Hämta dagens datum
        let dateToday = new Date().getTime();
    
        // Skillnad mellan dagens datum och examensdatum
        let countDown = examensDatum - dateToday;
    
        // Räkna fram dagar, timmar, minuter och sekunder
        let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    
        // Visa nedräkning i paragrafen
        homeH3.innerHTML = "Examen om: " + days + "d " + "  " + hours + "h " + "  " + minutes + "m " + "  " + seconds + "s ";

    }, 1000);

    // H4 till första sidan
    const homeH4 = document.createElement("h4");
    homeH4.innerHTML = 'En strukturerad, lösningsorienterad och positiv <br> person som nu kommit på "vad jag ska bli när jag blir stor"';

    // Appenda nya elementen
    sectionContent.append(profileImgHome, homeH1, homeH2, homeH3, homeH4);
}