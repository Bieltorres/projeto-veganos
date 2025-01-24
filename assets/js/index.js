const handleCategoryFilter = () => {
    const selectedCategories = [];
    const burgerCheckbox = document.getElementById("categoryBurger");
    const dishCheckbox = document.getElementById("categoryDish");
  
    if (burgerCheckbox.checked) selectedCategories.push("burger");
    if (dishCheckbox.checked) selectedCategories.push("dish");
  
    filteredProducts = products.filter((product) =>
      selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true
    );
  
    currentPage = 1; // Reseta para a primeira página após o filtro
    renderProducts(currentPage);
    renderPagination();
  
    console.log("Categorias selecionadas:", selectedCategories);
  };
  