export class Usuario{

    id:number;
    nome: string;
    email: string;
    sexo: string;
    data_nascimento: string;
    nif: string;
    token?:string;

        
    constructor(id:number, nome: string, email: string, sexo: string ,
        data_nascimento: string, nif: string, token?:string){
        this.id=id;
        this.nome=nome;
        this.email=email;
        this.sexo=sexo;
        this.data_nascimento=data_nascimento;
        this.nif=nif;
        this.token=token
    }

   fromJSON(json:Map<string, any>):void{
         this.id=json['id'];
         this.nome=json['nome'];
         this.email=json['email'];
         this.sexo =json['sexo'];
         this.data_nascimento=json['data_nascimento'];
         this.nif=json['nif'];
         this.token=json['token'];
    }
}