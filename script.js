const documents = [
  {
    title: "CV completo y expediente académico",
    type: "Formación",
    category: "formacion",
    detail: "CV, títulos registrados en SNIESE, historial IESS y registro nacional de investigadora.",
    file: "assets/docs/cv-completo.pdf",
  },
  {
    title: "Certificado laboral - Fiscalía General del Estado",
    type: "Experiencia",
    category: "experiencia",
    detail: "Servicios como Secretaria de Fiscalía en la Fiscalía Provincial de Chimborazo.",
    file: "assets/docs/fge-certificado-laboral.pdf",
  },
  {
    title: "Certificado laboral - GAD Municipal Santiago de Quero",
    type: "Experiencia",
    category: "experiencia",
    detail: "Servicios en Procuraduría Síndica y cargo de Abogada 1.",
    file: "assets/docs/gad-quero-certificado-laboral.pdf",
  },
  {
    title: "Maestría en Derecho Penal - UBA, módulo III",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Cursada presencial/híbrida de febrero de 2026.",
    file: "assets/docs/uba-derecho-penal-modulo-iii-2026.pdf",
  },
  {
    title: "Diplomado en Derechos Humanos de las Personas Mayores",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Certificación de cursada emitida el 15 de julio de 2026.",
    file: "assets/docs/diplomado-derechos-personas-mayores-2026.pdf",
  },
  {
    title: "Sistema Universal de Derechos Humanos",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Taller de la Procuraduría General del Estado, 30 de junio de 2026.",
    file: "assets/docs/pge-derechos-humanos-tratados-2026.pdf",
  },
  {
    title: "Intraneus y extraneus en el delito de peculado",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Taller de la Procuraduría General del Estado, 11 de junio de 2026.",
    file: "assets/docs/pge-delito-peculado-2026.pdf",
  },
  {
    title: "Derecho especializado en delitos contra las personas y violencia de género",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Diplomado de 120 horas, noviembre 2024 a enero 2025.",
    file: "assets/docs/delitos-personas-violencia-genero-2025.pdf",
  },
  {
    title: "Control de constitucionalidad y mecanismos en Ecuador",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Curso de 40 horas realizado en enero de 2025.",
    file: "assets/docs/control-constitucionalidad-2025.pdf",
  },
  {
    title: "Tipos de procedimientos del COIP",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Curso de 40 horas realizado entre noviembre y diciembre de 2024.",
    file: "assets/docs/procedimientos-coip-2024.pdf",
  },
  {
    title: "Docencia universitaria e información científica",
    type: "Capacitación",
    category: "capacitacion",
    detail: "Herramientas de búsqueda de información científica y procesamiento bibliográfico, 120 horas.",
    file: "assets/docs/docencia-busqueda-informacion-cientifica-2018.pdf",
  },
  {
    title: "Listado de publicaciones",
    type: "Publicaciones",
    category: "publicaciones",
    detail: "Documento fuente de artículos, obras y enlaces académicos.",
    file: "assets/docs/publicaciones.pdf",
  },
];

