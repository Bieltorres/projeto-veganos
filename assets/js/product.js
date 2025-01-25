const products = [
  {
    id: 1,
    name: "Vegan Power Burger",
    price: 25.0,
    image: "./assets/img/imgProducts/burger1.png",
    category: "burger",
    ingredientes: [
      { categoria: "Ingredientes principais", nome: "pão" },
      { categoria: "Hortifrúti", nome: "abobrinhas" },
      { categoria: "Hortifrúti", nome: "cebola roxa" },
      { categoria: "Hortifrúti", nome: "pimentão" },
      { categoria: "Massas e grãos", nome: "200 g de feijão vermelho pré-cozido" },
      { categoria: "Massas e grãos", nome: "2 colheres de sopa de flocos de aveia" },
      { categoria: "Hortifrúti", nome: "1/2 cebola roxa" },
      { categoria: "Hortifrúti", nome: "salsinha" },
      { categoria: "Condimentos", nome: "1 colher de sopa de soja" },
      { categoria: "Condimentos", nome: "caril" },
      { categoria: "Condimentos", nome: "páprica" },
      { categoria: "Condimentos", nome: "óleo EVO" },
      { categoria: "Condimentos", nome: "sal" },
      { categoria: "Líquidos", nome: "120 ml de óleo de semente de girassol" },
      { categoria: "Líquidos", nome: "60 ml de leite de soja" },
      { categoria: "Líquidos", nome: "1 colher de sopa de suco de limão" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 pitada de cúrcuma" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 pitada de sal" }
    ]
  },
  {
    id: 2,
    name: "Quinoa Crunch Burguer",
    price: 19.5,
    pricePromotion: 12.9,
    image: "./assets/img/imgProducts/burger2.png",
    category: "burger",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "1/2 xícara de cenouras" },
      { categoria: "Hortifrúti", nome: "15g de grão-de-bico enlatado" },
      { categoria: "Hortifrúti", nome: "2 dentes de alho" },
      { categoria: "Hortifrúti", nome: "10g de cogumelos" },
      { categoria: "Hortifrúti", nome: "1 cebola" },
      { categoria: "Hortifrúti", nome: "1/2 colher de chá de orégano seco" },
      { categoria: "Hortifrúti", nome: "1 colher de sopa de sálvia fresca" },
      { categoria: "Refrigerados", nome: "1 ovo" },
      { categoria: "Enlatados", nome: "1 1/2 colher de sopa de extrato de tomate" },
      { categoria: "Condimentos", nome: "2 colheres de chá de mostarda de pedra" },
      { categoria: "Condimentos", nome: "1 colher de chá de molho Worcestershire" },
      { categoria: "Massas e grãos", nome: "1/2 xícara de quinoa vermelha" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1/4 colher de chá de pimenta" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 colher de chá de sal marinho" },
      { categoria: "Nozes e sementes", nome: "1 xícara de nozes-pecãs" },
      { categoria: "Líquidos", nome: "3/4 xícara de água" },
      { categoria: "Outros", nome: "1 colher de sopa de Braggs liquid aminos (ou molho de soja)" }
    ]
  },
  {
    id: 3,
    name: "Mediterranean Delight Burger",
    price: 15.5,
    image: "./assets/img/imgProducts/burger3.png",
    category: "burger",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "1 Beterraba, grande vermelha" },
      { categoria: "Hortifrúti", nome: "4 cenouras médias" },
      { categoria: "Hortifrúti", nome: "2 Damascos secos" },
      { categoria: "Hortifrúti", nome: "1 Berinjela média" },
      { categoria: "Hortifrúti", nome: "1/4 colher de chá de erva-doce moída" },
      { categoria: "Hortifrúti", nome: "2 dentes de alho" },
      { categoria: "Hortifrúti", nome: "1/2 colher de chá de gengibre moído" },
      { categoria: "Hortifrúti", nome: "1/2 Cebola, pequena" },
      { categoria: "Hortifrúti", nome: "1 batata doce média" },
      { categoria: "Hortifrúti", nome: "1 Abobrinha média" },
      { categoria: "Condimentos", nome: "1 colher de sopa de molho de peixe, asiático" },
      { categoria: "Condimentos", nome: "1 folha de alface romana ou folhas verdes misturadas e picles de endro fatiados, folha vermelha" },
      { categoria: "Condimentos", nome: "1/2 colher de chá de molho de soja" },
      { categoria: "Condimentos", nome: "1 1/2 colher de chá de molho inglês" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 sal Kosher" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 Pimenta" },
      { categoria: "Azeites, óleos e vinagres", nome: "3 colheres de sopa de vinagre de maçã" },
      { categoria: "Azeites, óleos e vinagres", nome: "1/2 xícara de azeite extra-virgem" },
      { categoria: "Pães e artigos de padaria/confeitaria", nome: "4 Pãezinhos de semente de papoula" },
      { categoria: "Laticínios", nome: "8 fatias de queijo Muenster" },
      { categoria: "Cervejas, vinhos e licores", nome: "1/4 xícara de vinho branco seco" }
    ]
  },
  {
    id: 4,
    name: "Avocado Sriracha Burger",
    price: 18.0,
    image: "./assets/img/imgProducts/burger4.png",
    category: "burger",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "1 Abacate, grande" },
      { categoria: "Hortifrúti", nome: "1 colher de chá de gengibre" },
      { categoria: "Hortifrúti", nome: "2 Cebolinha verde" },
      { categoria: "Hortifrúti", nome: "1 1/2 xícaras de cenouras tipo palito" },
      { categoria: "Hortifrúti", nome: "2 cogumelos Portobello, grandes" },
      { categoria: "Hortifrúti", nome: "2 pepinos turcos" },
      { categoria: "Condimentos", nome: "1 colher de sopa de Miso" },
      { categoria: "Condimentos", nome: "1 colher de sopa de Sriracha" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 pitada de flocos de pimenta e sementes de gergelim" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1/2 colher de chá de sal" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 pitada de sal e pimenta" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1/4 colher de chá de sal e pimenta" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 colher de chá de semente de gergelim torrada" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1/2 colher de chá de açúcar" },
      { categoria: "Azeites, óleos e vinagres", nome: "4 colheres de chá de vinagre de arroz" },
      { categoria: "Azeites, óleos e vinagres", nome: "1 colher de chá de vinagre de arroz" },
      { categoria: "Azeites, óleos e vinagres", nome: "1 colher de sopa de óleo de gergelim torrado" },
      { categoria: "Azeites, óleos e vinagres", nome: "1 colher de chá de óleo de gergelim" }
    ]
  },
  {
    id: 5,
    name: "Mushroom Medley Stew",
    price: 18.0,
    image: "./assets/img/imgProducts/prato1.png",
    category: "dish",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "1 kg de cogumelos frescos (Portobello, Shiitake ou outros)" },
      { categoria: "Hortifrúti", nome: "2 cebolas médias picadas" },
      { categoria: "Hortifrúti", nome: "4 dentes de alho picados" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "2 folhas de louro" },
      { categoria: "Condimentos", nome: "2 colheres de sopa de polpa de tomate" },
      { categoria: "Líquidos", nome: "200 ml de vinho tinto" },
      { categoria: "Líquidos", nome: "500 ml de água (ou caldo de legumes)" },
      { categoria: "Azeites, óleos e vinagres", nome: "4 colheres de sopa de azeite" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Sal a gosto" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Pimenta a gosto" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Orégãos a gosto" },
      { categoria: "Hortifrúti", nome: "Salsa fresca para finalizar" }
    ]
  },
  {
    id: 6, name: "Shiitake Pasta with Cashew Cream",
    price: 18.0,
    image: "./assets/img/imgProducts/prato2.png",
    category: "dish",
    ingredientes: [
      { categoria: "Nozes e sementes", nome: "½ xícara de castanha de caju crua e demolhada" },
      { categoria: "Líquidos", nome: "½ xícara de água" },
      { categoria: "Condimentos", nome: "1 colher de sobremesa de missô" },
      { categoria: "Massas e grãos", nome: "120g da massa da sua preferência" },
      { categoria: "Líquidos", nome: "2L de água" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 colher de chá de sal" },
      { categoria: "Azeites, óleos e vinagres", nome: "Azeite a gosto" },
      { categoria: "Hortifrúti", nome: "200g de cogumelo shitake" },
      { categoria: "Hortifrúti", nome: "½ cebola picada" },
      { categoria: "Hortifrúti", nome: "2 dentes de alho picados" },
      { categoria: "Líquidos", nome: "Molho branco de castanha e caju" },
      { categoria: "Hortifrúti", nome: "Suco e raspas de limão siciliano a gosto" },
      { categoria: "Hortifrúti", nome: "Manjericão picado a gosto" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Sal e pimenta do reino a gosto" }
    ]
  },
  {
    id: 7,
    name: "Mushroom Toast with Cream Cheese",
    price: 18.1,
    image: "./assets/img/imgProducts/prato3.png",
    category: "dish",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "1 dente de alho" },
      { categoria: "Hortifrúti", nome: "1/4 de limão" },
      { categoria: "Hortifrúti", nome: "1 punhado de cogumelos" },
      { categoria: "Hortifrúti", nome: "1 pitada de flocos de pimenta (opcional)" },
      { categoria: "Hortifrúti", nome: "1 punhado de rúcula" },
      { categoria: "Condimentos", nome: "1 colher de chá de molho de soja" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Sal e pimenta a gosto" },
      { categoria: "Azeites, óleos e vinagres", nome: "1/2 colher de sopa de óleo de colza" },
      { categoria: "Pães e artigos de padaria/confeitaria", nome: "1 fatia de pão de fermentação natural (sourdough)" },
      { categoria: "Laticínios", nome: "1 colher de sopa de manteiga com sal" },
      { categoria: "Laticínios", nome: "2 colheres de sopa de cream cheese light" },
      { categoria: "Outros", nome: "Salsa fresca a gosto (opcional)" }
    ]
  },
  {
    id: 8,
    name: "Veggie Farro Bowl with Harissa",
    price: 18.0,
    image: "./assets/img/imgProducts/prato4.png",
    category: "dish",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "1 cabeça de brócolis" },
      { categoria: "Hortifrúti", nome: "1 cabeça de couve-flor" },
      { categoria: "Hortifrúti", nome: "2 xícaras de tomates cereja ou uva" },
      { categoria: "Hortifrúti", nome: "4 xícaras de couve" },
      { categoria: "Hortifrúti", nome: "1 xícara de brotos" },
      { categoria: "Enlatados", nome: "1/2 xícara de leite de coco" },
      { categoria: "Condimentos", nome: "1/4 xícara de pasta de harissa" },
      { categoria: "Condimentos", nome: "3 colheres de sopa de suco de limão fresco" },
      { categoria: "Massas e grãos", nome: "1 xícara de farro" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Sal e pimenta a gosto" },
      { categoria: "Nozes e sementes", nome: "1/2 xícara de lascas de coco levemente tostadas" }
    ]
  },
  {
    id: 9,
    name: "Protein Patty Burger",
    price: 28.0,
    image: "./assets/img/imgProducts/burger5.png",
    category: "burger",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "3 dentes de alho" },
      { categoria: "Hortifrúti", nome: "3 cebolinhas verdes" },
      { categoria: "Hortifrúti", nome: "1/2 pimentão vermelho (cerca de 120g)" },
      { categoria: "Hortifrúti", nome: "1/2 cebola roxa (cerca de 40g)" },
      { categoria: "Hortifrúti", nome: "1 xícara de proteína vegetal texturizada" },
      { categoria: "Enlatados", nome: "3/4 xícara de caldo de legumes" },
      { categoria: "Condimentos", nome: "1 colher de sopa de maionese vegana" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1/2 xícara de farinha de grão-de-bico" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "Temperos a gosto" },
      { categoria: "Azeites, óleos e vinagres", nome: "1/2 colher de sopa de azeite de oliva" },
      { categoria: "Azeites, óleos e vinagres", nome: "1 spray de óleo" }
    ]
  },
  {
    id: 10,
    name: "Mediterranean Pizza",
    price: 88.9,
    pricePromotion: 59.9,
    image: "./assets/img/imgProducts/pizza.png",
    category: "pizza",
    ingredientes: [
      { categoria: "Hortifrúti", nome: "Rúcula fresca" },
      { categoria: "Hortifrúti", nome: "Cebola roxa fatiada" },
      { categoria: "Hortifrúti", nome: "Tomates frescos" },
      { categoria: "Enlatados", nome: "Azeitonas pretas" },
      { categoria: "Laticínios veganos", nome: "Queijo vegano ralado" },
      { categoria: "Temperos", nome: "Molho de tomate caseiro" },
      { categoria: "Azeites, óleos e vinagres", nome: "Azeite de oliva extra virgem" },
      { categoria: "Massas", nome: "Massa de pizza vegana artesanal" }
    ]
  },
];

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

