import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = new Array<Produto>();
  id: number = 0;

  procurarPorId(id: number): Produto | null{
    let buscaproduto = this.buscarNoArray(id);

    if(buscaproduto !== null){
        buscaproduto.visualizar()
        return buscaproduto
    }
       
    
    else
        console.log("\nSentimos muito, o produto não foi encontrado")
    return null
  }
  listarTodosOsProdutos(): void {
    for (let produto of this.listaProdutos) {
      if (this.listaProdutos.length > 0) 
      produto.visualizar();
      else console.log("\nNão temos produtos para mostrar no momento");
    }
  }
  cadastrarProduto(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("\nO produto foi adicionado!");
  }

  atualizarProduto(produto: Produto): void {
    let buscaProduto = this.buscarNoArray(produto.id);

    if (buscaProduto !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
      console.log(`\n O produto com ID ${produto.id} foi Atualizado!`);
    } else {
      console.log("\nSentimos muito o produto não foi Encontrado");
    }
  }
  deletarProduto(id: number): void {
    let buscaProduto = this.buscarNoArray(id);

    if (buscaProduto !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
      console.log(`O produto com ID ${id} foi excluido!`);
    } else console.log("\nSentimos muito o produto não foi Encontrado!");
  }

  public gerarId(): number {
    return ++this.id;
  }

  public buscarNoArray(id: number): Produto | null {
    for (let produto of this.listaProdutos) {
      if (produto.id === id) return produto;
    }

    return null;
  }
}
