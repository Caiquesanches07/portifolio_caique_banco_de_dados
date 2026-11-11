# Dicionário de Dados — Trimix Sorveteria

Projeto acadêmico do **Grupo 07** da Universidade Cidade de São Paulo (UNICID), desenvolvido na disciplina de Modelagem de Banco de Dados. Este repositório é a cópia individual de portfólio de **Caique Sanches** (`@Caiquesanches07`), integrante do grupo.

**Projeto:** Sistema de Gestão Operacional e Vendas — Trimix Sorveteria  
**Banco de dados:** `trimix_sorveteria`  
**Tecnologia de referência:** MySQL 8.0 / InnoDB  
**Atividade:** Atividade 6 — Revisão, Governança e Dicionário de Dados

> **Status da entrega:** em desenvolvimento. A aplicação web e o inventário do DDL estão no repositório, mas o PDF revisado, o DER em PNG/JPG e a publicação funcional no GitHub Pages ainda precisam ser confirmados/adicionados.

## Objetivo

Disponibilizar uma documentação web consultável do modelo relacional da Trimix Sorveteria, favorecendo a compreensão dos metadados, a rastreabilidade entre requisitos e estruturas do banco e a discussão de governança de dados com base em conceitos de **DAMA-DMBOK** e **COBIT**.

A alfabetização em dados (*Data Literacy*) ajuda a equipe a compreender o significado, a origem, as relações e as restrições das informações, contribuindo para seu uso consistente e responsável.

## Conteúdo e funcionalidades

O inventário estático do DDL registra:

- **19 tabelas** e **113 colunas**.
- **29 chaves estrangeiras**.
- **30 triggers** e **6 procedures** (36 rotinas no total).
- Tipos físicos do MySQL, nulabilidade, valores padrão, chaves, índices e relacionamentos.

A aplicação web já contém:

- Busca em tempo real por tabelas, colunas, tipos SQL e descrições.
- Filtros por domínio e detalhamento de PK, FK e UK.
- Alternância entre os temas claro e escuro.
- Modal de visualização do DER com Panzoom.js e controles de zoom.
- Seções de Data Literacy, governança, LGPD, GDPR e RBAC.
- Layout responsivo.

**Atenção aos arquivos externos:** o HTML referencia `assets/der.png` e o PDF de requisitos em `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf`, mas esses dois arquivos ainda não constam na cópia individual auditada. Portanto, a prévia do DER e o download do PDF só ficarão funcionais depois que os arquivos forem adicionados nos caminhos exatos.

> **Nota de governança:** as classificações LGPD/GDPR e as orientações RBAC exibidas no site são informações documentais. Elas não comprovam, por si só, que controles técnicos de acesso estejam implantados no banco. A menção ao GDPR é comparativa e sua aplicabilidade depende do contexto do tratamento de dados.

## Estrutura atual do repositório

```text
portifolio_caique_banco_de_dados/
├── index.html
├── style.css
├── script.js
├── README.md
└── docs/
    ├── ADICIONAR_DOC6.txt
    ├── ATIVIDADE_06_DICIONARIO_DE_DADOS.md
    ├── DDL_Original_Trimix.sql
    ├── DIAGNOSTICO_COHERENCIA.md
    ├── STATUS_ENTREGA.md
    └── diagnostico_coerencia.md
```

## Estrutura obrigatória para concluir a entrega

Antes de entregar, o repositório também deverá conter:

```text
docs/
└── Especificacao_Requisitos_Regras_Negocio_BD.pdf

assets/
└── der.png
```

Respeite exatamente letras maiúsculas/minúsculas nos nomes dos arquivos e nas referências do HTML.

## Documentação e rastreabilidade

- **Orientações da Atividade 6:** `docs/ATIVIDADE_06_DICIONARIO_DE_DADOS.md`
- **DDL original de referência:** `docs/DDL_Original_Trimix.sql`
- **Diagnóstico da revisão cruzada:** `docs/diagnostico_coerencia.md`
- **Status da entrega:** `docs/STATUS_ENTREGA.md`
- **Pendência do DOC6 oficial:** `docs/ADICIONAR_DOC6.txt`

