const products = [
  {
    id: 1,
    name: "Vegan Power Burger",
    price: 25.0,
    image: "./assets/img/imgProducts/burger1.png",
    category: "burger",
    ingredientes: [
      { categoria: "Ingredientes principais", nome: "pão" },
      { categoria: "Ingredientes principais", nome: "abobrinhas" },
      { categoria: "Ingredientes principais", nome: "cebola roxa" },
      { categoria: "Ingredientes principais", nome: "pimentão" },
      { categoria: "Hambúrguer", nome: "200 g de feijão vermelho pré-cozido" },
      { categoria: "Hambúrguer", nome: "2 colheres de sopa de flocos de aveia" },
      { categoria: "Hambúrguer", nome: "1/2 cebola roxa" },
      { categoria: "Hambúrguer", nome: "salsinha" },
      { categoria: "Hambúrguer", nome: "1 colher de sopa de soja" },
      { categoria: "Hambúrguer", nome: "caril" },
      { categoria: "Hambúrguer", nome: "páprica" },
      { categoria: "Hambúrguer", nome: "óleo EVO" },
      { categoria: "Hambúrguer", nome: "sal" },
      { categoria: "Maionese", nome: "120 ml de óleo de semente de girassol" },
      { categoria: "Maionese", nome: "60 ml de leite de soja" },
      { categoria: "Maionese", nome: "1 colher de sopa de suco de limão" },
      { categoria: "Maionese", nome: "1 pitada de cúrcuma" },
      { categoria: "Maionese", nome: "1 pitada de sal" }
    ]
  },
  { id: 2, name: "Plant-Based Milk", price: 19.5, pricePromotion: 12.9, image: "./assets/img/imgProducts/burger2.png", category: "burger" },
  { id: 3, name: "Organic Tofu", price: 15.5, image: "./assets/img/imgProducts/burger3.png", category: "burger" },
  { id: 4, name: "Vegan Cheese", price: 18.0, image: "./assets/img/imgProducts/burger4.png", category: "burger" },
  { id: 5, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato1.png", category: "dish" },
  { id: 6, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato2.png", category: "dish" },
  { id: 7, name: "Vegan Dish", price: 18.1, image: "./assets/img/imgProducts/prato3.png", category: "dish" },
  { id: 8, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato4.png", category: "dish" },
  { id: 9, name: "Vegan Burguer", price: 28.0, image: "./assets/img/imgProducts/burger5.png", category: "burger" },
  { id: 10, name: "Vegan Pizza", price: 88.9, pricePromotion: 59.9, image: "./assets/img/imgProducts/pizza.png", category: "pizza" },
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

  productsToRender.forEach((product) => {
    const hasPromotion = product.pricePromotion !== undefined;
    const discountPercentage = hasPromotion
      ? Math.round(((product.price - product.pricePromotion) / product.price) * 100)
      : 0;

    const productCard = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card position-relative">
          ${hasPromotion ? `<div class="promo-badge"><span>${discountPercentage}%</span> <span>OFF</span></div>` : ""}
          <img src="${product.image}" class="card-img-top custom-img-product" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title mt-4 mb-3">${product.name}</h5>
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
                <span class="fw-bold">3x</span> de <span class="fw-bold">R$${(product.price / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> sem juros
              </p>
            </div>
            <div class="about-products mt-2"> 
              <a href="product.html?id=${product.id}"><button class="btn btn-buy text-nowrap w-auto"">Comprar</button></a>
              <button class="btn btn-eye text-nowrap w-auto" data-toggle="modal" data-target="#exampleModalLong" onclick="showDetails(${product.id})"> <i class="fa-solid fa-eye"></i> Detalhes</button>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">${product.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                          ${product.ingredientes.map((ing) => {
                            ing.categoria.map((categ) => {
                              
                            })
                          })}
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <a href="product.html?id=${product.id}"><button class="btn btn-buy text-nowrap w-auto"">Comprar</button></a>
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

const showDetails = (productId) => {
  const product = filteredProducts.find((p) => p.id === productId);
};

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
