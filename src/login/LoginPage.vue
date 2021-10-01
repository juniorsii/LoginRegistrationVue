<template>
  <div>
    <div class="full">
      <div class="main bg-panel"></div>

      <div class="menu container-login100">
        <div class="login-form">
          <div class="logo">
            <img src="/src/logo.svg" />
          </div>

          <h2>Acesso via e-mail</h2>
          <p>Acesse sua conta Aires por algum método abaixo</p>

          <form @submit.prevent="handleSubmit">
            <div class="group">
              <label for="username" class="label">Email</label>
              <input
                type="text"
                v-model="username"
                name="username"
                placeholder="Email"
                class="input"
                autocomplete="off"
                :class="{ 'is-invalid': submitted && !username }"
              />
              <div v-show="submitted && !username" class="invalid-feedback">
                Nome de usuário ou email é obrigatório!
              </div>
            </div>
            <div class="group">
              <label htmlFor="password" class="label">Senha</label>
              <input
                type="password"
                v-model="password"
                name="password"
                placeholder="Senha"
                class="input"
                autocomplete="off"
                :class="{ 'is-invalid': submitted && !password }"
              />
              <div v-show="submitted && !password" class="invalid-feedback">
                Senha é obrigatório!
              </div>
            </div>

            <div class="group cent">
              <input 
              type="checkbox"
              class="glip" 
              />
              Continuar conectado
              
              <router-link to="/register" class="float"
                >Esqueceu sua senha?</router-link
              >
            </div>

            <div class="group">
              <button class="btn" :disabled="status.loggingIn">Acessar</button>
              <img
                v-show="status.loggingIn"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            </div>

            <div
              class="alert"
              v-if="alert.message"
              :class="`alert ${alert.type}`"
            >
              {{ alert.message }}
            </div>

            <div class="center">
              <span>Não possue conta? </span
              ><router-link to="/register" class="link"
                >Clique aqui para criar sua conta</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapState({
      alert: (state) => state.alert,
    }),
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"], {
      clearAlert: "alert/clear",
    }),
    handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.clearAlert();
    },
  },
};
</script>

<style>
@import "/src/style.css";
</style>