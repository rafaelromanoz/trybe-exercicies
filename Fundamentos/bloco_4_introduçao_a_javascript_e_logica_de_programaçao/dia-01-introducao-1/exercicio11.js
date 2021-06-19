let salarioBruto = 20000.0;
let salariocomInss;
let ir;
let salarioFinal;

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
  salariocomInss = salarioBruto - (salarioBruto / 100) * 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salariocomInss = salarioBruto - (salarioBruto / 100) * 9;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salariocomInss = salarioBruto - (salarioBruto / 100) * 11;
} else {
  salariocomInss = salarioBruto - 570.88;
}

if (salariocomInss <= 1903.98) {
  ir = salariocomInss;
  console.log(ir);
} else if (salariocomInss >= 1903.99 && salariocomInss <= 2826.65) {
  ir = (salariocomInss / 100) * 7.5 - 142.8;
  salarioFinal = salariocomInss - ir;
  console.log(salarioFinal);
} else if (salariocomInss >= 2826.66 && salariocomInss <= 3751.05) {
  ir = (salariocomInss / 100) * 15 - 354.8;
  salarioFinal = salariocomInss - ir;
  console.log(salarioFinal);
} else if (salariocomInss >= 3751.06 && salariocomInss <= 4664.68) {
  ir = (salariocomInss / 100) * 22.5 - 636.13;
  salarioFinal = salariocomInss - ir;
  console.log(salarioFinal);
} else {
  ir = (salariocomInss / 100) * 27.5 - 869.36;
  salarioFinal = salariocomInss - ir;
  console.log(salarioFinal.toFixed(2));
}
