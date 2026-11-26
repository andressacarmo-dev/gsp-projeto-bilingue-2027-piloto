/* Individualised modelling layer for the 36 Year 1 Speaking Lab lesson plans — 2026-11-26. */
(() => {
  const S = (heading, content) => `<article class="lesson-step"><h5>${heading}</h5><p>${content}</p></article>`;
  const M = {
    1: 'Hello. My name is Ana. I am here.',
    2: 'This is my friend Leo. His name is Leo.',
    3: 'I can see a book. This is a book. It helps us learn.',
    4: 'I can help. We are Year 1. We can tidy the room.',
    5: 'What’s this? It’s a pencil. I think it is blue.',
    6: 'It is a circle. I can see a circle on the clock.',
    7: 'There are five blocks. I counted five blocks.',
    8: 'It is living because it grows.',
    9: 'I chose the table because it shows our classroom.',
    10: 'This is our map. I can see the door. There are two tables.',
    11: 'What is this? It is a ruler. I can see it on the table.',
    12: 'I learned about shapes. This is our classroom map. Thank you.',
    13: 'It is red. It is made of paper. I can see a red paper card.',
    14: 'Is it hard? It is soft. I think it is fabric.',
    15: 'This belongs here because it is made of plastic.',
    16: 'My idea is a bird feeder. I chose wood because it is strong.',
    17: 'Who helps us? The gardener helps us. They work in the garden.',
    18: 'It changed. We can reuse the box. Now it is a plant pot.',
    19: 'People work in the school. They use tools. This place helps us learn.',
    20: 'I chose this sign because it helps people find the garden.',
    21: 'This is my evidence. It shows a seed growing.',
    22: 'It is a leaf. I observed lines. I can see green and yellow.',
    23: 'What did you observe? I observed a small insect on the leaf.',
    24: 'This is our gallery. My role is to show the plant picture.',
    25: 'What animal is it? My animal is a frog. It has long legs.',
    26: 'It lives in a pond. It needs water. It can jump.',
    27: 'This is a fact: frogs need water. I think frogs are interesting. I like frogs.',
    28: 'We can help by keeping the pond clean. We should not throw rubbish there.',
    29: 'Do you like apples? I like apples. I don’t like olives.',
    30: 'We found that more students like apples. Fewer students like carrots.',
    31: 'We can save water by turning off the tap. I can choose water to drink.',
    32: 'I chose this picture because I learned about animals.',
    33: 'I learned about water. This shows that I can save water.',
    34: 'Maybe add a bigger picture. Speak louder. I improved my poster.',
    35: 'This is my project. I am proud of my animal poster.',
    36: 'I learned about animals and water. This is my project. Thank you.'
  };
  const meta = (panel, label, fallback) => [...panel.querySelectorAll('.lesson-plan-meta div')]
    .find(item => item.textContent.includes(label))?.textContent.replace(label, '').trim() || fallback;
  const title = panel => panel.closest('li')?.querySelector('strong')?.textContent.trim()
    || panel.querySelector('h4')?.textContent.trim() || 'a fala da semana';
  const apply = () => {
    for (let week = 1; week <= 36; week += 1) {
      const panel = document.getElementById(`lesson-plan-speaking-year1-week-${week}`);
      const steps = panel?.querySelector('.lesson-steps');
      if (!steps) continue;
      const materials = meta(panel, 'Materiais', 'os cartões, visuais e objetos indicados acima');
      const language = meta(panel, 'Linguagem-alvo', 'a frase da semana');
      const evidence = meta(panel, 'Evidência interna', 'um registro curto de fala');
      const model = M[week];
      steps.innerHTML = [
        S('1. Welcome', `<strong>Visual e fala-modelo:</strong> deixe ${materials} visíveis e apresente <em>${title(panel)}</em>. Aponte para o visual e diga: <strong>“${model}”</strong>`),
        S('2. Activate', `<strong>Comando e resposta:</strong> diga: <strong>“Look, listen and point.”</strong> Aponte o visual correspondente e modele: <strong>“${model}”</strong> <strong>Linguagem-alvo:</strong> ${language}.`),
        S('3. Practice', `<strong>Prática guiada:</strong> faça uma dupla-modelo. Você diz a primeira parte, a criança aponta ou completa a fala; depois troquem. <strong>Cheque:</strong> a criança usa voz, gesto, apontamento ou repetição para comunicar a ideia.`),
        S('4. Create', `<strong>Produção:</strong> cada criança faz uma fala, apontamento, desenho ou card de resposta para ${evidence}. <strong>Produto esperado:</strong> uma tentativa de usar a frase ou palavra-chave conectada ao visual.`),
        S('5. Share', `<strong>Compartilhamento e registro:</strong> convide duas ou três crianças para mostrar a fala ou produção. <strong>Modelo de retomada:</strong> “${model}” Registre quem usa a fala com autonomia e quem ainda precisa do cartão ou de eco.`)
      ].join('');
      panel.dataset.year1SpeakingIndividualized = '20261126-v2';
    }
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', apply) : apply();
})();
