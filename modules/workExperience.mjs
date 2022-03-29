// Funktion som körs om "Arbetslivserfarenhet" är klickad
export function aboutWorkList() {

    sectionContent.innerHTML = "";

    // H1
    const workH1 = document.createElement("h1");
    workH1.id = "workH1";
    workH1.innerText = "Arbetslivserfarenhet"

    /* Sergel Bemanningsplanering */
    // Div Sergel
    const divSergel1 = document.createElement("div");
    divSergel1.className = "divWork";

    // H2 Sergel Bemanningsplanering
    const workH2Sergel1 = document.createElement("h2");
    workH2Sergel1.className = "h2Work";
    workH2Sergel1.innerHTML = "Sergel Kredittjänster" + " " + "<span class='workSpan'>(&nbsp;2018&nbsp;-&nbsp;nuvarande&nbsp;)</span>"

    // H2 Sergel Bemanningsplanering
    const workH3Sergel1 = document.createElement("h3");
    workH3Sergel1.className = "h3Work";
    workH3Sergel1.innerText = "Personnel Planning Officer"

    // P Sergel Bemanningsplanering
    const workPSergel1 = document.createElement("p");
    workPSergel1.innerHTML = "Bemanningsplanerare med huvudansvar för systemförvaltning och utveckling av telefonisystem (CallGuide/ACE, Puzzel). <br><br> Utbildat i daglig användning av telefonisystem och har medverkat vid flera stora projekt för talsvaret. <br><br>Rollen har gjort mig mer lösningsorienterad, proaktiv och kommunikativ."

    /* Sergel Inkassohandläggare */
    // Div Sergel Inkassohandläggare
    const divSergel2 = document.createElement("div");
    divSergel2.className = "divWork";

    // H2 Sergel Inkassohandläggare
    const workH2Sergel2 = document.createElement("h2");
    workH2Sergel2.className = "h2Work";
    workH2Sergel2.innerHTML = "Sergel Kredittjänster" + " " + "<span class='workSpan'>(&nbsp;2015&nbsp;-&nbsp;2018&nbsp;)</span>"

    // H3 Sergel Inkassohandläggare
    const workH3Sergel2 = document.createElement("h3");
    workH3Sergel2.className = "h3Work";
    workH3Sergel2.innerText = "Inkasso- och reskontrahandläggare"

    // P Sergel Inkassohandläggare
    const workPSergel2 = document.createElement("p");
    workPSergel2.innerHTML = "Handläggning av ärenden via telefon, chatt och mail. <br><br> Först anställd via Academic Work och sedan överrekryterad januari 2016. <br><br> Rollen kräver hög professionalism, noggrannhet och servicemind."

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
    workPKappahl.innerHTML = "Ansvar för kassaavstämningar, upplärning av nyanställda, praktikanter etc.<br><br>Rollen innebar ansvar, teamarbete och effektivitet."

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
    workPTh.innerHTML = "Hjälpte till med att prismärka och packa upp visningskollektioner, posthantering, utförsäljningar och event på NK.<br><br>Rollen innbar hög social förmåga, prioriterings- och initiativförmåga."

    /* Övriga jobb */
    // Div Övriga jobb
    const divDiverse = document.createElement("div");
    divDiverse.className = "divWork";

    // H2 Övriga jobb RPM
    const workH2Diverse1 = document.createElement("h2");
    workH2Diverse1.className = "h2WorkDiverse";
    workH2Diverse1.innerHTML = "RPM- och cykelinstruktör " + "<span class='workSpan'>(&nbsp;2015&nbsp;-&nbsp;2016&nbsp;)</span>"

    // P Övriga jobb RPM
    const workPDiverse1 = document.createElement("p");
    workPDiverse1.innerHTML = "World Class Nacka (pass en gång i veckan)"

    // H2 Övriga jobb Kommunal A-kassa
    const workH2Diverse2 = document.createElement("h2");
    workH2Diverse2.className = "h2WorkDiverse";
    workH2Diverse2.innerHTML = "Telefoninformatör " + "<span class='workSpan'>(&nbsp;2015&nbsp;-&nbsp;2015&nbsp;)</span>"

    // P Övriga jobb Kommunal A-kassa
    const workPDiverse2 = document.createElement("p");
    workPDiverse2.innerHTML = "Information om A-kasseersättning via telefon (sommarjobb)";

    // H2 Övriga jobb Fältassistent
    const workH2Diverse3 = document.createElement("h2");
    workH2Diverse3.className = "h2WorkDiverse";
    workH2Diverse3.innerHTML = "Värmdö Polarna " + "<span class='workSpan'>(&nbsp;2010&nbsp;-&nbsp;2011&nbsp;)</span>"

    // P Övriga jobb Fältassistent
    const workPDiverse3 = document.createElement("p");
    workPDiverse3.innerHTML = "Fältassistent Värmdö kommun (kvällar och helger)";

    /* Övriga meriter */
    // Div Övriga jobb
    const divMeriter = document.createElement("div");
    divMeriter.className = "divWork";
    divMeriter.id = "divMeriter";

    // H2 Övriga meriter
    const workH2Meriter = document.createElement("h2");
    workH2Meriter.className = "h2WorkDiverse";
    workH2Meriter.innerHTML = "Övriga meriter";

    // P Övriga meriter Styrelse
    const workPMeriter1 = document.createElement("p");
    workPMeriter1.innerHTML = "Styrelsemedlem i samfällighetsförening";

    // P Övriga meriter Körkort
    const workPMeriter2 = document.createElement("p");
    workPMeriter2.innerHTML = "B-körkort";

    // P Övriga meriter Språk svenska
    const workPMeriter3 = document.createElement("p");
    workPMeriter3.innerHTML = "Svenska (modersmål)";

    // P Övriga meriter Språk engelska
    const workPMeriter4 = document.createElement("p");
    workPMeriter4.innerHTML = "Engelska (flytande)";

    // P Övriga meriter Office
    const workPMeriter5 = document.createElement("p");
    workPMeriter5.innerHTML = "Office-paketet (mycket goda kunskaper)";


    // Appenda nya element
    sectionContent.append(workH1, divSergel1, divSergel2, divSc, divKappahl, divTh, divDiverse, divMeriter);
    divSergel1.append(workH2Sergel1, workH3Sergel1, workPSergel1);
    divSergel2.append(workH2Sergel2, workH3Sergel2, workPSergel2, workPSergel2);
    divSc.append(workH2Sc, workH3Sc, workPSc);
    divKappahl.append(workH2Kappahl, workH3Kappahl, workPKappahl);
    divTh.append(workH2Th, workH3Th, workPTh);
    divDiverse.append(workH2Diverse1, workPDiverse1, workH2Diverse2, workPDiverse2, workH2Diverse3, workPDiverse3);
    divMeriter.append(workH2Meriter, workPMeriter1, workPMeriter2, workPMeriter3, workPMeriter4, workPMeriter5);
}