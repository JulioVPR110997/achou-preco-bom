# Guia simples para editar o Achou Preço Bom

Este projeto foi organizado para você aprender sem depender do painel administrativo.

## Como abrir no navegador

1. Entre no repositório no GitHub.
2. Pressione a tecla `.`.
3. O editor `github.dev` será aberto.
4. Use a lista de arquivos do lado esquerdo.

## Onde alterar cada coisa

| Quero mudar | Arquivo |
| --- | --- |
| Produtos, preços e Hotlinks | `src/dados/produtos.js` |
| Abas do menu | `src/dados/categorias.js` |
| Formato dos cards | `src/componentes/CardProduto.jsx` |
| Textos e estrutura da página | `src/App.jsx` |
| Cores, tamanhos e espaçamentos | `src/estilos/site.css` |

## Como esconder um produto

No arquivo `src/dados/produtos.js`, encontre:

```js
ativo: true
```

Troque por:

```js
ativo: false
```

## Como trocar um link de afiliado

Altere apenas o texto entre aspas:

```js
link: "https://go.hotmart.com/SEU-CODIGO"
```

Nunca coloque senha, Client Secret, Basic Token ou credenciais de API nesses arquivos.

## Como salvar

No github.dev:

1. Clique no ícone de controle de código na barra esquerda.
2. Escreva uma descrição curta, por exemplo: `Alterar preço do curso`.
3. Confirme o commit.

O GitHub guardará a versão anterior. Assim, uma alteração pode ser desfeita.

## Como testar

Abra o projeto em um GitHub Codespace e execute:

```bash
npm install
npm run dev
```

Antes de publicar, confira o site no computador e no celular.

## Regra importante

Não anuncie cura, resultado garantido ou desconto que não esteja confirmado. Produtos relacionados à saúde devem ser apresentados como conteúdo educacional e não substituem acompanhamento profissional.
