var names = [];
var botonAgregar = document.getElementById('boton')
var limpieza = document.getElementById('Limpiar')
var input = document.getElementById("NameHere");
var eliminar= document.getElementById('delete')

//warmup
Math.random();
Math.random();
Math.random();

function Agregar() {
  const elTxtNombre = document.getElementById("NameHere");
  var str =   elTxtNombre.value;
  console.log("Hi " + str+" Welcome to the Randomizer");
  names.push(" "+str)

  elTxtNombre.value="";
  elTxtNombre.focus();
  document.getElementById("Lista_de_nombres").innerHTML=names;
}

function Limpiar(){
    document.getElementById("result").innerHTML= "";
      document.getElementById("Lista_de_nombres").innerHTML="";
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('boton').click();
  }

})


function choose(input){
  input.sort(()=>Math.random()-0.5);

}

 //names.sort(function choose() {return Math.random-0.5()
  //const resolution = names[Math.floor(Math.random() * names.length)];
  //console.log(resolution);
  //console.log(names);
//console.log("Random Item: "+resolution);

document.getElementById("random").onclick=  function() {
  choose(names);
  document.getElementById("result").innerHTML= names;

}



document.getElementById("random").onclick=  function() {
  choose(names);
  document.getElementById("result").innerHTML= names;

}

botonAgregar.onclick = function() {
  if ( document.getElementById("NameHere").value == "") {
    alert("Insert a name")
    return;
  }
  Agregar();
}

limpieza.onclick = function functionName() {
  Limpiar();
}
