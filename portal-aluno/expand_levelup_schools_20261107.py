#!/usr/bin/env python3
"""Cria rotas Level Up por escola a partir do piloto de Praia Grande.

As cópias preservam as regras de correção e o contrato levelup_result_v1.
Somente a identificação institucional é substituída, deixando school_id e
school_name fixos no cabeçalho/formulário e, portanto, no envio à Brix.
"""
from pathlib import Path
import re


SITE = Path(__file__).resolve().parent
PILOT = SITE / 'praia-grande'
SCHOOLS = [
    ('praia-grande', 'praia_grande', 'Praia Grande', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('cja', 'cja', 'CJA', 'cja-logo.png', 'CJA'),
    ('embare', 'embare', 'Embaré', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('conselheiro', 'conselheiro', 'Conselheiro', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('ponta-da-praia', 'ponta_da_praia', 'Ponta da Praia', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('marupiara', 'marupiara', 'Marupiara', 'marupiara-logo.png', 'Marupiara'),
    ('ccpa', 'ccpa', 'CCPA', 'ccpa-logo.png', 'CCPA'),
    ('guaruja', 'guaruja', 'Guarujá', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('sao-jose-dos-campos', 'sao_jose_dos_campos', 'São José dos Campos', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('sao-vicente', 'sao_vicente', 'São Vicente', 'objetivo-logo-public-ref.png', 'Objetivo'),
    ('santa-felicidade', 'santa_felicidade', 'Santa Felicidade', 'santo-anjo-logo.png', 'Colégio Santo Anjo'),
    ('barigui', 'barigui', 'Barigui', 'santo-anjo-logo.png', 'Colégio Santo Anjo'),
    ('ecoville', 'ecoville', 'Ecoville', 'santo-anjo-logo.png', 'Colégio Santo Anjo'),
    ('anjinho', 'anjinho', 'Anjinho', 'santo-anjo-logo.png', 'Colégio Santo Anjo'),
    ('champagnat', 'champagnat', 'Champagnat', 'santo-anjo-logo.png', 'Colégio Santo Anjo'),
]


def branded_html(html: str, logo_file: str, logo_name: str) -> str:
    """Mantém o mesmo cabeçalho e troca apenas a marca institucional."""
    logo = f'<img src="../../portal-professores-bilingues/assets/logos/{logo_file}" alt="Logo {logo_name}">'
    html = re.sub(r'<img src="(?:\.\./assets/logos/objetivo-logo\.png|\.\./\.\./portal-professores-bilingues/assets/logos/[^\"]+)" alt="Logo [^\"]+">', logo, html)
    return re.sub(r'<div class="school-brand" aria-label="GSP Área Bilíngue"><strong>GSP</strong><span>Área Bilíngue</span></div>', logo, html)


def school_html(source: str, school_id: str, school_name: str, logo_file: str, logo_name: str) -> str:
    out = branded_html(source, logo_file, logo_name)
    out = out.replace('Praia Grande', school_name)
    out = out.replace('praia_grande', school_id)
    out = out.replace('Piloto Level Up', 'Level Up')
    return out


def school_card(slug: str, name: str, active: bool) -> str:
    badge = 'Piloto ativo' if slug == 'praia-grande' else 'Avaliação disponível'
    description = 'Piloto Level Up com provas digitais por série.' if slug == 'praia-grande' else 'Provas digitais de nivelamento por série.'
    return f'''          <article class="schoolCard levelup-ready">
            <div>
              <span class="badge">{badge}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <a class="btn school-action" href="{slug}/">Entrar na escola</a>
          </article>'''


def update_home() -> None:
    home = SITE / 'index.html'
    html = home.read_text(encoding='utf-8')
    cards = '\n'.join(school_card(slug, name, True) for slug, _, name, _, _ in SCHOOLS)
    html = re.sub(
        r'(?s)(<div class="schoolGrid levelup-school-grid">).*?(</div>\s*</div>\s*</section>\s*\n\s*<section class="section" id="como-funciona">)',
        lambda m: m.group(1) + '\n' + cards + '\n        ' + m.group(2),
        html,
        count=1,
    )
    html = html.replace('O piloto começa por Praia Grande. Cada escola terá sua própria página para manter os dados organizados e facilitar o acompanhamento pelo dashboard.', 'Cada escola possui sua própria página, com identificação fixa para organizar os resultados no dashboard.')
    home.write_text(html, encoding='utf-8')


def update_roster_config() -> None:
    config = SITE / 'assets' / 'levelup-roster-config.js'
    html = config.read_text(encoding='utf-8')
    school_blocks = []
    for _, code, name, _, _ in SCHOOLS:
        class_groups = ', '.join(f"'{grade}': ['TESTE-{grade[0]}A']" for grade in ('3o_ano', '4o_ano', '5o_ano', '6o_ano', '7o_ano', '8o_ano', '9o_ano'))
        teachers = ', '.join(f"'{grade}': ['Professor(a) Teste']" for grade in ('3o_ano', '4o_ano', '5o_ano', '6o_ano', '7o_ano', '8o_ano', '9o_ano'))
        school_blocks.append(f'''    {code}: {{
      schoolName: '{name}',
      classGroups: {{{class_groups}}},
      teachers: {{{teachers}}}
    }}''')
    html = re.sub(r'(?s)(schools:\s*\{).*?(\n  \}\n\};)', lambda m: m.group(1) + '\n' + ',\n'.join(school_blocks) + m.group(2), html, count=1)
    html = re.sub(r"version: '[^']+'", "version: '2026-11-07-all-gsp-test-rosters-v1'", html)
    config.write_text(html, encoding='utf-8')


def main() -> None:
    templates = {name: (PILOT / name).read_text(encoding='utf-8') for name in ('index.html', 'levelup-f1.html', 'levelup-f2.html')}
    for slug, code, name, logo_file, logo_name in SCHOOLS:
        if slug == 'praia-grande':
            continue
        target = SITE / slug
        target.mkdir(exist_ok=True)
        for filename, source in templates.items():
            (target / filename).write_text(school_html(source, code, name, logo_file, logo_name), encoding='utf-8')
    update_home()
    update_roster_config()
    print(f'Prepared {len(SCHOOLS)} school routes; {len(SCHOOLS) - 1} copied from the pilot.')


if __name__ == '__main__':
    main()
