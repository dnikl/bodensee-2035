const commonDevelopment = ["Sehr positiv", "Eher positiv", "Neutral", "Eher kritisch", "Kritisch"];

const formsparkEndpoints = Object.freeze({
  boot: "https://submit-form.com/NrkrhoPVZ",
  fan: "https://submit-form.com/NrkrhoPVZ",
  werft: "https://submit-form.com/dQprUSMGE",
  gemeinde: "https://submit-form.com/5o8Knq5mF",
});

const quickFeedbackEndpoint = "https://submit-form.com/z8y8ZMxxS";
const brevoDoubleOptInEndpoint = "https://ad54fc02.sibforms.com/serve/MUIFAN8stR-wtc1rdUDruOe3Sj9meBF1jQ2npbkm66yBZDVcXlYCh-aL5lxUAxMWqLPA6hlnSfWRJJQ5FE4qtnjK_pAlJulPlLYXgfjFOQ0abdqhpQ2a6YpWa16KGrL09iianbYp-s1FsnXOp3kBf4hMNYmXDG9Plxl8qVxpvT2mW66mH69F2h_cQT_EXsBFpLsiyJV9AqOgHnVaTg==";

const privacyNoticeVersion = "2026-08-13";

const privateSections = [
  { title: "Ihre Verbindung zum Bodensee", type: "checks", options: ["Bootsbesitzer:in", "Wassersportler:in", "Natur- und Seeliebhaber:in", "Anwohner:in", "Mitarbeitende:r eines Hafens oder einer Marina", "Mitarbeitende:r einer Gemeinde oder Stadt", "Unternehmer:in", "Sonstiges"] },
  { title: "Welche Technologien nutzen Sie bereits oder interessieren Sie besonders?", type: "matrix", rows: ["Elektroauto", "Photovoltaikanlage", "Batteriespeicher", "Wärmepumpe", "Ladestation für Elektrofahrzeuge", "Elektromobilität auf dem Wasser", "Lokale Elektrizitätsgemeinschaft (LEG)"], labels: ["Nutze ich bereits", "Interessiert mich"] },
  { title: "Wie beurteilen Sie die zukünftige Entwicklung der Elektromobilität auf dem Wasser?", type: "radios", options: commonDevelopment },
  { title: "Welche Themen interessieren Sie besonders?", type: "checks", options: ["Elektroboote", "Ladeinfrastruktur", "Schnellladestationen", "Solarenergie", "Batteriespeicher", "Bidirektionales Laden", "Innovation", "Schutz des Bodensees", "Nachhaltiger Tourismus"] },
  { title: "Wie möchten Sie sich einbringen?", type: "checks", options: ["Über das Projekt informiert bleiben", "Aktiv mithelfen", "Kontakte vermitteln", "Mögliche Standorte einbringen", "Fachwissen einbringen", "Spätere Vereinsmitgliedschaft"] },
  { title: "Zum Abschluss", type: "textareas", labels: ["Haben Sie Ideen oder Anregungen?"] },
];

