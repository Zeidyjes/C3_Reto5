function tablaReserva(datos) {
    var dibujo = "<table>";
    dibujo += "<tr id='titulos'><th>ID Reserva</th><th>Computador</th><th colspan='3'>Cliente</th><th>Calificacion</th><th>Acciones</th></tr>"
    datos.forEach(element => {

        dibujo += "<tr><th>" + element.idReservation + "</th>"
        dibujo += "<th>" + element.computer.name + "</th>"
        dibujo += "<th>" + element.client.idClient + "</th>"
        dibujo += "<th  style='width: 200px;'>" + element.client.name + "</th>"
        dibujo += "<th>" + element.client.email + "</th>"
        dibujo += "<th>" + element.score + "</th>"
        dibujo += `<th><button onclick="editar('Reservation',${element.idReservation})">Editar</button>`
        dibujo += `<button onclick="eliminar('Reservation',${element.idReservation},true)">Borrar</button></th></tr>`

    });
    datos += "</table>"
    $("#tablaReserva").html(dibujo).show()
    $("#botonesIzq").show()
    limpiar_datos();
}

function tablaMensajes(datos) {
    var dibujo = "<table>";;
    dibujo += "<tr id='titulos'><th>Mensajes</th><th>Computador</th><th>Cliente</th><th>Acciones</th></tr>"
    datos.forEach(element => {

        dibujo += "<tr><th>" + element.messageText + "</th>"
        dibujo += "<th>" + element.computer.name + "</th>"
        dibujo += "<th>" + element.client.name + "</th>"
        dibujo += `<th><button onclick="editar('Message',${element.idMessage})">Editar</button>`
        dibujo += `<button onclick="eliminar('Message',${element.idMessage},true)">Borrar</button></th></tr>`
    });
    dibujo += "</table>";
    $("#tablaMensajes").html(dibujo).show();
    $("#botonesIzq").show()
    limpiar_datos();

}

function tablaCategoria(datos) {
    var dibujo = "<table>";;
    dibujo += "<tr id='titulos'><th>Categoria</th><th>Descripcion</th><th>Computadores</th><th>Acciones</th></tr>";
    datos.forEach(element => {
        var computadores = element.computers
        if (computadores.length === 0) {
            dibujo += "<tr><th>" + element.name + "</th><th>" + element.description + "</th><th> not computer </th><th>"
            dibujo += `<button onclick="editar('Category',${element.idCategoria})">Editar</button><br>`
            dibujo += `<button onclick="eliminar('Category',${element.idCategoria},true)">Borrar</button></th></tr>`
        } else {
            computadores.forEach(compu => {
                dibujo += `<tr><th>${element.name}</th><th>${element.description}</th><th> ${compu.name} </th>
                <th><button onclick="editar('Category',${element.idCategoria})">Editar</button><br>
                <button onclick="eliminar('Category',${element.idCategoria},false)">Borrar</button></th></tr>`
            });
        }
    });
    dibujo += "</table>";
    $('#tablaCategoria').html(dibujo).show();
    $("#botonesIzq").show()
    limpiar_datos();
}

function tablaComputador(datos) {
    var dibujo = "<table>";;
    var mensaje;
    var eliminar
    var reserva;
    dibujo += "<tr id='titulos'><th>Nombre</th><th>Marca</th><th> Año</th><th>Descripcion</th><th>Categoria</th><th id='botones'>Acciones</th></tr>";
    datos.forEach(element => {
        mensaje = element.messages;
        reserva = element.reservations;
        if (mensaje.length != 0 && reserva.length != 0) { eliminar = false } else { eliminar = true }
        dibujo += "<tr><th>" + element.name + "</th><th>" + element.brand + "</th><th>" + element.year + "</th><th>" + element.description + "</th><th>" + element.category.name + "</th><th>"
        dibujo += `<button onclick="editar('Computer',${element.id})">Editar</button><br>`
        dibujo += `<button onclick="eliminar('Computer',${element.id},${eliminar})">Borrar</button></th></tr>`
    });
    dibujo += "</table>";
    $("#tablaComputador").html(dibujo).show()
    $("#botonesIzq").show()
    limpiar_datos();

}

function tablaCliente(datos) {
    var dibujo = "<table>";;
    var eliminar;

    dibujo += "<tr id='titulos'><th>Nombre Cliente</th><th>Acciones</th></tr>"
    datos.forEach(element => {
        var reservas = element.reservations
        var mensajes = element.messages;
        console.log(reservas.length)
        if (mensajes.length === 0 && reservas.length === 0) {
            eliminar = true;
        } else {
            eliminar = false;
        }
        dibujo += `<tr><th>${element.name}</th><th>`
        dibujo += `<button onclick="editar('Client',${element.idClient})">Editar</button><br><button onclick="eliminar('Client',${element.idClient},${eliminar})">Borrar</button></th></tr>`
    });
    dibujo += "</table>";
    $("#tablaCliente").html(dibujo).show()
    $("#botonesIzq").show()
    limpiar_datos();

}