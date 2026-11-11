# Diagnóstico de coerência — Trimix Sorveteria

## Artefatos usados
- Especificação de Requisitos e Regras de Negócio v1.1/v1.2
- DER do Grupo 07
- Script DDL MySQL Workbench

## Inventário
- 19 tabelas
- 113 colunas
- 29 chaves estrangeiras
- 30 triggers
- 6 procedures
- 36 rotinas no total

## Principais achados da revisão cruzada
1. O DDL usa `utf8mb4_unicode_ci`, enquanto a especificação determina `utf8mb4_0900_ai_ci`.
2. A FK circular `loja.id_funcionario_responsavel -> funcionario.id_funcionario` deve ser criada após as duas tabelas existirem.
3. As constraints CHECK previstas nos requisitos não aparecem nas definições CREATE TABLE recebidas.
4. `log_auditoria.dados_anteriores` e `dados_novos` estão como LONGTEXT, enquanto os requisitos descrevem JSON.
5. `log_acesso.data_hora_utc` usa CURRENT_TIMESTAMP(), enquanto o requisito prevê geração UTC.
6. As FKs não explicitam ON DELETE RESTRICT, embora o comportamento padrão do InnoDB seja restritivo.
7. A matriz RBAC está documentada nos requisitos, mas não foram encontrados CREATE ROLE/GRANT/REVOKE no DDL enviado.
8. A transferência de estoque deve rejeitar quantidade nula ou negativa antes de alterar os saldos.
9. A baixa e o estorno de estoque precisam ser validados também em cenários concorrentes.
10. BOOLEAN do modelo conceitual aparece fisicamente como TINYINT(1) no MySQL; o dicionário deve exibir o tipo físico.

## Importante
Esta revisão é estática. A execução do DDL em MySQL 8.0+, os testes de concorrência e a validação dos dados carregados ainda precisam ser feitos pelo grupo antes da entrega final.

O DDL original foi preservado sem alteração automática para manter rastreabilidade.
