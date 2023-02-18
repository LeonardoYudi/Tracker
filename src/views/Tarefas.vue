<script  lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from '../components/BarraLateral.vue';
import Box from '../components/Box.vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../interfaces/Tarefa';
import Tarefas from '../components/Tarefa.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Tarefas,
    Box
  },
  data() {
    return {
      tarefas: [] as Tarefa[],
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: Tarefa) {
      this.tarefas.push(tarefa)
    },
  }
})

</script>

<template>
  <Formulario @ao-salvar-tarefa="salvarTarefa" />
  <div class="">
    <Box v-if="listaEstaVazia" class="text-white ml-2 mt-6">
      <strong>
        Você não está muito produtivo hoje :(
      </strong>
    </Box>
    <Tarefas v-for="(tarefa, index) in tarefas" key="index" :tarefa="tarefa"></Tarefas>
  </div>
</template>



<style scoped>

</style>
