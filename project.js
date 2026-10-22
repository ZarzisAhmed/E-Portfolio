/* =========================================================
   PROJECT DETAIL PAGE
   Reads ?id=<project-id> and renders that project from projects.js
========================================================= */
(function () {
  const root = document.getElementById("projectRoot");
  if (!root || typeof PROJECTS === "undefined") return;

  const id = new URLSearchParams(window.location.search).get("id");
  const index = PROJECTS.findIndex((p) => p.id === id);

  // Unknown or missing id: friendly fallback
  if (index === -1) {
    document.title = "Project not found | Khondokar Zarzis Ahmed";
    root.innerHTML = `
      <section class="section project-hero">
        <h1>Project not found</h1>
        <p class="lead">That project doesn't exist. Head back to see all of my work.</p>
        <div class="detail-actions">
          <a class="btn" href="index.html#projects"><i class="fa-solid fa-arrow-left"></i> Back to Projects</a>
        </div>
      </section>`;
    return;
  }

  const p = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const li = (items) => items.map((t) => `<li>${t}</li>`).join("");

  document.title = `${p.name} | Khondokar Zarzis Ahmed`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", `${p.name}: ${p.tagline}`);

  root.innerHTML = `
    <section class="section project-hero">
      <a class="back-link reveal" href="index.html#projects">
        <i class="fa-solid fa-arrow-left"></i> Back to Projects
      </a>
      <span class="eyebrow reveal">Project Details</span>
      <h1 class="reveal" style="--delay: 0.05s">${p.name}</h1>
      <p class="lead reveal" style="--delay: 0.1s">${p.tagline}</p>

      <div class="detail-actions reveal" style="--delay: 0.15s">
        <a class="btn" href="${p.live}" target="_blank" rel="noopener">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Project
        </a>
        <a class="btn btn-outline" href="${p.repo}" target="_blank" rel="noopener">
          <i class="fa-brands fa-github"></i> GitHub Repository
        </a>
      </div>

      <div class="detail-cover reveal-scale">
        <img src="${p.image}" alt="${p.name} screenshot" />
      </div>
    </section>

    <section class="section detail-section">
      <div class="detail-grid">
        <article class="detail-block reveal-left">
          <h3><i class="fa-solid fa-layer-group"></i> Main Technology Stack</h3>
          <ul class="tags tags-lg">${li(p.stack)}</ul>
        </article>

        <article class="detail-block reveal-right">
          <h3><i class="fa-solid fa-circle-info"></i> Brief Description</h3>
          <p>${p.description}</p>
        </article>

        <article class="detail-block reveal-left">
          <h3><i class="fa-solid fa-link"></i> Project Links</h3>
          <ul class="link-list">
            <li>
              <i class="fa-solid fa-globe"></i>
              <span><strong>Live project</strong>
              <a href="${p.live}" target="_blank" rel="noopener">${p.live}</a></span>
            </li>
            <li>
              <i class="fa-brands fa-github"></i>
              <span><strong>GitHub repository (client)</strong>
              <a href="${p.repo}" target="_blank" rel="noopener">${p.repo}</a></span>
            </li>
          </ul>
        </article>

        <article class="detail-block reveal-right">
          <h3><i class="fa-solid fa-mountain"></i> Challenges Faced</h3>
          <ul class="detail-list">${li(p.challenges)}</ul>
        </article>

        <article class="detail-block full reveal-scale">
          <h3><i class="fa-solid fa-rocket"></i> Potential Improvements &amp; Future Plans</h3>
          <ul class="detail-list">${li(p.improvements)}</ul>
        </article>
      </div>

      <div class="detail-actions next-project reveal">
        <a class="btn btn-outline" href="index.html#projects">
          <i class="fa-solid fa-table-cells-large"></i> All Projects
        </a>
        <a class="btn" href="project.html?id=${next.id}">
          Next: ${next.name} <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  `;
})();
