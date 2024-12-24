"use.strict";

import { inicializarCarrinho } from "./src/menucarrinho";

async function carregarCatalogo() {
  try {
    const response = await fetch("./catalogo.json");
    const catalogo = await response.json();

    for (const produtoCatalogo of catalogo) {
      const cartaoProduto = `<div class="border-solid border-2 border-gray-600 w-72 m-2" id="card-produto-${produtoCatalogo.id}">
              <img 
                src="./assets/img/${produtoCatalogo.imagem}"
                alt="Produto 1 do e-commerce Zara"
              />
              <p>${produtoCatalogo.marca}</p>
              <p>${produtoCatalogo.nome}</p>
              <p>$${produtoCatalogo.preco}</p>
              <button>Adicionar</button>
            </div>`;
      document.getElementById("container-produto").innerHTML += cartaoProduto;
    }
    inicializarCarrinho();
  } catch (error) {
    console.error("Ocorreu um erro ao carregar o catálogo:", error);
  }
}

carregarCatalogo();
