/* Individualised execution layer for Kinder Level 4 — 2026-11-26. */
(() => {
  const S = (heading, content) => `<article class="lesson-step"><h5>${heading}</h5><p>${content}</p></article>`;
  const M = {
    1:'This is our classroom. Come in, please.',2:'It is a book. Here you are.',3:'We are kind. We share and we help.',4:'I am happy. I have brown hair.',5:'I have two eyes. She has a small nose.',6:'I am Leo. He has curly hair.',7:'I feel happy today.',8:'Are you OK? Can I help? I need help.',9:'This is our classroom map. We share the reading corner.',10:'This is my portrait. I feel happy. We are kind.',11:'Welcome. This is my picture. I feel proud.',12:'Welcome. This is our gallery. We are kind.',
    13:'Let’s play. Can I play?',14:'My turn. Your turn.',15:'I like blocks. I choose the ball.',16:'It is an apple. I can see red and green.',17:'I like apples. It is crunchy.',18:'Can I have juice, please? Here you are.',19:'I can hear a bell. It is loud.',20:'The drum is fast. I can hear a slow sound too.',21:'It makes a sound. This shaker is quiet.',22:'I can hear a drum. It is fast and loud.',23:'This is my game. I like the drum. I can hear a bell.',24:'Welcome. This is our sound station. I can hear a drum.',
    25:'This is the kitchen.',26:'I can see a bed in the bedroom.',27:'We clean the table. We help at home.',28:'It is a T-shirt.',29:'It is rainy. I need boots.',30:'I’m wearing a hat. Put on the coat.',31:'I can see a plant and a flower.',32:'It grows. It needs water and sun.',33:'We water and care for the plants.',34:'This is our garden picture. I can see a flower.',35:'Welcome. This is my plant. I can see a leaf.',36:'Welcome. This is our home, clothes and garden expo.'
  };
  const text = node => node?.textContent.replace(/\s+/g, ' ').trim() || '';
  const removeDuplicateProjectCards = () => {
    document.querySelectorAll('.pbl-project').forEach(project => {
      const seen = new Set();
      [...project.querySelectorAll('.pbl-grid > .pbl-card:not(.pbl-week)')].forEach(card => {
        const heading = text(card.querySelector('h3'));
        if (!heading) return;
        if (seen.has(heading)) card.remove();
        else seen.add(heading);
      });
    });
  };
  const extract = (week, label) => {
    const paragraphs = [...week.children].filter(node => node.tagName === 'P');
    const source = paragraphs.map(text).join(' ');
    const match = source.match(new RegExp(`${label}:\\s*([^·]+(?:·[^A-Z][^.]*)?|[^.]+(?:\\.[^A-Z][^.]*)?)`));
    return match?.[1]?.trim() || '';
  };
  const apply = () => {
    const weeks = [...document.querySelectorAll('.pbl-week')];
    weeks.forEach((week, index) => {
      const n = index + 1;
      const panel = week.querySelector('.lesson-plan-panel');
      const steps = panel?.querySelector('.lesson-steps');
      const metadata = panel?.querySelector('.lesson-plan-meta');
      if (!panel || !steps || !metadata || !M[n]) return;
      const title = text(week.querySelector('h3'));
      const objective = extract(week, 'Objetivo') || 'participar da experiência da semana com apoio visual e interação guiada';
      const language = extract(week, 'Linguagem') || 'a linguagem da semana';
      const materials = extract(week, 'Materiais') || 'objetos reais, cartões visuais e material de criação';
      const evidence = [...metadata.querySelectorAll('div')].find(x => text(x).includes('Evidência interna'))?.querySelector('span')?.textContent.trim() || `Registro breve da participação em ${title}.`;
      metadata.innerHTML = `<div><strong>Objetivo da aula</strong><span>${objective}</span></div><div><strong>Linguagem-alvo</strong><span>${language}</span></div><div><strong>Materiais</strong><span>${materials}</span></div><div><strong>Evidência interna</strong><span>${evidence}</span></div>`;
      const model = M[n];
      steps.innerHTML = [
        S('1. Welcome', `<strong>Visual e fala-modelo:</strong> organize ${materials}. Apresente <em>${title}</em>, aponte o apoio visual e diga: <strong>“${model}”</strong>`),
        S('2. Explore', `<strong>Exploração guiada:</strong> mostre um objeto, imagem ou ação ligada à semana. Modele novamente: <strong>“${model}”</strong> Aceite olhar, gesto, escolha, palavra ou frase curta como participação.`),
        S('3. Play', `<strong>Brincadeira de turnos:</strong> faça uma rodada completa — convite, escolha, ação e devolutiva — com uma criança-modelo. Em seguida, ofereça tempo de espera e o cartão de fala para que pares pratiquem. <strong>Cheque:</strong> a criança se comunica usando o visual e a linguagem da semana.`),
        S('4. Create', `<strong>Criação:</strong> cada criança cria, marca, organiza ou contribui para uma peça coletiva a partir de ${materials}. <strong>Produto esperado:</strong> uma evidência visual conectada a <em>${objective}</em>.`),
        S('5. Share', `<strong>Compartilhamento e registro:</strong> convide duas ou três crianças para mostrar, apontar, gesticular ou falar. <strong>Modelo de retomada:</strong> “${model}” Registre participação, linguagem utilizada e apoio necessário.`)
      ].join('');
      panel.dataset.level4Individualized = '20261126-v2';
    });
    removeDuplicateProjectCards();
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', apply) : apply();
})();
