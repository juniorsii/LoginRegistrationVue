<template>
  <div>
    <div class="content">
      <div class="card align">
        <div class="logo">
          <img src="/src/logo.svg" />
        </div>

        <h1>Olá, {{ account.user.username }}!</h1>
        <p class="align">Você esta logado na Aires :D</p>
        <h3>Registro de Usuários logados:</h3>
        <em v-if="users.loading">Carregando usuários...</em>
        <span v-if="users.error" class="text-danger"
          >ERROR: {{ users.error }}</span
        >
        <ul v-if="users.items">
          <li v-for="user in users.items" :key="user.id">
            {{ user.username }}
            <span v-if="user.deleting"><em> - Removendo...</em></span>
            <span v-else-if="user.deleteError" class="text-danger">
              - ERROR: {{ user.deleteError }}</span
            >
            <span v-else>
              -
              <a @click="deleteUser(user.id)" class="text-danger"
                >Remover</a
              ></span
            >
          </li>
        </ul>
        <p class="align">
          <router-link class="btn" to="/login">Sair</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll",
      deleteUser: "delete",
    }),
  },
};
</script>

<style scoped>
@import "/src/style.css";

html {
  background-color: #f7f7f7;
}

.content {
  padding: 50px;
  width: auto;
}
.card {
  background-color: white;
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: 0 2px 15px 0 rgb(120 135 182 / 27%);
  border: 2px solid #f7f7f7;
}
.text-danger {
  color: rgb(185, 10, 10);
}
.btn {
  width: 25% !important;
  text-align: center !important;
}

li {
  padding-bottom: 15px;
  list-style-type: none;
}
</style>