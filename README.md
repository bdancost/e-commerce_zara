
# E-Commerce Zara - Projeto de Loja Online

Este projeto simula um sistema de e-commerce, com foco na experiência do usuário, utilizando HTML, CSS (com TailwindCSS) e JavaScript. Ele inclui funcionalidades de carrinho de compras, checkout, e histórico de pedidos, além de filtros de categorias de produtos (masculino e feminino).
## 🔧 Ferramentas Utilizadas

- **HTML5**: Estruturação das páginas.
- **CSS3**: Estilização com o framework TailwindCSS.
- **JavaScript**: Lógica para interatividade, como carrinho de compras e filtros de produtos.
- **Font Awesome**: Para ícones de animação e botões (por exemplo, carrinho de compras, usuário, etc).
- **LocalStorage**: Para armazenamento de informações sobre o carrinho e histórico de pedidos no navegador.

## 🖥️ Funcionalidades

- **Página Principal** (`index.html`): Exibe o catálogo de produtos com filtros para masculino e feminino.
- **Carrinho de Compras** (`carrinho`): Permite adicionar, remover e ajustar a quantidade de produtos.
- **Checkout** (`checkout.html`): Finaliza a compra e salva o pedido no histórico.
- **Histórico de Pedidos** (`pedidos.html`): Exibe os pedidos anteriores realizados, com detalhes dos produtos comprados.

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/usuario/e-commerce-zara.git
```

### 2. Acessar o Diretório do Projeto

```bash
cd e-commerce-zara
```

### 3. Abrir o Arquivo `index.html`

Você pode abrir o arquivo `index.html` em seu navegador para ver o funcionamento da loja.

## 📂 Estrutura de Pastas

```
/e-commerce-zara
│
├── /assets               # Imagens e logos
├── /src                  # Scripts JavaScript
│   ├── cartaoProduto.js  # Funções relacionadas aos produtos
│   ├── filtrosCatalogo.js # Filtros de produtos
│   ├── menucarrinho.js   # Carrinho de compras
│   └── utilidades.js     # Funções auxiliares
│
├── /style.css            # Arquivo de estilo
└── index.html            # Página principal
└── checkout.html         # Página de checkout
└── pedidos.html          # Página de pedidos
```

## ✨ Features e Funcionalidades

- **Catálogo de Produtos**: Os produtos podem ser filtrados entre masculinos e femininos, e exibidos com a opção de adicionar ao carrinho.
- **Carrinho de Compras**: O carrinho se expande a partir de um ícone fixo, permitindo a visualização e edição de itens, com um botão de "Finalizar Compra".
- **Checkout**: Após adicionar produtos ao carrinho, os usuários podem finalizar a compra e visualizar o histórico de pedidos.
- **Histórico de Pedidos**: Os pedidos anteriores são armazenados localmente e podem ser consultados na página de pedidos.

## 🛠️ Tecnologias e Animações

- **Animações com CSS**: Utilizamos animações para transições suaves, como o deslizamento do carrinho e a mudança de cores nos filtros de produtos.
- **Ícones Animados**: Usamos o Font Awesome para ícones interativos (como o carrinho de compras e ícones de usuário), que se destacam com efeitos de hover e cliques.

## 🎨 Design Responsivo

O projeto é totalmente responsivo, adaptando-se a dispositivos móveis e desktop. As animações e interações são ajustadas de forma otimizada para garantir uma boa experiência em qualquer dispositivo.

## 📖 Documentação de Funções

### Funções principais:

- **`renderizarCatalogo()`**: Exibe os produtos na página principal.
- **`inicializarCarrinho()`**: Configura a lógica para adicionar, remover e atualizar o carrinho de compras.
- **`desenharProdutoCarrinhoSimples()`**: Desenha os produtos no checkout e pedidos.
- **`lerLocalStorage()`**: Função para ler dados do `LocalStorage` para carrinho e histórico de pedidos.
- **`salvarLocalStorage()`**: Salva informações no `LocalStorage` (ex.: carrinho de compras).

