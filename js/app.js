function mostrarProductos() {
    const contenedor = document.getElementById("producto-contenedor");
  
    fetch('/js/stock.json')
      .then((response) => response.json())
      .catch(error => console.log(error))
      .then((productos) => {
        productos.forEach((producto) => {
              const div = document.createElement('div');
  
              div.classList.add("product-container");
              div.classList.add("col-sm-6");
              div.classList.add("col-md-4");
              div.classList.add("col-lg-3");
              div.classList.add('d-flex');
              div.classList.add('justify-content-center');
              div.classList.add('text-black');
  
              div.innerHTML = `
              <div class='box-img'>
              <div class="card-top p-2">
                  <div class = "d-inline-flex">
                     <h3 class="text-black">${producto.descripcion}</h3>
                 </div>
                 <img class="prod-img" src='${producto.img}'/>
                <h4><span class="text-muted">us</span>$${producto.precio}</h4>
                <div class="circle-product-bg"> </div>
              </div>
              `
              contenedor.appendChild(div);
  
       })
    });  
}

mostrarProductos();

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});