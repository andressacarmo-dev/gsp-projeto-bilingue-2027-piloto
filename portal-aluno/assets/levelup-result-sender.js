/* Integração pública Level Up → plataforma Brix. Não usa chave de API no navegador. */
window.LevelUpResultSender = (() => {
  const API_BASE = 'https://api.brixplatform.com.br';

  async function sendReport(report) {
    const res = await fetch(API_BASE + '/levelup/public/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report)
    });
    if (!res.ok) {
      const err = new Error('HTTP ' + res.status);
      err.status = res.status;
      throw err;
    }
    return res.json();
  }

  function validate(report) {
    const missing = [];
    if (!/\p{L}{2}/u.test(report.student.full_name || '')) missing.push('nome completo');
    if (!report.student.school_id) missing.push('código da escola');
    if (!report.student.grade_code || !report.student.grade_label) missing.push('série');
    if (!report.student.class_group) missing.push('turma');
    if (!report.student.teacher_name) missing.push('professor(a)');
    if (!report.assessment.id || !report.assessment.version) missing.push('identificação da prova');
    if (!report.assessment.finished_at) missing.push('horário de término');
    if (!report.score || !Array.isArray(report.skills) || !report.skills.length) missing.push('pontuação');
    return missing;
  }

  function mount({ getReport, renderReport, onRendered }) {
    let latestReport = null;
    const button = document.getElementById('finishBtn');
    const box = document.getElementById('sendStatus');

    function showStatus(text, canRetry = false) {
      box.replaceChildren();
      const p = document.createElement('p');
      p.textContent = text;
      box.appendChild(p);
      if (canRetry) {
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.className = 'btn secondary';
        retry.textContent = 'Tentar novamente';
        retry.addEventListener('click', submitReport);
        box.appendChild(retry);
      }
    }

    async function submitReport() {
      const missing = validate(latestReport);
      if (missing.length) {
        showStatus('Não foi possível registrar a prova. Verifique: ' + missing.join(', ') + '.', false);
        return;
      }
      button.disabled = true;
      showStatus('Enviando resultado...', false);
      try {
        await sendReport(latestReport);
        showStatus('Prova concluída. Obrigado!', false);
      } catch (error) {
        if (error.status === 400) showStatus('Não foi possível registrar a prova. Chame o professor.', false);
        else {
          button.disabled = false;
          showStatus('Não conseguimos enviar. Tente novamente.', true);
        }
      }
    }

    button.addEventListener('click', () => {
      if (!latestReport) {
        latestReport = getReport();
        renderReport(latestReport);
        onRendered?.();
      }
      submitReport();
    });
  }

  return { mount };
})();
