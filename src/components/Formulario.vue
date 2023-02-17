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
    <div class="flex p-4 justify-between ">
        <fieldset> 
            <input 
                type="text" 
                placeholder="Qual tarefa você deseja iniciar?" 
                v-model="descricao"
                class="w-max p-2 rounded-md"
            />
        </fieldset>
        <div>
            <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
</div>
</template>

<style>

</style>
