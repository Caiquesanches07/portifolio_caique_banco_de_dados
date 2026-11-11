# Status da entrega individual — Atividade 6

**Projeto:** Trimix Sorveteria — Grupo 07 / UNICID  
**Repositório individual:** `Caiquesanches07/portifolio_caique_banco_de_dados`  
**Revisão documental:** 11/11/2026

## Estrutura

- [x] `index.html`
- [x] `style.css`
- [x] `script.js`
- [x] `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf` — versão de trabalho v1.3, com RF01–RF14, RNF01–RNF09, 14 regras consolidadas e histórico de quatro revisões.
- [x] `assets/der.png` — captura do DER/EER recebido do MySQL Workbench, com 19 entidades visíveis.
- [x] `assets/avatar_github.jpg` — retrato tecnológico da última conversa, incluído no README e no site do projeto.
- [x] `docs/EER_Diagram_trimix.mwb.zip` — modelo editável Workbench.
- [x] `docs/DDL_Original_Trimix.sql` — original preservado.
- [x] `docs/DIAGNOSTICO_COHERENCIA_DOC6.md` e `docs/PLANO_CORRECOES_DDL.md`.

## Funcionalidades web presentes

- Catálogo com 19 tabelas, 113 colunas e 29 FKs.
- Busca em tempo real e filtros por domínio.
- Tema claro/escuro.
- Modal do DER com Panzoom.js e controles alternativos.
- Data Literacy, governança, LGPD/GDPR e RBAC.
- Layout responsivo.

## Pendências que dependem do grupo ou de validação externa

1. Comparar e aprovar o PDF de trabalho com a Especificação original editável; o arquivo-fonte não foi localizado na cópia consultada.
2. Confirmar RB11–RB14, formalizadas a partir das validações encontradas no DDL.
3. Definir formalmente Data Owner e Data Steward.
4. Adicionar o template integral DOC6 do professor, se o grupo o possuir.
5. Aplicar as correções aprovadas em cópia de teste, executar no MySQL 8.0+ e registrar evidências. O DDL original permanece intacto.
6. Reexportar o DER pelo Workbench após as correções aprovadas; `assets/der.png` é a captura do modelo recebido.
7. Ativar/verificar GitHub Pages em Settings → Pages → Deploy from a branch → `main` → `/(root)` e testar a URL pública.

## Segurança

O DDL original contém `DROP SCHEMA IF EXISTS trimix_sorveteria`. Não execute em instância com dados a preservar. Faça backup e teste em schema descartável. A revisão SQL foi estática: não declara integridade, concorrência, RBAC ou funcionamento em produção como testados.

## Links

- Repositório: https://github.com/Caiquesanches07/portifolio_caique_banco_de_dados
- URL esperada do Pages (depende de ativação/deploy): https://Caiquesanches07.github.io/portifolio_caique_banco_de_dados/
