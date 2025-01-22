const products = [
    { id: 1, name: "Vegan Burger", price: 25.0, image: "./assets/img/imgProducts/hamburger-vegano.png" },
    { id: 2, name: "Plant-Based Milk", price: 12.0, image: "./assets/img/imgProducts/hamburguer-vegano2.png" },
    { id: 3, name: "Organic Tofu", price: 15.5, image: "./assets/img/imgProducts/hamburguer-vegano3.png" },
    { id: 4, name: "Vegan Cheese", price: 18.0, image: "./assets/img/imgProducts/hamburguer-vegano4.png" },
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function renderProducts(productsToRender) {
    productList.innerHTML = "";
    productsToRender.forEach((product) => {
        const productCard = `
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text custom-price">R$${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <div class="about-products"> 
              <button class="btn btn-buy" onclick="showDetails(${product.id})">Comprar</button>
              <button class="btn btn-eye" onclick="showProducts(${product.id})"> <i class="fa-solid fa-eye"></i> Detalhes</button></div>
            </div>
          </div>
        </div>
      `;
        productList.innerHTML += productCard;
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

renderProducts(products);
