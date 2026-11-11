# Diagnóstico de coerência DOC6 — Trimix Sorveteria

**Projeto:** Sistema de Gestão Operacional e Vendas — Trimix Sorveteria  
**Equipe:** Grupo 07 — UNICID  
**Banco:** `trimix_sorveteria` · **Referência:** MySQL 8.0 / InnoDB  
**Data:** 11/11/2026

## Artefatos consultados

- `docs/DDL_Original_Trimix.sql`: DDL original, preservado sem alterações.
- `docs/ATIVIDADE_06_DICIONARIO_DE_DADOS.md`: critérios da Atividade 6 registrados no repositório.
- `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf`: consolidação de trabalho; não substitui a especificação editável original.
- `assets/der.png`: captura do DER/EER no MySQL Workbench recebida do grupo.
- `docs/EER_Diagram_trimix.mwb.zip`: pacote do modelo editável.
- `index.html`, `style.css`, `script.js`: aplicação web do dicionário.

Análise estática: o DDL não foi executado em servidor MySQL; não houve carga de dados, testes concorrentes, teste de permissões ou validação de deploy. Os itens abaixo são achados para correção/validação, não erros comprovados em produção.

## Inventário confirmado

| Elemento | Quantidade |
|---|---:|
| Tabelas | 19 |
| Colunas catalogadas | 113 |
| Chaves estrangeiras | 29 |
| Triggers | 30 |
| Procedures | 6 |
| Constraints CHECK | 0 |

Tabelas: `cidade`, `endereco`, `loja`, `funcionario`, `categoria`, `produto`, `produto_loja`, `baixa_estoque`, `caixa`, `estorno_baixa`, `venda`, `estorno_venda`, `forma_pagamento`, `transferencia_estoque`, `item_transferencia`, `item_venda`, `log_acesso`, `log_auditoria` e `venda_pagamento`.

## Divergências e recomendações

| ID | Evidência | Recomendação |
|---|---|---|
| C01 — Collation | DDL usa `utf8mb4_unicode_ci`; requisitos indicam `utf8mb4_0900_ai_ci`. | Aprovar padrão único e testar conversão de todas as tabelas e índices únicos em ambiente isolado. |
| C02 — FK circular | `loja` referencia `funcionario` antes de `funcionario` ser criada; `funcionario` também referencia `loja`. | Manter o índice e adicionar a FK de responsável por `ALTER TABLE` após as duas tabelas existirem. |
| C03 — Constraints | Nenhuma cláusula `CHECK` encontrada. | Avaliar quantidade positiva, preço/desconto válido e estoque não negativo; regras entre linhas exigem transação, não apenas CHECK. |
| C04 — JSON de auditoria | `dados_anteriores` e `dados_novos` em `log_auditoria` estão como LONGTEXT. | Confirmar tipo JSON, validar o conteúdo existente e testar triggers/consultas antes da migração. |
| C05 — UTC | `log_acesso.data_hora_utc` usa `DEFAULT CURRENT_TIMESTAMP()`. | Fixar e documentar UTC na conexão/servidor ou gerar UTC explicitamente em camada testada. |
| C06 — ON DELETE | FKs não declaram `ON DELETE RESTRICT`. | InnoDB adota comportamento restritivo padrão; explicitar a ação na versão revisada para rastreabilidade. |
| C07 — RBAC | DDL não apresenta `CREATE ROLE`, `GRANT` ou `REVOKE`. | Implementar segurança em script separado e testar cada perfil com usuários não administrativos. |
| C08 — Baixa | `trg_baixa_bi` chama apenas verificação de funcionário ativo; `trg_baixa_ai` decrementa o estoque após inserir. | Validar quantidade positiva e saldo suficiente com bloqueio da linha `produto_loja` e operação atômica. |
| C09 — Estorno de baixa | `trg_estorno_baixa_bi` calcula o acumulado, mas não bloqueia a baixa original antes de consultar. | Bloquear a linha original e serializar a verificação para evitar ultrapassagem em requisições simultâneas. |
| C10 — Pagamentos | `trg_venda_pag_bi` valida forma ativa e código quando exigido, mas não soma paga/total, valor positivo ou excedente em dinheiro. | Criar etapa transacional de finalização, validando total dos itens e todos os pagamentos antes de concluir. |
| C11 — Transferência | `sp_transferir_estoque` não valida explicitamente quantidade positiva; o handler NOT FOUND também atende SELECTs. | Separar handlers, validar cada quantidade, bloquear origem/destino e testar rollback e ausência de produto. |
| C12 — Fechamento | `sp_fechar_caixa` usa abertura + total bruto de itens não estornados; também substitui `id_funcionario` pelo funcionário que fecha. | Aprovar fórmula com pagamentos não monetários, troco/saídas e separar responsável da abertura/fechamento se necessário. |
| C13 — Anonimização | `sp_anonimizar_funcionario` grava literal `DESATIVADO` em `senha_hash`. | Não tratar texto literal como hash; invalidar autenticação/sessões com política de credencial não autenticável. |
| C14 — Auditoria | `log_auditoria` bloqueia UPDATE/DELETE; não foi identificada proteção equivalente de `log_acesso`. Cobertura de pagamento/item_transferencia exige conferência. | Completar matriz de eventos e restringir manipulação direta também por privilégios do banco. |
| C15 — Imutabilidade | Vendas, itens e pagamentos têm proteções; `item_venda` possui unicidade por venda e produto_loja. | Confirmar se linhas repetidas do mesmo produto devem ser consolidadas ou aceitas separadamente. |
| C16 — Aplicação/infraestrutura | TLS, Argon2id/bcrypt, prepared statements e mascaramento de erros não são comprovados pelo DDL. | Apresentar evidências da aplicação e infraestrutura; não marcar como implantado apenas pelo dicionário. |
| C17 — Destrutividade | DDL contém `DROP SCHEMA IF EXISTS trimix_sorveteria`. | Preservar original; executar somente em ambiente descartável, com backup restaurável. |

## Evidências positivas no DDL

- A venda exige funcionário ativo, caixa ABERTO e caixa da mesma loja.
- O item da venda exige produto associado à mesma loja e marcado como disponível.
- A forma de pagamento precisa estar ativa; formas que exigem autorização exigem código/NSU.
- O estorno de venda exige motivo e autorizador ativo com perfil Gerente/Administrador.
- Existem proteções de imutabilidade para venda, item, pagamento, estorno e caixa fechado.
- A transferência exige lojas de origem e destino diferentes.

Essas validações pontuais não substituem a análise de pagamentos, valores positivos, estoque/concorrência, auditoria completa e privilégios de banco.

## Decisões pendentes do Grupo 07

1. Confirmar collation e conversão de tipos dos logs.
2. Aprovar FK circular e conjunto de CHECK.
3. Aprovar fórmula de fechamento e responsáveis de abertura/fechamento.
4. Confirmar a granularidade de `item_venda`.
5. Confirmar RB11–RB14, formalizadas a partir das validações do DDL no PDF de trabalho.
6. Definir Data Owner e Data Steward oficialmente.
7. Executar testes MySQL e registrar evidências antes de declarar correções implementadas.

## Rastreabilidade

O DDL original permanece intacto. O PDF é uma consolidação de trabalho e `assets/der.png` é a captura do modelo recebida, não uma exportação posterior a mudanças. O pacote `.mwb.zip` permite reabrir o modelo no MySQL Workbench.
