# Auditoria comparativa Fundamental 2 · Years 6–9 · 2026-08-29
## Atualização de padrão
Após orientação da Andressa, o padrão oficial do Fundamental 2 passou a seguir o calendário do Year 6: sem card de Julho. Years 7, 8 e 9 foram ajustados para manter a mesma sequência mensal: Fevereiro, Março, Abril, Maio, Junho, Agosto, Setembro, Outubro e Novembro.

## Resultado executivo
- Years 6, 7, 8 e 9 mantêm a mesma arquitetura macro: hero, navegação mensal, 20 seções, 3 projetos trimestrais, matriz mensal, avaliação global, base de relatório, gerador de report card e materiais.
- Os quatro anos agora têm 9 cards mensais e 9 âncoras mensais, sem Julho.
- Year 9 mantém conteúdo próprio: Prepare 4 e Global Perspectives 9, com ênfase em pesquisa independente, avaliação de fontes/argumentos, conflito e paz, turismo/ecoturismo, pobreza/desigualdade, reflexão ética e comunicação acadêmica.
- Não foram encontrados links quebrados internos para report cards do Year 9.

## Paridade estrutural
| Year | Tamanho HTML | Seções | H2 | H3 | Meses | Cards de disciplina | Projetos | PBL cards | Semanas de projeto | Links report card | Arquivos report card |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Year 6 | 149,443 | 20 | 20 | 104 | 9 | 54 | 3 | 87 | 36 | 17 | 19 |
| Year 7 | 151,367 | 20 | 20 | 104 | 9 | 54 | 3 | 87 | 36 | 17 | 17 |
| Year 8 | 152,007 | 20 | 20 | 104 | 9 | 54 | 3 | 87 | 36 | 17 | 17 |
| Year 9 | 123,530 | 20 | 20 | 104 | 9 | 54 | 3 | 87 | 36 | 17 | 17 |

## Calendário mensal padronizado
- **Year 6:** Fevereiro, Março, Abril, Maio, Junho, Agosto, Setembro, Outubro, Novembro
- **Year 7:** Fevereiro, Março, Abril, Maio, Junho, Agosto, Setembro, Outubro, Novembro
- **Year 8:** Fevereiro, Março, Abril, Maio, Junho, Agosto, Setembro, Outubro, Novembro
- **Year 9:** Fevereiro, Março, Abril, Maio, Junho, Agosto, Setembro, Outubro, Novembro

## Auditoria específica do Year 9
- ✅ Sem card/âncora de Julho
- ✅ Sem sobras textuais de Year 8 / Prepare 3 / GP8
- ✅ Links de report card existem localmente
- ✅ 9 meses presentes
- ✅ Cada mês tem 6 disciplinas
- ✅ 3 projetos trimestrais presentes
- ✅ Cada projeto tem 12 semanas
- ✅ 17 geradores Year 9 presentes

## Validações executadas
- Parse HTML com BeautifulSoup para contagens, meses e links.
- `node --check` nos scripts embutidos dos Years 7, 8 e 9 após remoção de Julho: sem erro de sintaxe.
- Chromium headless screenshot local da página Year 9 sem Julho: renderização concluída.
