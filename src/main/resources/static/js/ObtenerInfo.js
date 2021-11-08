function cargarDatos(entity,id){
    if (entity == 'Category'){
        var MsjError=[];
        var NomCategoria =$('#NomCategoria').val();
        var DescripcionCategoria =$("#DescripcionCategoria").val();
        if( NomCategoria ==null || NomCategoria ===''){
            MsjError.push('Ingresar el nombre de la categoria \n')
        }
        if (DescripcionCategoria ==null || DescripcionCategoria ===''){
            MsjError.push('Ingrese una  descripcion de categoria \n')}
        if (MsjError.length != 0){
                return alert(MsjError);
            }
            else{             
            datos={
                idCategoria:id,
                name:NomCategoria,
                description: DescripcionCategoria
            }   
               return datos;
            }   
    }
    if(entity === 'Computer'){
    var MsjError=[];
    var txtMarca =$("#txtMarca").val();
    var txtNombre =$("#txtNombre").val();
    var txtAños=$("#txtAños").val();
    var txtDescripcion = $("#txtDescripcion").val();
    var category =$("#Categoria").val();
    console.log(category)
    if( txtMarca ==null || txtMarca ===''){
        MsjError.push('Ingrese una marca \n')}
    if (txtNombre ==null || txtNombre ===''){
        MsjError.push('ingrese un nombre de computador \n')}
    if (txtAños ==null || txtAños ==='' || txtAños.length < 4 ||txtAños.length>4){
        MsjError.push('el año debe ser de cuatro digitos\n')}
    if (txtDescripcion ==null || txtDescripcion ===''){
            MsjError.push('ingrese la descripcion por favor \n')}
    if (category ==null || category ===''){
        MsjError.push('ingresa una categoria  o crea una categoria primero\n')}
    if (MsjError.length != 0){
        return alert(MsjError);
    }
    else{
        datos={
            id:id,
            brand:txtMarca,
            name:txtNombre,
            year:txtAños,
            description:txtDescripcion ,
            category:{idCategoria:category}
            }
       console.log(category);     
       return datos;}  
    }
    if(entity === 'Client'){
    var MsjError=[];
    var txtCliente=$("#txtCliente").val();
    var txtCorre =$("#txtCorre").val();
    var txtContraseña= $("#txtContraseña").val();
    var txtEdad =$("#txtEdad").val();

    if( txtCliente ==null || txtCliente ===''){
        MsjError.push('Ingresar el nombre del cliente \n')
    }
    if (txtEdad ==null || txtEdad ===''||100<txtEdad ){
        MsjError.push('edad no valida \n')}
    if (txtCorre ==null || txtCorre ===''){
        MsjError.push('ingrese un correo valido \n')}
    if (txtContraseña ==null || txtContraseña ===''){
            MsjError.push('ingrese una contraseña valida \n')}
    if (MsjError.length != 0){
        return alert(MsjError);
    }
    else{
        datos={
            idClient:id,
            email:txtCorre,
            password:txtContraseña,
            name:txtCliente,
            age:txtEdad        
        }
       return datos;
    }   
}

if(entity === 'Message'){
var MsjError=[];
var Clientes=$("#Clientes").val();
var txtMensaje=$("#txtMensaje").val();
var Computer=$("#Computer").val();
if (txtMensaje ==null || txtMensaje ==='' ){
    MsjError.push('debes ingresar un dato \n')}
if (Clientes ==null || Clientes ==='' ){
        MsjError.push('debes registrar primero un cliente\n')} 
if (Computer ==null || Computer ==='' ){
    MsjError.push('debes registrar primero un computador\n')} 
 if (MsjError.length != 0){
     return alert(MsjError);
 }
 else{
     datos={
        idMessage:id,
        messageText:txtMensaje,
        computer:{id:Computer},
        client:{idClient:Clientes},
              
     }
    return datos;
 }  
  }
if(entity === 'Reservation'){
var MsjError=[];
var re_Clientes=$("#re_Clientes").val();
var re_Computer= $("#re_Computer").val();
var estado = $('#status').val()
var fechaIncio= $("#fechaIncio").val()
var fechaFinal= $("#fechaFinal").val();
var Inicial=new Date(fechaIncio);
var final = new Date(fechaFinal);
var Actual =new Date();
var diferencia= (Inicial-Actual);
var diferencia2=(final-Actual)
days1 = (diferencia+(1000 * 3600 * 24))/(1000 * 3600 * 24)
days2 = (diferencia2+(1000 * 3600 * 24))/(1000 * 3600 * 24)
console.log(days1)
console.log(days2)
if (re_Clientes ==null || re_Clientes ==='' ){
 MsjError.push('debes registrar primero un cliente \n')}
if (re_Computer ==null || re_Computer ==='' ){
        MsjError.push('debes registrar primero un computador\n')} 
if(days1 < 0 || fechaIncio ==null || fechaIncio ===''){
    MsjError.push("debes ingresar una fecha inicial mayor que la actual\n")
}
if(days2 < 0 || days2 < days1 || fechaFinal ==null || fechaFinal ===''){
    MsjError.push("debes ingresar una fecha final  mayor  que la fecha inicial\n")
}
if (MsjError.length != 0){
    return alert(MsjError);
}
else{
  datos ={
    idReservation:id,
    startDate:fechaIncio,
    status:estado,
    devolutionDate :fechaFinal,
    client:{idClient:re_Clientes},
    computer:{id:re_Computer}
                        }
  }
   return datos;
}

}

