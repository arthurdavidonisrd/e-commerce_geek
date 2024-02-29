var div_produtos_twd = document.getElementById("show_products");

const catalago_twd = [
    {
        id: 1,
        nome: "Camisa The Walking Dead",
        marca: "Geek Squad Comerce",
        preco: 50,
        arquivo: "camisa_perguntas_twd.jpg"
    },
    {
        id: 2,
        nome: "Poster Oficial Season 8",
        marca: "AMC",
        preco: 80,
        arquivo: "poster_twd_season8.jpg"
    },
    {
        id: 3,
        nome: "Quado decorativo TWD",
        marca: "AMC",
        preco: 60,
        arquivo: "quadro_twd.jpg"
    },
    {
        id: 4,
        nome: "Taco Lucille Negan",
        marca: "AMC",
        preco: 180,
        arquivo: "taco_negan.jpg"

    }
    
]

for (const produtos of catalago_twd){
    const cartaoProduto = `<div id="card-produto-1">
    <img class='imagens_produtos' src="catalago_produtos/${produtos.arquivo}" 
    alt=""
    style="width: 200px;",>
    <p>${produtos.nome}</p>
    <p>${produtos.marca}</p>
    <p>R$ ${produtos.preco}</p>
    <a id='cart' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
  </svg></a>
    </div>`

    div_produtos_twd.innerHTML += cartaoProduto;

}


