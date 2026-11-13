(() => {
  const schoolStyle = {
    'CCPA': '#32529d',
    'Objetivo': '#e24a2b',
    'CJA': '#6b547f',
    'Marupiara': '#35837c',
    'Santo Anjo': '#aa682b'
  };
  const notes = {
    kindergarten: 'Acompanhamento mensal do desenvolvimento, da participação, da linguagem e das experiências do percurso bilíngue.',
    primary: 'Acompanhamento mensal das aprendizagens, evidências e próximos passos do percurso bilíngue.'
  };
  function organise() {
    const root = document.getElementById('gerador-relatorio-mensal');
    if (!root || root.dataset.monthlyNavigationReady === 'true') return;
    const legacyGroup = root.querySelector('.school-report-group');
    const legacyTitles = legacyGroup ? [...legacyGroup.querySelectorAll(':scope > .school-report-title')] : [];
    if (legacyTitles.length > 1) {
      legacyTitles.forEach((title) => {
        const reports = title.nextElementSibling;
        if (!reports?.classList.contains('monthly-report-grid')) return;
        const group = document.createElement('div');
        group.className = 'school-report-group';
        legacyGroup.before(group);
        group.append(title, reports);
      });
      legacyGroup.remove();
    }
    const groups = [...root.querySelectorAll('.school-report-group')].filter((group) => group.querySelector('.monthly-report-grid'));
    if (!groups.length) return;
    const grid = document.createElement('div');
    grid.className = 'monthly-school-grid';
    const first = groups[0];
    first.before(grid);
    const segment = document.body.dataset.monthlySegment || (location.pathname.includes('infantil-') ? 'kindergarten' : 'primary');
    groups.forEach((group) => {
      const title = group.querySelector('.school-report-title');
      const school = title?.textContent.trim() || '';
      group.classList.add('monthly-school-card');
      group.style.setProperty('--school-accent', schoolStyle[school] || '#32529d');
      const note = document.createElement('p');
      note.className = 'monthly-matrix-note';
      note.textContent = notes[segment] || notes.primary;
      title?.after(note);
      grid.append(group);
    });
    root.dataset.monthlyNavigationReady = 'true';
  }
  window.addEventListener('load', () => window.setTimeout(organise, 0));
})();
