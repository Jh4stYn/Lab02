let tabla = "<div><table><tr>";
let n_Elementos;
let suma = 0;
const numerosTabla = [];
function generarTabla()
{
    n_Elementos = document.getElementById("n_Elemntos").value;
    console.log(n_Elementos);
    for (let i = 0; i < n_Elementos; i++) 
    {
      numerosTabla[i] = Math.floor(Math.random() * 200);
    }
    console.log(numerosTabla);
    let j = 0;
  for (let i = 0; i < numerosTabla.length; i++) 
  {    
    miTabla = miTabla + "<th>"+numerosTabla[i]+"</th>";
    j++;
    if(j % 5 == 0) 
    {
      miTabla = miTabla + "</tr><tr>"
    }
  }
  miTabla = miTabla + "</tr></table>"
  let modificar = document.getElementById("modificar");
  modificar.innerHTML = miTabla + "<div class='centrado'> <br><p id = 'boton'><button onclick='sumar()'>Sumar</button></p><p id='suma'></p></div>";
}