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
    const linkText1 = '"Lunchrestaurang med switch"'
    projectA1.href = "https://fannylundberg.github.io/lunch/";
    projectA1.className = "projectLink";

    // A - "Att göra"-lista, klocka, datum samt ändra bakgrundsfärg och textfärg
    const divProject2 = document.createElement("div");
    const projectA2 = document.createElement("a");
    const linkText2 = '"Att göra"-lista'
    projectA2.href = "https://fannylundberg.github.io/ToDoList-clock-and-change-bg-color/";
    projectA2.className = "projectLink";

    // A - repo strängpoesi
    const divProject3 = document.createElement("div");
    const projectA3 = document.createElement("a");
    const linkText3 = '"Strängpoesi"'
    projectA3.href = "https://fannylundberg.github.io/word-poetry/";
    projectA3.className = "projectLink";

    // A - repo Angular InputOutput
    const divProject4 = document.createElement("div");
    const projectA4 = document.createElement("a");
    const linkText4 = '"Angular InputOutput"'
    projectA4.href = "https://fannylundberg.github.io/Angular-InputOutput/";
    projectA4.className = "projectLink";

    // Appenda nya element
    sectionContent.append(projectH1, divProject1, divProject2, divProject3, divProject4);
    divProject1.append(projectA1);
    divProject2.append(projectA2);
    divProject3.append(projectA3);
    divProject4.append(projectA4);
    projectA1.append(linkText1);
    projectA2.append(linkText2);
    projectA3.append(linkText3);
    projectA4.append(linkText4);
}