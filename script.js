fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    const productos = data;
    const buscador = document.getElementById('buscador');
    const resultado = document.getElementById('resultado');
    const botonBuscar = document.getElementById('botonBuscar');

    mostrarProductos(productos);

    buscador.addEventListener('input', function() {
      filtrarProductos();
    });

    botonBuscar.addEventListener('click', function() {
      filtrarProductos();
    });

    function filtrarProductos() {
      const texto = buscador.value.toLowerCase();
      const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto)
      );
      mostrarProductos(productosFiltrados);
    }

    function mostrarProductos(productos) {
      resultado.innerHTML = '';
      productos.forEach(producto => {
        resultado.innerHTML += `
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Categoría: ${producto.categoria}</p>
                <p class="card-text">Disponible: ${producto.disponible ? 'Sí' : 'No'}</p>
              </div>
            </div>
          </div>
        `;
      });
    }
  });
