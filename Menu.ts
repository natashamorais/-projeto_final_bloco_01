import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Roupa } from "./src/model/Roupa";
import { Sapato } from "./src/model/Sapato";

export function menu() {
  let opcao: number, id: number, tipo, preco: number;
  let tamanho: number = 0;
  let numero: number = 0;
  let nome: string, roupa: string;
  let tipoProduto = ["Roupa", "Sapato"];

  const produtoController: ProdutoController = new ProdutoController();

  produtoController.cadastrarProduto(
    new Roupa(produtoController.gerarId(), "Saia rosa", 1, 32.0, 54)
  );

  produtoController.cadastrarProduto(
    new Sapato(produtoController.gerarId(), "tenis azul", 2, 25.0, 34)
  );

  while (true) {
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

    if (opcao == 0) {
      console.log("Você saiu, volte sempre!");
      console.log("\nBRECHÓ GENERATION -  SEU ESTILO ESTÁ AQUI!");
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\nCRIAR PRODUTO");
        nome = readlinesync.question("Digite o Nome do Produto: ");

        tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

        preco = readlinesync.questionFloat("Digite o preco: ");
        switch (tipo) {
          case 1:
            tamanho = readlinesync.questionInt("Digite o tamanho da roupa: ");
            produtoController.cadastrarProduto(
              new Roupa(produtoController.gerarId(), nome, tipo, preco, tamanho)
            );
            break;
          case 2:
            numero = readlinesync.questionInt("Digite o número do sapato: ");
            produtoController.cadastrarProduto(
              new Sapato(produtoController.gerarId(), nome, tipo, preco, numero)
            );
            break;
        }

        keyPress();
        break;
      case 2:
        console.log("\nLISTAR TODOS OS PRODUTOS");

        produtoController.listarTodosOsProdutos();
        keyPress();
        break;
      case 3:
        console.log("\nCONSULTAR PRODUTO POR ID");
        id = readlinesync.questionInt("Digite ID do produto: ");
        produtoController.procurarPorId(id);
        keyPress();
        break;
      case 4:
        console.log("\nATUALIZAR PRODUTO");
        id = readlinesync.questionInt("Digite ID do produto: ");
        let produto = produtoController.procurarPorId(id);
        console.log(produto);
        if (produto !== null) {
          nome = readlinesync.question("Digite o Nome do Produto: ");
          preco = readlinesync.questionFloat("Digite o preco: ");
          tipo = produto.tipo;
          switch (tipo) {
            case 1:
              tamanho = readlinesync.questionInt("Digite o tamanho da roupa: ");
              produtoController.atualizarProduto(
                new Roupa(id, nome, tipo, preco, tamanho)
              );
              break;
            case 2:
              numero = readlinesync.questionInt("Digite o número do sapato: ");
              produtoController.atualizarProduto(
                new Sapato(id, nome, tipo, preco, numero)
              );
              break;
          }
        } else console.log("\nSentimos muito o produto não foi encontrado");

        keyPress();
        break;
      case 5:
        console.log("\nDELETAR PRODUTO");
        id = readlinesync.questionInt("Digite ID do produto a ser deletado: ");
        produtoController.deletarProduto(id);
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
  readlinesync.prompt();
}

function about(): void {
  console.log(
    `Projeto desenvolvido por: Natasha Morais  \nGeneration Brasil \ngithub.com/natashamorais`
  );
}

menu();
