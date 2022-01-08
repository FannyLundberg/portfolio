// Funktion som körs om "Arbetslivserfarenhet" är klickad
export function aboutWorkList() {

    //document.querySelector("#menuBtn").classList.remove("open");

    sectionContent.innerHTML = "";

    // H1
    const workH1 = document.createElement("h1");
    workH1.id = "workH1";
    workH1.innerText = "Arbetslivserfarenhet"

    /* Sergel */
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
    workPSergel1.innerHTML = "Bemanningsplanerare med huvudansvar för systemförvaltning och utveckling av telefonisystem (CallGuide/ACE, Puzzel). <br><br>Rollen har gjort mig mer lösningsorienterad, proaktiv och kommunikativ."

    // H3 Sergel Kredittjänster Inkassohandläggare
    const workH3Sergel2 = document.createElement("h3");
    workH3Sergel2.className = "h3Work";
    workH3Sergel2.innerText = "Inkasso- och reskontrahandläggare"

    // P Sergel Kredittjänster Inkassohandläggare
    const workPSergel2 = document.createElement("p");
    workPSergel2.innerHTML = "Handläggning av ärenden via telefon, chatt och mail. <br><br>Rollen kräver hög professionalism, noggrannhet och servicemind."

    /* Student consulting */
    // Div Student consulting
    const divSc = document.createElement("div");
    divSc.className = "divWork";

    // H2 Student consulting
    const workH2Sc = document.createElement("h2");
    workH2Sc.className = "h2Work";
    workH2Sc.innerHTML = "Student consulting " + "<span class='workSpan'>(&nbsp;2013&nbsp;-&nbsp;2015&nbsp;)</span>"

    // H3 Student consulting
    const workH3Sc = document.createElement("h3");
    workH3Sc.className = "h3Work";
    workH3Sc.innerText = "Personaladministratör inom ekonomi"

    // P Student consulting
    const workPSc = document.createElement("p");
    workPSc.innerHTML = "Beräkning av löner för konsulter och fakturering till kunder. <br><br>Rollen kräver att man är strukturerad, ordningsam och håller deadline."

    /* KappAhl */
    // Div KappAhl
    const divKappahl = document.createElement("div");
    divKappahl.className = "divWork";

    // H2 KappAhl
    const workH2Kappahl = document.createElement("h2");
    workH2Kappahl.className = "h2Work";
    workH2Kappahl.innerHTML = "KappAhl " + "<span class='workSpan'>(&nbsp;2009&nbsp;-&nbsp;2013&nbsp;)</span>"

    // H3 KappAhl
    const workH3Kappahl = document.createElement("h3");
    workH3Kappahl.className = "h3Work";
    workH3Kappahl.innerText = "Säljare"

    // P KappAhl
    const workPKappahl = document.createElement("p");
    workPKappahl.innerText = "Ansvar för kampanjer, upplärning av nyanställda, praktikanter etc."

    /* Tommy Hilfiger */
    // Div Tommy Hilfiger
    const divTh = document.createElement("div");
    divTh.className = "divWork";

    // H2 Tommy Hilfiger
    const workH2Th = document.createElement("h2");
    workH2Th.className = "h2Work";
    workH2Th.innerHTML = "Tommy Hilfiger " + "<span class='workSpan'>(&nbsp;2004&nbsp;-&nbsp;2010&nbsp;)</span>"

    // H3 Tommy Hilfiger
    const workH3Th = document.createElement("h3");
    workH3Th.className = "h3Work";
    workH3Th.innerText = "Kontorsassistent"

    // P Tommy Hilfiger
    const workPTh = document.createElement("p");
    workPTh.innerText = "Hjälpte till med att prismärka och packa upp visningskollektioner, posthantering, utförsäljningar och event på NK."

    // Appenda nya element
    sectionContent.append(workH1, divSergel, divSc, divKappahl, divTh);
    divSergel.append(workH2Sergel, workH3Sergel1, workPSergel1, workH3Sergel2, workPSergel2, workPSergel2);
    divSc.append(workH2Sc, workH3Sc, workPSc);
    divKappahl.append(workH2Kappahl, workH3Kappahl, workPKappahl);
    divTh.append(workH2Th, workH3Th, workPTh);
}