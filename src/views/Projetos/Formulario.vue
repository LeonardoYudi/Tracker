<template>
  <section>
    <div class="flex justify-evenly p-2">
      <form @submit.prevent="salvar">
        <label for="nomeDoProjeto" class="text-white mr-2">Nome do Projeto</label>
        <input
          type="text"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
          class="rounded px-2"
        />
      </form>
      <button type="submit" @click="salvar" class="bg-white p-2 rounded-md">
        Salvar
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TipoNotificacao } from "../../interfaces/Notificacao";
import { useStore } from "../../store";
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "../../store/tipo-mutations";
import useNotificador from "../../hooks/notificador";

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find((proj) => proj.id == this.id);
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  computed: {},
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificacao.SUCESSO,
        "Excelente",
        "O projeto foi adicionado com sucesso"
      );
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>
