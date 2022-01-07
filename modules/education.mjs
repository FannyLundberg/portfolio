// Funktion som körs om "Utbildning" är klickad
export function aboutEducationList() {

    //document.querySelector("#menuBtn").classList.remove("open");

    sectionContent.innerHTML = "";

    // H1
    const educationH1 = document.createElement("h1");
    educationH1.id = "educationH1";
    educationH1.innerText = "Utbildning";

    // Div Medieinstitutet
    const divMedieinstitutet = document.createElement("div");
    divMedieinstitutet.className = "divEducation";

    // H2 Medieinstitutet
    const educationH2Mi = document.createElement("h2");
    educationH2Mi.className = "h2Education";
    educationH2Mi.innerHTML = "Medieinstitutet " + "<span class='workSpan'>(&nbsp;2021&nbsp;-&nbsp;2023&nbsp;)</span>";

    // H3 Medieinstitutet
    const educationH3Mi = document.createElement("h3");
    educationH3Mi.innerText = "Front End Developer";

    // P Medieinstitutet
    const educationPMi = document.createElement("p");
    educationPMi.innerHTML = "<b>Utbildningen inkluderar främst:</b><br> HTML, CSS (Sass), JavaScript <br><br> <b>Ramverk:</b><br> React, Angular <br><br><b>Bibliotek:</b><br> jQuery <br><br><b>Övrigt:</b><br> Användbarhet, tillgänglighet, UX, Git, GitHub, API:er, projekt- och arbetsmetodik för utvecklare";

    // Div Södertörns högskola
    const divSH = document.createElement("div");
    divSH.className = "divEducation";
    divSH.id = "divSH";

    // H2 Södertörns högskola
    const educationH2Sh = document.createElement("h2");
    educationH2Sh.className = "h2Education";
    educationH2Sh.innerHTML = "Södertörns högskola " + "<span class='workSpan'>(&nbsp;2012&nbsp;-&nbsp;2015&nbsp;)</span>";

    // H3 Södertörns högskola
    const educationH3Sh = document.createElement("h3");
    educationH3Sh.innerText = "Internationella ekonomprogrammet";
    
    // P Södertörns högskola
    const educationPSh = document.createElement("p");
    educationPSh.innerHTML = "<b>Utbildningen inkluderar:</b><br> Företagsekonomi (A, B och C) <br><br> Statisik för ekonomer <br><br> Engelska A <br><br> Nationalekonomi A <br><br> Handelsrättslig översiktskurs<br> ";

    // Div övrigt utbildning
    const divDiverse = document.createElement("div");
    divDiverse.className = "divEducation";
    divDiverse.id = "divDiverse";
   
    // H2 övrigt utbildning
    const educationH2Diverse = document.createElement("h2");
    educationH2Diverse.innerText = "Övrigt"
   
    // P övrigt utbildning
    const educationPDiverse = document.createElement("p");
    educationPDiverse.innerHTML= "<b>Code Institute</b><br> 5 Day Code Challenge <br><br> <b>Tjejer kodar</b><br> 4-dagars kurs"

    // Div Jensen gymnasium Södra
    const divJensen = document.createElement("div");
    divJensen.className = "divEducation";
    divJensen.id = "divJensen";

    // H2 Jensen gymnasium Södra
    const educationH2Jgs = document.createElement("h2");
    educationH2Jgs.innerHTML = "Jensen Gymnasium Södra " + "<span class='workSpan'>(&nbsp;2007&nbsp;-&nbsp;2010&nbsp;)</span>"

    // P Jensen gymnasium Södra
    const educationPJgs = document.createElement("p");
    educationPJgs.innerText = "Företagande och försäljning"

    // Appenda nya element
    sectionContent.append(educationH1, divMedieinstitutet, divSH, divDiverse, divJensen);
    divMedieinstitutet.append(educationH2Mi, educationH3Mi, educationPMi);
    divSH.append(educationH2Sh, educationH3Sh, educationPSh);
    divDiverse.append(educationH2Diverse, educationPDiverse);
    divJensen.append(educationH2Jgs, educationPJgs);
}