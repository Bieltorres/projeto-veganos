const products = [
  { id: 1, name: "Vegan Burger", price: 25.0, image: "./assets/img/imgProducts/burger1.png", category: "burger" },
  { id: 2, name: "Plant-Based Milk", price: 19.5, pricePromotion: 12.9, image: "./assets/img/imgProducts/burger2.png", category: "burger" },
  { id: 3, name: "Organic Tofu", price: 15.5, image: "./assets/img/imgProducts/burger3.png", category: "burger" },
  { id: 4, name: "Vegan Cheese", price: 18.0, image: "./assets/img/imgProducts/burger4.png", category: "dish" },
];

const burgerList = document.getElementById("burgerList");
const dishList = document.getElementById("dishList");
const searchInput = document.getElementById("searchInput");

function renderProducts(productsToRender) {
  burgerList.innerHTML = "";
  dishList.innerHTML = "";

  const burgers = productsToRender.filter((product) => product.category === "burger");
  const dishes = productsToRender.filter((product) => product.category === "dish");

  burgers.forEach((product) => {
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
            <h5 class="card-title">${product.name}</h5>
            <div class="prices">
              ${hasPromotion
                ? `
                <div>
                  <p class="card-text custom-price-promotion text-decoration-line-through text-muted">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p class="card-text custom-price">R$${product.pricePromotion.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                `
                : `<p class="card-text custom-price mb-3">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`
              }
              <div>
                em até 3x de R$${(product.price / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} sem juros
              </div>

            </div>
            <div class="about-products"> 
              <button class="btn btn-buy" onclick="showDetails(${product.id})">Comprar</button>
              <button class="btn btn-eye" onclick="showProducts(${product.id})"> <i class="fa-solid fa-eye"></i> Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    `;
    burgerList.innerHTML += productCard;
});

  dishes.forEach((product) => {
    const hasPromotion = product.pricePromotion !== undefined;
    const productCard = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top custom-img-product" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <div class="prices">
              ${hasPromotion
                ? `<p class="card-text custom-price text-decoration-line-through text-muted">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                   <p class="card-text custom-price">R$${product.pricePromotion.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`
                : `<p class="card-text custom-price mb-3">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`
              }
            </div>
            <div class="about-products"> 
              <button class="btn btn-buy" onclick="showDetails(${product.id})">Comprar</button>
              <button class="btn btn-eye" onclick="showProducts(${product.id})"> <i class="fa-solid fa-eye"></i> Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    `;
    dishList.innerHTML += productCard;
  });
}

function showDetails(productId) {
  const product = products.find((p) => p.id === productId);
  alert(`Product: ${product.name}\nPrice: R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
}

function showProducts(productId) {
  const product = products.find((p) => p.id === productId);
  alert(`Product: ${product.name}\nPrice: R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
}

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );
  renderProducts(filteredProducts);
});

// Renderiza os produtos inicialmente
renderProducts(products);
