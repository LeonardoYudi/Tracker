import { NOTIFICAR } from '../store/tipo-mutations';
import { TipoNotificacao } from "../interfaces/Notificacao";
import { store } from '../store';

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string):void {
            store.commit(NOTIFICAR, {
              titulo,
              texto,
              tipo,
            });
        }
    }
}
