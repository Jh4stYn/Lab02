var entrada
let parametros
let codigo= ""
let url = ""

function retornarCodigo()
{
    let pack = document.getElementById("pack-content")
    entrada = document.getElementById("entrada")
    //Opteniendo valores y resteando input
    url = entrada.value
    entrada.value = ""
    let enlace = /(https:\/\/)?(meet.google.com\/)(...)-(....)-(...)(.+)?/i
    parametros = url.match(enlace)
    if(parametros != null)
    {
        codigo = `${parametros[3]}${parametros[4]}${parametros[5]}`
        pack.innerHTML = 
        `<h1>El código es: ${codigo}</h1>
        <div>
        <button onclick='location.reload()'>Volver</button>
        </div>`  
    }

}
