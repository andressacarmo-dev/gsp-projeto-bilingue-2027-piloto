const $ = (selector) => document.querySelector(selector);

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

async function init() {
  const response = await fetch('data.json?v=20260715-infantil-cards-simplified');
  const data = await response.json();

  $('#portal-title').textContent = data.portal.title;
  $('#portal-subtitle').textContent = data.portal.subtitle;
  $('#portal-status').textContent = data.portal.status;
  $('#portal-purpose').textContent = data.portal.purpose;

  renderStats(data.quickStats);
  renderStartHere(data.startHere);
  renderCycle(data.learningCycle);
  renderSections(data.sections);
  renderSegments(data.segments);
  renderTeacherTasks(data.teacherTasks);
  renderAssessment(data.assessment);
  renderNextSteps(data.nextSteps);
}

function renderStats(stats) {
  const wrap = $('#stats');
  if (!stats || !wrap) return;
  stats.forEach((item) => {
    wrap.appendChild(el('article', 'stat-card', `<strong>${item.value}</strong><span>${item.label}</span>`));
  });
}

function renderStartHere(startHere) {
  const title = $('#start-title');
  const description = $('#start-description');
  const wrap = $('#start-grid');
  if (!startHere || !title || !description || !wrap) return;
  title.textContent = startHere.title;
  description.textContent = startHere.description;
  startHere.cards.forEach((card) => {
    wrap.appendChild(el('article', 'start-card', `
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <a href="${card.href}">${card.action}</a>
    `));
  });
}

function renderCycle(items) {
  const wrap = $('#learning-cycle');
  items.forEach((item) => {
    wrap.appendChild(el('article', 'cycle-card', `
      <span class="step">${item.step}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `));
  });
}

function renderSections(sections) {
  const wrap = $('#section-cards');
  sections.forEach((section) => {
    const list = section.items.map((item) => `<li>${item}</li>`).join('');
    wrap.appendChild(el('article', 'content-card', `
      <div class="card-eyebrow">${section.eyebrow}</div>
      <h3>${section.title}</h3>
      <p>${section.description}</p>
      <ul>${list}</ul>
      ${section.status ? `<span class="status">${section.status}</span>` : ''}
    `));
  });
}

function renderSegments(segments) {
  const tabs = $('#segment-tabs');
  const panels = $('#segment-panels');

  segments.forEach((segment, index) => {
    const tab = el('button', 'segment-tab', segment.name);
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', `panel-${segment.id}`);
    tab.id = `tab-${segment.id}`;
    tab.addEventListener('click', () => selectSegment(segment.id));
    tabs.appendChild(tab);

    const cards = segment.disciplines.map((discipline) => {
      const hasTitleLink = discipline.localHtml && !discipline.localHtml.startsWith('../../');
      const title = hasTitleLink
        ? `<a class="discipline-title-link" href="${discipline.localHtml}" target="_blank" rel="noopener">${discipline.name}</a>`
        : discipline.name;

      return `
      <article class="discipline-card">
        <h3>${title}</h3>
        ${discipline.stage ? `<p>${discipline.stage}</p>` : ''}
        ${!hasTitleLink ? `<span class="status">Material-base a integrar</span>` : ''}
        ${renderResourceLinks(discipline)}
      </article>
    `;
    }).join('');

    const panel = el('article', `segment-panel ${index === 0 ? 'active' : ''}`, `
      <div class="segment-head">
        <div>
          <p class="eyebrow">${segment.status}</p>
          <h3>${segment.name}</h3>
          <p>${segment.tagline}</p>
        </div>
        <a class="drive-link" href="${segment.driveUrl}" target="_blank" rel="noopener">Abrir pasta Drive</a>
      </div>
      <div class="discipline-grid">${cards}</div>
    `);
    panel.id = `panel-${segment.id}`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${segment.id}`);
    panels.appendChild(panel);
  });
}

function renderTeacherTasks(tasks) {
  const wrap = $('#teacher-tasks');
  if (!tasks || !wrap) return;
  tasks.forEach((task) => {
    wrap.appendChild(el('article', 'task-card', `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    `));
  });
}

function renderResourceLinks(discipline) {
  const resources = discipline.resources || [];
  if (!resources.length) return '';

  const links = resources.map((resource) => {
    if (!resource.url) {
      return `<li><span>${resource.label}</span><small>${resource.type}</small></li>`;
    }
    return `<li><a href="${resource.url}" target="_blank" rel="noopener">${resource.label}</a><small>${resource.type}</small></li>`;
  }).join('');

  return `<ul class="resource-list">${links}</ul>`;
}

function selectSegment(id) {
  document.querySelectorAll('.segment-tab').forEach((tab) => {
    tab.setAttribute('aria-selected', tab.id === `tab-${id}` ? 'true' : 'false');
  });
  document.querySelectorAll('.segment-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === `panel-${id}`);
  });
}

function renderAssessment(items) {
  const wrap = $('#assessment-grid');
  if (!items || !wrap) return;
  items.forEach((item) => {
    wrap.appendChild(el('article', 'assessment-card', `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span class="status">modelo a construir</span>
    `));
  });
}

function renderNextSteps(items) {
  const wrap = $('#next-list');
  if (!items || !wrap) return;
  items.forEach((item) => wrap.appendChild(el('li', '', item)));
}

init().catch((error) => {
  document.body.innerHTML = `<main style="padding:40px;font-family:Arial"><h1>Erro ao carregar portal</h1><pre>${error}</pre></main>`;
});
