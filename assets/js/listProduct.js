const products = [
  {
    id: 1,
    name: "Vegan Power Burger",
    description: "Vegan Power Burger: Uma explosão de sabores e energia em cada mordida! O Vegan Power Burger é feito com um delicioso pão vegano, recheado com abobrinha, cebola roxa e pimentão grelhados, além de um blend poderoso de feijão vermelho e flocos de aveia, criando uma textura incrível. O toque de salsinha fresca e o tempero suave de cúrcuma, páprica e caril elevam o sabor, enquanto o molho cremoso de leite de soja e suco de limão trazem leveza e frescor. Finalizado com um toque de sal e azeite de oliva extra virgem, esse lanche é perfeito para quem busca uma refeição nutritiva e cheia de energia, sem perder o sabor!",
    price: 49.0,
    rating: 5,
    image: "./assets/img/imgProducts/burger1.png",
    category: "burger",
    ingredientes: [
      { categoria: "Ingredientes principais", nome: "pão vegano" },
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
      { categoria: "Líquidos", nome: "60 ml de leite de soja vegano" },
      { categoria: "Líquidos", nome: "1 colher de sopa de suco de limão" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 pitada de cúrcuma" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 pitada de sal" }
    ]    
  },
  {
    id: 2,
    name: "Quinoa Crunch Burguer",
    description: "Quinoa Crunch Burger: Prepare-se para um lanche crocante e nutritivo! O Quinoa Crunch Burger combina o sabor delicado da quinoa vermelha com a textura irresistível das nozes-pecãs e o grão-de-bico, criando uma base cheia de energia. Cenouras, cogumelos e cebola oferecem um toque de frescor, enquanto o molho Worcestershire vegano e a mostarda de pedra adicionam um sabor único e marcante. Temperado com sálvia fresca, orégano seco e uma pitada de pimenta, cada mordida é uma explosão de sabores. A linhaça hidratada substitui o ovo, deixando o hambúrguer vegano e ainda mais delicioso. Completo com Braggs liquid aminos, ele é o equilíbrio perfeito entre sabor e nutrição!",
    price: 79.5,
    rating: 4,
    pricePromotion: 29.9,
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
      { categoria: "Refrigerados", nome: "1 colher de sopa de linhaça hidratada (substituto de ovo)" },
      { categoria: "Enlatados", nome: "1 1/2 colher de sopa de extrato de tomate" },
      { categoria: "Condimentos", nome: "2 colheres de chá de mostarda de pedra" },
      { categoria: "Condimentos", nome: "1 colher de chá de molho Worcestershire vegano" },
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
    description: "Mediterranean Delight Burger: Uma verdadeira festa de sabores mediterrâneos, este hambúrguer combina ingredientes frescos e vibrantes para uma explosão de sabores. A beterraba, cenouras e batata doce formam a base perfeita, enquanto a berinjela e a abobrinha adicionam uma textura suave e deliciosa. Damascos secos e um toque de erva-doce moída trazem um leve dulçor, equilibrado pelo molho vegano de peixe à base de algas e cogumelos, e o molho inglês vegano. As folhas verdes e o picles de endro acrescentam frescor, e o azeite extra-virgem e o vinagre de maçã completam o tempero. Com queijo vegano tipo Muenster derretido e servido em pãezinhos de semente de papoula veganos, esse hambúrguer é o prato perfeito para quem ama sabores mediterrâneos com um toque único e saudável.",
    price: 55.5,
    rating: 5,
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
      { categoria: "Condimentos", nome: "1 colher de sopa de molho vegano de peixe (à base de algas e cogumelos)" },
      { categoria: "Condimentos", nome: "1 folha de alface romana ou folhas verdes misturadas e picles de endro fatiados, folha vermelha" },
      { categoria: "Condimentos", nome: "1/2 colher de chá de molho de soja" },
      { categoria: "Condimentos", nome: "1 1/2 colher de chá de molho inglês vegano" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 sal Kosher" },
      { categoria: "Temperos e artigos de padaria/confeitaria", nome: "1 Pimenta" },
      { categoria: "Azeites, óleos e vinagres", nome: "3 colheres de sopa de vinagre de maçã" },
      { categoria: "Azeites, óleos e vinagres", nome: "1/2 xícara de azeite extra-virgem" },
      { categoria: "Pães e artigos de padaria/confeitaria", nome: "4 Pãezinhos de semente de papoula veganos" },
      { categoria: "Laticínios", nome: "8 fatias de queijo vegano tipo Muenster" },
      { categoria: "Cervejas, vinhos e licores", nome: "1/4 xícara de vinho branco seco vegano" }
    ]    
  },
  {
    id: 4,
    name: "Avocado Sriracha Burger",
    description: "Avocado Sriracha Burger: Este hambúrguer é uma fusão vibrante e picante de sabores frescos e cremosos! O abacate, com sua textura suave, é o protagonista, complementado pelo gengibre picante e a crocância das cenouras em palito e pepinos turcos. Os cogumelos Portobello adicionam uma nota umami deliciosa, enquanto a Sriracha traz o toque picante perfeito. O molho de miso, o vinagre de arroz e o óleo de gergelim torrado criam uma combinação de sabores intensos e equilibrados. Finalizado com sementes de gergelim torrado, flocos de pimenta e um toque de açúcar, esse hambúrguer é uma explosão de frescor e tempero, perfeito para quem adora um toque de picância no prato.",
    price: 58.0,
    rating: 3,
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
    description: "Mushroom Medley Stew: Uma verdadeira celebração dos cogumelos! Este ensopado combina uma mistura generosa de cogumelos frescos como Portobello e Shiitake, criados para derreter na boca. O caldo, enriquecido com vinho tinto e polpa de tomate, ganha profundidade e sabor intenso, enquanto o alho, a cebola e as folhas de louro completam a base aromática. Com temperos a gosto de sal, pimenta e orégano, esse prato é uma explosão de sabores terrosos e sofisticados. Finalizado com salsa fresca, esse ensopado é uma opção reconfortante e repleta de sabor para qualquer ocasião.",
    price: 88.0,
    rating: 2,
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
    id: 6,
    name: "Shiitake Pasta with Cashew Cream",
    description: "Shiitake Pasta with Cashew Cream: Uma deliciosa combinação de sabores terrosos e cremosidade, este prato é um verdadeiro abraço de conforto. A massa da sua escolha é envolvida com um molho branco de castanha de caju, que traz uma textura suave e rica, enquanto os cogumelos shiitake salteados, alho e cebola adicionam profundidade ao sabor. O toque de misso e o frescor do suco e raspas de limão siciliano equilibram o prato com um toque de acidez. Finalizado com manjericão fresco e um toque de pimenta, esta pasta é uma refeição sofisticada e cheia de sabor!",
    price: 89.1,
    rating: 4,
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
    description: "Mushroom Toast with Cream Cheese: Uma refeição simples, mas cheia de sabor. O pão de fermentação natural é levemente torrado, criando uma base crocante para o cremoso cream cheese vegano e a manteiga vegana. Os cogumelos salteados com alho e molho de soja proporcionam um toque umami delicioso, enquanto a rúcula fresca e o suco de limão adicionam frescor e acidez. Uma pitada de flocos de pimenta e salsa fresca finalizam este prato leve e reconfortante. Ideal para um lanche rápido ou uma refeição leve cheia de sabor!",
    price: 108.3,
    rating: 5,
    pricePromotion: 89.9,
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
      { categoria: "Laticínios", nome: "1 colher de sopa de manteiga vegana" },
      { categoria: "Laticínios", nome: "2 colheres de sopa de cream cheese vegano" },
      { categoria: "Outros", nome: "Salsa fresca a gosto (opcional)" }
    ]    
  },
  {
    id: 8,
    name: "Veggie Farro Bowl with Harissa",
    description: "Veggie Farro Bowl with Harissa: Um prato vibrante e nutritivo, repleto de sabores frescos e picantes. O farro, grão integral cheio de nutrientes, é o ponto de partida, servido ao lado de vegetais assados como brócolis e couve-flor, tomates cereja e couve. A pasta de harissa adiciona um toque picante e exótico, equilibrada pela suavidade do leite de coco e pelo frescor do suco de limão. Para um toque crocante, as lascas de coco tostadas são a finalização perfeita. Ideal para quem busca uma refeição leve, saudável e cheia de sabor.",
    price: 79.9,
    rating: 4,
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
    description: "Protein Patty Burger: Este hambúrguer vegano é uma explosão de sabor e proteína! Feito com proteína vegetal texturizada, cebolinhas frescas, alho, pimentão vermelho e cebola roxa, tudo envolto em uma mistura de farinha de grão-de-bico que garante firmeza e sabor. O caldo de legumes e o azeite de oliva trazem uma base suculenta e equilibrada, enquanto a maionese vegana adiciona cremosidade e um toque especial. Leve, saudável e nutritivo, o Protein Patty Burger é uma excelente escolha para quem quer um hambúrguer saboroso sem abrir mão de uma refeição cheia de energia.",
    price: 28.0,
    rating: 1,
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
    description: "Mediterranean Pizza: Uma verdadeira viagem ao Mediterrâneo! Essa pizza vegana artesanal traz uma base crocante e saborosa, coberta com molho de tomate caseiro. A combinação de tomates frescos, cebola roxa fatiada e azeitonas pretas traz frescor e sabor intenso, enquanto o queijo vegano ralado derrete perfeitamente sobre a massa. Finalizada com rúcula fresca e um fio de azeite de oliva extra virgem, essa pizza oferece uma explosão de sabores frescos e leves, ideal para uma refeição deliciosa e saudável. Perfeita para quem ama a cozinha mediterrânea de forma vegana e irresistível.",
    price: 102.9,
    rating: 5,
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

let currentPage = 1;
let filteredProducts = [...products];
let productsPerPage = 4;

const handleOrderIProducts = (select) => {
  const selectedValue = select.value;

  if (selectedValue === "menor") {
    filteredProducts.sort((a, b) => (a.pricePromotion || a.price) - (b.pricePromotion || b.price));
  } else if (selectedValue === "maior") {
    filteredProducts.sort((a, b) => (b.pricePromotion || b.price) - (a.pricePromotion || a.price));
  } else if (selectedValue === "promocao") {
    filteredProducts.sort((a, b) => {
      const aHasPromotion = a.pricePromotion !== undefined;
      const bHasPromotion = b.pricePromotion !== undefined;

      if (aHasPromotion && !bHasPromotion) return -1;
      if (!aHasPromotion && bHasPromotion) return 1;

      return (a.pricePromotion || a.price) - (b.pricePromotion || b.price);
    });
  } else if (selectedValue === "avaliacao") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  currentPage = 1;
  
  renderProducts(currentPage);
  renderPagination();
};


const handleItemsPerPageChange = (select) => {
  productsPerPage = parseInt(select.value, 10);
  currentPage = 1;
  renderProducts(currentPage);
  renderPagination();
};

const renderProducts = (page) => {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);

  productList.innerHTML = "";

  if (productsToRender.length === 0) {
    productList.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  const getStarRating = (rating) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '<i class="fas fa-star filled"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }
    return stars;
  }

  productsToRender.forEach((product) => {
    const hasPromotion = product.pricePromotion !== undefined;
    const discountPercentage = hasPromotion
      ? Math.round(((product.price - product.pricePromotion) / product.price) * 100)
      : 0;

    const productCard = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card position-relative">
          ${hasPromotion ? `<div class="promo-badge"><span>${discountPercentage}%</span> <span>OFF</span></div>` : ""}
          <img src="${product.image}" class="card-img-top custom-card-img-product" alt="${product.name}">
          <div class="card-body">
            <div class="">
              <div class="star-rating">
                ${getStarRating(product.rating)}
              </div>
           </div>
            <h5 class="card-title mt-1 mb-2 text-center">${product.name}</h5>
            <div class="prices">
              ${hasPromotion
        ? `
                  <div class="price">
                    <p class="text-decoration-line-through mb-1 custom-price-old fs-5">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    <p class="custom-price mb-1">R$${product.pricePromotion.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                  </div>
                  `
        : `<p class="custom-price mb-1 text-center">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>`
      }
                <p class="fw-light text-muted text-center">
                ou
                  <span class="fw-bold">3x</span> de 
                  <span class="fw-bold">
                    R$${(
                      (hasPromotion 
                        ? product.pricePromotion 
                        : product.price) / 3
                    ).toFixed(2).replace('.', ',')}
                  </span> sem juros
                </p>

            </div>
            <div class="about-products mt-2"> 
              <a href="product.html?id=${product.id}"><button class="btn btn-buy text-nowrap w-auto">Comprar</button></a>
              <button class="btn btn-eye text-nowrap w-auto" data-toggle="modal" data-target="#exampleModalLong" onclick="showDetails(${product.id})">
                <i class="fa-solid fa-eye"></i> Detalhes
              </button>
            </div>
          </div>
        </div>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <!-- Ingredientes preenchidos pela função showDetails -->
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn custom-btn-close-modal" data-dismiss="modal">Fechar</button>
                        <a id="buyButtonModal" href="#"><button class="btn btn-buy text-nowrap w-auto">Comprar</button></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });
};

