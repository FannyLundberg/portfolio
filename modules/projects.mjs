// Funktion som körs om "Projekt" är klickad
export function aboutProjectList() {

    sectionContent.innerHTML = "";

    // H1
    const projectH1 = document.createElement("h1");
    projectH1.id = "projectH1";
    projectH1.innerText = "Projekt"

    // A - repo Lunch
    const projectA1 = document.createElement("a");
    const linkText1 = 'Repo "Lunchrestaurang med switch"'
    projectA1.href = "https://github.com/FannyLundberg/lunch.git";

    // A - repo ålder
    const projectA2 = document.createElement("a");
    const linkText2 = 'Repo "Är du tillräckligt gammal?"'
    projectA2.href = "https://github.com/FannyLundberg/Are-you-old-enough.git";

    // A - repo strängpoesi
    const projectA3 = document.createElement("a");
    const linkText3 = 'Repo "Strängpoesi"'
    projectA3.href = "https://github.com/FannyLundberg/word-poetry.git";

    // Appenda nya element
    sectionContent.append(projectH1, projectA1, projectA2, projectA3);
    projectA1.append(linkText1);
    projectA2.append(linkText2);
    projectA3.append(linkText3);
}