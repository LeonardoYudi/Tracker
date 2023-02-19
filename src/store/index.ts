
import Projeto from "../interfaces/Projeto";
import { Notificacao, TipoNotificacao } from "../interfaces/Notificacao";
import {createStore, Store , useStore as vuexUseStore} from "vuex"
import { InjectionKey } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO , EXCLUIR_PROJETO, NOTIFICAR} from "./tipo-mutations";


interface Estado{
    projetos: Projeto[]
    notificacoes : Notificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state:{
        projetos:[ ],
        notificacoes:[ ]
    },
    mutations:{
        [ADICIONA_PROJETO](state,nomeDoProjeto:string){
            const projeto = {
                id: new Date().toISOString(),
                nome : nomeDoProjeto
            } as Projeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state,projeto:Projeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state,id:string){
            state.projetos = state.projetos.filter(proj => proj.id !=id)
        },
        [NOTIFICAR](state, novaNotificacao : Notificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(()=>{
                state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            },3000)
        }
    }
})


export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}