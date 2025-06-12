function mostrarPresentacion() {
    const nombre = document.getElementById("nombre").value;
    const artista = document.getElementById("artista").value;
    const edad = document.getElementById("edad").value;
    const comida = document.getElementById("comida").value;
    const cancion = document.getElementById("cancion").value;

    let generacion;
    if (edad >= 60) {
        generacion = "Baby Boomer";
    } else if (edad >= 45) {
        generacion = "Generación X"
    } else if (edad >= 29) {
        generacion = "Millennial"
    } else if (edad >= 13) {
        generacion = "Generación Z"
    } else {
        generacion = "Alpha"
    }

    const resultado = `
        <strong>Hola soy ${nombre}</strong>
        <br>
        <strong>Tengo ${edad} años y pertenezco a la generación ${generacion} </strong>
        <br>
        <br>
        Mi artista favorito: <em>${artista}</em>
        <br>
        Mi comida favorita: <em>${comida}</em>
        <br>
        Mi canción favorita: <em>${cancion}</em>
        <br>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}