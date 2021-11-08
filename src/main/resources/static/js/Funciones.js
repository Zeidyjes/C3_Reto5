$(document).ready(function () {

})
function eliminar(entity, id, boleano) {
    direccion = "http://localhost:8080/api/" + entity + "/" + id;
  $('#btnActualizar').hide()
    var datos
    switch (entity) {
        case 'Category': datos = {
            idCategoria: id
        }
            if (!boleano) { alert("para eliminar una categoria esta no debe tener computadores") }
            break;
        case 'Client': datos = {
            idClient: id
        }
            if (!boleano) { alert("para eliminar un cliente este no debe tener reservas ni mensajes") }
            break;
        case 'Computer': datos = {
            id: id
        }
            if (!boleano) { alert("no se puede eliminar el computador tiene mensajes y reservaciones") }
        default: break;

    }
    if (boleano) {
        metodoDel(direccion, datos, entity)
    }
}

function actualizar(entity, id) {
    direccion = "http://localhost:8080/api/" + entity + "/update"
    console.log(direccion);
    datos = cargarDatos(entity, id);
    console.log(datos)
    if (typeof (datos) != 'undefined') {
        metodoPut(datos, direccion, entity);
    }
    

}

function guardar(entity) {
    direccion = "http://localhost:8080/api/" + entity + "/save";
    console.log(direccion);
    datos = cargarDatos(entity);
    console.log(datos)
    if (typeof (datos) != 'undefined') {
        metodoPost(datos, direccion, entity);
    }
    

}

function listar(entity) {
    direccion = "http://localhost:8080/api/" + entity + "/all"
    console.log(direccion)

    metodoGet(direccion, entity);

}

function editar(entity, id) {
    direccion = "http://localhost:8080/api/" + entity + "/" + id;
    console.log(direccion)
    metodoGet(direccion, entity, id)
}
function cargarlista(datos, entity) {
    var dibujo
    switch (entity) {
        case 'Computer':
            datos.forEach(element => {
                console.log(typeof (element.id));
                dibujo += `<option value=${element.id}>${element.name}</option> `
            });
            $('#Computer,#re_Computer').html(dibujo);
        case 'Category':
            datos.forEach(element => {
                console.log(typeof (element.id));
                dibujo += `<option value=${element.idCategoria}>${element.name}</option> `
            });
            $("#Categoria").html(dibujo);
            break;
        case 'Client':
            datos.forEach(element => {
                dibujo += `<option value=${element.idClient}>${element.idClient}</option> `
                console.table(dibujo)
            });
            $("#Clientes,#re_Clientes").html(dibujo);
            break;
        default:
            break;
    }
}
function obtenerDatos(entity) {
    $.ajax({
        url: "http://localhost:8080/api/" + entity + "/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {

            console.log(respuesta);
            cargarlista(respuesta, entity);
        },

        error: function (xhr, status) {
            console.log(status);
        }

    });
}