function editarCategoria(respuesta){
    $("#regCategorias,#btnActualizar").show();
    $("#botonesIzq").hide();
    $('#NomCategoria').val(respuesta.name);
    $("#DescripcionCategoria").val(respuesta.description);

var dibujo = `<button class="ui purple button"  onclick="actualizar('Category',${respuesta.idCategoria})">Actualizar </button>`
$("#btnActualizar").html(dibujo).show();}

function editarCliente(respuesta){
    $("#regClientes").show();
    $("#botonesIzq").hide();
    $("#txtCliente").val(respuesta.name);
    $("#txtCorre").val(respuesta.email);
    $("#txtContraseña").val(respuesta.password);
    $("#txtEdad").val(respuesta.age);
    var dibujo = `<button class="ui purple button"  onclick="actualizar('Client',${respuesta.idClient})">Actualizar </button>`
    $("#btnActualizar").html(dibujo).show();
}

function editarComputador(respuesta){
    obtenerDatos('Category')
    $("#txtComputer").show();
    $("#botonesIzq").hide();
    $("#txtMarca").val(respuesta.brand);
    $("#txtNombre").val(respuesta.name);
    $("#txtAños").val(respuesta.year);
    $("#txtDescripcion").val(respuesta.description);
    $("#Categoria").val(respuesta.category.idCategoria);
    var dibujo = `<button  class="ui purple button" onclick="actualizar('Computer',${respuesta.id})">Actualizar </button>`
    $("#btnActualizar").html(dibujo).show();
}

function editarMensajes(respuesta){
obtenerDatos('Computer')
obtenerDatos('Client')
$("#registroMsj").show();
$("#botonesIzq").hide();
$("#Clientes").val(respuesta.client.idClient)
$("#txtMensaje").val(respuesta.messageText)
$("#Computer").val(respuesta.computer.id)
var dibujo = `<button class="ui purple button" onclick="actualizar('Message',${respuesta.idMessage })">Actualizar </button>`
$("#btnActualizar").html(dibujo).show();
}

function editarReserva(respuesta){
obtenerDatos('Computer')
obtenerDatos('Client')
$("#registroReservas").show();
$("#botonesIzq").hide();
var fechaini=new Date(respuesta.startDate);
var año1=parseInt(fechaini.getFullYear())
var mes1=parseInt(fechaini.getMonth()+1)
var dia1=parseInt(fechaini.getUTCDate())
if (dia1 < 10){
    dia1="0"+dia1
}
console.log(dia1)
$("#re_Clientes").val(respuesta.client.idClient);
$("#re_Computer").val(respuesta.computer.id);
$("#fechaIncio").val(año1+"-"+mes1+"-"+dia1);
var fechafin=new Date(respuesta.devolutionDate);
console.log(fechaini,fechafin)
var year2=parseInt(fechafin.getFullYear())
var mess2=parseInt(fechafin.getMonth()+1)
var diaa2=parseInt(fechafin.getUTCDate())
if (diaa2 < 10){
    diaa2="0"+diaa2
}
$("#fechaFinal").val(year2+"-"+mess2+"-"+diaa2);
console.log(year2,mess2,diaa2,diaa2)
var dibujo = `<button class="ui purple button" onclick="actualizar('Reservation',${respuesta.idReservation })">Actualizar </button>`
$("#btnActualizar").html(dibujo).show();
}

function limpiar_datos(){
$("input").val(" ")

    
}