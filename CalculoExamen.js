// Calcula las cuotas basadas en el Examen
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)
exports.calculoExamen = (período, capital, interes,SaldoFinal) => {
 
  let período = 0;
  let capital= 0;
  let interes = interes / 100;
  let SaldoFinal= 2853.12;
  
 

  // Transformar los años en meses
  período = Math.round(Periodo* 12);

  
    // Obtener el interés por período
    interes = capital * interes;
    interes = interes.toFixed(2);

    

    // Actualizar el  (período)
    Periodo++;

    // Actualizar la deuda
    capital -= capital;
    capital = capital.toFixed(2);

    

    // Almacenar los valores en el arreglo
    cuotas.push({
      período,
      capital,
      interes,
    
      SaldoFinal,
    });
  }

  return cuotas;
};
