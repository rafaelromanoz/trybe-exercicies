function operacoesAritmeticas(num1,num2){
    console.log(num1+num2)
    console.log(num1-num2)
    console.log(num1*num2)
    console.log(num1/num2)
    console.log(num1%num2)
}

console.log('____________________________________________________________________')


function maiorDeDois(num1,num2){
    if(num1>num2){
        console.log ('o maior é '+num1)
    }
    else if(num2>num1){
        console.log('o maior é '+num2)
    }
    else{
        console.log('os dois são iguais')
    }
}

console.log('____________________________________________________________________')

function maiorDeTres(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log("O número maior é "+num1)
    }
    else if(num2>num1 && num2>num3){
        console.log(" o número maior é "+num2)
    }
    else if(num3>num1 && num3>num2){
        console.log(' o número maior é'+num3)
    }
}

console.log('____________________________________________________________________')

function positiveNegative(valor){
    if(valor>0){
        console.log('positive')
    }
    else if(valor<0){
        console.log('negative')
    }
    else{
        console.log('zero')
    }
}

console.log('____________________________________________________________________')

function angulos(angulo1,angulo2,angulo3){
    if (angulo1+angulo2+angulo3==180){
        console.log('true')
    }
    else if(angulo1+angulo2+angulo3 !==180 && angulo1+angulo2+angulo3 >=0){
        console.log('false')
    }
    else{
        console.log('inválido')
    }
    
}

console.log('____________________________________________________________________')

function xadrez(peca){
    let peca1=peca.toLowerCase();




    switch(peca1){
        case 'cavalo':
            console.log('Se movimenta em L')
             break;
    
             case 'bispo':
             console.log('Se movimenta somente na diagonal por todo o tabuleiro')
             break;
    
             case 'torre':
                 console.log('Se movimenta em linha reta ou para os lados, por todas as casas.')
                 break;
    
                case 'rei':
                    console.log('Se movimenta para qualquer lado ou direção, todavia, somente de casa em casa')
                    break;
                
                    case 'rainha':
                        console.log('Pode se movimentar para qualquer lado e direção')
            
    
             default:
                 console.log('Peça inválida')
     }
    
}

console.log('____________________________________________________________________')

function notaPorcento(nota){
    if (nota >=90 && nota<=100){
        console.log('A')
      }
      else if(nota>=80 && nota<90){
        console.log('B')
      }
      else if(nota>=70 && nota<80){
        console.log('C')
      }
      else if(nota>=60 && nota<70){
        console.log('D')
      }
      else if(nota>=50 && nota<60){
        console.log('E')
      }
      else if(nota>=0 && nota<50){
        console.log('F')
      }
      else{
        console.log('Insira um número entre 0 e 100')
      }
}

console.log('____________________________________________________________________')

function tresNumerosPar(num1,num2,num3){
    if(num1%2==0 || num2%2==0 || num3%2==0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

console.log('____________________________________________________________________')

function tresNumerosImpar(num1,num2,num3){

if(num1%2!=0 || num2%2!=0 || num3%2!=0){
    console.log(true)
}
else{
    console.log(false)
}
}

console.log('____________________________________________________________________')

function calculoInssIR(salarioBruto){
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
}

operacoesAritmeticas(20,30)
maiorDeDois(20,30)
maiorDeTres(20,30,40)
positiveNegative(20)
angulos(60,70,80)
xadrez('dama')
notaPorcento(60)
tresNumerosImpar(20,30,40)
tresNumerosPar(40,80,30)
calculoInssIR(6000)
