<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Tarefa from '../interfaces/Tarefa';
import Box from './Box.vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: "Tarefas",
    components:{
        Cronometro,
        Box
    },
    props:{
        tarefa:{
            type: Object as PropType<Tarefa>,
            required:true
        }
    }
})

</script>

<template>
    <Box class="flex  p-4 m-4 rounded-md bg-slate-500 justify-between">
        <div class="text-white">
            {{ tarefa.descricao || 'Tarefa sem descrição'}}
        </div>
        <div>
            <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos"/>
        </div>
    </Box>
</template>