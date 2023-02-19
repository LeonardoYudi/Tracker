<script  lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';


export default defineComponent({
  name: 'App',
  components:{
    BarraLateral,
    Notificacoes
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
      <Notificacoes/>
      <RouterView></RouterView>
    </div>
  </main>
</template>



<style scoped>

</style>