const surveys = {
  boot: {
    title: "Für Bootsbesitzer:innen",
    intro: "Ihre Erfahrungen und Ihre Sicht auf den Bodensee helfen, ein praxistaugliches Ladenetz für die Zukunft zu entwickeln.",
    sections: [
      { title: "Wie sind Sie mit dem Bodensee verbunden?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Bootsbesitzer:in", "Wassersportler:in", "Natur- und Seeliebhaber:in", "Anwohner:in", "Mitarbeitende:r eines Hafens oder einer Marina", "Mitarbeitende:r einer Gemeinde oder Stadt", "Unternehmer:in", "Sonstiges"] },
      { title: "Ihr Boot", type: "boat", question: "Welche Art von Boot besitzen Sie?", boatType: true, options: [
        { value: "Motorboot – Wassersportboot", description: "Wakesurf, Wakeboard, Wasserski" },
        { value: "Motorboot – Sport-/Freizeitboot", description: "Ausfahrten, Baden, Tagestrips" },
        { value: "Motorboot – Touren-/Kajütboot", description: "längere Fahrten und Aufenthalte an Bord" },
        { value: "Segelboot", description: "" },
      ] },
      { title: "Ihr Standort", type: "location", question: "In welchem Land befindet sich Ihr hauptsächlicher Liegeplatz?", locationLabel: "Ort / Gemeinde", options: ["Schweiz", "Deutschland", "Österreich"] },
      { title: "In welchem Teil des Bodensees nutzen Sie Ihr Boot überwiegend?", type: "radios", options: ["Obersee", "Untersee", "Überlinger See", "In mehreren Regionen des Bodensees"] },
      { title: "Wie nutzen Sie Ihr Boot überwiegend?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Kurze Ausfahrten", "Tagesausflüge", "Wassersport / Wakesurfen / Wakeboarden / Wasserski", "Längere Touren auf dem Bodensee", "Baden / Freizeit / Aufenthalt auf dem See", "Segeln"] },
      { title: "Wie häufig nutzen Sie Ihr Boot während der Saison ungefähr?", type: "radios", options: ["Mehrmals pro Woche", "Etwa einmal pro Woche", "Mehrmals pro Monat", "Seltener", "Sehr unterschiedlich"] },
      { title: "Wo halten Sie Ladeinfrastruktur für Elektroboote am Bodensee für besonders sinnvoll?", type: "checks", hint: "Bitte beurteilen Sie dies auch dann, wenn Sie selbst kein Elektro- oder Motorboot nutzen.\n\nMehrfachauswahl möglich", options: ["An Liegeplätzen in Häfen und Marinas", "An zentralen Ladepunkten in Häfen", "In verschiedenen Häfen rund um den Bodensee", "Bei Restaurants und Ausflugszielen am Wasser", "An öffentlichen Anlegestellen", "Bei Werften / Servicestellen", "Kann ich noch nicht beurteilen"] },
      { title: "Welche Lademöglichkeiten halten Sie für die Nutzung auf dem Bodensee für besonders sinnvoll?", type: "checks", hint: "Bitte beurteilen Sie dies unabhängig von der Antriebsart Ihres eigenen Bootes.\n\nMehrfachauswahl möglich", options: ["Laden über Nacht am Liegeplatz", "Laden während längerer Hafenaufenthalte", "Laden während Restaurant- oder Freizeitaufenthalten", "Schnellladen für längere Touren", "Laden bei Werft- oder Serviceaufenthalten", "Kann ich noch nicht beurteilen"] },
      { title: "Wie beurteilen Sie die zukünftige Entwicklung der Elektromobilität auf dem Wasser?", type: "radios", options: commonDevelopment },
      { title: "Könnten Sie sich vorstellen, künftig ein Elektroboot zu nutzen?", type: "radios", options: ["Ja", "Eher ja", "Vielleicht", "Eher nein", "Nein", "Ich nutze bereits ein Elektroboot"] },
      { title: "Welche Faktoren sind aus Ihrer Sicht entscheidend, damit Elektroboote auf dem Bodensee attraktiver werden?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Ausreichende Reichweite", "Kurze Ladezeiten", "Genügend Ladepunkte rund um den Bodensee", "Lademöglichkeiten am Liegeplatz", "Attraktivere Anschaffungskosten", "Langlebige Batterien", "Leistung und Fahrverhalten", "Eignung für Wassersport", "Umwelt- und Lärmvorteile", "Kann ich noch nicht beurteilen"] },
      { title: "Welche Themen rund um Bodensee 2035 interessieren Sie besonders?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Entwicklung der Ladeinfrastruktur", "Elektroboote und neue Antriebstechnologien", "Schnellladen am Wasser", "Energie-Hubs und Batteriespeicher", "Bidirektionales Laden", "Erneuerbare Energie in Häfen", "Schutz des Bodensees", "Pilotprojekte und neue Lösungen"] },
      { title: "Wie möchten Sie sich einbringen?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Über den Projektverlauf informiert bleiben", "Eigene Erfahrungen einbringen", "An Befragungen / Workshops teilnehmen", "Kontakte vermitteln", "Hinweise zu möglichen Standorten geben", "Pilotprojekte testen oder begleiten"] },
      { title: "Ihre Gedanken zum Abschluss", type: "textareas", labels: ["Welche Wünsche, Erfahrungen oder Ideen möchten Sie uns für die zukünftige Mobilität auf dem Bodensee mitgeben?"] },
    ],
  },
  fan: {
    title: "Für Bodensee-Liebhaber:innen",
    intro: "Ihre Sicht auf den Bodensee hilft mit, seine Zukunft gemeinsam und verantwortungsvoll zu gestalten.",
    sections: [
      { title: "Ihre Verbindung zum Bodensee", type: "checks", question: "Wie sind Sie mit dem Bodensee verbunden?", hint: "Mehrfachauswahl möglich", options: ["Wassersportler:in", "Natur- und Seeliebhaber:in", "Anwohner:in", "Regelmässige:r Besucher:in / Gast", "Mitarbeitende:r eines Hafens oder einer Marina", "Mitarbeitende:r einer Gemeinde oder Stadt", "Unternehmer:in", "Sonstiges"] },
      { title: "Ihre Region", type: "location", question: "In welchem Land leben oder bewegen Sie sich überwiegend in der Bodenseeregion?", locationLabel: "Ort / Gemeinde", options: ["Schweiz", "Deutschland", "Österreich", "Liechtenstein"] },
      { title: "Welche Themen sind Ihnen für die zukünftige Entwicklung des Bodensees besonders wichtig?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Schutz von Natur und Wasser", "Weniger Lärm auf dem See", "Reduktion fossiler Antriebe", "Saubere und erneuerbare Energie", "Zukunftsfähige Mobilität auf dem Wasser", "Attraktive Häfen und Uferorte", "Nachhaltiger Tourismus", "Grenzüberschreitende Zusammenarbeit", "Innovation und neue Technologien"] },
      { title: "Wie beurteilen Sie die zukünftige Entwicklung der Elektromobilität auf dem Wasser?", type: "radios", options: commonDevelopment },
      { title: "Welche Chancen sehen Sie in einer stärkeren Elektrifizierung auf dem Bodensee?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Weniger Abgase", "Weniger Lärm", "Schutz von Wasser und Umwelt", "Weniger fossile Energieträger", "Nutzung erneuerbarer Energie", "Moderne und zukunftsfähige Infrastruktur", "Attraktivität der Bodenseeregion", "Neue Impulse für Wirtschaft und Tourismus", "Ich sehe derzeit keine besonderen Vorteile", "Kann ich noch nicht beurteilen"] },
      { title: "Wo sehen Sie mögliche Bedenken oder Herausforderungen?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Kosten und Finanzierung", "Eingriffe in Häfen oder Uferbereiche", "Auswirkungen auf Natur und Landschaft", "Zusätzlicher Energiebedarf", "Zu wenig Nachfrage", "Technische Machbarkeit", "Zu schnelle Veränderungen", "Fehlende Informationen", "Ich habe derzeit keine besonderen Bedenken", "Kann ich noch nicht beurteilen"] },
      { title: "Wie stehen Sie grundsätzlich zum Aufbau von Ladeinfrastruktur für Elektroboote rund um den Bodensee?", type: "radios", options: ["Befürworte ich sehr", "Befürworte ich eher", "Neutral", "Bin eher skeptisch", "Lehne ich eher ab", "Kann ich noch nicht beurteilen"] },
      { title: "Was wäre Ihnen bei der Umsetzung besonders wichtig?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Rücksicht auf Natur und Landschaft", "Nutzung bestehender Hafeninfrastruktur", "Erneuerbare Energie für den Betrieb", "Gute Integration ins Orts- und Landschaftsbild", "Bedarfsgerechter Ausbau statt Überdimensionierung", "Grenzüberschreitende Abstimmung", "Transparente Information der Bevölkerung", "Wirtschaftlich tragfähige Lösungen"] },
      { title: "Welche Themen rund um Bodensee 2035 interessieren Sie besonders?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Ladeinfrastruktur am Wasser", "Elektroboote und neue Antriebstechnologien", "Energie-Hubs und Batteriespeicher", "Erneuerbare Energie", "Bidirektionales Laden", "Schutz des Bodensees", "Nachhaltiger Tourismus", "Grenzüberschreitende Zusammenarbeit", "Pilotprojekte und neue Lösungen"] },
      { title: "Wie möchten Sie sich einbringen?", type: "checks", hint: "Mehrfachauswahl möglich", options: ["Über den Projektverlauf informiert bleiben", "Eigene Erfahrungen und Sichtweisen einbringen", "An Befragungen / Workshops teilnehmen", "Kontakte vermitteln", "Hinweise und Ideen einbringen", "Bei Veranstaltungen oder Aktionen mitwirken"] },
      { title: "Ihre Gedanken zum Abschluss", type: "textareas", labels: ["Was wünschen Sie sich für die zukünftige Entwicklung des Bodensees?"] },
    ],
  },
  gemeinde: {
    title: "Für Gemeinden, Städte, Häfen & Marinas",
    intro: "Heute geht es nicht um Investitionsentscheide, sondern darum, Interesse, Bedarf und mögliche Wege gemeinsam auszuloten.",
    sections: [
      { title: "Ihre Organisation", type: "radios", options: ["Gemeinde / Stadt", "Hafen / Marina", "Unternehmen", "Sonstige Organisation"] },
      { title: "Ihr Standort", type: "location", question: "In welchem Land befindet sich Ihre Organisation bzw. Ihr Standort?", locationLabel: "Ort / Gemeinde", options: ["Schweiz", "Deutschland", "Österreich", "Liechtenstein"] },
      { title: "Welche dieser Themen sind an Ihrem Standort bzw. in Ihrer Organisation heute oder künftig relevant?", type: "matrix", rows: ["Photovoltaikanlagen", "Batteriespeicher", "Wärmepumpen", "Ladestationen für Elektrofahrzeuge", "Ladeinfrastruktur für Elektroboote", "Lokale Elektrizitätsgemeinschaften (LEG)", "Klima- oder Energiestrategie", "Energie-Hub"], labels: ["Heute bereits ein Thema", "Künftig von Interesse"] },
      { title: "Welche Bedeutung hätte Elektromobilität auf dem Wasser für Ihren Standort?", type: "radios", options: ["Sehr grosse Bedeutung", "Eher grosse Bedeutung", "Mittlere Bedeutung", "Eher geringe Bedeutung", "Keine Bedeutung", "Ich weiss es nicht"] },
      { title: "Könnte Ladeinfrastruktur für Elektroboote an Ihrem Standort grundsätzlich ein Thema sein?", type: "radios", options: ["Ja", "Eher ja", "Vielleicht", "Eher nein", "Nein", "Noch nicht beurteilbar"] },
      { title: "Was wären aus Ihrer Sicht die grössten Hürden?", type: "checks", options: ["Finanzierung / Kosten", "Fehlende Flächen oder Standorte", "Netzanschluss / verfügbare Leistung", "Bewilligungen", "Politische Zustimmung", "Betreibermodell / Zuständigkeit", "Noch zu wenig Bedarf", "Technische Machbarkeit noch unklar", "Fehlende Informationen", "Andere"], otherText: true },
      { title: "Gibt es an Ihrem Standort bereits konkrete Überlegungen oder Projekte zur Ladeinfrastruktur für Elektroboote?", type: "radios", options: ["Ja, bereits in Planung", "Erste Überlegungen sind vorhanden", "Noch nicht", "Ich weiss es nicht"] },
      { title: "Zu welchen Themen wünschen Sie weitere Informationen oder Austausch?", type: "checks", options: ["AC-Ladestationen", "DC-Schnellladestationen", "Energie-Hubs", "Solarenergie", "Batteriespeicher", "Lokale Elektrizitätsgemeinschaften", "Bidirektionales Laden", "Klimastrategie", "Tourismus", "Fördermöglichkeiten", "Erfahrungsaustausch", "Ladeinfrastruktur für Elektroboote", "Regionale Zusammenarbeit"] },
      { title: "Wie möchten Sie sich einbringen?", type: "checks", options: ["Projektverlauf mitverfolgen", "Workshops besuchen", "Bedarf am Standort prüfen", "Erfahrungen austauschen", "Fördermöglichkeiten prüfen", "Standort als möglichen Pilotstandort prüfen", "Bei der Entwicklung des Ladenetzes mitwirken"] },
      { title: "Ihre Gedanken zum Abschluss", type: "textareas", labels: ["Was müsste erfüllt sein, damit Ihr Standort diesen Weg mitgehen kann?", "Welche Ideen, Anregungen oder Hinweise möchten Sie uns mitgeben?"] },
    ],
  },
  werft: {
    title: "Für Werften, Bootshändler & Hersteller",
    intro: "Wir möchten Lösungen mit der Branche entwickeln – nicht für die Branche.",
    sections: [
      { title: "Ihr Unternehmen", type: "radios", options: ["Werft", "Bootshandel", "Bootshersteller", "Technologie- / Zulieferunternehmen", "Hafen- / Marinatechnik", "Sonstiges"] },
      { title: "Ihr Standort", type: "location", question: "In welchem Land befindet sich Ihr Unternehmen?", locationLabel: "Ort", options: ["Schweiz", "Deutschland", "Österreich", "Liechtenstein", "Anderes Land"] },
      { title: "Welche dieser Themen beschäftigen Ihr Unternehmen heute oder könnten künftig relevant werden?", type: "matrix", rows: ["Elektroboote", "Ladeinfrastruktur", "Photovoltaik", "Batteriespeicher", "Wärmepumpen", "Lokale Elektrizitätsgemeinschaften (LEG)", "Energie-Hubs", "Bidirektionales Laden"], labels: ["Heute bereits ein Thema", "Künftig von Interesse"] },
      { title: "Wie beurteilen Sie die zukünftige Entwicklung der Elektromobilität auf dem Wasser?", type: "radios", options: commonDevelopment },
      { title: "Was braucht es aus Ihrer Sicht, damit sich Elektromobilität auf dem Wasser stärker entwickeln kann?", type: "checks", options: ["Mehr Ladeinfrastruktur in Häfen", "Schnellere Lademöglichkeiten", "Einheitliche technische Standards", "Grössere Auswahl an Elektrobooten", "Attraktivere Anschaffungskosten", "Grössere Reichweiten / Batteriekapazitäten", "Fördermöglichkeiten", "Mehr Nachfrage seitens der Kundschaft", "Information und Erfahrungsaustausch", "Andere"] },
      { title: "Zu welchen Themen wünschen Sie Austausch oder Zusammenarbeit?", type: "checks", options: ["AC-Ladestationen", "DC-Schnellladestationen", "Energie-Hubs", "Batteriespeicher", "Bidirektionales Laden", "Pilotprojekte", "Gemeinsame Standards", "Förderprogramme", "Erfahrungsaustausch"] },
      { title: "Wie möchten Sie sich einbringen?", type: "checks", options: ["Fachwissen einbringen", "Technische Erfahrungen teilen", "Pilotprojekte begleiten", "Produkte / Technologien für Pilotprojekte einbringen", "Referenzstandorte bereitstellen", "Interesse an einer möglichen Partnerschaft", "Informiert bleiben"] },
      { title: "Ihre Gedanken zum Abschluss", type: "textareas", labels: ["Welche Ideen, Erfahrungen oder Hinweise möchten Sie uns mitgeben?"] },
    ],
  },
};

