let peca='BISPO'
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

 