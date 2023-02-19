<template>
  <div class="notificacao">
    <article
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="header">{{ notificacao.titulo }}</div>
      <div>
        {{ notificacao.texto }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TipoNotificacao } from "../interfaces/Notificacao";
import { useStore } from "../store";

export default defineComponent({
  name: "Notificacoes",
  data() {
    return {
      contexto: {
        [TipoNotificacao.SUCESSO]: "sucesso",
        [TipoNotificacao.ATENCAO]: "atencao",
        [TipoNotificacao.FALHA]: "falha",
      },
    };
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: store.state.notificacoes,
    };
  },
});
</script>

<style scoped>
.notificacao {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 250px;
  padding: 8px;
  z-index: 100;
}
.sucesso {
  background-color: green;
}
.atencao {
  background-color: lightyellow;
}
.falha {
  background-color: red;
}
</style>
