# Auditoria geral do Portal dos Professores Bilíngues · Level 1 ao Year 9 · 2026-08-29

## Status após correções
- Corrigidas as menções residuais a Julho em Year 7 e Year 8 após padronização do calendário sem Julho.
- Corrigida referência incorreta em Year 8: `Projects 7.1–7.3` → `Projects 8.1–8.3`.
- Padronizada a distribuição técnica do Year 9: agora bate com Years 6–8 em `strategy-card`, `practice-card`, `pbl-card`, H3 e meses.

## Verificações executadas
- Links locais internos das 12 páginas oficiais + index: 0 quebrados na auditoria anterior.
- 206 report cards: 0 erro de JavaScript e 0 asset/imagem local faltando na auditoria anterior.
- Após as correções: `node --check` nos scripts embutidos de Years 7, 8 e 9 sem erro de sintaxe.
- Screenshot local do Year 9 após padronização técnica renderizado com sucesso no Chromium headless.

## Métricas principais atualizadas
| Página | Seções | H2 | H3 | Meses | Report links | PBL projects | PBL cards | PBL weeks | Strategy cards | Practice cards |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Level 1 | 20 | 21 | 141 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Level 2 | 20 | 21 | 141 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Level 3 | 20 | 20 | 147 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Year 1 | 20 | 20 | 145 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Year 2 | 20 | 20 | 148 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Year 3 | 20 | 20 | 148 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Year 4 | 20 | 20 | 148 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Year 5 | 20 | 20 | 148 | 9 | 17 | 3 | 90 | 36 | 12 | 6 |
| Year 6 | 20 | 20 | 104 | 9 | 17 | 3 | 87 | 36 | 12 | 6 |
| Year 7 | 20 | 20 | 104 | 9 | 17 | 3 | 87 | 36 | 12 | 6 |
| Year 8 | 20 | 20 | 104 | 9 | 17 | 3 | 87 | 36 | 12 | 6 |
| Year 9 | 20 | 20 | 104 | 9 | 17 | 3 | 87 | 36 | 12 | 6 |

## Pontos ainda para decisão da Andressa
1. Year 6 tem 2 arquivos extras antigos de report card Objetivo Term 1 (`term1-emojis` e `term1-v2`) além dos 17 oficiais referenciados. Recomendo arquivar se forem rascunhos.
2. Existem 5 páginas `preview-...html` dentro de `pages/`. Elas não aparecem no portal, mas ficam publicamente acessíveis por URL. Recomendo mover para rascunhos se não forem mais necessárias.

## Status
Nenhum bloqueador técnico grave encontrado. As inconsistências editoriais/técnicas identificadas nos Years 7–9 foram corrigidas localmente e estão prontas para publicação.
