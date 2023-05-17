function Invertir()
{
    let palabra = document.getElementById("palabra").value;
    const chars= palabra.split('');
    let pal_invert = "";
    console.log(palabra);
    alert(chars);
    document.getElementById("pal_invert").innerHTML = pal_invert;
}