const formSection = document.querySelector("#interesse");
const form = document.querySelector("#survey-form");
const fields = document.querySelector("#survey-fields");
const title = document.querySelector("#survey-title");
const intro = document.querySelector("#survey-intro");
const changeSurvey = document.querySelector("#change-survey");
const duration = document.querySelector(".duration");
const contactNumber = document.querySelector("#contact-number");
const contactNameLabel = document.querySelector("#contact-name-label");
const pilotContactHint = document.querySelector("#pilot-contact-hint");
const status = document.querySelector("#survey-status");
const consent = form.querySelector('[name="datenschutz-einwilligung"]');
const consentError = document.querySelector("#consent-error");
let activeSurvey = null;
let surveyTrigger = null;
let pilotContactRequested = false;

function fieldName(group, index, label = "antwort") {
  return `${group}-${index + 1}-${label}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function optionList(section, index) {
  const wrapper = document.createElement("div");
  wrapper.className = "survey-options";
  const type = section.type === "checks" ? "checkbox" : "radio";
  const name = fieldName(activeSurvey, index, section.question || section.title);

  let otherToggle = null;
  section.options.forEach((option) => {
    const optionValue = typeof option === "string" ? option : option.value;
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.value = optionValue;
    if (section.conditional) input.addEventListener("change", () => renderMunicipalityFollowUp(optionValue));
    if (section.boatType) input.addEventListener("change", () => renderBoatDrive(optionValue));
    const text = document.createElement("span");
    if (typeof option === "string") {
      text.textContent = option;
    } else {
      text.className = "survey-option-copy";
      const strong = document.createElement("strong");
      strong.textContent = option.value;
      text.append(strong);
      if (option.description) {
        const small = document.createElement("small");
        small.textContent = option.description;
        text.append(small);
      }
    }
    label.append(input, text);
    wrapper.append(label);
    if (section.otherText && optionValue === "Andere") otherToggle = input;
  });

  if (otherToggle) {
    const otherField = document.createElement("div");
    otherField.className = "survey-other-field";
    otherField.hidden = true;
    const hint = document.createElement("span");
    hint.textContent = "Bitte ergänzen (optional)";
    const otherInput = document.createElement("input");
    otherInput.type = "text";
    otherInput.name = fieldName(activeSurvey, index, "andere-huerde");
    otherInput.disabled = true;
    otherField.append(hint, otherInput);
    otherToggle.addEventListener("change", () => {
      otherField.hidden = !otherToggle.checked;
      otherInput.disabled = !otherToggle.checked;
      if (!otherToggle.checked) otherInput.value = "";
    });
    wrapper.append(otherField);
  }
  return wrapper;
}

function matrix(section, index) {
  const wrapper = document.createElement("div");
  wrapper.className = "survey-matrix";
  const head = document.createElement("div");
  head.className = "matrix-head";
  head.innerHTML = `<b>Technologie / Thema</b>${section.labels.map((label) => `<b>${label}</b>`).join("")}`;
  wrapper.append(head);

  section.rows.forEach((row, rowIndex) => {
    const line = document.createElement("div");
    line.className = "matrix-row";
    const rowTitle = document.createElement("strong");
    rowTitle.textContent = row;
    line.append(rowTitle);
    section.labels.forEach((labelText) => {
      const label = document.createElement("label");
      label.setAttribute("aria-label", `${row}: ${labelText}`);
      label.dataset.label = labelText;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = fieldName(activeSurvey, index, row);
      input.value = labelText;
      label.append(input);
      line.append(label);
    });
    wrapper.append(line);
  });
  return wrapper;
}

function textareas(section, index) {
  const fragment = document.createDocumentFragment();
  section.labels.forEach((labelText) => {
    const label = document.createElement("label");
    label.className = "survey-text";
    label.append(document.createTextNode(labelText));
    const textarea = document.createElement("textarea");
    textarea.name = fieldName(activeSurvey, index, labelText);
    textarea.rows = 4;
    label.append(textarea);
    fragment.append(label);
  });
  return fragment;
}

function locationFields(section, index) {
  const fragment = document.createDocumentFragment();
  const question = document.createElement("p");
  question.className = "survey-location-question";
  question.textContent = section.question;
  fragment.append(question, optionList(section, index));

  const label = document.createElement("label");
  label.className = "survey-location-field";
  const labelText = document.createElement("span");
  labelText.textContent = section.locationLabel;
  const input = document.createElement("input");
  input.type = "text";
  input.name = fieldName(activeSurvey, index, section.locationLabel);
  label.append(labelText, input);
  fragment.append(label);
  return fragment;
}

function boatFields(section, index) {
  const fragment = document.createDocumentFragment();
  const question = document.createElement("p");
  question.className = "survey-location-question";
  question.textContent = section.question;
  fragment.append(question, optionList(section, index));

  const row = document.createElement("div");
  row.className = "field-row survey-boat-fields";
  const details = [
    { label: "Marke (freiwillig)", name: "marke", placeholder: "z. B. MasterCraft, Malibu, Sea Ray …" },
    { label: "Modell (freiwillig)", name: "modell", placeholder: "" },
  ];
  details.forEach((detail) => {
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = detail.label;
    const input = document.createElement("input");
    input.type = "text";
    input.name = fieldName(activeSurvey, index, detail.name);
    input.placeholder = detail.placeholder;
    label.append(span, input);
    row.append(label);
  });
  fragment.append(row);
  return fragment;
}

function surveyBlock(section, index) {
  const block = document.createElement("fieldset");
  block.className = "survey-block";
  block.dataset.section = String(index);
  const legend = document.createElement("legend");
  legend.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>`;
  legend.append(document.createTextNode(section.title));
  block.append(legend);
  if (section.question && !["location", "boat"].includes(section.type)) {
    const question = document.createElement("p");
    question.className = "survey-location-question";
    question.textContent = section.question;
    block.append(question);
  }
  if (section.hint) {
    const hint = document.createElement("p");
    hint.className = "survey-hint";
    hint.textContent = section.hint;
    block.append(hint);
  }
  if (section.type === "matrix") block.append(matrix(section, index));
  if (section.type === "checks" || section.type === "radios") block.append(optionList(section, index));
  if (section.type === "textareas") block.append(textareas(section, index));
  if (section.type === "location") block.append(locationFields(section, index));
  if (section.type === "boat") block.append(boatFields(section, index));
  return block;
}

