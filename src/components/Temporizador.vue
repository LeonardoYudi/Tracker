<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

    export default defineComponent({
        name:"Temporizador",
        emits: ['aoTemporizadorFinalizado'],
        components:{
            Cronometro,
        },
        data (){
            return{
                tempoEmSegundos: 0,
                cronometro: 0, 
                cronometroRodando: false
            }
        },
        methods:{
            iniciar() {
                this.cronometroRodando = true
                this.cronometro = setInterval(()=>{
                    this.tempoEmSegundos += 1
                },1000)
            },
            finalizar() {
                this.cronometroRodando = false
                this.$emit('aoTemporizadorFinalizado',this.tempoEmSegundos)
                clearInterval(this.cronometro)
                this.tempoEmSegundos = 0
            }
        }
        
    })
</script>

<template>
    <div class="flex items-center">
      <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
      <div class="flex flex-col">
        <button class="py-2 px-4 rounded-md bg-indigo-600 mb-2" @click="iniciar" :disabled="cronometroRodando" >
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-play" />
          </span>
          <span class="ml-1">Play</span>
        </button>
        <button class="py-2 px-4 rounded-md bg-indigo-600" @click="finalizar" :disabled="!cronometroRodando">
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-stop" />
          </span>
          <span class="ml-1">Stop</span>
        </button>
      </div>
    </div>
</template>
  