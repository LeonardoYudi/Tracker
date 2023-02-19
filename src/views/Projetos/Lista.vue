<template>
    <section>
        <RouterLink to="/projetos/novo">
            <span class="bg-white">Novo Projeto</span>
        </RouterLink>
        <table v-if="!listaVazia" class="bg-slate-400 w-full table-auto border border-black ">
            <thead>
                <tr>
                    <th class=" border border-black p-1"><strong>ID</strong></th>
                    <th class=" border border-black p-1"><strong>Nome</strong></th>
                    <th class=" border border-black p-1"><strong>Ações</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td class=" border border-black p-1 text-center">{{ projeto.id }}</td>
                    <td class=" border border-black p-1 text-center">{{ projeto.nome }}</td>
                    <td class=" border border-black p-1 text-center">
                        <RouterLink :to="`/projetos/${projeto.id}`">
                            Editar
                        </RouterLink>
                        <button @click="excluir(projeto.id)">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useStore} from '../../store'
import { EXCLUIR_PROJETO } from '../../store/tipo-mutations';

export default defineComponent({
    name: 'Lista',
    methods:{
        excluir(id:string){
          this.store.commit(EXCLUIR_PROJETO,id)
        }
    },
    computed:{
        listaVazia():boolean{
            return this.projetos.length === 0
        }
    },
    setup(){
       const store = useStore()
       return{
        projetos : store.state.projetos,
        store
       }
    }
})
</script>