function bootConditionalBlock(question, options, name, onChange, level = "primary") {
  const block = document.createElement("fieldset");
  block.className = `survey-block boot-conditional boot-conditional-${level}`;
  block.dataset.bootConditional = level;
  const legend = document.createElement("legend");
  legend.textContent = question;
  block.append(legend);
  const wrapper = document.createElement("div");
  wrapper.className = "survey-options";
  options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = option;
    input.addEventListener("change", () => onChange?.(option, block));
    const text = document.createElement("span");
    text.textContent = option;
    label.append(input, text);
    wrapper.append(label);
  });
  block.append(wrapper);
  return block;
}

function clearBootConditionals(levels = ["primary", "secondary", "tertiary"]) {
  levels.forEach((level) => fields.querySelectorAll(`[data-boot-conditional="${level}"]`).forEach((node) => node.remove()));
}

function updatePilotContactHint() {
  const hasContact = [...form.querySelectorAll('.contact-box input')].some((input) => input.value.trim());
  pilotContactHint.hidden = !(activeSurvey === "boot" && pilotContactRequested && !hasContact);
}

function renderBoatDrive(boatType) {
  clearBootConditionals();
  pilotContactRequested = false;
  updatePilotContactHint();
  const boatBlock = fields.querySelector('[data-section="1"]');
  if (!boatBlock) return;
  const isSailboat = boatType === "Segelboot";
  const question = isSailboat ? "Welchen Hilfsantrieb hat Ihr Segelboot heute?" : "Welche Antriebsart hat Ihr Boot?";
  const options = isSailboat ? ["Benzin", "Diesel", "Elektro", "Keinen"] : ["Benzin", "Diesel", "Elektro", "Hybrid"];
  const drive = bootConditionalBlock(question, options, "boot-antriebsart", isSailboat ? renderSailboatFollowUp : null, "primary");
  boatBlock.insertAdjacentElement("afterend", drive);
}

