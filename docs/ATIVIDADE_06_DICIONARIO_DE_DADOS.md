# Atividade 6 — Revisão, Governança e Dicionário de Dados

**Projeto:** Sistema de Gestão Operacional e Vendas — Trimix Sorveteria  
**Banco:** `trimix_sorveteria`  
**Equipe:** Grupo 07 — UNICID  
**Registro:** síntese das orientações da atividade fornecidas pelo professor.

> Este arquivo registra os requisitos da Atividade 6 para organização do portfólio. Ele não substitui o arquivo oficial `DOC6 - Gerador do Dicionário de Dados`, que deve ser anexado e preenchido pelo grupo quando estiver disponível.

## 1. Objetivo

Revisar e governar o projeto de Banco de Dados usando o prompt estruturado DOC6. A IA deverá cruzar os documentos do grupo, apontar divergências e apoiar a geração de uma documentação web interativa em HTML, CSS e JavaScript, alinhada a conceitos do DAMA-DMBOK e do COBIT.

A documentação deve apresentar os metadados do banco e explicar Data Literacy: a capacidade de compreender, interpretar, avaliar e comunicar dados de forma responsável.

## 2. Documentos-base obrigatórios

O grupo deve reunir e enviar à IA os três artefatos:

1. Especificação de Requisitos e Regras de Negócio.
2. Diagrama Entidade-Relacionamento (DER).
3. Script SQL de criação do banco (DDL).

Na seção de entrada e customização do DOC6, preencher: nome do projeto, integrantes, papéis de Data Owners e Data Stewards, cores, resumo do projeto e nomes dos arquivos anexados.

Os papéis de Data Owner e Data Steward devem ser confirmados pelo grupo; não devem ser atribuídos por suposição.

## 3. Execução esperada do DOC6

### Parte 1 — Metadados e Data Literacy

Apresentar os metadados do projeto e um texto explicativo sobre alfabetização em dados.

### Parte 2 — Análise de coerência

Cruzar Requisitos, DER e DDL para identificar, entre outros pontos:

- Divergências de cardinalidade e relacionamentos.
- Diferenças entre atributos e tipos de dados.
- Chaves estrangeiras ausentes ou órfãs.
- Restrições, nulabilidade e regras de negócio não refletidas de forma coerente nos artefatos.

Os apontamentos da IA devem ser analisados pelo grupo. A IA não substitui a validação dos responsáveis pelo projeto.

### Parte 3 — Geração da documentação web

Gerar os três arquivos completos:

- `index.html`
- `style.css`
- `script.js`

A aplicação deve contemplar 100% das tabelas do DDL, sem placeholders para substituir o catálogo real; busca dinâmica em tempo real; alternância de tema claro/escuro; modal do DER com zoom e movimentação usando Panzoom.js; e informações de governança LGPD/GDPR e RBAC.

As classificações LGPD/GDPR e RBAC devem ser apresentadas com precisão: documentação e recomendações não comprovam que controles técnicos estejam implantados.

## 4. Correções documentais obrigatórias

Antes de finalizar, o grupo deve aplicar as correções aprovadas nos documentos originais:

- Revisar a Especificação de Requisitos e Regras de Negócio.
- Atualizar o Histórico de Revisões, com no mínimo quatro revisões.
- Exportar a especificação revisada em PDF.
- Atualizar o DER e exportá-lo em PNG ou JPG.

A revisão deve manter rastreabilidade entre o que foi apontado, o que foi corrigido e a versão final dos documentos.

## 5. Entrega individual e estrutura obrigatória

Embora o artefato seja desenvolvido em grupo, cada aluno deve publicar uma cópia no próprio perfil pessoal do GitHub.

A estrutura de entrega deve ser exatamente:

```text
meu-dicionario/
├── index.html
├── style.css
├── script.js
├── docs/
│   └── Especificacao_Requisitos_Regras_Negocio_BD.pdf
└── assets/
    └── der.png
```

O nome e a capitalização das pastas e dos arquivos devem corresponder exatamente ao que estiver referenciado no HTML. Em hospedagem Linux, `DER.png` e `der.png` são nomes diferentes.

Arquivos auxiliares, como DDL e diagnósticos, podem ser mantidos em `docs/`, mas não substituem os dois artefatos obrigatórios acima.

## 6. Publicação no GitHub Pages

1. Criar ou utilizar um repositório público na conta pessoal do aluno.
2. Enviar os arquivos e pastas mantendo a estrutura exigida.
3. Abrir **Settings → Pages**.
4. Em **Build and deployment**, selecionar **Deploy from a branch**.
5. Selecionar a branch `main` (ou `master`) e a pasta `/(root)`; salvar.
6. Aguardar o deploy e testar a URL pública.

A entrega individual na plataforma deve conter:
- URL do GitHub Pages.
- URL do repositório GitHub.

## 7. Critérios de avaliação

- **Fidelidade ao DDL:** 100% das tabelas e colunas, sem omissões ou placeholders.
- **Governança:** identificação adequada de LGPD, constraints, regras de negócio e orientações RBAC nas colunas.
- **Front-end:** busca dinâmica por tabelas/colunas, tema claro/escuro e visualizador do DER com zoom/pan.
- **Revisão documental:** link de download funcional para a Especificação de Requisitos revisada em PDF.
- **Deploy individual:** publicação acessível e funcional no GitHub Pages do próprio aluno.

## 8. Estado dos arquivos neste portfólio

Na revisão de 11/11/2026, a cópia individual contém a aplicação web, o DDL original, a captura do DER, o pacote editável do MySQL Workbench, o PDF de requisitos em versão de trabalho e o retrato de perfil solicitado pelo autor.

Estrutura incorporada:

- `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf`: consolidação de trabalho com RF01–RF14, RNF01–RNF09, 14 regras e histórico de quatro revisões. O arquivo editável original não foi localizado na cópia consultada; o Grupo 07 precisa comparar e aprovar o PDF antes de considerá-lo oficial.
- `assets/der.png`: captura do DER/EER no Workbench recebida no contexto do projeto, com 19 entidades visíveis. Ela não representa uma reexportação posterior a correções do modelo.
- `docs/EER_Diagram_trimix.mwb.zip`: pacote do modelo editável para conferência e atualização no MySQL Workbench.
- `assets/avatar_github.jpg`: retrato tecnológico da conversa de ajuste do avatar, incluído no repositório e no README.
- `docs/DIAGNOSTICO_COHERENCIA_DOC6.md` e `docs/PLANO_CORRECOES_DDL.md`: diagnóstico estático e plano de correções, sem alegação de execução/teste em MySQL.

O template integral DOC6 do professor não foi localizado na cópia consultada; este guia da atividade registra os critérios informados e não substitui o prompt oficial. Os papéis de Data Owner e Data Steward também precisam de confirmação formal do grupo.

A configuração de GitHub Pages deve ser verificada em Settings → Pages, com branch `main` e pasta `/(root)`. A URL só deve ser considerada publicada depois de abrir e testar a página e os links de PDF/DER.
