function compra(bebidas,frutas,abarrotes){
    var pagoTotal=bebidas+frutas+abarrotes;
    return pagoTotal;
}

document.write('Las compras en el supermercado');
document.write('<br>');
document.write(Math.round(compra(80.250,15.301,60.69)*100)/100);