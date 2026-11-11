<p align="center">
  <img src="assets/avatar_github.jpg" alt="Avatar do autor para o GitHub" width="132" />
</p>

<h1 align="center">Dicionário de Dados — Trimix Sorveteria</h1>

<p align="center">
  <strong>Projeto acadêmico do Grupo 07 — Universidade Cidade de São Paulo (UNICID)</strong><br />
  Sistema de Gestão Operacional e Vendas · MySQL 8.0+
</p>

## Sobre o projeto

Dicionário de dados interativo do banco `trimix_sorveteria`, desenvolvido na disciplina de Modelagem de Banco de Dados e organizado para a Atividade 6 — revisão, governança e documentação.

O sistema modela operações de quatro lojas: funcionários, catálogo, estoque, baixas, transferências, caixas, vendas, pagamentos, estornos e auditoria. A premissa de capacidade considera aproximadamente 1.500 transações por dia por loja; esse valor é uma hipótese informada e ainda precisa de validação operacional.

## Aplicação web

A aplicação apresenta o catálogo baseado no DDL original e oferece busca em tempo real, filtros por domínio, tema claro/escuro, visualização do DER com Panzoom.js, Data Literacy e seções de governança, LGPD/GDPR e RBAC.

- **19 tabelas**
- **113 colunas catalogadas**
- **29 chaves estrangeiras**
- **30 triggers**
- **6 procedures**

A documentação web apresenta metadados e orientações. Ela não comprova, por si só, que RBAC, TLS, hashing, auditoria completa ou testes de concorrência estejam implantados.

## Estrutura do repositório

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   ├── avatar_github.jpg
│   └── der.png
└── docs/
    ├── ADICIONAR_DOC6.txt
    ├── ATIVIDADE_06_DICIONARIO_DE_DADOS.md
    ├── DDL_Original_Trimix.sql
    ├── DIAGNOSTICO_COHERENCIA.md
    ├── DIAGNOSTICO_COHERENCIA_DOC6.md
    ├── PLANO_CORRECOES_DDL.md
    ├── STATUS_ENTREGA.md
    ├── ARTEFATOS_E_FONTES.md
    ├── Especificacao_Requisitos_Regras_Negocio_BD.pdf
    ├── EER_Diagram_trimix.mwb.zip
    └── diagnostico_coerencia.md
```

## Artefatos e rastreabilidade

| Artefato | Descrição |
|---|---|
| `docs/DDL_Original_Trimix.sql` | DDL original preservado sem alterações. |
| `docs/EER_Diagram_trimix.mwb.zip` | Modelo editável do MySQL Workbench fornecido no contexto do projeto. |
| `assets/der.svg` | Mapa vetorial de relacionamentos gerado do DDL original; a captura original do Workbench é mantida como evidência local, não substituída. |
| `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf` | Consolidação de trabalho com RF01–RF14, RNF01–RNF09, regras consolidadas, governança e histórico de quatro revisões. |
| `docs/DIAGNOSTICO_COHERENCIA_DOC6.md` | Revisão estática de requisitos, DER e DDL, com evidências e riscos. |
| `docs/PLANO_CORRECOES_DDL.md` | Plano de correções técnicas, organizado em etapas seguras. |
| `assets/avatar_github.jpg` | Retrato tecnológico da conversa de ajuste do avatar GitHub, incluído a pedido do autor. |

**Atenção à versão documental:** o arquivo editável original da Especificação de Requisitos e o template integral DOC6 do professor não foram localizados na cópia consultada. O PDF incluído é uma reconstrução/consolidação de trabalho baseada no conteúdo de requisitos v1.1 anteriormente informado, no DDL e no modelo Workbench. Deve ser comparado e aprovado pelo Grupo 07 antes de ser tratado como versão oficial. As regras RB11–RB14 foram formalizadas a partir de validações encontradas no DDL e exigem confirmação do grupo. Data Owner e Data Steward não foram atribuídos por suposição.

## Revisão de coerência — principais pontos

1. Collation `utf8mb4_unicode_ci` no DDL versus `utf8mb4_0900_ai_ci` na especificação.
2. FK circular entre `loja` e `funcionario`; a FK do responsável de loja precisa ser adicionada depois da criação das duas tabelas.
3. Ausência de `CHECK` para limites de quantidades, preços, descontos e estoque.
4. Campos de dados de auditoria em `LONGTEXT`, embora descritos como JSON.
5. Tratamento de UTC em `log_acesso.data_hora_utc` precisa ser confirmado.
6. RBAC documentado, mas sem `CREATE ROLE`, `GRANT` e `REVOKE` no DDL.
7. Baixa/estorno de estoque, transferência, pagamento e fechamento de caixa exigem validação transacional e testes concorrentes.
8. A procedure de anonimização grava a literal `DESATIVADO` em `senha_hash`, ponto que precisa de revisão.

Os detalhes, a evidência por rotina e as recomendações estão em `docs/DIAGNOSTICO_COHERENCIA_DOC6.md` e `docs/PLANO_CORRECOES_DDL.md`.

## Segurança

O DDL original contém `DROP SCHEMA IF EXISTS trimix_sorveteria`. Não o execute em uma instância com dados que devam ser preservados. Use ambiente de testes descartável e backup restaurável. Nenhuma correção do DDL original foi aplicada automaticamente.

## GitHub Pages

Para publicar a cópia individual:

1. Abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`.
4. Salve e aguarde o processamento.
5. Abra a URL abaixo e confirme que a aplicação e os links do PDF/DER carregam.

- **Repositório:** <https://github.com/Caiquesanches07/portifolio_caique_banco_de_dados>
- **Pages esperado (depende de ativação e deploy):** <https://Caiquesanches07.github.io/portifolio_caique_banco_de_dados/>

A configuração e a publicação do GitHub Pages ainda precisam ser confirmadas no painel do repositório; não se declara o deploy como concluído nesta revisão.
