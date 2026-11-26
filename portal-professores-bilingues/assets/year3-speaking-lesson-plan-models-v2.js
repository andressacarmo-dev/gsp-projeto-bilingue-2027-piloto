/* Individualised Year 3 Speaking Lab models for weeks 13–36 — 2026-11-26. */
(() => {
  const S = (heading, content) => `<article class="lesson-step"><h5>${heading}</h5><p>${content}</p></article>`;
  const M = {
    13: 'It should be safe and useful. It needs a clear place for everyone to use it.',
    14: 'First, we pour the water through the filter. Then the solid stays in the filter and the liquid goes through.',
    15: 'This material is better because it is strong and can be reused.',
    16: 'The shadow is behind the tree. It is better here because the plants have shade in the afternoon.',
    17: 'A healthy snack helps my body because it gives me energy to learn and play.',
    18: 'We need twelve seeds. Each group has three seeds to plant.',
    19: 'A caterpillar changes into a butterfly. It needs food and a safe place, so we should protect the garden.',
    20: 'The area is six squares. It fits here because there is room for the garden bed.',
    21: 'Our idea is a small healthy garden. What can improve? We can add a clear path to the plants.',
    22: 'Our evidence is the plant chart. The plan shows where each plant will grow.',
    23: 'We chose this place because it has light and water. It helps because students can care for the plants.',
    24: 'Design can help because a clear garden path lets more people take part.',
    25: 'We use water when we wash our hands. The data shows that the tap stays on for a long time.',
    26: 'The frog eats insects. It depends on water and plants in its habitat.',
    27: 'This fossil shows that an animal lived long ago. We think it had strong legs because of the bones.',
    28: 'We can save water by turning off the tap. We recommend using only the water we need.',
    29: 'We tested a push. It moved because the force was strong enough.',
    30: 'This transport is safer because it has a seat belt and follows the road rules.',
    31: 'The Earth moves around the Sun. The Moon moves around the Earth.',
    32: 'We improved the label because now visitors can understand the graph.',
    33: 'I chose this chart because it shows that I can collect data and explain it.',
    34: 'My role is to explain the water poster. I show the data and explain our recommendation.',
    35: 'I learned to use evidence in my project. Our evidence is the water chart. My next step is to speak more clearly.',
    36: 'I learned to ask questions, collect evidence and share an idea. I can explain my project. Thank you.'
  };
  const meta = (panel, label, fallback) => [...panel.querySelectorAll('.lesson-plan-meta div')]
    .find(item => item.textContent.includes(label))?.textContent.replace(label, '').trim() || fallback;
  const title = panel => panel.closest('li')?.querySelector('strong')?.textContent.trim()
    || panel.querySelector('h4')?.textContent.trim() || 'a fala da semana';
  const apply = () => {
    for (let week = 13; week <= 36; week += 1) {
      const panel = document.getElementById(`lesson-plan-speaking-year3-week-${week}`);
      const steps = panel?.querySelector('.lesson-steps');
      if (!steps) continue;
      const materials = meta(panel, 'Materiais', 'os cartões, visuais e recursos indicados acima');
      const language = meta(panel, 'Linguagem-alvo', 'a linguagem-alvo da semana');
      const evidence = meta(panel, 'Evidência interna', 'um registro curto de fala');
      const objective = meta(panel, 'Objetivo', title(panel));
      const model = M[week];
      steps.innerHTML = [
        S('1. Welcome', `<strong>Material e objetivo:</strong> deixe ${materials} visíveis e apresente <em>${title(panel)}</em>. <strong>Fala-modelo:</strong> “${model}”`),
        S('2. Activate', `<strong>Comando e demonstração:</strong> diga: <strong>“Look at the evidence. Choose one detail. Use the frame.”</strong> Aponte um detalhe do visual e modele a frase completa: <strong>“${model}”</strong> <strong>Linguagem-alvo:</strong> ${language}.`),
        S('3. Practice', `<strong>Prática guiada:</strong> faça uma primeira rodada com uma dupla-modelo. O aluno A aponta um detalhe; o aluno B usa um dos frames para explicar. Inverta os papéis e confira: detalhe visível, ideia completa e justificativa. <strong>Foco da semana:</strong> ${objective}.`),
        S('4. Create', `<strong>Produção:</strong> em pares, os estudantes preparam uma fala curta, card ou registro para ${evidence}. Antes de finalizar, cada dupla confere: usei um detalhe, uma frase completa e uma razão ou evidência quando necessário.`),
        S('5. Share', `<strong>Compartilhamento e registro:</strong> duas duplas apresentam. <strong>Modelo de retomada:</strong> “${model}” Registre quem usou o frame com autonomia, quem apontou a evidência e qual apoio precisa na próxima aula.`)
      ].join('');
      panel.dataset.year3SpeakingIndividualized = '20261126-v2';
    }
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', apply) : apply();
})();
