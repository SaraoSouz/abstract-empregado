export class Cobra {

    //atributos da classe
    private tamanho: string;
    private especie: string;
    private cor: string;

    //método construtor
    public constructor (
        _tamanho: string,
        _especie: string,
        _cor: string,){

            this.tamanho = _tamanho;
            this.especie = _especie;
            this.cor = _cor
        }

        //métodos GETTERS and SETTERS
    public getTamanho(): string{
        return this.tamanho;
    }

    public setComprimento(_tamanho: string){
        this.tamanho = _tamanho;
    }

    public getEspecie(){
        return this.especie;
    }

    public setEspecie(_especie: string){
        this.especie = _especie;
    }

    public getCor(){
        return this.cor;
    }

    public setCor(_cor: string){
        this.cor = _cor;
    }
}