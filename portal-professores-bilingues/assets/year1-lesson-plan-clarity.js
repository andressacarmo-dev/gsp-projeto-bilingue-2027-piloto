/* Year 1 lesson-plan clarity layer — 2026-11-14
   Keeps the existing objective, language, materials and evidence blocks.
   It rewrites only the five teacher-facing steps for the three Year 1 projects. */
(() => {
  const plans = {
    shape: [
      ['Belonging walk', 'Hello. My name is ___. I am here.', 'Leve a turma para uma volta curta pela sala e peça que cada criança aponte um lugar de que gosta.', 'desenho de um lugar da sala', 'A criança consegue dizer o próprio nome e apontar um lugar.'],
      ['Classroom objects', 'This is a ___.', 'Mostre três objetos reais da sala. Diga o nome, passe um objeto de cada vez e peça que as crianças encontrem o igual.', 'foto ou desenho de um objeto', 'A criança nomeia ou aponta o objeto pedido.'],
      ['My learning spot', 'I learn here.', 'Mostre uma foto de um espaço de aprendizagem. Cada criança escolhe um lugar da sala e faz um desenho rápido dele.', 'desenho do seu espaço', 'A criança aponta o lugar e completa a frase com apoio.'],
      ['Counting our room', 'I can see ___ ___.', 'Coloque cartões com 1 a 5 e conte junto objetos visíveis. Em duplas, as crianças contam um pequeno grupo de materiais.', 'registro de contagem com marcas', 'A criança acompanha a contagem e mostra a quantidade.'],
      ['Shape hunt', 'It is a ___.', 'Apresente cartões de circle, square e rectangle. Faça uma caça de formas em um único canto da sala, com pranchetas ou folhas.', 'uma forma encontrada e desenhada', 'A criança associa o cartão à forma observada.'],
      ['Build the first map', 'The ___ is here.', 'No chão, monte um mapa grande com fita e cartões de móveis. Convide as crianças a colocar um cartão por vez.', 'mapa coletivo inicial', 'A criança posiciona um item com orientação simples.'],
      ['Living or non-living?', 'It is living. / It is not living.', 'Use pares de imagens: plant/chair, child/book. As crianças levantam um cartão verde ou cinza e explicam com uma palavra.', 'cartão escolhido e fala breve', 'A criança diferencia um exemplo vivo de um não vivo.'],
      ['Plant observation', 'The plant is ___.', 'Mostre uma planta real e uma lupa. Observe juntos cor, tamanho e partes; cada criança desenha apenas um detalhe.', 'desenho de observação', 'A criança aponta um detalhe e usa uma palavra do quadro.'],
      ['People who help us', '___ helps us.', 'Apresente fotos de pessoas da escola. Em roda, cada criança escolhe uma foto e diz ou repete quem é.', 'card de pessoa e função', 'A criança relaciona pessoa e ajuda oferecida.'],
      ['Map revision', 'Let’s put it here.', 'Mostre o mapa e duas fotos reais da sala. Pergunte onde cada item deve ficar; mova os cartões com a turma.', 'antes/depois do mapa', 'A criança sugere ou aceita uma melhoria no mapa.'],
      ['Presentation rehearsal', 'This is our ___.', 'Organize pares: uma criança aponta o mapa e a outra diz uma frase curta. Troque os papéis uma vez.', 'fala ensaiada em dupla', 'A criança participa de uma fala curta com apoio visual.'],
      ['Map walk', 'Welcome to our classroom.', 'Faça uma caminhada lenta pelo mapa. Cada criança mostra um ponto combinado para um pequeno grupo ou para outra turma.', 'foto ou registro da apresentação', 'A criança mostra o ponto e comunica uma ideia simples.']
    ],
    garden: [
      ['Colour investigation', 'I can see ___.', 'Mostre cartões de cores e leve a turma a observar um pequeno espaço externo ou imagens de natureza.', 'coleção de cores em desenho', 'A criança localiza e nomeia uma cor.'],
      ['Sound walk', 'I can hear ___.', 'Explique o sinal de silêncio. Caminhem por dois minutos; ao voltar, cada criança desenha ou escolhe um cartão do som ouvido.', 'registro de um som', 'A criança escuta com atenção e compartilha um som.'],
      ['Nature details', 'I can see a ___.', 'Coloque folhas, pedras e sementes em bandejas. Use lupa em rodízio e peça que cada criança desenhe um único detalhe.', 'desenho de detalhe', 'A criança observa com cuidado antes de desenhar.'],
      ['Material detectives', 'It is ___.', 'Apresente wood, paper, plastic e fabric com objetos seguros. Em pequenos grupos, as crianças classificam dois objetos.', 'classificação de materiais', 'A criança agrupa um objeto pelo material.'],
      ['Longer or shorter?', 'It is longer. / It is shorter.', 'Use duas fitas, folhas ou gravetos. Modele como alinhar as pontas e compare somente um par de cada vez.', 'comparação marcada', 'A criança indica qual é mais longo ou mais curto.'],
      ['Data in our class', 'We have ___ ___.', 'Faça uma pergunta simples e registre a resposta com blocos ou adesivos grandes. Contem a coluna juntos.', 'gráfico com adesivos', 'A criança acrescenta um dado e lê uma quantidade.'],
      ['Garden problems', 'We need ___.', 'Mostre uma foto de um jardim com um problema simples: lixo, planta seca ou falta de água. Em roda, escolham uma solução.', 'desenho da solução', 'A criança sugere uma ação de cuidado.'],
      ['People and places', '___ helps here.', 'Mostre imagens de pessoas que cuidam de lugares. As crianças conectam a pessoa ao lugar com linha ou cartão.', 'par pessoa-lugar', 'A criança explica quem ajuda e onde.'],
      ['Design idea', 'Our idea is ___.', 'Ofereça papel, blocos e materiais reutilizáveis. Em duplas, as crianças escolhem uma ideia simples para cuidar do espaço.', 'esboço ou modelo simples', 'A criança contribui com uma escolha para o plano.'],
      ['Feedback and revision', 'I like ___. Try ___.', 'Mostre dois modelos e pratique elogio + sugestão com cartões de fala. Cada dupla melhora apenas uma parte do seu modelo.', 'marca da melhoria', 'A criança dá ou usa uma sugestão gentil.'],
      ['Gallery setup', 'This is our ___.', 'Com etiquetas prontas, cada grupo escolhe onde colocar seu trabalho e ensaia uma frase apontando para ele.', 'trabalho com etiqueta', 'A criança ajuda a organizar e identificar sua produção.'],
      ['Design presentation', 'We made ___.', 'Em pequenos grupos, cada criança tem uma fala de uma frase. Use o objeto ou desenho como apoio; celebre cada tentativa.', 'foto ou áudio curto da fala', 'A criança compartilha sua contribuição com confiança.']
    ],
    exhibition: [
      ['Body and care review', 'I take care of my ___.', 'Use cartões de partes do corpo e ações de cuidado. As crianças escolhem um cartão, fazem o gesto e dizem a frase com você.', 'cartão corpo-cuidado', 'A criança conecta uma parte do corpo a um cuidado.'],
      ['Animal habitats', 'A ___ lives in ___.', 'Apresente dois habitats grandes no chão e cartões de animais. Cada criança coloca um animal e explica sua escolha.', 'animal no habitat', 'A criança relaciona animal e lugar.'],
      ['Care poster', 'We can ___.', 'Mostre um cartaz-modelo com pouco texto e imagens. Em grupos, as crianças desenham uma ação de cuidado para o cartaz.', 'cartaz coletivo', 'A criança acrescenta uma ação compreensível ao cartaz.'],
      ['Water facts', 'Water is important.', 'Faça uma experiência simples de uso da água com imagens. Pergunte onde usamos água e registre três respostas com desenhos.', 'página com três usos da água', 'A criança cita ou aponta um uso da água.'],
      ['Food choices', 'I choose ___.', 'Use imagens de alimentos. Peça que as crianças montem um prato de brincadeira com uma escolha de cada grupo apresentado.', 'prato de papel', 'A criança faz uma escolha e comunica uma preferência.'],
      ['Data story', 'Most children chose ___.', 'Transforme uma votação da turma em gráfico de blocos. Aponte a coluna maior e leiam juntos uma frase curta.', 'gráfico da turma', 'A criança identifica uma informação do gráfico.'],
      ['Portfolio search', 'I made this.', 'Espalhe produções identificadas em mesas. Cada criança encontra uma peça sua, mostra ao par e diz o que fez.', 'obra selecionada', 'A criança reconhece e nomeia uma produção própria.'],
      ['Why this evidence?', 'I am proud of ___.', 'Mostre duas produções-modelo e explique que escolheremos uma para contar uma aprendizagem. Cada criança escolhe uma peça.', 'peça com etiqueta de escolha', 'A criança aponta por que escolheu sua produção.'],
      ['Exhibition design', 'Let’s put it here.', 'Desenhe um plano simples do espaço com três áreas. Em grupos, as crianças decidem onde ficará cada tipo de trabalho.', 'plano coletivo da exposição', 'A criança participa de uma decisão de organização.'],
      ['Presentation rehearsal', 'I learned ___.', 'Em duplas, uma criança mostra a peça e a outra escuta. Modele uma fala curta; troquem depois de uma tentativa.', 'fala ensaiada', 'A criança usa sua produção para contar algo que aprendeu.'],
      ['Family-ready exhibition', 'Welcome. This is my ___.', 'Organize os trabalhos na altura das crianças e ensaie uma saudação. Faça uma visita-teste com outra turma ou adulto.', 'espaço pronto e fala registrada', 'A criança recebe o visitante e mostra seu trabalho.'],
      ['Learning Exhibition', 'I learned ___.', 'Durante a exposição, mantenha cada criança perto de uma produção escolhida. Convide-a a mostrar, dizer uma frase e ouvir uma pergunta.', 'foto, fala ou registro do visitante', 'A criança compartilha uma aprendizagem com apoio visual.']
    ]
  };

  const projectByPrefix = { shape: 'shape', garden: 'garden', exhibition: 'exhibition' };

  function step(title, text) {
    return `<article class="lesson-step"><h5>${title}</h5><p>${text}</p></article>`;
  }

  function render(plan) {
    const [focus, frame, action, evidence, check] = plan;
    return [
      step('1. Welcome', `<strong>Prepare:</strong> deixe um visual do tema <em>${focus}</em> à vista. Faça uma saudação curta e modele: <strong>“${frame}”</strong>. As crianças repetem uma vez com gesto.`),
      step('2. Activate', `<strong>Mostre e pergunte:</strong> apresente o material principal, dê uma instrução de uma etapa e peça que as crianças apontem, escolham ou façam o gesto antes de falar.`),
      step('3. Practice', `<strong>Faça junto:</strong> ${action} Circule, nomeie o que as crianças estão fazendo e repita a frase-modelo sempre que necessário.`),
      step('4. Create', `<strong>Produção curta:</strong> cada criança registra uma ideia em <strong>${evidence}</strong>. Aceite desenho, apontamento, palavra ou frase dita ao adulto.`),
      step('5. Share', `<strong>Feche em roda:</strong> duas ou três crianças mostram o que fizeram. <strong>Observe:</strong> ${check}`)
    ].join('');
  }

  function apply() {
    Object.entries(projectByPrefix).forEach(([prefix, key]) => {
      plans[key].forEach((plan, index) => {
        const panel = document.getElementById(`lesson-plan-year1-${prefix}-week-${index + 1}`);
        if (!panel) return;
        const steps = panel.querySelector('.lesson-steps');
        if (!steps) return;
        steps.innerHTML = render(plan);
        panel.dataset.year1Clarity = '20261114';
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
