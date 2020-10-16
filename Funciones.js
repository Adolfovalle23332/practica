exports.calcular = (periodo, capital, interes, saldoFinal) => {
    
    let periodo = 0;
    let capital= 0;
    let tasaInteresDecimal = (tasaInteres / 100) / periodo;
    const datosTablaInteres = [];
    let saldoFinal = 0;
  
    // Transformar los años en meses
    periodo = Math.round(periodo * 12);
    saldoFinal = Number(capital);

    for (let index = 1; index <= periodo; index++) {

        interes = Number(saldoFinal) * Number(tasaInteresDecimal);
        interes = interes.toFixed(2);
        saldoFinal += Number(interes);
        mes++;
        datosTablaInteres.push({
            mes,
            capital,
            interes,
            saldoFinal
        });
        
    }
  
    return datosTablaInteres;
  };