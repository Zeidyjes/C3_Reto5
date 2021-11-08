function traerReporteStatus() {
    console.log("test");
    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-status",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table> <tr  id='titulos'><th colspan='2'>Reporte por Status</th></tr>";
    myTable += "<tr>";
    myTable += "<th>completadas";
    myTable += " "+ respuesta.completed + "</th>";
    myTable += "<th>canceladas";
    myTable += " "+ respuesta.cancelled + "</th>";
    myTable += "</tr>";
    myTable += "</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate() {

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    
    var inicio = new Date(fechaInicio)
    var fin = new Date(fechaCierre);
    var diferencia =(fin-inicio);
    
    var days =(diferencia+(1000 * 3600 * 24))/(1000 * 3600 * 24)
    

    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-dates/" + fechaInicio + "/" + fechaCierre,
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            if (days < 0){
                alert("debes ingresar una fecha final superior que la inicial")
            } else{
                pintarRespuestaDate(respuesta,fechaInicio,fechaCierre);
            }
            
        }
    });
}

function pintarRespuestaDate(respuesta,fechaA,fechaB) {
    var total = respuesta.length

    var myTable =`<table> <tr  id='titulos'><th colspan='2'>Reporte de ${fechaA} al ${fechaB}</th></tr>`;
    myTable += `<tr><th>Total Reservas ${total}</th></tr>`;
    myTable += "</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-clients",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta) {

    let myTable = "<table> <tr  id='titulos'><th colspan='4'>Reporte Top Reservas Clientes</th></tr>";
    myTable += "<tr id='subtitulos'><th>total</th><th>Nombre cliente</th><th>Email</th><th>Edad</th></tr>";

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<th>" + respuesta[i].total + "</td>";
        myTable += "<th>" + respuesta[i].client.name + "</td>";
        myTable += "<th>" + respuesta[i].client.email + "</td>";
        myTable += "<th>" + respuesta[i].client.age + "</td>";

        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClientes").html(myTable);
}