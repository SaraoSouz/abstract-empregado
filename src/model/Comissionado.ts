

 export class Bola{

    //atributos da classe
   
    private material: string;
    private marca: string;
    private peso: string;

    //método construtor
    public constructor (
    _material: string,
    _marca: string,
    _peso: string,)

    {
        this.material = _material;
        this.marca = _marca;
        this.peso = _peso;
       
    }

     //métodos GETTERS and SETTERS
     public getMaterial(){
        return this.material;
    }

    public setMaterial(_material: string){
        this.material = _material;
    }
    
    public getMarca(){
        return this.marca;
    }

    public setMarca(_marca: string){
        this.marca = _marca;
    }

    public getPeso(){
        return this.peso;
    }

    public setPeso(_peso: string){
        this.peso = _peso;
    }
   




 }