function renderSailboatFollowUp(driveType, driveBlock) {
  clearBootConditionals(["secondary", "tertiary"]);
  pilotContactRequested = false;
  updatePilotContactHint();
  if (["Benzin", "Diesel"].includes(driveType)) {
    const conversion = bootConditionalBlock(
      "Könnten Sie sich grundsätzlich vorstellen, den Hilfsantrieb Ihres Segelboots auf Elektroantrieb umzurüsten?",
      ["Ja, das interessiert mich sehr", "Grundsätzlich ja", "Vielleicht – ich möchte mehr darüber erfahren", "Eher nicht", "Nein"],
      "boot-segelboot-umruestung",
      renderPilotQuestion,
      "secondary"
    );
    driveBlock.insertAdjacentElement("afterend", conversion);
  } else if (driveType === "Elektro") {
    const experience = bootConditionalBlock(
      "Sie nutzen bereits einen elektrischen Hilfsantrieb. Möchten Sie Ihre Erfahrungen mit uns teilen?",
      ["Ja, gerne", "Vielleicht", "Nein"],
      "boot-elektro-erfahrungen",
      null,
      "secondary"
    );
    driveBlock.insertAdjacentElement("afterend", experience);
  }
}

function renderPilotQuestion(answer, conversionBlock) {
  clearBootConditionals(["tertiary"]);
  pilotContactRequested = false;
  updatePilotContactHint();
  const positive = ["Ja, das interessiert mich sehr", "Grundsätzlich ja", "Vielleicht – ich möchte mehr darüber erfahren"].includes(answer);
  if (!positive) return;
  const pilot = bootConditionalBlock(
    "Hätten Sie Interesse, mehr über ein mögliches Pilotprojekt zur Elektrifizierung von Segelbooten am Bodensee zu erfahren?",
    ["Ja", "Vielleicht", "Nein"],
    "boot-pilotprojekt-interesse",
    (pilotAnswer) => {
      pilotContactRequested = ["Ja", "Vielleicht"].includes(pilotAnswer);
      updatePilotContactHint();
    },
    "tertiary"
  );
  conversionBlock.insertAdjacentElement("afterend", pilot);
}

