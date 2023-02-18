<script lang="ts">
import { defineComponent } from 'vue'
import Temporizador from './Temporizador.vue';


export default defineComponent({
    name: "Formulário",
    emits:['aoSalvarTarefa'],
    components:{
        Temporizador
    },
    data(){
        return{
            descricao:''
        }
    },
    methods:{
        finalizarTarefa(tempoDecorrido:number):void{
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos:tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    }
   
})

</script>


<template>
    <div class="flex justify-between ">
   
            <input 
                type="text" 
                placeholder="Qual tarefa você deseja iniciar?" 
                v-model="descricao"
                class="w-4/5 p-4 rounded-md outline-none"
            />
       
        <div>
            <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
</div>
</template>

<style>

</style>
