/* Explicit modelling layer for the 36 weekly PBL lesson plans in Year 7 — 2026-11-17. */
(()=>{
const meta=(p,label,fallback)=>[...p.querySelectorAll('.lesson-plan-meta div')].find(x=>x.textContent.includes(label))?.textContent.replace(label,'').trim()||fallback;
const step=(h,x)=>`<article class="lesson-step"><h5>${h}</h5><p>${x}</p></article>`;
const apply=()=>{for(let n=1;n<=36;n++){const p=document.getElementById(`lesson-plan-pbl-year7-week-${n}`),s=p?.querySelector('.lesson-steps');if(!s)continue;const material=meta(p,'Materiais','as fontes e os recursos indicados acima'),evidence=meta(p,'Evidência interna','um registro de evidência e uma justificativa curta'),title=p.closest('.pbl-week')?.querySelector('h3')?.textContent||`Week ${n}`;s.innerHTML=[
step('1. Inquiry',`<strong>Questão da semana:</strong> apresente <em>${title}</em> e deixe ${material} visíveis. Modele: <strong>“Our question is ___. I need evidence to answer it.”</strong>`),
step('2. Input',`<strong>Fonte e comando:</strong> use ${material}. Diga: <strong>“Find one word, number or detail that can help answer our question.”</strong> <strong>Exemplo de resposta:</strong> “I found ___ in the source.”`),
step('3. Process',`<strong>Faça junto:</strong> projete ou organize um exemplo. Destaque uma evidência, complete no quadro <strong>“I notice ___, so I think ___.”</strong> e peça que as duplas façam o mesmo com uma segunda evidência.`),
step('4. Produce',`<strong>Produto curto:</strong> cada estudante registra em ${evidence}. <strong>Exemplo esperado:</strong> uma afirmação acompanhada de uma fonte, dado, observação ou razão.`),
step('5. Communicate',`<strong>Compartilhe:</strong> dois estudantes explicam sua conclusão em até 30 segundos. <strong>Fala-modelo:</strong> “Our evidence shows ___ because ___.” <strong>Observe:</strong> se a explicação usa evidência, não apenas opinião.`)
].join('');p.dataset.year7PblModels='20261117';}};
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',apply):apply();})();
