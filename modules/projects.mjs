// Funktion som körs om "Projekt" är klickad
export function aboutProjectList() {

    sectionContent.innerHTML = "";

    // H1
    const projectH1 = document.createElement("h1");
    projectH1.id = "projectH1";
    projectH1.innerText = "Projekt"

    // A - repo Lunch
    const projectA1 = document.createElement("a");
    const linkText1 = '"Lunchrestaurang med switch"'
    projectA1.href = "https://fannylundberg.github.io/lunch/";
    projectA1.className = "projectLink";

    // A - "Att göra"-lista, klocka, datum samt ändra bakgrundsfärg och textfärg
    const projectA2 = document.createElement("a");
    const linkText2 = '"Att göra"-lista'
    projectA2.href = "https://fannylundberg.github.io/ToDoList-clock-and-change-bg-color/";
    projectA2.className = "projectLink";

    // A - repo strängpoesi
    const projectA3 = document.createElement("a");
    const linkText3 = '"Strängpoesi"'
    projectA3.href = "https://fannylundberg.github.io/word-poetry/";
    projectA3.className = "projectLink";

    // A - repo Angular InputOutput
    const projectA4 = document.createElement("a");
    const linkText4 = '"Angular InputOutput"'
    projectA4.href = "https://fannylundberg.github.io/Angular-InputOutput/";
    projectA4.className = "projectLink";

    // Appenda nya element
    sectionContent.append(projectH1, projectA1, projectA2, projectA3);
    projectA1.append(linkText1);
    projectA2.append(linkText2);
    projectA3.append(linkText3);
    projectA4.append(linkText4);
}