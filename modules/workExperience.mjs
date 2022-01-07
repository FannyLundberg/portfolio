// Funktion som körs om "Arbetslivserfarenhet" är klickad
export function aboutWorkList() {

    //document.querySelector("#menuBtn").classList.remove("open");

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
    workH2Sergel.innerHTML = "Sergel Kredittjänster" + " " + "<span class='workSpan'>(&nbsp;2015&nbsp;-&nbsp;nuvarande&nbsp;)</span>"

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
    workH2Sc.innerHTML = "Student consulting " + "<span class='workSpan'>(&nbsp;2013&nbsp;-&nbsp;2015&nbsp;)</span>"

    // P Student consulting
    const workPSc = document.createElement("p");
    workPSc.innerText = "Business support - Personaladministratör"

    // Div KappAhl
    const divKappahl = document.createElement("div");
    divKappahl.className = "divWork";

    // H2 Student consulting
    const workH2Kappahl = document.createElement("h2");
    workH2Kappahl.className = "h2Work";
    workH2Kappahl.innerHTML = "KappAhl " + "<span class='workSpan'>(&nbsp;2009&nbsp;-&nbsp;2013&nbsp;)</span>"

    // P Student consulting
    const workPKappahl = document.createElement("p");
    workPKappahl.innerText = "Säljare med ansvar för upplärning av nyanställda, praktikanter etc."

    // Appenda nya element
    sectionContent.append(workH1, divSergel, divSc, divKappahl);
    divSergel.append(workH2Sergel, workH3Sergel1, workPSergel1, workH3Sergel2, workPSergel2, workPSergel2);
    divSc.append(workH2Sc, workPSc);
    divKappahl.append(workH2Kappahl, workPKappahl);
}