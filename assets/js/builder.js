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

let cart = JSON.parse(localStorage.getItem("data")) || [];

// Render Products in the Modals

// CPU Modal
let generateShop1 =()=> {
  let itemHTML = productCPU.map((x)=>{
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
          <button onclick="increment(${x.id})" type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

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

//increment Function from scratch
function increment(id) {
  console.log(`The id of the item clicked is: ${id}`);
  // Add your logic for incrementing the item here
    let item = productCPU.find((x) => x.id === id);

  let index = cart.findIndex((x) => x.id === id);

  if (index === -1) {
    item.qty = 1;
    cart.push(item);
  } else {
    cart[index].qty++;
  }

  console.log(cart);
}





      

