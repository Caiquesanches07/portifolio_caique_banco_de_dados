# Trimix Sorveteria — Dicionário de Dados

Aplicação web estática para consulta do dicionário de dados do Sistema de Gestão Operacional e Vendas da Trimix Sorveteria, construída a partir dos documentos enviados pelo Grupo 07.

## Estrutura

```text
/
├── index.html
├── style.css
├── script.js
├── docs/
│   ├── Especificacao_Requisitos_Regras_Negocio_BD.pdf
│   ├── DDL_Original_Trimix.sql
│   ├── diagnostico_coerencia.md
│   └── ADICIONAR_DOC6.txt
└── assets/
    ├── der.png
    └── der.svg
```

> O DOC6 original do professor ainda não foi enviado. O arquivo `docs/ADICIONAR_DOC6.txt` registra o que deve ser completado quando ele estiver disponível.

## Recursos

- Catálogo de 19 tabelas e 113 colunas.
- Busca em tempo real por tabela, coluna, tipo SQL, descrição e metadados.
- Filtros por domínio e detalhamento de PK/FK/UK, nulabilidade, padrão e regras de acesso.
- Visualizador de DER com zoom e movimentação (Panzoom.js, carregado por CDN).
- Seções de governança, Data Literacy, LGPD, GDPR e RBAC.
- Layout responsivo e alternância entre tema claro e escuro.

## Inventário do DDL recebido

- 19 tabelas.
- 113 colunas.
- 29 chaves estrangeiras.
- 30 triggers e 6 procedures (36 rotinas no total).
- Nenhuma cláusula `CHECK` encontrada no script analisado.

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
4. A URL esperada é: https://Caiquesanches07.github.io/portifolio_caique_banco_de_dados/

A publicação só estará ativa depois que o GitHub Pages for habilitado e concluir o primeiro deploy.

## Abrir localmente

Abra `index.html` em um navegador moderno. Para testar o comportamento equivalente ao Pages, sirva a pasta por um servidor HTTP local. A biblioteca Panzoom.js é carregada de CDN; os controles básicos de zoom continuam disponíveis como alternativa.

## Pontos de atenção antes da entrega

1. Adicionar o DOC6 original preenchido pelo grupo.
2. Inserir o PDF final revisado e o DER final em PNG/JPG nos caminhos exigidos.
3. Ativar o GitHub Pages e testar a URL pública.riginal do professor e preencher os campos próprios do projeto.
2. Confirmar Data Owners e Data Stewards com o grupo.
3. Validar os apontamentos de `docs/diagnostico_coerencia.md`; o DDL original foi preservado sem correções automáticas.
4. Revisar dados pessoais dos integrantes antes de manter o PDF em um repositório público.

**Cuidado:** o DDL original contém `DROP SCHEMA IF EXISTS trimix_sorveteria`. Executá-lo apaga o schema homônimo existente. Não o execute em ambiente com dados que precisem ser preservados.

**Limite da análise:** a comparação é estática. O SQL não foi executado em um servidor MySQL e os apontamentos precisam ser validados pelo grupo.
