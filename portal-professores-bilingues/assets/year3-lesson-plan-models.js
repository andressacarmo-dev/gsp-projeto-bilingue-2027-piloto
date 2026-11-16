/* Explicit modelling layer for the three Year 3 quarterly projects — 2026-11-16. */
(() => {
  const projects = {
    'school-resource-and-plant-growth-detectives': [
      ['Investigation launch','uma prancheta, lupa e foto do jardim da escola','“Today we are detectives.”','a criança segura a prancheta e diz “Detective.”','um símbolo de detetive e uma pergunta de investigação','“We investigate.”'],
      ['Alive or not alive?','uma planta, uma pedra e cartões alive/not alive','“Is the plant alive?”','a criança mostra o cartão alive','duas colunas com plant e rock','“The plant is alive.”'],
      ['Plant parts and functions','uma planta real e cartões roots, stem, leaf e flower','“Point to the leaf.”','a criança aponta a folha','um diagrama da planta com leaf rotulado','“The leaf helps the plant.”'],
      ['Plant needs experiment','dois vasos e cartões water/light','“What does a plant need?”','a criança escolhe water','uma previsão desenhada para cada vaso','“Plants need water.”'],
      ['Numbers and plant data','régua, tabela simples e dois vasos','“Measure the plant in centimetres.”','a criança lê ou registra um número com apoio','uma tabela com altura de dois vasos','“It is ten centimetres.”'],
      ['School resource survey','pranchetas e imagens de tap, light e bin','“Count the taps in this area.”','a criança marca um tally para uma torneira','uma tabela de contagem simples','“I counted three taps.”'],
      ['Frequency table and habits','cartões de hábitos e gráfico de barras','“Which habit happens most?”','a criança aponta a barra mais alta','um gráfico com título e barras coloridas','“This happens most.”'],
      ['Waste and consequence','duas fotos: lixo no pátio e pátio limpo','“What happens when we waste?”','a criança relaciona lixo a dirty','uma seta waste → dirty','“Waste makes a mess.”'],
      ['Action plan draft','papel grande, post-its e cartões save/reuse','“Choose one action for our school.”','a criança escolhe reuse paper','uma ação escrita ou desenhada no plano','“We can reuse paper.”'],
      ['Improve the investigation board','painel da investigação e cartões de checklist','“What can we make clearer?”','a criança aponta um título sem imagem','uma etiqueta ou imagem adicionada ao painel','“Add a picture here.”'],
      ['Detective presentation rehearsal','painel pronto e cartões First/Then/Finally','“Tell us your first finding.”','a criança aponta o primeiro dado','uma sequência First/Then/Finally marcada','“First, we counted taps.”'],
      ['Resource and Plant Detectives sharing','painel final e crachá de detetive','“Welcome. We found…”','a criança compartilha um dado do painel','foto ou áudio da apresentação','“We found three taps.”']
    ],
    'healthy-garden-and-responsible-design-plan': [
      ['Design challenge launch','foto de um jardim e cartão challenge','“How can we make a healthy garden?”','a criança aponta uma ideia na foto','uma pergunta de desafio copiada ou desenhada','“We can make a garden.”'],
      ['Solids, liquids and filtering','copos com água, areia e filtro de café','“Is water a solid or a liquid?”','a criança mostra liquid','uma tabela solid/liquid com exemplos','“Water is a liquid.”'],
      ['Materials and responsible choices','madeira, plástico, papelão e cartões reuse/recycle','“Which material can we reuse?”','a criança escolhe cardboard','uma escolha de material com motivo','“We can reuse cardboard.”'],
      ['Shadows and comfort','lanterna, objeto e papel branco','“Where is the shadow?”','a criança aponta a sombra','um desenho de objeto e shadow','“The shadow is here.”'],
      ['Human body and healthy habits','cartões sleep, water, movement e food','“Choose one healthy habit.”','a criança escolhe movement','um hábito saudável desenhado com legenda','“Movement helps me.”'],
      ['Multiplication patterns in planning','fileiras de vasos e cartões 2 × 3','“How many plants in two rows of three?”','a criança organiza seis tampinhas em fileiras','um arranjo 2 × 3 desenhado','“Two times three is six.”'],
      ['Animal groups and life cycles','cartões egg, chick, bird e habitats','“What comes after the egg?”','a criança coloca chick depois de egg','uma sequência de ciclo de vida','“Egg, chick, bird.”'],
      ['Measurement, area and perimeter','barbante, régua e quadrado no chão','“Measure around the garden bed.”','a criança segura o barbante na borda','um perímetro marcado com unidades','“We measure around.”'],
      ['Garden planning meeting','mapa de jardim, post-its e cartões de áreas','“Where will we put the water?”','a criança coloca water no mapa','uma área do jardim identificada','“Water goes here.”'],
      ['Final design board','painel, etiquetas e imagens de escolhas','“Add one reason to your design.”','a criança dita uma razão para o adulto registrar','uma etiqueta reason: reuse cardboard','“We chose cardboard because…”'],
      ['Presentation rehearsal','painel final e cartões First/Next/Finally','“Explain one choice in your design.”','a criança aponta um elemento e explica','uma fala curta registrada','“We chose water here.”'],
      ['Healthy Garden Design sharing','painel e modelo do jardim','“Welcome to our healthy garden.”','a criança apresenta uma escolha do grupo','foto ou áudio da apresentação','“This is our garden.”']
    ],
    'water-forces-and-space-learning-exhibition': [
      ['Water use investigation launch','garrafa de água, foto de torneira e prancheta','“Where do we use water?”','a criança aponta a torneira','uma lista de dois usos da água','“We use water here.”'],
      ['Food chains and consequences','cartões sun, plant, rabbit e fox','“What does the rabbit eat?”','a criança liga rabbit a plant','uma cadeia food chain com setas','“The rabbit eats plants.”'],
      ['Water data and explanation','gráfico de uso de água e cartões de números','“What does the graph show?”','a criança aponta a barra maior','uma frase completada sobre o gráfico','“The graph shows water use.”'],
      ['Forces test stations','rampa, carrinho, ímã e prancheta','“Push the car gently.”','a criança observa o carrinho na rampa','uma tabela push/pull com uma observação','“The car moves.”'],
      ['Improve a transport design','modelo de carrinho, rodas e fita','“What can make it move better?”','a criança sugere bigger wheels','uma mudança marcada no modelo','“Try bigger wheels.”'],
      ['Safe transport and community','mapa de rua, crossing e cards safe/unsafe','“Show a safe way to cross.”','a criança aponta o crossing','uma rota segura colorida','“Use the crossing.”'],
      ['Earth, Sun and Moon model','bola, lanterna e bola pequena','“Which one is the Sun?”','a criança aponta a lanterna','um desenho Earth-Sun-Moon com setas','“The Sun gives light.”'],
      ['Moon phases observation','cartões de fases da lua e calendário','“Put the moon phases in order.”','a criança coloca new moon antes de full moon','uma sequência de quatro fases','“The Moon changes.”'],
      ['Exhibition planning','mapa da exposição e cartões water/forces/space','“Choose a place for the water station.”','a criança coloca water em uma mesa','um plano com estações nomeadas','“Water goes here.”'],
      ['Portfolio selection','produções da turma e cartão I learned','“Choose one work that shows learning.”','a criança escolhe o gráfico ou modelo','uma produção com etiqueta de escolha','“I learned about forces.”'],
      ['Exhibition rehearsal','produção escolhida e cartão de apresentação','“Explain one thing you discovered.”','a criança aponta o dado ou modelo','uma fala ensaiada registrada','“I discovered that…”'],
      ['Year 3 Learning Exhibition','trabalhos organizados e crachá','“Welcome. Let me show you.”','a criança mostra uma evidência para visitante','foto ou áudio da conversa','“Let me show you.”']
    ]
  };
  const step=(t,x)=>`<article class="lesson-step"><h5>${t}</h5><p>${x}</p></article>`;
  const render=([focus,material,command,response,product,share])=>[
    step('1. Welcome',`<strong>Visual:</strong> deixe ${material} à vista. Apresente o foco <em>${focus}</em> e modele: <strong>“${share}”</strong>. <strong>Exemplo:</strong> aponte para o visual enquanto fala; a turma repete uma vez.`),
    step('2. Activate',`<strong>Material e comando:</strong> use ${material}. Diga: <strong>“${command}”</strong>. <strong>Exemplo de resposta:</strong> ${response}.`),
    step('3. Practice',`<strong>Faça junto:</strong> modele uma tentativa com um item e convide uma criança para repetir ao seu lado. <strong>Exemplo:</strong> você demonstra, verbaliza a ação e a criança faz a mesma sequência.`),
    step('4. Create',`<strong>Produção curta:</strong> cada criança registra uma ideia. <strong>Exemplo esperado:</strong> ${product}. Aceite desenho, anotação compartilhada ou frase dita ao adulto.`),
    step('5. Share',`<strong>Feche em roda:</strong> duas ou três crianças mostram a produção. <strong>Fala-modelo:</strong> “${share}” <strong>Observe:</strong> se a criança usa o material ou registro para comunicar uma ideia.`)
  ].join('');
  const apply=()=>Object.entries(projects).forEach(([project,weeks])=>weeks.forEach((plan,index)=>{const panel=document.getElementById(`lesson-plan-year3-${project}-week-${index+1}`),steps=panel?.querySelector('.lesson-steps');if(steps){steps.innerHTML=render(plan);panel.dataset.year3Models='20261116';}}));
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',apply):apply();
})();
