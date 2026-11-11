# Diagnóstico de coerência — Trimix Sorveteria

**Artefatos comparados:** Especificação de Requisitos v1.1, DER recebido e script DDL `trimix_sorveteria`.

## Inventário estático do DDL

- 19 tabelas e 113 colunas catalogadas.
- 29 chaves estrangeiras.
- 30 triggers e 6 procedures (36 rotinas no total).
- Nenhuma cláusula `CHECK` encontrada.
- Collation declarada no schema/tabelas: `utf8mb4_unicode_ci`; a especificação pede `utf8mb4_0900_ai_ci`.

## Divergências e recomendações

1. **FK circular de responsável local:** a tabela `loja` declara `fk_loja_responsavel` para `funcionario` antes de `funcionario` ser criada no script. A especificação descreve a criação dessa FK por `ALTER TABLE` após a criação das duas tabelas. Reordenar a criação ou mover a FK para um `ALTER TABLE` posterior.
2. **Restrições CHECK ausentes:** a especificação prevê validações para preços, quantidades, descontos, estoque e valores. Não foram encontradas cláusulas `CHECK` no DDL recebido. Implementar no MySQL 8.0+ e testar, ou documentar quais regras ficam em triggers/procedures.
3. **Baixa de estoque:** revisar `trg_baixa_ai` para impedir saldo negativo em cenários concorrentes e garantir atomicidade da validação com a baixa.
4. **Pagamento da venda:** não foi localizada validação transacional que compare a soma dos pagamentos ao total da venda antes de sua finalização. Verificar se essa regra está implementada em outra camada e documentar a responsabilidade.
5. **Collation:** o DDL usa `utf8mb4_unicode_ci`, divergente do padrão `utf8mb4_0900_ai_ci` especificado.
6. **Dados de auditoria:** `dados_anteriores` e `dados_novos` são `LONGTEXT`; a especificação descreve armazenamento JSON. Avaliar a troca para `JSON` e validar compatibilidade com triggers e consultas.
7. **Timestamp UTC:** `log_acesso.data_hora_utc` usa `DEFAULT CURRENT_TIMESTAMP()`. A especificação pede uso explícito de UTC (`UTC_TIMESTAMP()`), portanto alinhar a definição e o tratamento de fuso.
8. **Ação ON DELETE:** as FKs não explicitam `ON DELETE RESTRICT`. O comportamento padrão do InnoDB é restritivo, mas explicitar a ação melhora a aderência e a legibilidade documental.
9. **RBAC:** a matriz por papel aparece na especificação, mas não foram localizados `CREATE ROLE`, `GRANT` ou `REVOKE` no script. Configurar e testar privilégios no MySQL; o dicionário apresenta a matriz como documentação, não como prova de que as permissões estão efetivamente instaladas.
10. **Transferência de estoque:** validar quantidade estritamente positiva dentro da procedure antes de movimentar saldos, sem depender exclusivamente da camada de aplicação.
11. **Estorno de baixa:** avaliar proteção contra concorrência e dupla aplicação do estorno, garantindo que o total estornado não ultrapasse a baixa original.
12. **BOOLEAN no DER versus MySQL:** o DER conceitual usa `BOOLEAN`; o tipo físico no script MySQL é `TINYINT(1)`. O dicionário deve privilegiar o tipo físico e registrar a equivalência como observação.
13. **Chaves órfãs e cardinalidade:** as 29 FKs foram identificadas estaticamente. A existência de registros órfãos só pode ser avaliada com dados carregados; o desenho da cardinalidade deve ser confirmado com a equipe e com eventuais regras de negócio implementadas fora das FKs.

## Limites da análise

Esta é uma inspeção estática dos arquivos recebidos. O SQL não foi executado em servidor MySQL, não houve carregamento de dados e não foram realizados testes de concorrência ou integridade referencial. Portanto, os pontos listados são achados e recomendações para validação, não correções já testadas. O DDL original foi preservado sem alterações automáticas.
