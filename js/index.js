var curso = {
  nombre: ""

}


function actualizar (){
    curso.nombre  = document.getElementById("nombre").nodeValue;

    actualizarficha();
}

function actualizarficha(){
    document.getElementById("nota").innerHTML = curso.nombre;
}