const publications = [
  {
    title: "La acción de protección ante la terminación de nombramientos provisionales de servidores públicos.",
    type: "Artículo científico",
    url: "https://revista.gnerando.org/revista/index.php/RCMG/article/view/601",
  },
  {
    title: "Ejecución de sentencias de la Corte Constitucional en derechos humanos: revisión bibliográfica",
    type: "Artículo",
    url: "https://revistasaga.org/index.php/saga/article/view/303",
  },
  {
    title: "Uso del celular en horas de estudio y rendimiento académico",
    type: "Artículo",
    url: "https://revistaerevna.com/index.php/erevna/article/view/52/106",
  },
  {
    title: "Jurisprudencia sobre el derecho a la salud mental en el marco de la pandemia en Ecuador",
    type: "Artículo",
    url: "https://revistasaga.org/index.php/saga/article/view/240",
  },
  {
    title: "Educación 4.0: Enseñar en la era de la inteligencia artificial y los datos",
    type: "Publicación",
    url: "https://www.researchgate.net/publication/402938461_Educacion_40_Ensenar_en_la_era_de_la_inteligencia_artificial_y_los_datos",
  },
  {
    title: "La investigación básica como fundamento del progreso científico",
    type: "Libro / catálogo",
    url: "https://isbnecuador.com/catalogo.php?mode=detalle&nt=108529",
  },
  {
    title: "Educación STEAM: Ciencia, tecnología, ingeniería, arte y matemáticas en el aula",
    type: "Publicación",
    url: "https://www.researchgate.net/publication/398812066_Educacion_STEAM_Ciencia_tecnologia_ingenieria_arte_y_matematicas_en_el_aula",
  },
  {
    title: "Humanizar la educación en contextos tecnológicos",
    type: "Publicación",
    url: "https://www.researchgate.net/publication/404647088_Humanizar_la_educacion_en_contextos_tecnologicos",
  },
  {
    title: "La investigación como lenguaje del mundo contemporáneo",
    type: "Libro",
    url: "https://dialnet.unirioja.es/servlet/libro?codigo=1030759",
  },
  {
    title: "El sentido de educar en el siglo XXI",
    type: "Libro",
    url: "https://dialnet.unirioja.es/servlet/libro?codigo=1030761",
  },
  {
    title: "La investigación básica en la formación de pensamiento crítico",
    type: "Publicación",
    url: "https://www.researchgate.net/publication/404646479_La_investigacion_basica_en_la_formacion_de_pensamiento_critico",
  },
  {
    title: "Investigar en un planeta en crisis",
    type: "Libro",
    url: "https://dialnet.unirioja.es/servlet/libro?codigo=1030845",
  },
  {
    title: "La investigación en la era de la sobreinformación",
    type: "Publicación",
    url: "https://www.researchgate.net/publication/411136539_La_investigacion_en_la_era_de_la_sobreinformacion",
  },
  {
    title: "La crisis planetaria como problema epistemológico",
    type: "Artículo",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=10829058",
  },
  {
    title: "Nuevos marcos teóricos para investigar un mundo en colapso",
    type: "Artículo",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=10829057",
  },
];

function createLink(text, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = text;
  return link;
}

function renderDocuments(filter = "todos") {
  const list = document.querySelector("#documentList");
  if (!list) return;
  list.innerHTML = "";

  documents
    .filter((documentItem) => filter === "todos" || documentItem.category === filter)
    .forEach((documentItem) => {
      const card = document.createElement("article");
      card.className = "document-card";

      const type = document.createElement("span");
      type.className = "doc-type";
      type.textContent = documentItem.type;

      const title = document.createElement("h3");
      title.textContent = documentItem.title;

      const detail = document.createElement("p");
      detail.textContent = documentItem.detail;

      card.append(type, title, detail, createLink("Abrir respaldo", documentItem.file));
      list.appendChild(card);
    });
}

function renderPublications() {
  const list = document.querySelector("#publicationList");
  if (!list) return;

  publications.forEach((publication) => {
    const card = document.createElement("article");
    card.className = "publication-card";

    const type = document.createElement("span");
    type.className = "pub-type";
    type.textContent = publication.type;

    const title = document.createElement("h3");
    title.textContent = publication.title;

    card.append(type, title, createLink("Abrir enlace", publication.url));
    list.appendChild(card);
  });
}

document.querySelector(".nav-toggle")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector("#main-nav");
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("open", !isOpen);
});

document.querySelector("#main-nav")?.addEventListener("click", () => {
  document.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
  document.querySelector("#main-nav")?.classList.remove("open");
});

document.querySelector("#printCv")?.addEventListener("click", () => window.print());

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderDocuments(button.dataset.filter);
  });
});

renderPublications();
renderDocuments();
