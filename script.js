const commonDevelopment = ["Sehr positiv", "Eher positiv", "Neutral", "Eher kritisch", "Kritisch"];

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
    intro: "Ihre Erfahrungen und Bedürfnisse helfen, ein praxistaugliches Ladenetz am Bodensee zu planen.",
    sections: privateSections,
  },
  fan: {
    title: "Für Bodensee-Liebhaber:innen",
    intro: "Ihre Meinung hilft mit, die nächsten Schritte bedarfsgerecht zu planen.",
    sections: privateSections.map((section, index) => index === 0
      ? { ...section, options: section.options.filter((option) => option !== "Bootsbesitzer:in") }
      : section),
  },
  gemeinde: {
    title: "Für Gemeinden, Städte, Häfen & Marinas",
    intro: "Heute geht es nicht um Investitionsentscheide, sondern darum, Interesse und mögliche Wege gemeinsam auszuloten.",
    sections: [
      { title: "Ihre Organisation", type: "radios", options: ["Gemeinde / Stadt", "Hafen / Marina", "Unternehmen", "Sonstige Organisation"] },
      { title: "Welche Technologien bestehen bereits oder sind künftig ein Thema?", type: "matrix", rows: ["Photovoltaikanlagen", "Batteriespeicher", "Wärmepumpen", "Ladestationen für Elektrofahrzeuge", "Ladeinfrastruktur für Elektroboote", "Lokale Elektrizitätsgemeinschaften (LEG)", "Klima- oder Energiestrategie"], labels: ["Bereits vorhanden", "Interesse / geplant"] },
      { title: "Welche Bedeutung hätte Elektromobilität auf dem Wasser für Ihren Standort?", type: "radios", options: ["Sehr grosse Bedeutung", "Eher grosse Bedeutung", "Mittlere Bedeutung", "Eher geringe Bedeutung", "Ich weiss es nicht"] },
      { title: "Könnten Sie künftig Ladeinfrastruktur für Elektroboote anbieten?", type: "radios", options: ["Ja", "Eher ja", "Vielleicht", "Eher nein", "Nein", "Ich weiss es nicht"], conditional: true },
      { title: "Welche Möglichkeiten könnten Sie sich vorstellen?", type: "checks", options: ["Eine einzelne Ladestation", "Mehrere Ladestationen", "Eine DC-Schnellladestation", "Ich weiss es noch nicht"], followUp: true },
      { title: "Welche Themen interessieren Sie?", type: "checks", options: ["AC-Ladestationen", "DC-Schnellladestationen", "Energie-Hubs", "Solarenergie", "Batteriespeicher", "Lokale Elektrizitätsgemeinschaften", "Bidirektionales Laden", "Klimastrategie", "Tourismus", "Fördermöglichkeiten", "Erfahrungsaustausch"] },
      { title: "Wie möchten Sie sich einbringen?", type: "checks", options: ["Projektverlauf mitverfolgen", "Workshops besuchen", "Bedarf am Standort prüfen", "Erfahrungen austauschen", "Fördermöglichkeiten prüfen", "Pilotstandort bereitstellen", "Aktiv am Ladenetz mitarbeiten", "Spätere Vereinsmitgliedschaft"] },
      { title: "Zum Abschluss", type: "textareas", labels: ["Was müsste erfüllt sein, damit Ihr Standort diesen Weg mitgehen könnte?", "Haben Sie Ideen oder Anregungen?"] },
    ],
  },
  werft: {
    title: "Für Werften, Bootshändler & Hersteller",
    intro: "Wir möchten Lösungen mit der Branche entwickeln – nicht für die Branche.",
    sections: [
      { title: "Welche Technologien beschäftigen Ihr Unternehmen bereits?", type: "matrix", rows: ["Elektroboote", "Ladeinfrastruktur", "Photovoltaik", "Batteriespeicher", "Wärmepumpen", "Lokale Elektrizitätsgemeinschaften (LEG)", "Nachhaltigkeitsstrategie"], labels: ["Bereits aktiv", "Interesse"] },
      { title: "Wie beurteilen Sie die zukünftige Entwicklung der Elektromobilität auf dem Wasser?", type: "radios", options: commonDevelopment },
      { title: "Welche Themen interessieren Sie besonders?", type: "checks", options: ["AC-Ladestationen", "DC-Schnellladestationen", "Energie-Hubs", "Solarenergie", "Batteriespeicher", "Bidirektionales Laden", "Pilotprojekte", "Gemeinsame Standards", "Förderprogramme", "Erfahrungsaustausch"] },
      { title: "Wie möchten Sie sich einbringen?", type: "checks", options: ["Fachwissen einbringen", "Pilotprojekte begleiten", "Referenzstandorte bereitstellen", "Technische Erfahrungen teilen", "Partner der Initiative werden", "Informiert bleiben", "Spätere Vereinsmitgliedschaft"] },
      { title: "Zum Abschluss", type: "textareas", labels: ["Welche Chancen sehen Sie?", "Welche Herausforderungen sehen Sie?", "Haben Sie Ideen oder Anregungen?"] },
    ],
  },
};

