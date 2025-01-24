const products = [
  { id: 1, name: "Vegan Burger", price: 25.0, image: "./assets/img/imgProducts/burger1.png", category: "burger" },
  { id: 2, name: "Plant-Based Milk", price: 19.5, pricePromotion: 12.9, image: "./assets/img/imgProducts/burger2.png", category: "burger" },
  { id: 3, name: "Organic Tofu", price: 15.5, image: "./assets/img/imgProducts/burger3.png", category: "burger" },
  { id: 4, name: "Vegan Cheese", price: 18.0, image: "./assets/img/imgProducts/burger4.png", category: "burger" },
  { id: 5, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato1.png", category: "dish" },
  { id: 6, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato2.png", category: "dish" },
  { id: 7, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato3.png", category: "dish" },
  { id: 8, name: "Vegan Dish", price: 18.0, image: "./assets/img/imgProducts/prato4.png", category: "dish" },
  { id: 9, name: "Vegan Burguer", price: 28.0, image: "./assets/img/imgProducts/burger5.png", category: "burger" },
  { id: 10, name: "Vegan Pizza", price: 28.0, image: "./assets/img/imgProducts/pizza.png", category: "burger" },
];

let productsPerPage = 4;

function handleItemsPerPageChange(select) {
  productsPerPage = parseInt(select.value, 10);

  currentPage = 1;
  renderProducts(currentPage);
  renderPagination();
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(currentPage);
  renderPagination();
});

let currentPage = 1;
let filteredProducts = [...products];

const searchInput = document.getElementById("searchInput");
const paginationControls = document.getElementById("paginationControls");
const productList = document.getElementById("productList");

const renderProducts = (page) => {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);

  console.log("Página atual:", page);
  console.log("Índices dos produtos:", startIndex, endIndex);
  console.log("Produtos exibidos:", productsToRender);

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
              ${
                hasPromotion
                  ? `
                <div class="price">
                  <p class="card-text custom-price-promotion text-decoration-line-through text-muted mb-1">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p class="card-text custom-price mb-1">R$${product.pricePromotion.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                `
                  : `<p class="card-text custom-price mb-1 text-center">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`
              }
              <p class="fw-light text-muted text-center">
                  <span class="fw-bold">3x</span> de <span class="fw-bold">R$${(product.price / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> sem juros
              </p>
            </div>
            <div class="about-products mt-2"> 
              <button class="btn btn-buy" onclick="showDetails(${product.id})">Comprar</button>
              <button class="btn btn-eye" onclick="showProducts(${product.id})"> <i class="fa-solid fa-eye"></i> Detalhes</button>
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

  console.log("Total de produtos:", filteredProducts.length);
  console.log("Total de páginas:", totalPages);

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

  // Botão "Próximo"
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
  alert(`Product: ${product.name}\nPrice: R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
};

const showProducts = (productId) => {
  const product = filteredProducts.find((p) => p.id === productId);
  alert(`Product: ${product.name}\nPrice: R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
};

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );
  currentPage = 1;
  renderProducts(currentPage);
  renderPagination();
});

renderProducts(currentPage);
renderPagination();
