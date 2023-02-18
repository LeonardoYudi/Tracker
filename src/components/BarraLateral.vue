<template>
    <header class="bg-slate-600 py-4 px-8 h-screen">
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <nav class="mt-5">
            <ul>
                <RouterLink to="/">
                    <li class="p-2 mb-4 bg-slate-400 rounded-md cursor-pointer hover:bg-slate-700 hover:text-white duration-500 shadow-lg">
                    
                            <font-awesome-icon icon="fa-solid fa-list" class="mr-2"/>
                            <span class="w-full">Tarefas</span>
                    </li>
                </RouterLink>
                <RouterLink to="/projetos">
                    <li class="p-2 mb-4 bg-slate-400 rounded-md cursor-pointer hover:bg-slate-700 hover:text-white duration-500 shadow-lg ">
                    
                            <font-awesome-icon icon="fa-solid fa-book" class="mr-2"/>
                            <span>Projetos</span>
                    </li>
                </RouterLink>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name:'BarraLateral'
    })
</script>

<style>

</style>