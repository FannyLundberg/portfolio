// Funktion som körs om "Projekt" är klickad
export function aboutProjectList() {

    sectionContent.innerHTML = "";

    // H1
    const projectH1 = document.createElement("h1");
    projectH1.id = "projectH1";
    projectH1.innerText = "Projekt"

    // A - repo Lunch
    const divProject1 = document.createElement("div");
    const projectA1 = document.createElement("a");
    const linkText1 = 'Tryck här för att komma till min GitHub-profil'
    projectA1.href = "https://github.com/FannyLundberg";
    projectA1.className = "projectLink";

    // Appenda nya element
    sectionContent.append(projectH1, divProject1);
    divProject1.append(projectA1);
    projectA1.append(linkText1);
}