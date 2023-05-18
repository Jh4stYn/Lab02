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
}
