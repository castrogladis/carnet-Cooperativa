function generarCarnet (){
    let asegurado = document.getElementById("asegurado").value,
        poliza = document.getElementById("poliza").value,
        numasegurado = document.getElementById("numasegurado").value,
        fechaDesde = document.getElementById("fechaDesde").value,
        fechaHasta = document.getElementById("fechaHasta").value,
        marca = document.getElementById("marca").value,
        modelo = document.getElementById("modelo").value,
        tipo = document.getElementById("tipo").value;

   let carnetGenerado = `
        <p>Asegurado: ${asegurado} Póliza: ${poliza} </p>
        <p>Número de Asegurado: ${numasegurado}</p>
        <p>Vigencia desde: ${fechaDesde} Hasta: ${fechaHasta} </p>
        <p>Marca: ${marca} Modelo: ${modelo} Tipo: ${tipo}</p>
        `

        document.getElementById("carnetGenerado").innerHTML = carnetGenerado
        console.log("Carnet Generado");

        document.getElementById("boton").addEventListener("click", generarCarnet)

        document.getElementById("asegurado").value = "",
        document.getElementById("poliza").value = "",
        document.getElementById("numasegurado").value = "",
        document.getElementById("fechaDesde").value = "",
        document.getElementById("fechaHasta").value = "",
        document.getElementById("marca").value = "",
        document.getElementById("modelo").value = "",
        document.getElementById("tipo").value = "";
       
}


console.log(generarCarnet());
this.reset();