import { Produto } from "./Produto";


export class Sapato extends Produto{

    private _numero: number;
    private _cor:string;



	constructor(id: number, nome: string, tipo: number, preco: number, numero: number, cor:string) {
        super(id, nome,tipo, preco)
		this._numero = numero;
        this._cor =  cor;
	}


    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter cor
     * @return {string}
     */
	public get cor(): string {
		return this._cor;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter cor
     * @param {string} value
     */
	public set cor(value: string) {
		this._cor = value;
	}

    
     public visualizar(): void {
        super.visualizar();
        console.log(`número do sapato ${this._numero}`)
        console.log(`cor do sapato ${this._cor}`);
        
    }
}