let productEl = document.getElementById("product-card");
// Rendering Product inside the 2nd Container
let renderProduct = () => {
  return (productEl.innerHTML = productsALL.map((x) => {
    return `
    <div class="card m-1" style="width: 14rem;">
    <img src="${x.imgSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${x.name}</h5>
      <p class="card-text">${x.desc}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">₱${x.price}</li>
      <li class="list-group-item">${x.brand}</li>
    </ul>
    <div class="card-body">
      <button class="btn btn-outline-dark">Add to Cart </button>
    </div>
  </div>
    `
  }).join("")
  );
  };
renderProduct();

// Filtered Input Search
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function() {
  let filteredProducts = productsALL.filter(function(product) {
    return product.name.toLowerCase().includes(searchInput.value.toLowerCase()) || 
           product.desc.toLowerCase().includes(searchInput.value.toLowerCase()) ||
           product.price.toString().includes(searchInput.value);
  });
  // Rendering the Filtered Search Input
  productEl.innerHTML = filteredProducts.map((x) => {
    return `
    <div class="card m-1" style="width: 14rem;">
    <img src="${x.imgSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${x.name}</h5>
      <p class="card-text">${x.desc}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">₱${x.price}</li>
      <li class="list-group-item">${x.brand}</li>
    </ul>
    <div class="card-body">
      <button class="btn btn-outline-dark">Add to Cart </button>
    </div>
  </div>
    `
  }).join("");
});





