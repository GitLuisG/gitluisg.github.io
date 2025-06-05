var action;
var ruta;

function set_action(ruta = "", action = ""){
    this.action = action
    this.ruta = ruta
  }
  
function get_ruter(){
    return Route + ruta + action
}
