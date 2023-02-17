<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name:"Box",
        data(){
            return{
                estilos:{
                    backgroundColor: '#FAF0C4'
                }
            }
        }
    })
</script>


<template>
    <div>
        <slot></slot>
    </div>
</template>

