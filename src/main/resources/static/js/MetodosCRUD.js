function metodoPost(datos, direccion, entity) {

    console.log(datos)
    console.log(direccion)
    $.ajax({
        url: direccion,
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(datos),

        success: function (respuesta) {
            console.log("se guardo")
            listar(entity)
        },
        error: function (xhr, status) {
            console.log(status)
        }
    });
}
function metodoGet(direccion,entity,numid) {
     $.ajax({
        url: direccion,
        datatype: "JSON",
        type: 'GET',

        success: function (respuesta) {
            console.log(respuesta);
            console.log(numid);
                if (typeof numid === 'undefined') {
                if (entity == 'Category') {  
                tablaCategoria(respuesta) }
                if (entity == 'Computer') { tablaComputador(respuesta) }
                if (entity == 'Client') { tablaCliente(respuesta) }
                if (entity == 'Message') { tablaMensajes(respuesta) }
                if (entity == 'Reservation') { tablaReserva(respuesta) }
               } 
            if( numid > 0){
                if (entity == 'Category') { editarCategoria(respuesta) }
                if (entity == 'Computer') { editarComputador(respuesta) }
                if (entity == 'Client') { editarCliente(respuesta) }
                if (entity == 'Message') { editarMensajes(respuesta) }
                if (entity == 'Reservation') { editarReserva(respuesta) }
            } 
        
        },
        error: function (xhr, status) {
            console.log(status)
        }
    });
}

function metodoPut(datos,direccion,entity){

    $.ajax({
        url:direccion,
        contentType:"application/json",
        data:JSON.stringify(datos),
        type:'PUT',

        success: function(respuesta){
            console.log("actualizado")
            $("#btnActualizar").hide();
            listar(entity);
        },
        error: function (xhr, status) {
            console.log(status)
        }

    });
}

function metodoDel(direccion,datos,entity){
    $.ajax({
        url:direccion,
        data:JSON.stringify(datos),
        type: 'DELETE',
        contentType:"application/JSON",

        success:function(respuesta){
            console.log("eliminado");
            listar(entity);
                      },
        error: function(xhr,status){
            console.log(status);        
        }
    });


}

