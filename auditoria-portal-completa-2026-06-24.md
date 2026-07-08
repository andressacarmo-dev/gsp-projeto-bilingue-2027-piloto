# Auditoria completa do Portal Projeto Bilíngue 2027 — 2026-06-24

## Motivo
Andressa identificou erro 404 nas unidades Santo Anjo após restauração das unidades no portal.

## Diagnóstico
- O `data.json` público já estava com 14 escolas.
- O erro do print era causado por páginas navegáveis ausentes para Santo Anjo:
  - `santa-felicidade-manual.html` / `santa-felicidade-grades.html`
  - `barigui-manual.html` / `barigui-grades.html`
  - `ecoville-manual.html` / `ecoville-grades.html`
  - `anjinho-manual.html` / `anjinho-grades.html`
  - `champagnat-manual.html` / `champagnat-grades.html`
- O portal tentava carregar essas páginas em iframe, por isso aparecia 404.

## Correção executada
- Gerei as 10 páginas navegáveis faltantes das unidades Santo Anjo.
- Atualizei o cache/versionamento do portal para `20260624-santo-anjo-pages-audit`.
- Publiquei no GitHub Pages:
  - `index.html`
  - `data.json`
  - as 10 páginas navegáveis Santo Anjo
  - relatório público de auditoria técnica

## Resultado da auditoria pública
Todas as 14 escolas aparecem no `data.json` público e têm:
- card ativo no portal;
- materiais completos;
- manual;
- Q&A;
- pelo menos uma grade horária;
- pasta Drive;
- páginas navegáveis de manual e grades sem 404.

## Escolas validadas
1. Praia Grande
2. CJA
3. Embaré
4. Ponta da Praia
5. Marupiara
6. CCPA
7. Guarujá
8. São José dos Campos
9. São Vicente
10. Santa Felicidade
11. Barigui
12. Ecoville
13. Anjinho
14. Champagnat

## Validações específicas Santo Anjo
Cada página publicada abriu com título correto da unidade:
- Santa Felicidade — manual e grades OK
- Barigui — manual e grades OK
- Ecoville — manual e grades OK
- Anjinho — manual e grades OK
- Champagnat — manual e grades OK

## Auditoria de links oficiais
- Todos os links de materiais oficiais responderam sem 404/410/5xx.
- Links de arquivos no Google Drive retornaram autenticação/controle de acesso esperado, mas não arquivo inexistente.
- Pastas Drive responderam e redirecionaram para login/acesso conforme esperado.

## Observação preventiva
O script antigo `tmp/update_portal_all_schools.py` gerava o portal com apenas 9 escolas. Ele não deve ser usado novamente sem incorporar Santo Anjo, pois pode sobrescrever o `data.json` e remover as 5 unidades.
