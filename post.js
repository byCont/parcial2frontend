function guardar(){
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const sale = new FormData(form);
        fetch('`http://127.0.0.1:8000/api/sales/${id}`', {
            method: 'POST',
            body: sale
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    });
    location.reload();
}

function editSale (id, nameVendedor,nameProducto, nameCliente, price, fechaCompra){
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const sale = new FormData(form);
        fetch('`http://127.0.0.1:8000/api/sales/${id}`', {
            method: 'PUT',
            body: sale
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    });
    location.reload();
}