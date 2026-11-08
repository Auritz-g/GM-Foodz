const profiles = ["JA", "AA", "DnA", "DJ", "GA", "AnT"];
const profileStorageKey = "gm-foodz-active-profile";
const themeStorageKey = "gm-foodz-theme";

const carousel = document.querySelector("#profile-carousel");
const status = document.querySelector("#selection-status");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const themeIcon = document.querySelector("#theme-icon");
const browserThemeColor = document.querySelector("#browser-theme-color");
const root = document.documentElement;

function readStorage(key, allowedValues) {
  try {
    const value = window.localStorage.getItem(key);
    return allowedValues.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The page remains usable if browser storage is unavailable.
  }
}

let selectedProfile = readStorage(profileStorageKey, profiles);
let theme = readStorage(themeStorageKey, ["dark", "light"]) ?? "dark";

function updateTheme() {
  const isDark = theme === "dark";
  root.dataset.theme = theme;
  browserThemeColor.content = isDark ? "#7D9CAA" : "#f3f7f8";
  themeToggle.setAttribute("aria-pressed", String(!isDark));
  themeToggle.setAttribute("aria-label", `Cambiar a modo ${isDark ? "claro" : "oscuro"}`);
  themeLabel.textContent = `Modo ${theme === "dark" ? "oscuro" : "claro"}`;
  themeIcon.textContent = isDark ? "☾" : "☀";
  writeStorage(themeStorageKey, theme);
}

function updateSelection() {
  const cards = [...carousel.querySelectorAll(".profile-card")];
  cards.forEach((card) => {
    const active = card.dataset.profile === selectedProfile;
    card.setAttribute("aria-pressed", String(active));
  });

  if (selectedProfile) {
    status.textContent = `Perfil seleccionado: ${selectedProfile}`;
    writeStorage(profileStorageKey, selectedProfile);
  } else {
    status.textContent = "Selecciona un perfil para continuar.";
  }
}

function createProfileCard(profile) {
  const button = document.createElement("button");
  button.className = "profile-card snap-center flex shrink-0 flex-col items-center justify-center gap-4 p-6 text-center focus-visible:outline-2 focus-visible:outline-offset-4";
  button.type = "button";
  button.dataset.profile = profile;
  button.setAttribute("aria-label", `Seleccionar perfil ${profile}`);
  button.setAttribute("aria-pressed", "false");

  const heading = document.createElement("h1");
  heading.className = "profile-name";
  heading.textContent = profile;

  const hint = document.createElement("span");
  hint.className = "text-sm font-medium";
  hint.textContent = "Perfil familiar";

  button.append(heading, hint);
  button.addEventListener("click", () => {
    selectedProfile = profile;
    updateSelection();
    if (carousel.scrollWidth > carousel.clientWidth) {
      button.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
    }
  });

  return button;
}

function scrollToProfile(direction) {
  const cards = [...carousel.querySelectorAll(".profile-card")];
  const storedIndex = profiles.indexOf(selectedProfile);
  const currentIndex = storedIndex < 0 ? (direction > 0 ? -1 : 0) : storedIndex;
  const nextIndex = (currentIndex + direction + profiles.length) % profiles.length;
  const nextProfile = profiles[nextIndex];
  const nextCard = cards.find((card) => card.dataset.profile === nextProfile);

  selectedProfile = nextProfile;
  updateSelection();
  if (carousel.scrollWidth > carousel.clientWidth) {
    nextCard?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  }
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

profiles.forEach((profile) => carousel.append(createProfileCard(profile)));
updateTheme();
updateSelection();

if ("IntersectionObserver" in window) {
  const centerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-centered", entry.isIntersecting);
    });
  }, {
    root: carousel,
    threshold: 0.7,
  });

  carousel.querySelectorAll(".profile-card").forEach((card) => centerObserver.observe(card));
} else {
  carousel.querySelector(".profile-card")?.classList.add("is-centered");
}

if (selectedProfile) {
  if (carousel.scrollWidth > carousel.clientWidth) {
    carousel.querySelector(`[data-profile="${selectedProfile}"]`)
      ?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
  }
}

themeToggle.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  updateTheme();
});

document.querySelector("#previous-profile").addEventListener("click", () => scrollToProfile(-1));
document.querySelector("#next-profile").addEventListener("click", () => scrollToProfile(1));

carousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    scrollToProfile(1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    scrollToProfile(-1);
  }
});
