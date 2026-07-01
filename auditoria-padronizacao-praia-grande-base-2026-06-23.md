# Auditoria de padronização — Praia Grande como modelo-base

Data: 2026-06-23
Portal público: https://andressacarmo-dev.github.io/gsp-projeto-bilingue-2027-piloto/
Commit final validado: b6b46c9
Versão dos iframes: 20260623-auditoria-padronizacao

## Objetivo
Verificar se todas as escolas seguem exatamente o padrão aprovado em Praia Grande.

## Escolas auditadas
- Praia Grande
- CJA
- Embaré
- Ponta da Praia
- Marupiara
- CCPA
- Guarujá
- São José dos Campos
- São Vicente

## Critérios verificados
- Classe visual do padrão Praia Grande ativa em todas (`portal.praiaPilot`).
- Ordem dos blocos: Modo Atendimento → Escolha por onde começar → Manual Comercial Pedagógico → Grades horárias.
- Cards principais com mesmo gradiente, raio de 32px e texto branco.
- Títulos e textos dos cards principais iguais aos de Praia Grande.
- Quatro cards do bloco “Escolha por onde começar” iguais em todas as escolas.
- Manual com navegação padronizada:
  - Resumo prático
  - Fundamentos da proposta
  - Produtos da escola
  - Educação Infantil
  - Fundamental 1
  - Fundamental 2
  - Objeções e venda consultiva
- Ausência de “Comece aqui”.
- Cabeçalhos internos dos iframes (`top` e `hero`) invisíveis em manual e grades.
- Grades sem cabeçalho textual por miniatura (`gradeInfo` oculto).
- Altura do iframe ajustada com margem extra de 24px.
- Iframes carregando a versão `20260623-auditoria-padronizacao`.

## Contagem de miniaturas das grades
- Praia Grande: 39/39
- CJA: 54/54
- Embaré: 21/21
- Ponta da Praia: 21/21
- Marupiara: 21/21
- CCPA: 10/10
- Guarujá: 21/21
- São José dos Campos: 18/18
- São Vicente: 38/38

## Correção feita durante auditoria
Foi encontrada uma diferença no CJA: o botão do manual aparecia como “Produtos do CJA”, diferente do modelo Praia Grande (“Produtos da escola”). Corrigido e publicado no commit `76aa0db`.

Em seguida, foi feito bump de versão dos iframes no commit `b6b46c9` para evitar cache antigo no GitHub Pages.

## Resultado final
A auditoria final no portal público real não encontrou divergências entre as escolas em relação ao padrão de Praia Grande.

Status: APROVADO — todas as escolas padronizadas contra Praia Grande.
