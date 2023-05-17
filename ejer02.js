function Invertir()
{
    let palabra = document.getElementById("palabra").value;
    let pal_invert = "";
    //console.log(palabra);
    for(var i = palabra.length - 1; i >=0; i--)
    {
        pal_invert = pal_invert + palabra.charAt(i);
    }
    alert(pal_invert);
}