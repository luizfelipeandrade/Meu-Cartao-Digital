const card = document.getElementById("card");
const flipToBackBtn = document.getElementById("flip-to-back-btn");
const flipToFrontBtn = document.getElementById("flip-to-front-btn");
const langBtn = document.getElementById("lang-btn");

// Função de virar o cartão
function toggleCard() {
  card.classList.toggle("flipped");
}

// Adiciona os eventos de clique para girar
flipToBackBtn.addEventListener("click", toggleCard);
flipToFrontBtn.addEventListener("click", toggleCard);

// Dicionário de Internacionalização (i18n)
const i18n = {
  pt: {
    role: "Desenvolvedor de Software em formação",
    languages:
      '<i class="fa-solid fa-language"></i> Idiomas: Português, Inglês',
    location: '<i class="fa-solid fa-location-dot"></i> Rio de Janeiro, Brasil',
    btnFront:
      '<i class="fa-solid fa-arrows-rotate"></i> Ver Formações <i class="fa-solid fa-arrows-rotate" style="opacity: 0"></i>',

    titleBack:
      '<i class="fa-solid fa-user-graduate"></i> Formação & Trajetória',
    gradTitle: "Sistemas de Computação<br>(Tecnólogo)",
    gradDesc:
      "Universidade Federal Fluminense (UFF) — <i>Graduação em Andamento.</i>",
    // Quebra de linha adicionada no técnico
    techSchoolTitle: "Desenvolvedor de Sistemas<br>(Ensino Técnico)",
    techSchoolDesc: "FAETEC - Maria Mercedes Mendes Teixeira.",
    techTitle: "Linguagens & Tecnologias",
    techDesc:
      "JavaScript, TypeScript, React, Java, Python, HTML/CSS, Banco de Dados.",

    btnBack:
      '<i class="fa-solid fa-arrows-rotate" style="opacity: 0"></i> Voltar à Frente <i class="fa-solid fa-arrows-rotate"></i>',
  },
  en: {
    role: "Software Developer in Training",
    languages:
      '<i class="fa-solid fa-language"></i> Languages: Portuguese, English',
    location: '<i class="fa-solid fa-location-dot"></i> Rio de Janeiro, Brazil',
    btnFront:
      '<i class="fa-solid fa-arrows-rotate"></i> View Education <i class="fa-solid fa-arrows-rotate" style="opacity: 0"></i>',

    titleBack: '<i class="fa-solid fa-user-graduate"></i> Education & Path',
    gradTitle: "Computer Systems Technology<br>(Associate Degree)",
    gradDesc:
      "Universidade Federal Fluminense (UFF) — <i>Degree in Progress.</i>",
    // Quebra de linha adicionada no técnico
    techSchoolTitle: "Systems Development<br>(Technical High School)",
    techSchoolDesc: "FAETEC - Maria Mercedes Mendes Teixeira.",
    techTitle: "Languages & Technologies",
    techDesc:
      "JavaScript, TypeScript, React, Java, Python, HTML/CSS, Databases.",

    btnBack:
      '<i class="fa-solid fa-arrows-rotate" style="opacity: 0"></i> Back to Front <i class="fa-solid fa-arrows-rotate"></i>',
  },
};

let currentLang = localStorage.getItem("userLang") || "pt";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("userLang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Renderiza as bandeiras reais por imagem, contornando o erro de emojis do Windows
  if (lang === "pt") {
    langBtn.innerHTML =
      '<img src="https://flagcdn.com/w20/us.png" alt="USA Flag" style="width: 18px;"> EN';
    document.documentElement.lang = "pt-BR";
  } else {
    langBtn.innerHTML =
      '<img src="https://flagcdn.com/w20/br.png" alt="Brazil Flag" style="width: 18px;"> PT';
    document.documentElement.lang = "en";
  }
}

setLanguage(currentLang);

langBtn.addEventListener("click", () => {
  setLanguage(currentLang === "pt" ? "en" : "pt");
});
