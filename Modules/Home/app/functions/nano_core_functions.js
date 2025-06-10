function buttonlink(enlace, name) {
    return (
        '<a id="btn" name="btn"  href="' +
        enlace +
        '">' +
        name +
        "</a>"
    );
}

function creararchivo(){
  let referencia;
 const contenido = document.querySelector("#editor").value;
 const archivo = referencia.createWritable();
 archivo.write(contenido);
 archivo.close();
}


function reloj() {
  document.getElementById("app").innerHTML += '<textarea id="editor" cols="30" rows="10"></textarea>'
    document.getElementById("app").innerHTML += '<div id="reloj"> </div>'
}

function update() {
    if (document.getElementById("reloj")) {
        const date = new Date();
        document.getElementById("reloj").innerHTML = date.toLocaleTimeString();
    }
}

creararchivo()
setInterval(update, true);