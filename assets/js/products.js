let productEl = document.getElementById("product-card");

let renderProduct = () => {
  return (productEl.innerHTML = productsALL.map((x) => {
    return `
    <div class="card m-1" style="width: 14rem;">
    <img src="${x.imgSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
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