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
    