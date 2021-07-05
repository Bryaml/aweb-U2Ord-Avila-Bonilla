

var curso = {
  nombre: ""
  

};


function actualizar (){

    curso.nombre = document.getElementById("nombre").Value;

    actualizarficha();
}

function actualizarficha(){
    document.getElementById("nota").innerHTML = curso.nombre;
    
}