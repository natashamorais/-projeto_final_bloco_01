import { Produto } from "../model/Produto";

export interface ProdutoRepository{
    //CRUD
    procurarPorId( id: number) :void;
    listarTodosOsProdutos():void;
    cadastrarProduto(produto : Produto) : void;
    atualizarProduto(produto : Produto) : void;
    deletarProduto(id : number) : void;
    
}
