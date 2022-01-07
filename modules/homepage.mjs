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
    homeH2.innerHTML = "Blivande Front End Developer" + "</br>" + "Examen i juni 2023"

    // Appenda nya elementen
    sectionContent.append(profileImgHome, homeH1, homeH2);
}