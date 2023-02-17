<script  lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Box from './components/Box.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './interfaces/Tarefa';
import Tarefas from './components/Tarefas.vue'

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral,
    Formulario,
    Tarefas,
    Box
  },
  data(){
    return{
      tarefas:[] as Tarefa[],
    }
  },
  computed:{
    listaEstaVazia():boolean{
      return this.tarefas.length === 0
    }
  },
  methods:{
    salvarTarefa(tarefa:Tarefa){
      this.tarefas.push(tarefa)
    },
  }
})

</script>

<template>
  <main class="flex bg-slate-900 ">
    <div class="">
      <BarraLateral/>
    </div>
    <div class="p-6 w-screen">
      <Formulario @ao-salvar-tarefa="salvarTarefa"/>
      <div class="p=">
        <Tarefas v-for="(tarefa,index) in tarefas" key="index" :tarefa="tarefa"></Tarefas>
        <Box v-if="listaEstaVazia" class="text-white">
            <strong>
              Você não está muito produtivo hoje :(
            </strong>
        </Box>
      </div>
    </div>
  </main>
</template>



<style scoped>

</style>
