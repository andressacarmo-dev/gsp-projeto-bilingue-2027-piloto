# Auditoria — Grades horárias com miniaturas no portal

Data: 2026-06-23
Commit publicado: `b84cf5f`
Versão interna de cache: `20260623-clean-grades`

## Pedido de Andressa
- Verificar se todas as escolas estão no formato visual definido a partir do CJA.
- Garantir miniaturas das grades, não apenas links/texto.
- Despoluir títulos e textos das seções de grades.

## Correções realizadas
- Ajustado o `iframe` das grades para recalcular altura após carregamento e após carregamento das imagens.
- Títulos das páginas de grade simplificados para `Grades horárias`.
- Texto do hero reduzido para: `Consulte as miniaturas por segmento. Clique em uma imagem para ampliar.`
- Texto do bloco no portal reduzido para: `Miniaturas das grades por segmento.`
- Nota do bloco reduzida para: `Clique nas miniaturas para ampliar.`

## Auditoria direta das páginas públicas

| Escola | Miniaturas esperadas | Miniaturas encontradas | Status |
|---|---:|---:|---|
| Praia Grande | 39 | 39 | OK |
| CJA | 54 | 54 | OK |
| Embaré | 21 | 21 | OK |
| Ponta da Praia | 21 | 21 | OK |
| Marupiara | 21 | 21 | OK |
| CCPA | 10 | 10 | OK |
| Guarujá | 21 | 21 | OK |
| São José dos Campos | 18 | 18 | OK |
| São Vicente | 38 | 38 | OK |

Critérios diretos verificados:
- `h1` limpo como `Grades horárias`.
- Presença de `gradeImageLink` com imagens.
- Primeira imagem pública de cada escola retornou JPG válido.
- Removidas frases carregadas como “visualização em miniatura igual ao CJA”.

## Auditoria dentro do portal

Casos validados com navegador no portal público:

| Escola | Cards | Imagens | Título | Altura do iframe | Status |
|---|---:|---:|---|---|---|
| Praia Grande | 39 | 39 | Grades horárias | frameHeight = scrollHeight | OK |
| CCPA | 10 | 10 | Grades horárias | frameHeight = scrollHeight | OK |
| São Vicente | 38 | 38 | Grades horárias | frameHeight = scrollHeight | OK |
| CJA | 54 | 54 | Grades horárias | frameHeight = scrollHeight | OK |

Conclusão: o portal está no formato solicitado, com miniaturas e visual mais limpo. Se alguma pessoa ainda vir versão antiga, orientar abrir com parâmetro de cache: `?v=b84cf5f`.
