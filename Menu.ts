
import readlinesync =  require('readline-sync')

export function menu() {
    let opcao:number;
    
    while(true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BRECHÓ GENERATION                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("          1 - CRIAR PRODUTO                          ");
        console.log("          2 - LISTAR TODOS OS PRODUTOS               ");
        console.log("          3 - CONSULTAR PRODUTO POR ID               ");
        console.log("          4 - ATUALIZAR PRODUTO                      ");
        console.log("          5 - DELETA PRODUTO                         ");
        console.log("          0 - SAIR                                   ");
        console.log("                                                     ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 0) {
            console.log("Você saiu, volte sempre!");
            console.log("\nBRECHÓ GENERATION -  SEU ESTILO ESTÁ AQUI!");
            about()
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nCRIAR PRODUTO");
                keyPress();
                break;
            case 2:
                console.log("\nLISTAR TODOS OS PRODUTOS");
                keyPress();
                break;
            case 3:
                console.log("\nCONSULTAR PRODUTO POR ID");
                keyPress();
                break;
            case 4:
                console.log("\nATUALIZAR PRODUTO");
                keyPress();
                break;
            case 5:
                console.log("\nDELETAR PRODUTO");
                keyPress();
                break;
            default:
                console.log("\nOPÇÃO INVÁLIDA!");
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
}

function about(): void {
    console.log(`Projeto desenvolvido por: Natasha Morais  \nGeneration Brasil \ngithub.com/natashamorais`);
}

menu();