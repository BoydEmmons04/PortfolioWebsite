/*
  Shared site configuration lives here.

  To add a new page in the future:
  1. Duplicate an existing HTML page file.
  2. Update the <title>, body data-page attribute, and content.
  3. Add a new object to NAV_LINKS below so it appears in the shared navigation and footer.
*/
const NAV_LINKS = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Projects", href: "projects.html", page: "projects" },
  { label: "References", href: "references.html", page: "references" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

const ACTIVE_PAGE = document.body.dataset.page;
let activeModal = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderProjectAction(project) {
  if (project.ctaType === "github" && project.link) {
    return `
      <a class="project-card__cta" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">
        ${escapeHtml(project.linkLabel || "View on GitHub")}
      </a>
    `;
  }

  if (project.ctaType === "popup" && project.popup) {
    return `
      <button
        type="button"
        class="project-card__cta project-card__cta--button"
        data-project-popup="${escapeHtml(project.title)}"
      >
        ${escapeHtml(project.linkLabel || "Open Preview")}
      </button>
    `;
  }

  return "";
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");

  if (!header) {
    return;
  }

  header.innerHTML = `
    <nav class="nav glass-panel reveal">
      <a class="nav__brand" href="index.html" aria-label="Portfolio homepage">
        <span class="nav__brand-mark">S</span>
        <span>Stephen Emmons</span>
      </a>
      <div class="nav__links">
        ${NAV_LINKS.map(
          (link) => `
            <a
              class="nav__link ${link.page === ACTIVE_PAGE ? "is-active" : ""}"
              href="${link.href}"
            >
              ${link.label}
            </a>
          `,
        ).join("")}
      </div>
    </nav>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");

  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <div class="footer-panel glass-panel reveal reveal-delay-3">
      <p>Stephen Emmons</p>
      <div class="footer-panel__links">
        ${NAV_LINKS.map((link) => `<a class="text-link" href="${link.href}">${link.label}</a>`).join("")}
      </div>
    </div>
  `;
}

function renderProjects() {
  const containers = document.querySelectorAll("[data-project-list]");

  containers.forEach((container, index) => {
    const mode = container.dataset.projectList;
    const projects =
      mode === "featured"
        ? PROJECTS.filter((project) => project.featured).slice(0, 3)
        : PROJECTS;

    container.innerHTML = projects
      .map(
        (project, projectIndex) => `
          <article class="project-card reveal reveal-delay-${Math.min(projectIndex + index, 3)}">
            <div class="project-card__meta">
              <span>${project.year}</span>
              <span>${project.tags[0]}</span>
            </div>
            <div>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
            </div>
            <div class="project-card__tags">
              ${project.tags.map((tag) => `<span class="project-card__tag">${tag}</span>`).join("")}
            </div>
            ${renderProjectAction(project)}
          </article>
        `,
      )
      .join("");
  });
}

function renderProjectModal() {
  const modalRoot = document.createElement("div");
  modalRoot.className = "project-modal-root";
  modalRoot.setAttribute("data-project-modal-root", "");
  document.body.append(modalRoot);
}

function openProjectModal(projectTitle) {
  const project = PROJECTS.find(
    (item) => item.title === projectTitle && item.ctaType === "popup" && item.popup,
  );
  const modalRoot = document.querySelector("[data-project-modal-root]");

  if (!project || !modalRoot) {
    return;
  }

  const galleryImages = Array.isArray(project.popup.images) && project.popup.images.length > 0
    ? project.popup.images
    : project.popup.image
      ? [{ src: project.popup.image, alt: project.popup.imageAlt || project.title }]
      : [];

  if (galleryImages.length === 0) {
    return;
  }

  const galleryClass = galleryImages.length === 1
    ? "project-modal__gallery project-modal__gallery--single"
    : "project-modal__gallery";

  modalRoot.innerHTML = `
    <div class="project-modal is-open" role="dialog" aria-modal="true" aria-label="${escapeHtml(project.title)} project gallery">
      <div class="project-modal__backdrop" data-project-modal-close></div>
      <div class="project-modal__panel glass-panel">
        <button
          type="button"
          class="project-modal__close"
          aria-label="Close project preview"
          data-project-modal-close
        >
          X
        </button>
        <div class="${galleryClass}">
          ${galleryImages.map((image, index) => `
            <figure class="project-modal__tile project-modal__tile--${Math.min(index + 1, 6)}">
              <img
                src="${escapeHtml(image.src)}"
                alt="${escapeHtml(image.alt || project.title)}"
                class="project-modal__image"
              >
            </figure>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  activeModal = modalRoot.querySelector(".project-modal");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  const modalRoot = document.querySelector("[data-project-modal-root]");

  if (!modalRoot) {
    return;
  }

  modalRoot.innerHTML = "";
  activeModal = null;
  document.body.classList.remove("modal-open");
}

function bindProjectInteractions() {
  document.addEventListener("click", (event) => {
    const popupTrigger = event.target.closest("[data-project-popup]");
    const closeTrigger = event.target.closest("[data-project-modal-close]");

    if (popupTrigger) {
      openProjectModal(popupTrigger.getAttribute("data-project-popup"));
      return;
    }

    if (closeTrigger) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeModal) {
      closeProjectModal();
    }
  });
}

function init() {
  renderHeader();
  renderFooter();
  renderProjects();
  renderProjectModal();
  bindProjectInteractions();
}

init();
