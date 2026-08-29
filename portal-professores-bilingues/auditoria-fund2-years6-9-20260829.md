# Auditoria comparativa Fundamental 2 · Years 6–9 · 2026-08-29
## Escopo
Comparação das páginas `fundamental-2-year-6.html`, `fundamental-2-year-7.html`, `fundamental-2-year-8.html` e `fundamental-2-year-9.html`, incluindo geradores de report card por escola/term.
## Resultado executivo
- Years 6, 7, 8 e 9 mantêm a mesma arquitetura macro: hero, navegação mensal, 20 seções, 10 meses, 3 projetos trimestrais, matriz mensal, avaliação global, base de relatório, gerador de report card e materiais.
- Year 9 foi construído com conteúdo próprio: Prepare 4 e Global Perspectives 9, com ênfase em pesquisa independente, avaliação de fontes/argumentos, conflito e paz, turismo/ecoturismo, pobreza/desigualdade, reflexão ética e comunicação acadêmica.
- Não foram encontrados links quebrados internos para report cards do Year 9.
- Validação visual local via Chromium passou para a página Year 9 e um gerador de report card Year 9.

## Paridade estrutural
| Year | Tamanho HTML | Seções | H2 | Meses | Cards de disciplina | Projetos trimestrais | Semanas de projeto | Links report card | Arquivos report card |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Year 6 | 149,443 | 20 | 20 | 9 | 54 | 3 | 36 | 17 | 19 |
| Year 7 | 157,301 | 20 | 20 | 10 | 60 | 3 | 36 | 17 | 17 |
| Year 8 | 157,946 | 20 | 20 | 10 | 60 | 3 | 36 | 17 | 17 |
| Year 9 | 120,955 | 20 | 20 | 10 | 60 | 3 | 36 | 17 | 17 |

## Seções por Year
- **Year 6:** hero-section, uso, padrao-gsp, deeper-learning, conduzir-deeper-learning, deeper-learning-pratica, rotina, projetos, projeto-identity-community-research-dossier, projeto-digital-wellbeing-responsible-solution, projeto-sustainable-community-impact-exhibition, estrategias, rubrica, progressao, matriz, avaliacao-global, avaliacao-t1, relatorio-base, gerador-report-card, materiais
- **Year 7:** hero-section, uso, padrao-gsp, deeper-learning, conduzir-deeper-learning, deeper-learning-pratica, rotina, projetos, projeto-school-culture-access-research, projeto-responsible-choices-conservation, projeto-media-climate-global-culture, estrategias, rubrica, progressao, matriz, avaliacao-global, avaliacao-t1, relatorio-base, gerador-report-card, materiais
- **Year 8:** hero-section, uso, padrao-gsp, deeper-learning, conduzir-deeper-learning, deeper-learning-pratica, rotina, projetos, projeto-community-migration-social-participation, projeto-inequality-climate-responsible-solutions, projeto-urban-futures-technology-youth-voice, estrategias, rubrica, progressao, matriz, avaliacao-global, avaliacao-t1, relatorio-base, gerador-report-card, materiais
- **Year 9:** hero-section, uso, padrao-gsp, deeper-learning, conduzir-deeper-learning, deeper-learning-pratica, rotina, projetos, projeto-conflict-peace-evidence-report, projeto-travel-tourism-eco-un-committee, projeto-poverty-inequality-action-portfolio, estrategias, rubrica, progressao, matriz, avaliacao-global, avaliacao-t1, relatorio-base, gerador-report-card, materiais

## Auditoria específica do Year 9
- ✅ Sem sobras textuais de Year 8 / Prepare 3 / GP8
- ✅ Links de report card existem localmente
- ✅ 10 meses presentes
- ✅ Cada mês tem 6 disciplinas
- ✅ 3 projetos trimestrais presentes
- ✅ Cada projeto tem 12 semanas
- ✅ 17 geradores Year 9 presentes

## Report cards Year 9 criados
- `report-card-ccpa-year9-term1.html`
- `report-card-ccpa-year9-term2.html`
- `report-card-ccpa-year9-term3.html`
- `report-card-ccpa-year9-term4.html`
- `report-card-cja-year9-term1.html`
- `report-card-cja-year9-term2.html`
- `report-card-cja-year9-term3.html`
- `report-card-marupiara-year9-term1.html`
- `report-card-marupiara-year9-term2.html`
- `report-card-marupiara-year9-term3.html`
- `report-card-objetivo-year9-term1.html`
- `report-card-objetivo-year9-term2.html`
- `report-card-objetivo-year9-term3.html`
- `report-card-objetivo-year9-term4.html`
- `report-card-santo-anjo-year9-term1.html`
- `report-card-santo-anjo-year9-term2.html`
- `report-card-santo-anjo-year9-term3.html`

## Fontes usadas para Year 9
- Google Drive FUND 2 — pasta pública informada pela Andressa.
- `Global Perspectives Year 9`: Teacher Resource zip, project documents e teacher notes, especialmente projetos 9.1 Conflict and peace, 9.2 Travel and tourism e 9.3 Poverty and inequality.
- `Prepare Year 9 / Prepare 4`: pacotes zipados de Grammar Units 01–20, Vocabulary Units 01–20, Literature, Review Games, Speaking e Writing Bank.
- Matrizes GSP baixadas para Year 9: Global Perspectives, PBL / History & Geography, Financial Literacy, Speaking Lab e STEAM.

## Validações executadas
- Parse HTML com BeautifulSoup para contagens e links.
- `node --check` nos scripts embutidos da página Year 9 e dos 17 report cards Year 9: sem erro de sintaxe.
- Chromium headless screenshot local da página `fundamental-2-year-9.html`: renderização sem problema óbvio.
- Chromium headless screenshot local de `report-card-ccpa-year9-term1.html`: formulário e preview renderizados; corrigida sobra de sugestão de filename Year8 → Year9.

## Observações
- Year 6 possui 19 arquivos de report card locais por histórico anterior; Years 7, 8 e 9 usam 17, no mesmo padrão atualmente ativo de Middle Years. A página Year 6, porém, referencia 17 links no gerador, mantendo paridade funcional com Years 7–9.
- Year 9 ficou um pouco menor em bytes que Years 7–8, mas mantém todos os blocos estruturais, 10 meses × 6 disciplinas, 3 projetos × 12 semanas e geradores completos. Não foi identificado gap estrutural.
