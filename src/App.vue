<script  lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Box from './components/Box.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './interfaces/Tarefa';
import Tarefas from './components/Tarefa.vue'

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral,
  },
  data(){
    return{
      
    }
  },
  computed:{
   
  },
  methods:{
  
  }
})

</script>

<template>
  <main class="flex bg-slate-900 ">
    <div class="">
      <BarraLateral/>
    </div>
    <div class="p-4 w-screen">
      <RouterView></RouterView>
    </div>
  </main>
</template>



<style scoped>

</style>
