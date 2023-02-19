export enum TipoNotificacao{
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface Notificacao{
    titulo : string,
    texto : string,
    tipo : TipoNotificacao,
    id : number
}