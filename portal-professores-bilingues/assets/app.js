const $ = (selector) => document.querySelector(selector);

const segmentTitleLabels = {
  'Infantil': 'Kinder',
  'Fundamental 1': 'Primary',
  'Fundamental 2': 'Middle Years'
};

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

async function init() {
  const response = await fetch('data-20260804-year3-matrix-link.json?v=20260812-year6-active');
  const data = await response.json();

  $('#portal-title').textContent = data.portal.title;
  $('#portal-subtitle').textContent = data.portal.subtitle;
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
  if (!items || !wrap) return;
  items.forEach((item) => {
    wrap.appendChild(el('article', 'cycle-card', `
      <div class="cycle-icon-row">
        <span class="step">${item.step}</span>
        ${item.emoji ? `<span class="cycle-emoji" aria-hidden="true">${item.emoji}</span>` : ''}
      </div>
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
    `));
  });
}

function renderSegments(segments) {
  const tabs = $('#segment-tabs');
  const panels = $('#segment-panels');
  if (!panels) return;
  if (tabs) tabs.remove();
  panels.className = 'segment-overview-grid';

  segments.forEach((segment) => {
    const cards = segment.disciplines.map((discipline) => {
      const hasLink = discipline.localHtml && !discipline.localHtml.startsWith('../../');
      const tag = hasLink ? 'a' : 'article';
      const href = hasLink ? ` href="${discipline.localHtml}"` : '';
      const classes = `level-card ${hasLink ? 'active' : 'coming'}`;
      return `<${tag} class="${classes}"${href}${hasLink ? ' target="_blank" rel="noopener"' : ''} aria-label="${discipline.name}">
        <strong>${discipline.name}</strong>
      </${tag}>`;
    }).join('');

    const avatar = segment.avatar ? `
      <figure class="segment-avatar" aria-hidden="true">
        <img src="${segment.avatar}" alt="" loading="lazy">
      </figure>
    ` : '';

    const panel = el('article', 'segment-overview-card', `
      <div class="segment-card-top">
        <div class="segment-head compact">
          <div>
            <p class="eyebrow">${segment.name}</p>
            <h3>${segmentTitleLabels[segment.name] || segment.name}</h3>
            ${segment.tagline ? `<p>${segment.tagline}</p>` : ''}
          </div>
          <a class="drive-link" href="${segment.driveUrl}" target="_blank" rel="noopener">Drive</a>
        </div>
        ${avatar}
      </div>
      <div class="level-grid">${cards}</div>
    `);
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
