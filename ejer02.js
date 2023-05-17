function Invertir()
{
    let palabra = document.getElementById("palabra").value;
    const pal_invert= palabra.split('').reverse().join('');
    console.log(palabra);
    document.getElementById("pal_invert").innerHTML = pal_invert;
}