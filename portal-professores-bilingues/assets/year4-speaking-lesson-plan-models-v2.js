/* Individualized modelling layer for the 36 Year 4 Speaking Lab lesson plans — 2026-11-24. */
(() => {
  const S = (heading, content) => `<article class="lesson-step"><h5>${heading}</h5><p>${content}</p></article>`;
  const M = {
    1: 'Technology helps when we use it to research our project, but it can harm when we do not take a break.',
    2: 'From a teacher’s perspective, people may need quiet time to prepare a lesson.',
    3: 'Our body needs movement and a straight back. It is healthier because our muscles can rest.',
    4: 'Before, I used a screen for two hours. We should take a movement break because our body needs it.',
    5: 'How often do you use technology for homework? I will record only the answer, not the name.',
    6: 'The data shows that most students use a tablet for homework. It does not show why they use it.',
    7: 'A computer uses energy when it is charging. We can save energy by turning it off after class.',
    8: 'This poster format is better because the title is easy to read. Our criteria are clear, strong and accessible.',
    9: 'Our evidence is the tally chart. We recommend turning off the projector because it saves energy.',
    10: 'The title was too small. We improved it because visitors need to read the message quickly.',
    11: 'My role is to explain the graph. The evidence supports our recommendation to use screens responsibly.',
    12: 'Technology helps when it supports learning. We recommend a short screen break every lesson.',
    13: 'A good space should be safe, useful and welcoming. Our criteria are access, light and clear routes.',
    14: 'The library is next to the courtyard. Go straight, then turn left at the ramp.',
    15: 'Some people need a ramp or a wider route. This helps because everyone can move safely.',
    16: 'You should keep the corridor clear. It is safer because people can see and move without obstacles.',
    17: 'The repeated arrows help visitors follow the route. It is clear because the pattern uses the same colour.',
    18: 'We measured two metres. It fits here because the route remains open for everyone.',
    19: 'The shadow is behind the bench in the afternoon. Light reflects from the sign and helps people see it.',
    20: 'This space supports birds and students. It needs plants, a quiet area and a safe path.',
    21: 'Option A is better because it meets three criteria. The evidence shows that the ramp is possible here.',
    22: 'Our proposal is a clear route to the library. Our evidence shows that the current path has an obstacle.',
    23: 'It helps visitors because the sign is visible. We know this because we tested it from the entrance.',
    24: 'Design can help people belong by making routes, signs and spaces easier for everyone to use.',
    25: 'We use energy for lights, computers and chargers. We can investigate which devices stay on.',
    26: 'When it is sunny, we use natural light. It changes because daylight makes the room brighter.',
    27: 'Electricity flows when the circuit is closed. It is safe because the wire is connected correctly.',
    28: 'We will count the lights after lunch. We will observe which devices are still on.',
    29: 'We predicted that metal would conduct. The result was that the bulb lit because the circuit was closed.',
    30: 'The area is six square metres. This place needs a clear energy sign because many students pass here.',
    31: 'The graph shows high energy use after lunch. We recommend switching off unused lights because the data supports it.',
    32: 'We improved the graph label because now it is clearer for visitors to understand the result.',
    33: 'I chose this graph because it shows that I can read data and make a recommendation.',
    34: 'My role is to explain the circuit. I will explain why it works, and our evidence is the test result.',
    35: 'I learned that evidence helps us choose an action. My next step is to explain my graph more clearly.',
    36: 'This year, I learned to use evidence before making a decision. Evidence helps us decide what to improve.'
  };
  const meta = (panel, label, fallback) => [...panel.querySelectorAll('.lesson-plan-meta div')]
    .find(item => item.textContent.includes(label))?.textContent.replace(label, '').trim() || fallback;
  const title = panel => panel.closest('li')?.querySelector('strong')?.textContent.trim()
    || panel.querySelector('h4')?.textContent.trim() || 'a fala da semana';
  const apply = () => {
    for (let week = 1; week <= 36; week += 1) {
      const panel = document.getElementById(`lesson-plan-speaking-year4-week-${week}`);
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
      panel.dataset.year4SpeakingIndividualized = '20261124-v1';
    }
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', apply) : apply();
})();