const renderPagination = () => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  paginationControls.innerHTML = "";

  if (totalPages === 0) {
    return;
  }

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const prevButton = document.createElement("li");
  prevButton.classList.add("page-item");
  if (currentPage === 1) {
    prevButton.classList.add("disabled");
  }
  prevButton.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-arrow-left"></i></a>`;
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderProducts(currentPage);
      renderPagination();
    }
  });
  paginationControls.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    const isActive = i === currentPage ? "active" : "";
    pageItem.classList.add("page-item");
    if (isActive) {
      pageItem.classList.add(isActive);
    }
    pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    pageItem.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderProducts(currentPage);
      renderPagination();
    });
    paginationControls.appendChild(pageItem);
  }

  const nextButton = document.createElement("li");
  nextButton.classList.add("page-item");
  if (currentPage === totalPages) {
    nextButton.classList.add("disabled");
  }
  nextButton.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-arrow-right"></i></a>`;
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts(currentPage);
      renderPagination();
    }
  });
  paginationControls.appendChild(nextButton);
};

function showDetails(productId) {
  const product = products.find(p => p.id === productId);

  const modalTitle = document.querySelector("#exampleModalLongTitle");
  modalTitle.textContent = product.name;

  const modalBody = document.querySelector(".modal-body ul");
  modalBody.innerHTML = "";

  const categorias = {};

  product.ingredientes.forEach(ing => {
    if (!categorias[ing.categoria]) {
      categorias[ing.categoria] = [];
    }
    categorias[ing.categoria].push(ing.nome);
  });

  for (let categoria in categorias) {
    const categoriaTitle = document.createElement("li");
    categoriaTitle.classList.add("fw-bold");
    categoriaTitle.classList.add("mt-4");
    categoriaTitle.textContent = categoria;
    modalBody.appendChild(categoriaTitle);

    categorias[categoria].forEach(ingrediente => {
      const li = document.createElement("li");
      li.textContent = ingrediente;
      modalBody.appendChild(li);
    });
  }

  const buyButtonModal = document.getElementById("buyButtonModal");

  if (buyButtonModal) {
    buyButtonModal.onclick = function () {
      window.location.href = `product.html?id=${product.id}`;
    };
  }

}

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchValue));
  currentPage = 1;
  renderProducts(currentPage);
  renderPagination();
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(currentPage);
  renderPagination();
});
