/* Explicit modelling layer for the three Year 4 quarterly projects — 2026-11-16. */
(()=>{
const P={
'technology-help-or-harm-campaign':[
['Campaign launch','foto de tablet, livro e cartaz help/harm','“Does technology help or harm?”','a criança escolhe help ou harm','uma ideia registrada em duas colunas','“Technology can help.”'],
['Family and routine perspectives','cartões morning, afternoon, evening e device','“When do you use a device?”','a criança escolhe evening','uma rotina com horário e dispositivo','“I use it in the evening.”'],
['Skeleton, posture and screen habits','imagem de postura correta e cadeira','“Show a safe posture.”','a criança senta com costas apoiadas','um desenho good posture','“Sit up straight.”'],
['Time and timetable data','tabela de horários e relógio de papel','“How many minutes do you use a screen?”','a criança lê 30 no cartão','uma tabela com tempo de tela','“Thirty minutes.”'],
['Technology survey design','prancheta e cartões yes/no','“Write one clear question.”','a criança escolhe “Do you use a tablet?”','uma pergunta com duas opções','“Do you use a tablet?”'],
['Collect and organize data','formulários e gráfico de barras','“Make one tally mark.”','a criança marca um traço','uma tabela de tallies','“We have five.”'],
['Energy and devices','imagens de lamp, computer e plug','“Which device uses energy?”','a criança aponta computer','um dispositivo ligado a energy','“A computer uses energy.”'],
['Materials and safe campaign media','papel, cartolina, canetão e exemplo de cartaz','“Choose a safe material for the poster.”','a criança escolhe cardboard','uma escolha de material com motivo','“Cardboard is strong.”'],
['Message drafting','sentence frames e dois cartazes-modelo','“Write one helpful message.”','a criança completa “Turn off the…”','um slogan curto','“Turn off the light.”'],
['Campaign prototype and feedback','protótipo e cartões I notice/I suggest','“Give one suggestion.”','a criança diz “Make it bigger.”','uma mudança marcada no cartaz','“Make the title bigger.”'],
['Presentation rehearsal','cartaz e cartões First/Then','“Explain your message.”','a criança aponta o slogan','uma fala curta ensaiada','“Our message is…”'],
['Responsible Technology Campaign sharing','cartaz final e crachá','“Welcome to our campaign.”','a criança explica uma escolha do grupo','foto ou áudio da apresentação','“Use technology safely.”']],
'inclusive-school-space-proposal':[
['Inclusive design challenge','foto de entrada da escola e cartão access','“Who can use this space?”','a criança aponta uma barreira na foto','uma pergunta do desafio','“Everyone can use it.”'],
['City places and school map','mapa da escola e cartões library, ramp, bathroom','“Find the library on the map.”','a criança coloca library no mapa','um lugar rotulado no mapa','“The library is here.”'],
['Needs and perspectives','imagens de diferentes usuários e cartões need','“What does this person need?”','a criança escolhe ramp','uma necessidade ligada a uma pessoa','“They need a ramp.”'],
['Health and safe movement','foto de corredor e setas safe/unsafe','“Show a safe way to walk.”','a criança segue a seta sem correr','uma rota segura marcada','“Walk, don’t run.”'],
['Shapes, tessellation and layout','azulejos de papel e formas geométricas','“Can these shapes cover the floor?”','a criança testa quadrados lado a lado','um padrão de formas sem espaços','“Squares fit together.”'],
['Measurement and feasibility','régua, fita métrica e planta simples','“Measure the ramp space.”','a criança lê uma medida com apoio','uma medida anotada no mapa','“It is two metres.”'],
['Light and shadow investigation','lanterna, objeto e parede','“Where does the shadow fall?”','a criança aponta a sombra','um teste light/shadow desenhado','“The shadow is behind.”'],
['Habitats and shared environment','foto de pátio, pássaro e planta','“Who shares this space?”','a criança cita bird ou plant','um desenho de seres no espaço','“Birds live here too.”'],
['Decision matrix','tabela com safe, useful, possible e cartões de ideias','“Which idea is safe and possible?”','a criança marca uma opção','uma ideia com dois critérios marcados','“This idea is possible.”'],
['Proposal board draft','painel, mapa e etiquetas de solução','“Add your solution to the board.”','a criança cola a etiqueta ramp','um painel com problema e solução','“We propose a ramp.”'],
['Proposal rehearsal','painel final e cartão because','“Explain why this helps.”','a criança completa “Because it is safe.”','uma fala com razão','“It helps because…”'],
['Inclusive School Space sharing','proposta final e crachá','“Welcome. This is our proposal.”','a criança apresenta uma solução','foto ou áudio da explicação','“This space is for everyone.”']],
'energy-saving-campaign-and-year-4-learning-exhibition':[
['Energy challenge launch','foto de sala com luzes acesas e cartão energy','“Where do we use energy?”','a criança aponta lamp','uma lista de usos de energia','“We use energy for light.”'],
['Data and graph review','gráfico de barras e cartões more/less','“Which bar is highest?”','a criança aponta a barra maior','uma conclusão escrita no gráfico','“This uses more.”'],
['Weather and energy choices','cartões sunny, rainy e fan/light','“What can we use on a sunny day?”','a criança escolhe natural light','uma escolha clima-energia','“Use sunlight.”'],
['Electricity and circuit basics','pilha, fio, lâmpada e circuito simples','“What makes the bulb light?”','a criança conecta o fio com apoio','um circuito desenhado com setas','“The circuit is closed.”'],
['Conductors and insulators','metal spoon, plastic ruler e tabela','“Which one conducts?”','a criança testa/observa metal','uma tabela metal/plastic','“Metal conducts.”'],
['Area, perimeter and energy signs','régua, planta da sala e cartões de sinais','“Measure around the sign area.”','a criança mede uma borda','um espaço com medida anotada','“The perimeter is…”'],
['Persuasive message with evidence','dados do gráfico e sentence frame','“Use one number in your message.”','a criança completa “We use 20 lights.”','um slogan com dado','“Turn off 20 lights.”'],
['Campaign prototype','cartolina, marcadores e cartaz-modelo','“Make the evidence easy to see.”','a criança aumenta um número no cartaz','um protótipo com título e dado','“Save energy now.”'],
['Portfolio selection','produções e cartão I learned','“Choose work that shows evidence.”','a criança escolhe o gráfico','uma produção com legenda','“I learned from data.”'],
['Exhibition planning','mapa da exposição e cartões energy/data/circuit','“Choose a place for the circuit.”','a criança posiciona a estação','um plano com estações nomeadas','“The circuit goes here.”'],
['Exhibition rehearsal','produção e cartão de fala','“Explain one energy-saving action.”','a criança aponta o cartaz e explica','uma fala ensaiada','“Turn off the lights.”'],
['Year 4 Learning Exhibition','trabalhos organizados e crachá','“Welcome. Let me show you our evidence.”','a criança apresenta um dado ou modelo','foto ou áudio da conversa','“We can save energy.”']]
};
const step=(t,x)=>`<article class="lesson-step"><h5>${t}</h5><p>${x}</p></article>`;
const render=([focus,material,command,response,product,share])=>[
step('1. Welcome',`<strong>Visual:</strong> deixe ${material} à vista. Apresente <em>${focus}</em> e modele: <strong>“${share}”</strong>. <strong>Exemplo:</strong> aponte para o visual enquanto fala; a turma repete uma vez.`),
step('2. Activate',`<strong>Material e comando:</strong> use ${material}. Diga: <strong>“${command}”</strong>. <strong>Exemplo de resposta:</strong> ${response}.`),
step('3. Practice',`<strong>Faça junto:</strong> modele uma tentativa com um item e convide uma criança para repetir. <strong>Exemplo:</strong> você demonstra, verbaliza a ação e a criança faz a mesma sequência.`),
step('4. Create',`<strong>Produção curta:</strong> cada criança registra uma ideia. <strong>Exemplo esperado:</strong> ${product}. Aceite desenho, anotação compartilhada ou frase dita ao adulto.`),
step('5. Share',`<strong>Feche em roda:</strong> duas ou três crianças mostram a produção. <strong>Fala-modelo:</strong> “${share}” <strong>Observe:</strong> se a criança usa o material ou registro para comunicar uma ideia.`)].join('');
const apply=()=>Object.entries(P).forEach(([p,weeks])=>weeks.forEach((w,i)=>{const panel=document.getElementById(`lesson-plan-year4-${p}-week-${i+1}`),s=panel?.querySelector('.lesson-steps');if(s){s.innerHTML=render(w);panel.dataset.year4Models='20261116';}}));
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',apply):apply();})();
