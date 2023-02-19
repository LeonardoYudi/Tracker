<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex';
import { key } from '../store';
import Temporizador from './Temporizador.vue';


export default defineComponent({
    name: "Formulário",
    emits:['aoSalvarTarefa'],
    components:{
        Temporizador
    },
    data(){
        return{
            descricao:'',
            idProjeto:''
        }
    },
    methods:{
        salvarTarefa(tempoDecorrido:number):void{
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos:tempoDecorrido,
                descricao: this.descricao,
                projetos: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''
        }
    },
    setup(){
        const store = useStore(key)
        return{
            projetos: store.state.projetos
        }
    }
   
})

</script>


<template>
    <div class="flex justify-between ">
        <input type="text" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao"
            class="w-4/5 p-4 rounded-md outline-none" />
        <div>
            <select v-model="idProjeto">
                <option value="">Selecione o projeto</option>
                <option 
                :value="projeto.id"
                v-for="projeto in projetos"
                :key="projeto.id"
                >
                    {{ projeto.nome }}
                </option>
            </select>
        </div>
        <div>
            <Temporizador @aoTemporizadorFinalizado="salvarTarefa" />
        </div>
    </div>
</template>

<style>

</style>
