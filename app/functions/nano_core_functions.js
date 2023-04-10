function reloj() {
    document.getElementById("app").innerHTML += '<div id="reloj"> </div>'
}

function update() {
    if (document.getElementById("reloj")) {
        const date = new Date();
        document.getElementById("reloj").innerHTML = date.toLocaleTimeString();
    }
}

setInterval(update, true);