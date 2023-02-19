<template>
    <div>
        <h1 class="text-white">Projetos</h1>
        <RouterView></RouterView>
    </div>
</template>


<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Projeto'
    })

</script>