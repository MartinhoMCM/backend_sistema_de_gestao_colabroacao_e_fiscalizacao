export class Ocorrencia{
    id: number;
    nome_ocorrencia: string;
    descricao:string;
    latitude:string;
    longitude: string;
    localizacao: string;
    estado: number;
    imagemUrl: string;
     post_id: number;
    categoria_id: number;
    municipe_id: number;
    created_at: string;
    updated_at: string;

    constructor( id: number,nome_ocorrencia: string, descricao:string, latitude:string, longitude: string, localizacao: string, estado: number, imagemUrl: string, post_id: number, categoria_id: number, municipe_id: number, created_at: string, updated_at: string
    ){

        this.id=id;
        this.nome_ocorrencia=nome_ocorrencia;
        this.descricao=descricao;
        this.latitude=latitude;
        this.longitude=longitude;
        this.localizacao=localizacao;
        this.estado=estado;
        this.imagemUrl=imagemUrl;
        this.post_id=post_id;
        this.categoria_id=categoria_id;
        this.municipe_id=municipe_id;
        this.created_at=created_at;
        this.updated_at=updated_at;

    }
}