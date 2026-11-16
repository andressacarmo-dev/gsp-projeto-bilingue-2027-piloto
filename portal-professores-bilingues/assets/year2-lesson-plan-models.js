/* Explicit modelling layer for the three Year 2 quarterly projects — 2026-11-16. */
(() => {
  const projects = {
    'food-and-classroom-journey-map': [
      ['Welcome to our Year 2 investigation','agenda visual e duas embalagens limpas','“Today we investigate food and our classroom.”','a criança aponta food ou classroom','um desenho de uma embalagem ou objeto da sala','“Today we investigate.”'],
      ['Food we know, food we eat','cartões de banana, rice, bread e apple','“What food do you eat?”','a criança escolhe o cartão banana e diz “Banana.”','um alimento desenhado e nomeado','“I eat bananas.”'],
      ['Where does food come from?','cartões de farm, market e home','“Where does the apple come from?”','a criança coloca apple perto de farm','uma seta farm → apple','“It comes from a farm.”'],
      ['Numbers in our food choices','adesivos e um gráfico de duas colunas','“Put your sticker on apples or bananas.”','a criança cola um adesivo na coluna escolhida','um gráfico com a coluna maior marcada','“The data shows bananas.”'],
      ['My school and classroom needs','fotos de mesa, water bottle, bin e book','“What do we need in our classroom?”','a criança escolhe bin e diz “A bin.”','dois itens de que a sala precisa','“We need a bin.”'],
      ['Measuring and mapping the classroom','fita métrica curta, fita no chão e foto da porta','“Walk three steps to the door.”','a criança conta os três passos','um mapa com porta e mesa','“The door is here.”'],
      ['Why is waste a problem?','duas fotos: lixo no chão e lixeira','“Which picture is better?”','a criança aponta a lixeira','uma imagem de problema e solução','“Waste is a problem.”'],
      ['Better classroom, less waste','embalagens limpas, duas caixas e etiquetas reuse/recycle','“Put this in recycle.”','a criança coloca papel na caixa recycle','uma regra de redução de lixo','“We can recycle paper.”'],
      ['Building the Food and Classroom Journey Map','mapa grande, cartões de food, bin, door e table','“Put the food card on the map.”','a criança coloca o cartão no espaço combinado','uma parte montada do mapa coletivo','“Food goes here.”'],
      ['Adding labels and explanations','etiquetas com food, bin, door e sentence frame','“Read: This is the bin.”','a criança cola bin perto da lixeira do mapa','uma etiqueta e uma frase curta','“This is the bin.”'],
      ['Rehearsing the map walk','mapa pronto e cartões de fala','“Show the visitor the food journey.”','a criança aponta duas paradas no mapa','uma sequência de duas paradas marcada','“First food. Then bin.”'],
      ['Food and Classroom Journey sharing','mapa final e crachá de apresentador','“Welcome. I can show you our map.”','a criança cumprimenta e aponta um item','foto ou áudio da apresentação','“Welcome to our map.”']
    ],
    'healthy-care-and-materials-challenge': [
      ['Well-being check-in','cartões happy, tired, calm e excited','“How do you feel today?”','a criança escolhe happy','um termômetro de sentimentos com marca','“I feel happy.”'],
      ['What helps us stay healthy?','imagens de sleep, water, food e movement','“Point to something healthy.”','a criança aponta water','um desenho de uma escolha saudável','“Water helps me.”'],
      ['Favourite toys and movement','um brinquedo leve e cartões push/pull','“Can you push the car?”','a criança empurra o carrinho','seta mostrando push ou pull','“I can push.”'],
      ['Testing forces around us','rampa, carrinho e bloco para parar','“What happens when we push?”','a criança observa o carrinho andar','um desenho antes/depois do movimento','“It moves.”'],
      ['Materials detectives','papel, plástico, madeira e tecido','“Touch the fabric.”','a criança toca e separa tecido','dois objetos agrupados pelo material','“It is fabric.”'],
      ['Healthy Toy Challenge','blocos, papelão e fita adesiva','“Build a toy that can move.”','a criança escolhe rodas ou rampa','um esboço simples do brinquedo','“Our toy can move.”'],
      ['Our pets and their needs','fotos de dog, fish e bird e cartões food/water/home','“What does the dog need?”','a criança escolhe water','um par pet + need','“A dog needs water.”'],
      ['Animal care and materials','caixas, papel e imagens de habitats','“Choose a material for the pet home.”','a criança escolhe papelão para uma casa','um modelo de casa ou abrigo','“We use cardboard.”'],
      ['Planning the care challenge fair','mapa da feira e cartões de estações','“Where will your group show the pet home?”','a criança coloca o cartão da estação no mapa','um plano simples da estação','“Our station is here.”'],
      ['Improving with feedback','dois modelos e cartões I like / Try','“Say: I like the wheels.”','a criança aponta uma parte de que gostou','uma mudança marcada no modelo','“Try a bigger wheel.”'],
      ['Rehearsing care explanations','modelo do grupo e cartão de fala','“Show me how your toy helps.”','a criança aponta uma parte e dá uma razão','uma fala curta registrada','“It helps the pet.”'],
      ['Healthy Care and Materials Fair','modelo pronto e crachá de apresentador','“Welcome. This is our healthy toy.”','a criança cumprimenta e mostra o modelo','foto ou áudio da fala','“It can move.”']
    ],
    'safe-routes-and-community-action-exhibition': [
      ['Wild animals and habitats','cartazes forest, ocean e savannah; cartões de animais','“Where does the tiger live?”','a criança coloca tiger perto de forest','um animal no habitat escolhido','“A tiger lives in the forest.”'],
      ['Light and darkness','lanterna, caixa escura e cartões light/dark','“Can you see in the dark?”','a criança observa com e sem lanterna','um desenho light/dark','“I need light.”'],
      ['Animal Light and Habitat Museum','caixas de exposição e cartões animal/habitat','“Put the animal in its habitat.”','a criança coloca o animal na caixa correta','uma mini-exposição com etiqueta','“This is the ocean.”'],
      ['Electricity and safety','foto de tomada segura e imagem de cabo danificado','“Which picture is safe?”','a criança aponta a tomada segura','um cartaz de regra de segurança','“Be safe.”'],
      ['Position and direction','setas no chão e um brinquedo pequeno','“Put the car next to the chair.”','a criança move o carrinho para a posição','um desenho with next to / behind','“It is next to the chair.”'],
      ['Safe routes challenge','mapa simples com home, school e crossing','“Show a safe route to school.”','a criança traça a rota até o crossing','uma rota colorida no mapa','“Go to the crossing.”'],
      ['Our house and routines','cartões bedroom, kitchen e bathroom','“What do you do in the kitchen?”','a criança escolhe eat','uma sequência de rotina em casa','“I eat in the kitchen.”'],
      ['Community helpers and advice','fotos de police officer, firefighter e teacher','“Who can help us?”','a criança escolhe firefighter','um helper ligado a um conselho','“The firefighter helps.”'],
      ['Planning the community action exhibition','mapa da exposição e cartões de temas','“Choose one place for safe routes.”','a criança coloca safe routes em uma mesa','um plano da exposição com uma estação','“Our station is here.”'],
      ['Portfolio and speaker preparation','duas produções da criança e cartão I learned','“Choose one work to show.”','a criança escolhe seu mapa de rota','uma produção com etiqueta de escolha','“I learned about safety.”'],
      ['Exhibition rehearsal','produção escolhida e cartão de saudação','“Say: Welcome. This is my map.”','a criança aponta a rota e pratica a fala','uma fala ensaiada registrada','“This is my map.”'],
      ['Year 2 Community Action Exhibition','trabalhos organizados e crachá de apresentador','“Show one safe action to the visitor.”','a criança aponta o crossing e explica','foto ou áudio da conversa','“Use the crossing.”']
    ]
  };

  const labels = ['Welcome','Activate','Practice','Create','Share'];
  const step = (title, text) => `<article class="lesson-step"><h5>${title}</h5><p>${text}</p></article>`;
  const render = ([focus, material, command, response, product, share]) => [
    step(`1. ${labels[0]}`, `<strong>Visual:</strong> deixe ${material} à vista. Apresente o foco <em>${focus}</em> e modele primeiro: <strong>“${share}”</strong>. <strong>Exemplo:</strong> aponte para o visual enquanto fala; a turma repete uma vez.`),
    step(`2. ${labels[1]}`, `<strong>Material e comando:</strong> use ${material}. Diga: <strong>“${command}”</strong>. <strong>Exemplo de resposta:</strong> ${response}.`),
    step(`3. ${labels[2]}`, `<strong>Faça junto:</strong> modele a ação com um item e convide uma criança para repetir ao seu lado. <strong>Exemplo:</strong> você faz primeiro, narra a ação em uma frase e a criança faz a mesma ação.`),
    step(`4. ${labels[3]}`, `<strong>Produção curta:</strong> cada criança registra uma ideia. <strong>Exemplo esperado:</strong> ${product}. Aceite desenho, apontamento, palavra ou frase dita ao adulto.`),
    step(`5. ${labels[4]}`, `<strong>Feche em roda:</strong> duas ou três crianças mostram a produção. <strong>Fala-modelo:</strong> “${share}” <strong>Observe:</strong> se a criança usa o visual para comunicar uma ideia.`)
  ].join('');

  const apply = () => Object.entries(projects).forEach(([project, weeks]) => weeks.forEach((plan, index) => {
    const panel = document.getElementById(`lesson-plan-year2-${project}-week-${index + 1}`);
    const steps = panel?.querySelector('.lesson-steps');
    if (steps) { steps.innerHTML = render(plan); panel.dataset.year2Models = '20261116'; }
  }));
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', apply) : apply();
})();
