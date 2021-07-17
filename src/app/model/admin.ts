export class Administrador{

    id:number;
    mandato:number;
    usuario_id;

    constructor(id:number, mandato:number, usuario_id:number){
        this.id=id;
        this.mandato=mandato;
        this.usuario_id=usuario_id;
    }
}