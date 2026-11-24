/* Individualized modelling layer for the 36 Year 5 Speaking Lab lesson plans — 2026-11-24. */
(() => {
  const S = (heading, content) => `<article class="lesson-step"><h5>${heading}</h5><p>${content}</p></article>`;
  const M = {
    1: 'Our research question is: How can our school be easier for everyone to use? We need to investigate the routes and signs.',
    2: 'We observed a narrow route near the library. A barrier is something that makes access difficult, and this affects some students.',
    3: 'This environment supports learning when routes are clear. It needs a wider path because more people can participate safely.',
    4: 'We measured the entrance. The distance is one metre, and it is greater than the space beside the shelf.',
    5: 'Some students may need a quieter place to work. From this perspective, the library needs a calm area.',
    6: 'Option A is better because it meets safety, access and cost criteria. Our criteria are clear routes, good light and useful signs.',
    7: 'This material is suitable because it is strong and easy to read. It can help visitors find the accessible route.',
    8: 'Our proposal changes the entrance route. This helps because visitors can see the sign before they reach the steps.',
    9: 'I suggest a larger symbol. We will improve the sign because it needs to be visible from far away.',
    10: 'We believe the ramp sign should move closer to the gate. Our evidence shows that visitors did not notice it. Therefore, we recommend a new position.',
    11: 'Who benefits? Students, families and visitors benefit. We know this because we tested the route, and we changed the sign after feedback.',
    12: 'Design can help more people participate by making routes, signs and spaces clear and accessible.',
    13: 'Our issue is waste in the school courtyard. We need data about what students throw away each day.',
    14: 'A source can be a survey, a photo or a tally chart. Data helps us understand the problem before we decide.',
    15: 'We classified these bottles as plastic. It can be reused when we clean it and use it for a new purpose.',
    16: 'Fifty percent of the waste was plastic. The graph shows that plastic is the largest category.',
    17: 'We can reduce energy use by turning off unused lights. It saves energy because the lights do not stay on after class.',
    18: 'This affects the insects in the garden. Living things need food, water and shelter. As a result, less litter can support the habitat.',
    19: 'We claim that the school should reduce plastic waste. Our evidence is the weekly tally. This matters because waste can affect the environment.',
    20: 'Our audience needs a clear message. Please use the recycling bins. Try to bring a reusable bottle.',
    21: 'Our campaign shows how much plastic the school uses. We recommend reusable bottles because the data shows many plastic bottles.',
    22: 'The data is clear because the graph has a title and labels. We improved the colours so visitors can compare the categories.',
    23: 'My role is to explain the graph. I will explain the largest category and why the school can reduce it.',
    24: 'Data can help people act by showing the problem clearly. We recommend reducing single-use plastic.',
    25: 'How can technology support well-being? It can help when it reminds us to take a break and move our bodies.',
    26: 'The data suggests that students feel better after a movement break. A healthy habit is taking regular screen breaks.',
    27: 'The body needs movement, water and sleep. This habit affects our muscles because movement helps them stay active.',
    28: 'We tested a lever. The result shows that it moved the object with less effort. It works because the force changes direction.',
    29: 'On one hand, technology helps us learn and communicate. On the other hand, too much screen time can reduce movement. We believe balance is important.',
    30: 'The graph shows more screen time after school. Therefore, we recommend a short outdoor activity before homework.',
    31: 'At this station, visitors can test our movement-break timer. It teaches how a short break can support well-being.',
    32: 'We revised our poster because the evidence helped us choose a clearer healthy habit.',
    33: 'I chose this graph because it shows I can read data and make a recommendation.',
    34: 'My role is to explain the healthy habit. Our evidence is the survey, and visitors will learn why balance matters.',
    35: 'I learned that evidence can improve a healthy choice. The evidence helped me explain my idea. My next step is to answer questions with more detail.',
    36: 'This year, I learned to investigate, use evidence and share a recommendation. Evidence helps us decide what to improve.'
  };
  const meta = (panel, label, fallback) => [...panel.querySelectorAll('.lesson-plan-meta div')]
    .find(item => item.textContent.includes(label))?.textContent.replace(label, '').trim() || fallback;
  const title = panel => panel.closest('li')?.querySelector('strong')?.textContent.trim()
    || panel.querySelector('h4')?.textContent.trim() || 'a fala da semana';
  const apply = () => {
    for (let week = 1; week <= 36; week += 1) {
      const panel = document.getElementById(`lesson-plan-speaking-year5-week-${week}`);
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
        S('4. Create', `<strong>Produção:</strong> em pares ou trios, os estudantes preparam uma fala curta, card ou registro para ${evidence}. Antes de finalizar, cada equipe confere: usei um detalhe, uma frase completa e uma razão ou evidência quando necessário.`),
        S('5. Share', `<strong>Compartilhamento e registro:</strong> duas equipes apresentam e recebem uma pergunta do colega. <strong>Modelo de retomada:</strong> “${model}” Registre quem usou o frame com autonomia, quem apontou a evidência e qual apoio precisa na próxima aula.`)
      ].join('');
      panel.dataset.year5SpeakingIndividualized = '20261124-v1';
    }
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', apply) : apply();
})();
