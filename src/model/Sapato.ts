import { Produto } from "./Produto";


export class Sapato extends Produto{

    private _numero: number;
  


	constructor(id: number, nome: string, tipo: number, preco: number, numero: number,) {
        super(id, nome,tipo, preco)
		this._numero = numero;
      
	}


    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    
     public visualizar(): void {
        super.visualizar();
        console.log(`número do sapato ${this._numero}`)
        
    }
}