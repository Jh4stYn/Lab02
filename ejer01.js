var n_day;
const date = new Date();

function getDay(n_day = date.getDay)
{
    let dia;
    switch(n_day)
    {
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
    }
    
    console.log(dia);    
}