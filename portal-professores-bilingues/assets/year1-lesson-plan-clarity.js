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

  // Every week names the visual, command and expected child response so that the
  // teacher does not need to invent a model during the lesson.
  const supports = {
    'Belonging walk': ['uma foto da porta da sala e um cartão com um coração', '“Point to our classroom.”', 'a criança aponta para a sala e diz “Here.”', 'um desenho da porta ou de um lugar de que gosta', '“I am here.”'],
    'Classroom objects': ['um lápis, um livro e uma mochila reais', '“Show me the book.”', 'a criança mostra ou toca o livro', 'o desenho de um livro com a palavra book copiada do cartão', '“This is a book.”'],
    'My learning spot': ['uma foto da mesa e uma foto da roda', '“Where do you learn?”', 'a criança aponta para a mesa ou para a roda', 'um desenho da própria mesa', '“I learn here.”'],
    'Counting our room': ['cinco lápis sobre uma bandeja e cartões de 1 a 5', '“Count the pencils with me.”', 'a criança aponta: “One, two, three…”', 'cinco bolinhas desenhadas para representar os lápis', '“I can see five pencils.”'],
    'Shape hunt': ['cartões de circle, square e rectangle', '“Find a circle.”', 'a criança aponta para um círculo no relógio ou em um cartaz', 'um círculo encontrado desenhado na folha', '“It is a circle.”'],
    'Build the first map': ['fita no chão, foto da porta e cartão da mesa', '“Put the table here.”', 'a criança coloca o cartão da mesa no mapa', 'o mapa com o cartão da mesa colado', '“The table is here.”'],
    'Living or non-living?': ['uma planta e uma cadeira, ou fotos grandes das duas', '“Is the plant living?”', 'a criança levanta o cartão verde para a planta', 'uma planta circulada e uma cadeira marcada com X', '“It is living.”'],
    'Plant observation': ['uma planta real, uma lupa e folha de desenho', '“Look at the leaf.”', 'a criança aponta a folha e diz “green”', 'uma folha desenhada com uma linha ou cor observada', '“The plant is green.”'],
    'People who help us': ['foto da professora, da equipe da limpeza e da portaria', '“Who helps us?”', 'a criança escolhe a foto da professora', 'a foto colada ao lado de uma ação de ajuda', '“Teacher helps us.”'],
    'Map revision': ['o mapa inicial e uma foto atual da sala', '“Where is the book corner?”', 'a criança move o cartão para o canto certo', 'uma seta mostrando a mudança no mapa', '“Let’s put it here.”'],
    'Presentation rehearsal': ['o mapa pronto e um cartão com a fala', '“Point and say: This is our map.”', 'a criança aponta para o mapa e repete a frase', 'um desenho da criança apontando para o mapa', '“This is our map.”'],
    'Map walk': ['o mapa final e etiquetas de parada', '“Show us the door.”', 'a criança leva o grupo até o cartão da porta', 'uma foto da criança guiando a caminhada', '“Welcome to our classroom.”'],
    'Colour investigation': ['cartões red, yellow, green e blue e folhas coloridas', '“Find something green.”', 'a criança aponta uma folha verde', 'três manchas de cores encontradas', '“I can see green.”'],
    'Sound walk': ['um cartão de orelha e imagens de bird, car e voices', '“Listen. What can you hear?”', 'a criança escolhe a imagem de bird', 'um desenho de pássaro ou outro som ouvido', '“I can hear a bird.”'],
    'Nature details': ['folhas, pedras, sementes e lupas', '“Look closely at the leaf.”', 'a criança mostra uma linha da folha', 'um detalhe ampliado da folha', '“I can see a line.”'],
    'Material detectives': ['um bloco de madeira, papel, plástico e tecido', '“Touch the wood.”', 'a criança toca o bloco e separa outro objeto de madeira', 'dois objetos reunidos no grupo wood', '“It is wood.”'],
    'Longer or shorter?': ['duas fitas de comprimentos diferentes', '“Which ribbon is longer?”', 'a criança aponta a fita maior', 'as duas fitas desenhadas e a maior marcada', '“It is longer.”'],
    'Data in our class': ['adesivos e um gráfico com duas colunas', '“Put your sticker here.”', 'a criança cola o adesivo na coluna escolhida', 'o gráfico com o adesivo da criança', '“We have four.”'],
    'Garden problems': ['foto de uma planta seca e um regador vazio', '“What does the plant need?”', 'a criança aponta para o regador', 'um desenho de planta recebendo água', '“We need water.”'],
    'People and places': ['foto de um jardineiro e imagem de um jardim', '“Who helps in the garden?”', 'a criança liga o jardineiro ao jardim', 'uma linha entre pessoa e lugar', '“The gardener helps here.”'],
    'Design idea': ['papel, blocos e potes reutilizáveis', '“Choose one idea for our garden.”', 'a criança escolhe fazer uma placa para o jardim', 'um esboço de placa com desenho', '“Our idea is a sign.”'],
    'Feedback and revision': ['dois modelos simples e cartões I like / Try', '“Say: I like the flower.”', 'a criança aponta uma parte de que gostou', 'uma marca mostrando o que foi melhorado', '“Try blue here.”'],
    'Gallery setup': ['trabalhos prontos, fita adesiva e etiquetas com nomes', '“Put your work here.”', 'a criança coloca seu desenho na área do grupo', 'o trabalho com etiqueta de nome', '“This is our garden.”'],
    'Design presentation': ['o modelo do grupo e um cartão de fala', '“Show one part of your model.”', 'a criança aponta a placa ou a flor do modelo', 'uma foto da fala do grupo', '“We made a sign.”'],
    'Body and care review': ['cartões head, hands, teeth e imagens de cuidado', '“Show me your hands.”', 'a criança mostra as mãos e faz gesto de lavar', 'um par corpo-cuidado, como hands + wash', '“I take care of my hands.”'],
    'Animal habitats': ['cartazes de forest e ocean e cartões de animais', '“Where does the fish live?”', 'a criança coloca o fish no ocean', 'um animal colado no habitat certo', '“A fish lives in the ocean.”'],
    'Care poster': ['papel grande, imagens de cuidado e canetões', '“Draw one way to help.”', 'a criança desenha água para uma planta', 'um desenho de cuidado no cartaz', '“We can help.”'],
    'Water facts': ['imagens de drinking, washing e watering', '“Where do we use water?”', 'a criança escolhe a imagem de drinking', 'três usos da água desenhados ou colados', '“Water is important.”'],
    'Food choices': ['imagens de frutas, legumes e outros alimentos', '“Choose one fruit.”', 'a criança coloca uma banana no prato de papel', 'um prato de papel com uma fruta desenhada', '“I choose a banana.”'],
    'Data story': ['gráfico com blocos e cartões de escolhas de alimentos', '“Which column has more?”', 'a criança aponta para a coluna mais alta', 'a coluna maior marcada com uma estrela', '“Most children chose apples.”'],
    'Portfolio search': ['produções identificadas em mesas baixas', '“Find your work.”', 'a criança encontra seu desenho pelo nome ou imagem', 'uma produção escolhida com etiqueta', '“I made this.”'],
    'Why this evidence?': ['duas produções-modelo e um adesivo de estrela', '“Choose one work you are proud of.”', 'a criança coloca a estrela em seu desenho escolhido', 'a produção marcada com estrela', '“I am proud of this.”'],
    'Exhibition design': ['um mapa simples da exposição e cartões de áreas', '“Where can we put the animals?”', 'a criança coloca o cartão animals na mesa combinada', 'o plano da exposição com uma área marcada', '“Let’s put it here.”'],
    'Presentation rehearsal': ['a produção da criança e um cartão I learned', '“Show your work and say: I learned…”', 'a criança mostra o gráfico e completa com uma palavra', 'uma fala registrada pela professora', '“I learned about water.”'],
    'Family-ready exhibition': ['trabalhos na altura das crianças e crachás simples', '“Say hello to our visitor.”', 'a criança acena e diz “Hello.”', 'uma foto do espaço pronto', '“Welcome. This is my work.”'],
    'Learning Exhibition': ['uma produção escolhida e cartão com uma pergunta de família', '“Show your work to the visitor.”', 'a criança aponta um detalhe e responde uma pergunta simples', 'foto ou áudio da conversa com a família', '“I learned about plants.”']
  };

  function step(title, text) {
    return `<article class="lesson-step"><h5>${title}</h5><p>${text}</p></article>`;
  }

  function render(plan) {
    const [focus, frame, action, evidence, check] = plan;
    const [material, instruction, response, product, share] = supports[focus];
    return [
      step('1. Welcome', `<strong>Visual:</strong> deixe ${material} ao alcance do olhar. Cumprimente e modele: <strong>“${frame}”</strong>. <strong>Exemplo:</strong> diga a frase apontando para o visual; as crianças repetem com um gesto.`),
      step('2. Activate', `<strong>Material e comando:</strong> mostre ${material}. Diga: <strong>“${instruction}”</strong>. <strong>Exemplo de resposta:</strong> ${response}.`),
      step('3. Practice', `<strong>Faça junto:</strong> ${action} <strong>Exemplo:</strong> modele primeiro uma vez, narrando o que faz; depois convide uma criança para repetir com você.`),
      step('4. Create', `<strong>Produção curta:</strong> cada criança registra uma ideia em <strong>${evidence}</strong>. <strong>Exemplo esperado:</strong> ${product}. Aceite desenho, apontamento, palavra ou frase dita ao adulto.`),
      step('5. Share', `<strong>Feche em roda:</strong> duas ou três crianças mostram o que fizeram. <strong>Fala-modelo:</strong> “${share}” <strong>Observe:</strong> ${check}`)
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
