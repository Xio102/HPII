function sueldo(diasTrabajados,horasLaboradas){
    var sueldo=diasTrabajados*horasLaboradas*0.13*25;
    return sueldo;
}

document.write('Els sueldo es:');
document.write('<br>');
document.write(sueldo(21,8));

