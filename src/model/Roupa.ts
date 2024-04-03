import { Produto } from "./Produto";


export class Roupa extends Produto{

    private _tamanho: number;
    


	constructor(id: number, nome: string, tipo: number, preco: number, tamanho: number) {
        super(id, nome,tipo, preco)
		this._tamanho = tamanho;
	}

    /**
     * Getter tamanho
     * @return {number}
     */
	public get tamanho(): number {
		return this._tamanho;
	}

    /**
     * Setter tamanho
     * @param {number} value
     */
	public set tamanho(value: number) {
		this._tamanho = value;
	}

    
     public visualizar(): void {
        super.visualizar();
        console.log("")
        console.log(`tamanho da roupa ${this._tamanho}`);
        
    }
}