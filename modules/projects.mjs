// Funktion som körs om "Projekt" är klickad
export function aboutProjectList() {

    //document.querySelector("#menuBtn").classList.remove("open");

    sectionContent.innerHTML = "";

    // H1
    const projectH1 = document.createElement("h1");
    projectH1.id = "projectH1";
    projectH1.innerText = "Projekt"
    sectionContent.append(projectH1);
}