function renderMunicipalityFollowUp(answer) {
  fields.querySelector('[data-follow-up="true"]')?.remove();
  const reference = fields.querySelector('[data-section="3"]');
  if (!reference || answer === "Noch nicht beurteilbar") return;
  const positive = ["Ja", "Eher ja", "Vielleicht"].includes(answer);
  const section = positive
    ? surveys.gemeinde.sections[4]
    : { title: "Was sind aus Ihrer Sicht die wichtigsten Gründe oder Hindernisse?", type: "checks", options: ["Kosten", "Fehlender Bedarf", "Netzanschluss", "Platzverhältnisse", "Offene Zuständigkeiten"] };
  const block = surveyBlock(section, 4);
  block.dataset.followUp = "true";
  block.classList.add("conditional-answer");
  reference.insertAdjacentElement("afterend", block);
}

function showSurvey(group, trigger = null) {
  activeSurvey = group;
  surveyTrigger = trigger;
  pilotContactRequested = false;
  pilotContactHint.hidden = true;
  const survey = surveys[group];
  form.action = formsparkEndpoints[group];
  form.method = "post";
  formSection.dataset.survey = "gemeinde";
  formSection.dataset.surveyGroup = group;
  fields.replaceChildren();
  title.textContent = survey.title;
  intro.textContent = survey.intro;
  changeSurvey.textContent = "Andere Gruppe wählen";
  duration.textContent = ["gemeinde", "werft", "boot", "fan"].includes(group) ? "Dauer: ca. 5 Minuten" : "Dauer: ungefähr 3–5 Minuten";
  contactNameLabel.textContent = ["boot", "fan"].includes(group) ? "Name" : "Name / Organisation";
  contactNumber.textContent = String(survey.sections.length + 1).padStart(2, "0");
  status.hidden = true;
  consentError.hidden = true;
  consent.removeAttribute("aria-invalid");
  form.reset();

  survey.sections.forEach((section, index) => {
    if (section.followUp) return;
    fields.append(surveyBlock(section, index));
  });

  formSection.hidden = false;
  requestAnimationFrame(() => {
    formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    title.focus({ preventScroll: true });
  });
}