const formSection = document.querySelector("#interesse");
const form = document.querySelector("#survey-form");
const fields = document.querySelector("#survey-fields");
const title = document.querySelector("#survey-title");
const intro = document.querySelector("#survey-intro");
const contactNumber = document.querySelector("#contact-number");
const status = document.querySelector("#survey-status");
let activeSurvey = null;

function fieldName(group, index, label = "antwort") {
  return `${group}-${index + 1}-${label}`.toLowerCase().replace(/[^a-z0-9äöüß]+/gi, "-");
}

function optionList(section, index) {
  const wrapper = document.createElement("div");
  wrapper.className = "survey-options";
  const type = section.type === "checks" ? "checkbox" : "radio";
  const name = fieldName(activeSurvey, index);

  section.options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = type;
    input.name = type === "checkbox" ? `${name}[]` : name;
    input.value = option;
    if (section.conditional) input.addEventListener("change", () => renderMunicipalityFollowUp(option));
    const text = document.createElement("span");
    text.textContent = option;
    label.append(input, text);
    wrapper.append(label);
  });
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
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = `${fieldName(activeSurvey, index, row)}[]`;
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

function surveyBlock(section, index) {
  const block = document.createElement("fieldset");
  block.className = "survey-block";
  block.dataset.section = String(index);
  const legend = document.createElement("legend");
  legend.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>`;
  legend.append(document.createTextNode(section.title));
  block.append(legend);
  if (section.type === "matrix") block.append(matrix(section, index));
  if (section.type === "checks" || section.type === "radios") block.append(optionList(section, index));
  if (section.type === "textareas") block.append(textareas(section, index));
  return block;
}

function renderMunicipalityFollowUp(answer) {
  fields.querySelector('[data-follow-up="true"]')?.remove();
  const reference = fields.querySelector('[data-section="3"]');
  if (!reference || answer === "Ich weiss es nicht") return;
  const positive = ["Ja", "Eher ja", "Vielleicht"].includes(answer);
  const section = positive
    ? surveys.gemeinde.sections[4]
    : { title: "Was sind aus Ihrer Sicht die wichtigsten Gründe oder Hindernisse?", type: "checks", options: ["Kosten", "Fehlender Bedarf", "Netzanschluss", "Platzverhältnisse", "Offene Zuständigkeiten"] };
  const block = surveyBlock(section, 4);
  block.dataset.followUp = "true";
  block.classList.add("conditional-answer");
  reference.insertAdjacentElement("afterend", block);
}

function showSurvey(group) {
  activeSurvey = group;
  const survey = surveys[group];
  fields.replaceChildren();
  title.textContent = survey.title;
  intro.textContent = survey.intro;
  contactNumber.textContent = String(survey.sections.length + 1).padStart(2, "0");
  status.hidden = true;
  form.reset();

  survey.sections.forEach((section, index) => {
    if (section.followUp) return;
    fields.append(surveyBlock(section, index));
  });

  formSection.hidden = false;
  requestAnimationFrame(() => formSection.scrollIntoView({ behavior: "smooth", block: "start" }));
}

document.querySelectorAll("[data-survey]").forEach((button) => {
  button.addEventListener("click", () => showSurvey(button.dataset.survey));
});

document.querySelector("#change-survey").addEventListener("click", () => {
  formSection.hidden = true;
  document.querySelector("#mitgestalten").scrollIntoView({ behavior: "smooth" });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.hidden = false;
  status.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
