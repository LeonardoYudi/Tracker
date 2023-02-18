<template>
    <section>
        <div class="flex justify-evenly p-2">
            <form @submit.prevent="salvar">
                <label for="nomeDoProjeto" class="text-white mr-2">Nome do Projeto</label>
                <input type="text" v-model="nomeDoProjeto" id="nomeDoProjeto" class="rounded px-2">
            </form>
            <button type="submit" @click="salvar" class="bg-white p-2 rounded-md">Salvar</button>
        </div>
        <table v-if="!listaVazia" class="bg-slate-400 w-full table-auto border border-black ">
            <thead>
                <tr>
                    <th class=" border border-black p-1">ID</th>
                    <th class=" border border-black p-1">Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td class=" border border-black p-1 text-center">{{ projeto.id }}</td>
                    <td class=" border border-black p-1 text-center">{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Projeto from '../interfaces/Projeto'

export default defineComponent({
    name: 'projeto',
    data(){
        return{
            nomeDoProjeto:"",
            projetos: [] as Projeto[]
        }
    },
    computed:{
        listaVazia():boolean{
            return this.projetos.length ===0
        }
    },
    methods:{
        salvar(){
            const projeto: Projeto ={
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto= ''
        }
    }
})
</script>