const product = products.find(p => p.id === productId);

if (product) {
    const productDetails = document.getElementById('product-details');
    const categorias = {};
  
    product.ingredientes.forEach(ing => {
      if (!categorias[ing.categoria]) {
        categorias[ing.categoria] = [];
      }
      categorias[ing.categoria].push(ing.nome);
    });
  
    let ingredientesHTML = '<ul>';
    for (let categoria in categorias) {
      ingredientesHTML += `<li class="fw-bold mt-4">${categoria}</li>`;
      categorias[categoria].forEach(ingrediente => {
        ingredientesHTML += `<li>${ingrediente}</li>`;
      });
    }
    ingredientesHTML += '</ul>';
  
    productDetails.innerHTML = `
    <div class="custom-container">
      <div class="col-md-6 custom-card-img-product">
        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded img-product">
      </div>
      <div class="col-md-6 custom-card-name-and-price">
        <h1 class="fs-4 custom-title-product mb-3 responsive-text">${product.name}</h1>
        <div class="prices responsive-text">
          ${product.pricePromotion
            ? `
              <div class="price justify-content-start align-items-center responsive-text">
                <div>
                  <p class="text-decoration-line-through text-muted mb-1 fs-4 responsive-text">R$ ${product.price.toFixed(2)}</p>
                </div>
                <div>
                  <p class="mb-1 custom-price fs-1 responsive-text">R$${product.pricePromotion.toFixed(2)}</p>
                  <div class="promo-badge"><span>${Math.round(((product.price - product.pricePromotion) / product.price) * 100)}%</span> OFF</div>
                </div>
              </div>` 
            : `<p class="fw-bold fs-3 custom-price mb-1 responsive-text">R$ ${product.price.toFixed(2)}</p>`}
        </div>
        <p class="fw-light text-muted responsive-text">
          <span class="fw-bold">ou em 3x</span> de <span class="fw-bold">R$${(product.price / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> sem juros
        </p>
        <button class="btn btn-buy text-nowrap mb-4 custom-btn-buy-product responsive-text">Comprar</button>
        <div class="p-3 custom-calculate-frete responsive-text">
          <p class="mb-2"><strong>Calcular entrega</strong></p>
          <div class="d-flex custom-content-frete">
            <input type="text" class="form-control me-2" id="cepInput" placeholder="Informe seu CEP">
            <button class="btn custom-calculate" onclick="calcularFrete()">Calcular</button>
          </div>
          <p id="freteMensagem" class="mt-3 ms-3"></p>
        </div>
      </div>
    </div>
    <div class="accordion responsive-text" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header responsive-text" id="headingOne">
          <button class="accordion-button responsive-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Ingredientes
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body responsive-text">
            <div class="d-flex w-100 flex-column">
              <div>
                <h2 class="mt-4 responsive-text">Ingredientes:</h2>
                ${ingredientesHTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  
} else {
  document.getElementById('product-details').innerHTML = `
    <div class="text-center">
      <h2>Produto não encontrado</h2>
      <p>Volte para a <a href="index.html">página inicial</a>.</p>
    </div>
  `;
}

const calcularFrete = () => {
  const cep = document.getElementById('cepInput').value;
  if (!cep) {
    alert("Por favor, insira um CEP válido.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        document.getElementById('freteMensagem').innerText = "CEP não encontrado. Tente novamente.";
      } else {
        const cidade = data.localidade;
        const uf = data.uf;
        document.getElementById('freteMensagem').innerHTML = `Entrega <span class="frete-gratis">grátis</span> para ${cidade} - ${uf}`;
      }
    })
    .catch(error => {
      document.getElementById('freteMensagem').innerText = "Erro ao consultar o CEP. Tente novamente.";
      console.error(error);
    });
}
