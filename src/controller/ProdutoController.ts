import { Produto } from "../model/Produto"
import { ProdutoRepository } from "../repository/ProdutoRepository"

export class ProdutoController implements ProdutoRepository {
    
    procurarPorId(id: number): void {
        throw new Error("Method not implemented.")
    }
    listarTodas(): void {
        throw new Error("Method not implemented.")
    }
    cadastrar(produto: Produto): void {
        throw new Error("Method not implemented.")
    }
    atualizar(produto: Produto): void {
        throw new Error("Method not implemented.")
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.")
    }
    private listaProdutos: Array<Produto> = new Array<Produto>()
    id: number = 0

   
}