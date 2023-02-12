// Get Element Modal ID
let shopCPU = document.getElementById("myModal");
let shopMB = document.getElementById("myModal2");
let shopRAM = document.getElementById("myModal3");
let shopCASE = document.getElementById("myModal4");
let shopPSU = document.getElementById("myModal5");
let shopGPU = document.getElementById("myModal6");
let shopSATA = document.getElementById("myModal7");
let shopNVME = document.getElementById("myModal8");
let shopHDD = document.getElementById("myModal9");
let shopMON = document.getElementById("myModal10");
let shopKB = document.getElementById("myModal11");
let shopMOUSE = document.getElementById("myModal12");
let shopHEADSET = document.getElementById("myModal13");



let cart = [];

// Render Products in the Modals and the DOM

// CPU Modal
let generateShop1 =()=> {
  let itemHTML = productCPU.map((x)=>{
    let {id, name, imgSrc, desc, price, brand} = x;
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${imgSrc}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${price.toLocaleString()}</li>
          <li class="list-group-item text-center">${brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="addToCart(${id})" type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  }).join("");
  return (shopCPU.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">CPU</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
      </div>
    </div>
  `);
};
generateShop1();






// Motherboard Modal
let generateShop2 =()=> {
  let itemHTML = productMB.map((x)=>{
    let {id, name, imgSrc, desc, price, brand} = x;
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${imgSrc}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${price.toLocaleString()}</li>
          <li class="list-group-item text-center">${brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="addToCart(${id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopMB.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Motherboard</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop2();

// Ram Modal
let generateShop3 =()=> {
  let itemHTML = productRAM.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopRAM.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Ram</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop3();

// PC Case Modal
let generateShop4 =()=> {
  let itemHTML = productCASE.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopCASE.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">PC Case</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop4();

// PSU Modal
let generateShop5 =()=> {
  let itemHTML = productPSU.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopPSU.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Powersupply</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop5();

// GPU Modal
let generateShop6 =()=> {
  let itemHTML = productGPU.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopGPU.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Graphics Card</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop6();

// SATA Modal
let generateShop7 =()=> {
  let itemHTML = productSATA.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopSATA.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Sata SSD</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop7();

// NVME Modal
let generateShop8 =()=> {
  let itemHTML = productNVME.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopNVME.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">NVME SSD</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop8();

// HDD Modal
let generateShop9 =()=> {
  let itemHTML = productHDD.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopHDD.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Hard drive</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop9();

// MONITOR Modal
let generateShop10 =()=> {
  let itemHTML = productMON.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopMON.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Monitor</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop10();

// KEYBOARD Modal
let generateShop11 =()=> {
  let itemHTML = productKB.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopKB.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Keyboard</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop11();

// MOUSE Modal
let generateShop12 =()=> {
  let itemHTML = productMOUSE.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopMOUSE.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Mouse</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop12();

// HEADSET Modal
let generateShop13 =()=> {
  let itemHTML = productHEADSET.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱${x.price.toLocaleString()}</li>
          <li class="list-group-item text-center">${x.brand}</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button onclick="increment(${x.id}) type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shopHEADSET.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Headset</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
            <!-- The Modal Footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

      </div>
    </div>
  `);
};
generateShop13();

// increment Function from scratch
function increment(id) {
  let selectedItem = id;
  let search = cart.find((x)=> x.id === selectedItem.id ); // check if there is item in the cart similar to selected item
  if(search === undefined){
    cart.push({
      id : selectedItem.id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }
  //console.log(cart);
  update(selectedItem.id);
};

//decrement
let decrement = () => {
  let selectedItem = id;
  let search = cart.find((x)=> x.id === selectedItem.id ); // check if there is item in the cart similar to selected item
  if(search.item === 0) return; //to stop decrementing the item to negative quantity
  else{
    search.item -= 1;
  }
 // console.log(cart);
  update();
};

//update function
let update = (id) => {
  let search = cart.find((x)=>x.id === id);
  console.log(search.item);
};



let cartBuilder = document.getElementById("builder-cart");
let generateBuilderCart = () => {
  if(cart.length !==0){
    return  cartBuilder.innerHTML = cart.map((x)=>{
      let {id, item} = x;
      let search = productsALL.find((y)=> y.id === id) || [];
      return `
      
      <h4>Build List</h4>
      <div class="col-12 d-flex text-center">
        <div class="col">
          <button type="button" class="btn btn-dark m-2 btn-sm " data-bs-toggle="modal" data-bs-target="#myModal13" id="print-list">Print List</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-danger btn-sm m-2" id="clear-build">Clear Build</button>
        </div> 
      </div>

      <div class="col-12 text-center">
        <h3>Build Total: </h3> <p id="build-total"><h3>0.00</h3></p>
        <button type="button" class="btn btn-success mb-1">ADD TO CART</button>
      </div>
  
      `
    } )
  }
  else{
    cartBuilder.innerHTML = 
    `     
          <h4>Your Total Build Price:</h4>
          <div class="col-12 d-flex text-center">
            <div class="col">
                <button type="button" class="btn btn-dark m-2 btn-sm " id="print-list">Print List</button>
            </div>
            <div class="col">
                <button type="button" class="btn btn-danger btn-sm m-2" id="clear-build">Clear Build</button>
             </div> 
            </div>

            <div class="col-12 text-center">
              <h3>Build Total: </h3> <p id="build-total"><h3>0.00</h3></p>
              <button type="button" class="btn btn-success mb-1">ADD TO CART</button>
           </div>
    `;
   
  };
};
generateBuilderCart();

let TotalAmount = () => {
  if(cart.length !== 0){
    let amount = cart.map((x) =>{
      let {item, id} = x;
      let search = productsALL.find((y)=> y.id === id) || [];
      return item + search.price;
    }).reduce((x,y)=>x+y,0);
    // console.log(amount);
    label.innerHTML = `
    <h4>Build List</h4>
    <div class="col-12 d-flex text-center">
      <div class="col">
        <button type="button" class="btn btn-dark m-2 btn-sm " data-bs-toggle="modal" data-bs-target="#myModal13" id="print-list">Print List</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-danger btn-sm m-2" id="clear-build">Clear Build</button>
      </div> 
    </div>

    <div class="col-12 text-center">
      <h3>Build Total: </h3> <p id=${amount.toLocaleString()}><h3>0.00</h3></p>
      <button type="button" class="btn btn-success mb-1">ADD TO CART</button>
    </div>
    `;
  }
  else return ;
};
TotalAmount();

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  //cartIcon.innerHTML = cart.map((x)=> x.item ).reduce((x,y)=>x+y,0) // Changing cartIcon Number
  //console.log(basket.map((x)=> x.item ).reduce((x,y)=>x+y,0));
  cartIcon.innerHTML= 100
};
 // everytime the application loads, calculation() runs






      

