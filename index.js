var $fileconfig = 'app/config/';
var $filecore = 'app/core/';
var $filemain = 'app/class/';


function require(file){
    document.getElementById("app").innerHTML += '<script type="text/babel" src="' + file + '"></script>'
}

function is_file(file) {
    require(file)
    return true;
}

function autoload() {

    var file = 'nano_config.js';
    if (!is_file($fileconfig + file)) {
        console.log("El archivo " + file + " no se encuentra, es requerido para que " + $framework + " funcione.");
    }

    var file = 'settings.js';
    if (!is_file($filecore + file)) {
        console.log("El archivo " + file + " no se encuentra, es requerido para que " + $framework + " funcione.");
    }

    var file = 'Main.js';
    if (!is_file($filemain + file)) {
        console.log("El archivo " + file + " no se encuentra, es requerido para que " + $framework + " funcione.");
    }
    
    document.getElementById("app").innerHTML = new Main();
}

autoload();
