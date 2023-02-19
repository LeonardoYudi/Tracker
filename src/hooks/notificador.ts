import { store } from '../store';
import { NOTIFICAR } from '../store/tipo-mutations';
import { TipoNotificacao } from './../interfaces/Notificacao';

type Notificador = {
    notificar : (tipo:TipoNotificacao, titulo:string, texto:string)=>void
}

export default () : Notificador =>{
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string):void=> {
        store.commit(NOTIFICAR, {
          titulo,
          texto,
          tipo,
        });
    }

    return{
        notificar
    }
}
