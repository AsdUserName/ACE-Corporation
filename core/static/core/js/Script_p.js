function agregarAlCarrito(productoId) {
    // Obtener el CSRF token para enviarlo en la solicitud POST
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    
    // Crear un objeto FormData para enviar los datos del producto
    const formData = new FormData();
    formData.append('producto_id', productoId);
    
    // Enviar la solicitud POST a la vista de Django que maneja el carrito de compras
    fetch('/carrito/agregar/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Actualizar la interfaz de usuario con la información del carrito de compras
        // ...
    });
}
