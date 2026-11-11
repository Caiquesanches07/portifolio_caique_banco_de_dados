# Plano de correções técnicas — Trimix Sorveteria

**Objetivo:** converter os achados da revisão DOC6 em etapas verificáveis, sem sobrescrever o DDL original nem apagar dados existentes.

## Segurança antes de executar

O arquivo `DDL_Original_Trimix.sql` contém `DROP SCHEMA IF EXISTS trimix_sorveteria`. Não o execute em uma instância com dados que devam ser preservados. Trabalhe em uma cópia versionada, com backup restaurável e schema descartável. Nenhuma correção abaixo foi declarada aplicada ou testada.

## 1. Resolver a FK circular

No `CREATE TABLE loja`, mantenha o índice `fk_loja_responsavel`, mas retire a declaração da FK que referencia `funcionario`. Depois que `funcionario` existir, adicione:

```sql
ALTER TABLE trimix_sorveteria.loja
  ADD CONSTRAINT fk_loja_responsavel
  FOREIGN KEY (id_funcionario_responsavel)
  REFERENCES trimix_sorveteria.funcionario (id_funcionario)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;
```

Verifique se a constraint não existe e se os dados respeitam a referência antes de executar.

## 2. Padronizar charset e collation

A especificação indica `utf8mb4_0900_ai_ci`; o DDL declara `utf8mb4_unicode_ci`. Aprove a escolha com o grupo e planeje conversão do schema e das 19 tabelas em teste. Antes de converter, avalie índices únicos: a nova collation pode considerar iguais valores que antes eram distintos.

## 3. Adicionar restrições de domínio

Avaliar `CHECK` para quantidade positiva, preço/desconto válido e estoque não negativo. Restrições entre linhas (saldo disponível, total acumulado de estorno e soma de pagamentos) exigem lógica transacional; um CHECK não substitui bloqueios. Confirmar suporte efetivo na versão do MySQL e testar dados existentes.

## 4. Corrigir baixa e estorno de estoque

Na baixa, validar `quantidade > 0`, bloquear a linha de `produto_loja` com `SELECT ... FOR UPDATE`, conferir saldo e registrar/decrementar dentro da mesma transação. No estorno, bloquear a baixa original, recalcular estornos sob o mesmo bloqueio e impedir que o total supere a quantidade original.

## 5. Corrigir transferência

Validar cada quantidade do JSON como estritamente positiva. Separar o handler `NOT FOUND` do cursor e das consultas de origem/destino. Bloquear as linhas em ordem determinística e testar rollback integral quando origem, destino, produto ou estoque forem inválidos.

## 6. Finalizar venda e pagamentos atomicamente

Criar/documentar fluxo único de finalização: calcular total dos itens; exigir pagamentos positivos; conferir soma paga e a regra de troco em dinheiro; só então concluir a venda. A validação da forma ativa e do NSU não prova a validação do total da venda.

## 7. Rever fechamento de caixa

Aprovar a fórmula de valor esperado considerando pagamentos não monetários, dinheiro recebido, troco e saídas. Evitar substituir o funcionário de abertura pelo funcionário que fecha; considerar campos distintos para ambos.

## 8. Rever anonimização LGPD

Não gravar a literal `DESATIVADO` como hash. Desativar conta, invalidar sessões/tokens e usar credencial não autenticável conforme política de identidade. Preservar PKs e referências históricas, minimizando os dados mantidos.

## 9. Implementar RBAC e auditoria

Criar script de segurança separado com `CREATE ROLE`, `GRANT` e `REVOKE`. Testar Atendente, Gerente e Administrador com usuários de teste. Negar privilégios estruturais a perfis operacionais e cobrir também `log_acesso`, pagamentos e itens de transferência na matriz de auditoria.

## 10. Encerrar documentação e testes

Após aprovação e execução em teste:
1. Atualizar o modelo no Workbench e reexportar DER PNG/JPG.
2. Atualizar a especificação e o histórico real de revisões.
3. Atualizar o dicionário com metadados finais do DDL aprovado.
4. Testar criação, integridade, pagamentos, estornos, transferência, caixa, concorrência e papéis.
5. Registrar versão do MySQL, scripts, resultados e responsáveis pela aprovação.

## Não alterar automaticamente

- Não editar `DDL_Original_Trimix.sql`.
- Não excluir dados para corrigir FKs.
- Não converter logs para JSON sem validar o conteúdo atual.
- Não afirmar RBAC, TLS, hashing ou testes como concluídos sem evidências.
- Não atribuir Data Owner/Data Steward por inferência.
