# Status da entrega individual — Atividade 6

**Projeto:** Trimix Sorveteria — Grupo 07 / UNICID  
**Repositório individual:** `Caiquesanches07/portifolio_caique_banco_de_dados`  
**Auditoria:** 10/11/2026

## Checklist da estrutura obrigatória

- [x] `index.html`
- [x] `style.css`
- [x] `script.js`
- [ ] `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf` — ausente no repositório pessoal auditado.
- [ ] `assets/der.png` ou `assets/der.jpg` — pasta/arquivo ausente no repositório pessoal auditado.

O HTML já referencia esses dois caminhos. Sem os arquivos, a prévia/modal do DER e o link de download dos requisitos não podem ser considerados funcionais.

## O que já está presente

- Aplicação web com catálogo, busca dinâmica e filtros por domínio.
- Alternância de tema claro/escuro.
- Código do modal do DER com integração Panzoom.js e controles alternativos de zoom.
- Seções de Data Literacy, governança, LGPD/GDPR e RBAC.
- DDL original e diagnóstico estático de coerência.
- Registro das orientações recebidas do professor em `docs/ATIVIDADE_06_DICIONARIO_DE_DADOS.md`.

## Inventário conferido nos artefatos recebidos

- 19 tabelas.
- 113 colunas.
- 29 chaves estrangeiras.
- 30 triggers e 6 procedures.
- Nenhuma cláusula `CHECK` encontrada no DDL recebido.
- O arquivo compactado do MySQL Workbench contém o modelo `trimix_sorveteria` com 19 tabelas, 113 colunas e 29 FKs.

## Pendências do grupo

1. Anexar e preencher o DOC6 oficial do professor. O arquivo `ADICIONAR_DOC6.txt` é apenas um aviso e não o substitui.
2. Confirmar formalmente os Data Owners e Data Stewards.
3. Validar os achados de `docs/diagnostico_coerencia.md` e aplicar as correções aprovadas nos artefatos originais.
4. Atualizar o Histórico de Revisões da Especificação para, no mínimo, quatro revisões.
5. Exportar a Especificação revisada para PDF e adicionar em `docs/` com o nome exigido.
6. Atualizar o DER e exportar em PNG/JPG; adicionar em `assets/` com o nome exigido.
7. Testar a aplicação e os links com os dois arquivos presentes.
8. Ativar o GitHub Pages em Settings > Pages > Deploy from a branch > main > /(root), e testar a URL pública.

## Achados importantes para validação

- Collation do DDL (`utf8mb4_unicode_ci`) diverge da especificação (`utf8mb4_0900_ai_ci`).
- A FK circular entre `loja` e `funcionario` deve ser tratada com a ordem de criação definida na revisão.
- Não há cláusulas `CHECK` no DDL, embora os requisitos prevejam validações desse tipo.
- Campos de auditoria estão como `LONGTEXT`, embora a especificação descreva JSON.
- O timestamp `data_hora_utc` usa `CURRENT_TIMESTAMP()`, embora a especificação peça geração UTC.
- A matriz RBAC está documentada, mas o DDL não contém `CREATE ROLE`, `GRANT` ou `REVOKE`.
- A execução integral do SQL em MySQL 8.0 e os testes de concorrência/integridade ainda não foram comprovados.

**Cuidado:** o DDL contém `DROP SCHEMA IF EXISTS trimix_sorveteria`. Não execute em uma instância que contenha dados que devam ser preservados.

## Conclusão

A base web e a documentação de análise estão incorporadas, mas a entrega ainda não atende integralmente à estrutura obrigatória do professor. Os dois bloqueios materiais mais visíveis são o PDF revisado e o DER PNG/JPG; também faltam a formalização dos papéis de governança, o DOC6 oficial preenchido e a confirmação do deploy individual.
