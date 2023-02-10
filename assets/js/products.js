let productEl = document.getElementById("product-card");

let basket = JSON.parse(localStorage.getItem("data")) || [];  // JSON.parse(localStorage.getItem("data")) = retrieve data in the local storage, [] = empty array if no data is stored in the local storage 


// Rendering Product inside the 2nd Container
let renderProduct = () => {
  return (productEl.innerHTML = productsALL.map((x) => {

    let { id, name, price, desc, imgSrc, brand } = x;
    let search = basket.find((x)=> x.id === id) || [] // search for similar id in the local storage if it exist, place the corresonding item in the quantity
    return `
    <div class="card m-1" style="width: 14rem;">
    <img src="${imgSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${desc}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">₱${price.toLocaleString()}</li>
      <li class="list-group-item">${brand}</li>
    </ul>
    <div class="card-body"> 
      <button onclick="increment(${id})" class="btn btn-outline-dark">Add to Cart </button>
      <span><i onclick="increment(${id})" class="bi bi-plus-square"></i><span id="${id}">
      ${search.item === undefined? 0: search.item} 
      </span><i onclick="decrement(${id})" class="bi bi-dash-square"></i>
      </span>
    </div>
  </div>
    `
  }).join("")
  );
  };
renderProduct();

// Increment Decrement and Update Functions (continue!)
//increment Function
let increment = (id) => {
  let search = basket.find((x)=> x.id === id ) // check if there is item in the basket similar to selected item

  if(search === undefined){
    basket.push({
      id : id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }



  // console.log(basket);
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));  //Setting Data into Local Storage. data = key
};

//decrement function
let decrement = (id) => {
  let search = basket.find((x)=> x.id === id )

  if (search === undefined) return; // when the search is undefined, do nothing
  else if(search.item === 0) return;
  else{
    search.item -= 1;
  }

  update(id);

  basket = basket.filter((x)=> x.item !== 0);   //filtering item in the local storage that have 0 items, basket is the array in the local storage. filter x is targeting items in the array in the local storage. it removes item with 0

  // console.log(basket);
  
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x)=>x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};


// Calculation of cart quantity inside the Cart Icon

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=> x.item ).reduce((x,y)=>x+y,0) // Changing cartIcon Number
  //console.log(basket.map((x)=> x.item ).reduce((x,y)=>x+y,0));
};
calculation(); // everytime the application loads, calculation() runs





// Filtered Input Search
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

// searchButton.addEventListener("click", function() {
//   let filteredProducts = productsALL.filter(function(product) {
//     return product.name.toLowerCase().includes(searchInput.value.toLowerCase()) || 
//            product.desc.toLowerCase().includes(searchInput.value.toLowerCase()) ||
//            product.price.toString().includes(searchInput.value);
//   });

  // Rendering the Filtered Search Input
//   productEl.innerHTML = filteredProducts.map((x) => {
//     return `
//     <div class="card m-1" style="width: 14rem;">
//     <img src="${x.imgSrc}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${x.name}</h5>
//       <p class="card-text">${x.desc}</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">₱${x.price}</li>
//       <li class="list-group-item">${x.brand}</li>
//     </ul>
//     <div class="card-body">
//       <button class="btn btn-outline-dark">Add to Cart </button>
//     </div>
//   </div>
//     `
//   }).join("");
// });

searchButton.addEventListener("click", function() {
  let filteredProducts = productsALL.filter(function(product) {
    return product.name.toLowerCase().includes(searchInput.value.toLowerCase()) || 
           product.desc.toLowerCase().includes(searchInput.value.toLowerCase()) ||
           product.price.toString().includes(searchInput.value);
  });

  //Rendering the Filtered Search Input
  productEl.innerHTML = filteredProducts.map((x) => {
    let { id, name, price, desc, imgSrc, brand } = x;
    let search = basket.find((x)=> x.id === id) || [];
    return `
    <div class="card m-1" style="width: 14rem;">
    <img src="${imgSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${desc}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">₱${price.toLocaleString()}</li>
      <li class="list-group-item">${brand}</li>
    </ul>
    <div class="card-body"> 
      <button onclick="increment(${id})" class="btn btn-outline-dark">Add to Cart </button>
      <span><i onclick="increment(${id})" class="bi bi-plus-square"></i><span id="${id}">
      ${search.item === undefined? 0: search.item} 
      </span><i onclick="decrement(${id})" class="bi bi-dash-square"></i>
      </span>
    </div>
  </div>
    `
  }).join("");
});