document.querySelectorAll("[data-survey]").forEach((button) => {
  button.addEventListener("click", () => showSurvey(button.dataset.survey, button));
});

form.querySelectorAll(".contact-box input").forEach((input) => {
  input.addEventListener("input", updatePilotContactHint);
});

consent.addEventListener("change", () => {
  if (!consent.checked) return;
  consentError.hidden = true;
  consent.removeAttribute("aria-invalid");
});

changeSurvey.addEventListener("click", () => {
  formSection.hidden = true;
  document.querySelector("#mitgestalten").scrollIntoView({ behavior: "smooth" });
  surveyTrigger?.focus({ preventScroll: true });
});

function formsparkPayload() {
  const payload = {};
  new FormData(form).forEach((value, name) => {
    if (!(name in payload)) {
      payload[name] = value;
    } else if (Array.isArray(payload[name])) {
      payload[name].push(value);
    } else {
      payload[name] = [payload[name], value];
    }
  });
  payload.fragebogen = surveys[activeSurvey].title;
  if (consent.checked) {
    payload.privacy_consent = true;
    payload.privacy_consent_timestamp = new Date().toISOString();
    payload.privacy_notice_version = privacyNoticeVersion;
  }
  return payload;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!consent.checked) {
    consentError.hidden = false;
    consent.setAttribute("aria-invalid", "true");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    consent.closest(".consent").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
    consent.focus({ preventScroll: true });
    return;
  }
  if (!form.reportValidity()) return;

  const endpoint = formsparkEndpoints[activeSurvey];
  if (!endpoint) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Wird gesendet …";
  status.hidden = true;

  const payload = formsparkPayload();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Formspark antwortete mit Status ${response.status}`);

    form.reset();
    fields.querySelectorAll('[data-boot-conditional], [data-follow-up="true"]').forEach((node) => node.remove());
    pilotContactRequested = false;
    updatePilotContactHint();
    status.textContent = "Vielen Dank. Ihre Rückmeldung wurde erfolgreich übermittelt.";
    status.classList.remove("error");
    status.hidden = false;
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch (error) {
    console.error("Die Rückmeldung konnte nicht übermittelt werden.", error);
    status.textContent = "Die Rückmeldung konnte leider nicht übermittelt werden. Bitte versuchen Sie es später erneut. Ihre Eingaben bleiben erhalten.";
    status.classList.add("error");
    status.hidden = false;
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
});

const quickFeedbackForm = document.querySelector("#quick-feedback-form");

if (quickFeedbackForm) {
  const quickEmailPanel = document.querySelector("#quick-email-panel");
  const quickEmail = document.querySelector("#quick-email");
  const quickInterestsGroup = document.querySelector("#quick-interests-group");
  const quickInterestsError = document.querySelector("#quick-interests-error");
  const quickConsent = quickFeedbackForm.querySelector('[name="datenschutz-einwilligung"]');
  const quickConsentError = document.querySelector("#quick-consent-error");
  const quickSubmitStatus = document.querySelector("#quick-submit-status");
  const quickSuccess = document.querySelector("#quick-feedback-success");
  const quickHeading = document.querySelector(".quick-feedback-heading");

  function updateQuickEmailPanel() {
    const followAnswer = quickFeedbackForm.querySelector('[name="frage_3_weiterverfolgen"]:checked')?.value;
    const wantsUpdates = followAnswer === "Ja, gerne";
    quickEmailPanel.classList.toggle("is-visible", wantsUpdates);
    quickEmailPanel.setAttribute("aria-hidden", String(!wantsUpdates));
    quickEmail.disabled = !wantsUpdates;
    quickEmail.required = wantsUpdates;
    if (!wantsUpdates) quickEmail.value = "";
  }

  function quickFeedbackPayload() {
    const payload = {};
    new FormData(quickFeedbackForm).forEach((value, name) => {
      if (name === "datenschutz-einwilligung") return;
      if (!(name in payload)) {
        payload[name] = value;
      } else if (Array.isArray(payload[name])) {
        payload[name].push(value);
      } else {
        payload[name] = [payload[name], value];
      }
    });
    payload.fragebogen = "Bodensee 2035 – Ihre Meinung zählt";
    payload.privacy_consent = true;
    payload.privacy_consent_timestamp = new Date().toISOString();
    payload.privacy_notice_version = privacyNoticeVersion;
    return payload;
  }

  function submitBrevoDoubleOptIn(email) {
    return new Promise((resolve, reject) => {
      const frameName = `brevo-double-opt-in-${Date.now()}`;
      const frame = document.createElement("iframe");
      const brevoForm = document.createElement("form");
      let submitted = false;
      let settled = false;
      const cleanup = () => {
        window.clearTimeout(timeout);
        brevoForm.remove();
        frame.remove();
      };
      const finish = (callback) => {
        if (settled) return;
        settled = true;
        cleanup();
        callback();
      };
      const timeout = window.setTimeout(() => finish(() => reject(new Error("Brevo-Anfrage hat das Zeitlimit überschritten"))), 15000);

      frame.name = frameName;
      frame.hidden = true;
      frame.setAttribute("aria-hidden", "true");
      frame.addEventListener("load", () => {
        if (submitted) finish(resolve);
      });

      brevoForm.method = "POST";
      brevoForm.action = brevoDoubleOptInEndpoint;
      brevoForm.target = frameName;
      brevoForm.hidden = true;
      [
        ["EMAIL", email],
        ["email_address_check", ""],
        ["locale", "de"],
      ].forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        brevoForm.append(input);
      });

      document.body.append(frame, brevoForm);
      requestAnimationFrame(() => {
        submitted = true;
        brevoForm.submit();
      });
    });
  }

  quickFeedbackForm.querySelectorAll('[name="frage_3_weiterverfolgen"]').forEach((input) => {
    input.addEventListener("change", updateQuickEmailPanel);
  });

  quickFeedbackForm.querySelectorAll('[name="frage_2_interessen"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (!input.checked) return;
      quickInterestsError.hidden = true;
      quickInterestsGroup.removeAttribute("aria-invalid");
    });
  });

  quickConsent.addEventListener("change", () => {
    if (!quickConsent.checked) return;
    quickConsentError.hidden = true;
    quickConsent.removeAttribute("aria-invalid");
  });

  quickFeedbackForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const hasInterest = Boolean(quickFeedbackForm.querySelector('[name="frage_2_interessen"]:checked'));
    quickInterestsError.hidden = hasInterest;
    quickInterestsGroup.toggleAttribute("aria-invalid", !hasInterest);
    if (!hasInterest) {
      const firstInterest = quickFeedbackForm.querySelector('[name="frage_2_interessen"]');
      quickInterestsGroup.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      firstInterest.focus({ preventScroll: true });
      return;
    }

    if (!quickConsent.checked) {
      quickConsentError.hidden = false;
      quickConsent.setAttribute("aria-invalid", "true");
      quickConsent.closest(".consent").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      quickConsent.focus({ preventScroll: true });
      return;
    }

    if (!quickFeedbackForm.reportValidity()) return;

    const submitButton = quickFeedbackForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    const followAnswer = quickFeedbackForm.querySelector('[name="frage_3_weiterverfolgen"]:checked')?.value;
    const wantsUpdates = followAnswer === "Ja, gerne";
    const email = quickEmail.value.trim();
    submitButton.disabled = true;
    submitButton.textContent = "Wird gesendet …";
    quickSubmitStatus.hidden = true;

    try {
      const response = await fetch(quickFeedbackEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(quickFeedbackPayload()),
      });
      if (!response.ok) throw new Error(`Formspark antwortete mit Status ${response.status}`);

      if (wantsUpdates) await submitBrevoDoubleOptIn(email);

      quickFeedbackForm.reset();
      updateQuickEmailPanel();
      quickHeading.hidden = true;
      quickFeedbackForm.hidden = true;
      quickSuccess.hidden = false;
      quickSuccess.focus({ preventScroll: true });
      quickSuccess.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    } catch (error) {
      console.error("Die kurze Rückmeldung konnte nicht vollständig übermittelt werden.", error);
      quickSubmitStatus.textContent = "Die Übermittlung hat leider nicht funktioniert. Bitte versuchen Sie es erneut. Ihre Eingaben bleiben erhalten.";
      quickSubmitStatus.classList.add("error");
      quickSubmitStatus.hidden = false;
      quickSubmitStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });

  updateQuickEmailPanel();
}