O arquivo de modelo do MySQL Workbench enviado pelo grupo foi analisado separadamente. Ele contém o modelo `trimix_sorveteria` com 19 tabelas, 113 colunas e 29 relacionamentos por chave estrangeira. O arquivo compactado `.mwb` não substitui a exportação final em PNG/JPG exigida na atividade.

## Equipe

**Grupo 07 — UNICID**

- Marcos Vinicius da Silveira
- Samuel Victor Ferreira
- Lohany Shimabukuro
- Gustavo Cardoso Silva
- **Caique Sanches** — Analista de Requisitos, com atuação em RNF e métricas de verificação
- Guilherme David Viana de Oliveira
- Felipe Domingos de Lacerda
- Guilherme Nere Ferreira do Nascimento
- Renato Alexandre Silva de Almeida
- Alexsander Rosa Ribeiro
- Gustavo Henrique Lima dos Santos

Os papéis específicos de **Data Owner** e **Data Steward** ainda dependem de definição ou confirmação pelo grupo. As funções acadêmicas acima não devem ser confundidas com esses papéis de governança.

## Verificação de coerência e pontos de atenção

A análise estática identificou pontos que precisam ser tratados e validados pelo grupo:

1. O DDL recebido usa `utf8mb4_unicode_ci`, enquanto a especificação registra `utf8mb4_0900_ai_ci`.
2. Há uma dependência circular entre `loja` e `funcionario`; a FK de responsável da loja deve ser criada após as duas tabelas existirem, conforme a estratégia definida pelo grupo.
3. A especificação prevê restrições `CHECK`, mas nenhuma cláusula `CHECK` foi encontrada no DDL recebido.
4. `log_auditoria.dados_anteriores` e `dados_novos` estão como `LONGTEXT`, enquanto a especificação descreve JSON.
5. `log_acesso.data_hora_utc` usa `CURRENT_TIMESTAMP()`, divergindo da orientação de geração explícita em UTC.
6. A matriz RBAC aparece documentada, mas não foram encontrados comandos `CREATE ROLE`, `GRANT` ou `REVOKE` no DDL.
7. Baixa/estorno de estoque, validação dos pagamentos e concorrência precisam de testes e validação do grupo.

A análise é estática: a execução integral do DDL em MySQL 8.0 e os testes de integridade, concorrência e permissões não foram comprovados nesta entrega. O DDL original foi preservado para rastreabilidade; não execute o script em um banco com dados que precisem ser mantidos, pois ele contém `DROP SCHEMA IF EXISTS trimix_sorveteria`.

## Checklist para concluir a Atividade 6

- [x] Aplicação web com `index.html`, `style.css` e `script.js`.
- [x] Inventário do DDL: 19 tabelas, 113 colunas e 29 FKs.
- [x] Registro das orientações do professor para a Atividade 6.
- [x] Diagnóstico estático de coerência.
- [ ] Anexar o DOC6 original preenchido com os dados do grupo.
- [ ] Definir Data Owners e Data Stewards.
- [ ] Aplicar e validar as correções aprovadas nos documentos originais.
- [ ] Atualizar o histórico de revisões da especificação para, no mínimo, quatro revisões.
- [ ] Exportar e adicionar o PDF final em `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf`.
- [ ] Atualizar/exportar o DER em PNG/JPG e adicionar em `assets/der.png`.
- [ ] Testar o dicionário, a busca, o tema, o modal e o download dos documentos.
- [ ] Ativar e validar o GitHub Pages individual.

## Publicação individual

O repositório é público e usa a branch `main`. Para concluir o deploy, abra **Settings → Pages**, selecione **Deploy from a branch**, escolha `main` e `/(root)`, e salve.

**Repositório:** https://github.com/Caiquesanches07/portifolio_caique_banco_de_dados  
**URL esperada do GitHub Pages após ativação:** https://Caiquesanches07.github.io/portifolio_caique_banco_de_dados/

A URL acima é a rota esperada pelo nome do repositório; ela não deve ser considerada publicada até o GitHub Pages concluir o deploy e o acesso ser testado.
