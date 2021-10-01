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
           <!--  <div class="group"> -->
              <!-- <label for="firstName" class="label">Nome</label> -->
              <!--               <input
                type="text"
                v-model="user.firstName"
                v-validate="'required'"
                name="firstName"
                placeholder="Nome"
                autocomplete="off"
                class="input"
                :class="{ 'is-invalid': submitted && errors.has('firstName') }"
              /> -->
            <!--             <div class="group">
              <label for="lastName" class="label">Sobrenome</label>
              <input
                type="text"
                v-model="user.lastName"
                v-validate="'required'"
                name="lastName"
                placeholder="Sobrenome"
                autocomplete="off"
                class="input"
                :class="{ 'is-invalid': submitted && errors.has('lastName') }"
              />
              <div
                v-if="submitted && errors.has('lastName')"
                class="invalid-feedback"
              >
                {{ errors.first("lastName") }}
              </div>
            </div> -->
<!--             <div class="group">
              <label for="username" class="label">Nome de usuário</label>
              <input
                type="text"
                v-model="user.username"
                v-validate="'required'"
                name="username"
                placeholder="Nome de usuário"
                autocomplete="off"
                class="input"
                :class="{ 'is-invalid': submitted && errors.has('username') }"
              />
              <div
                v-if="submitted && errors.has('username')"
                class="invalid-feedback"
              >
                {{ errors.first("username") }}
              </div>
            </div> -->
            <div class="group">
              <label for="username" class="label">Email</label>
              <input
                type="text"
                v-model="user.username"
                v-validate="'required'"
                name="username"
                placeholder="Email"
                autocomplete="off"
                class="input"
                :class="{ 'is-invalid': submitted && errors.has('username') }"
              />
              <div
                v-if="submitted && errors.has('username')"
                class="invalid-feedback"
              >
                {{ errors.first("username") }}
              </div>
            </div>
            <div class="group">
              <label htmlFor="password" class="label">Senha</label>
              <input
                type="password"
                v-model="user.password"
                v-validate="{ required: true, min: 6 }"
                name="password"
                placeholder="Senha"
                autocomplete="off"
                class="input"
                :class="{ 'is-invalid': submitted && errors.has('password') }"
              />
              <div
                v-if="submitted && errors.has('password')"
                class="invalid-feedback"
              >
                {{ errors.first("password") }}
              </div>
            </div>
            <div class="group">
              <label htmlFor="password2" class="label">Confirme sua Senha</label>
              <input
                type="password"
                v-model="user.password2"
                v-validate="{ required: true, min: 6 }"
                name="password2"
                placeholder="Senha"
                autocomplete="off"
                class="input"
                :class="{ 'is-invalid': submitted && errors.has('password2') }"
              />
              <div
                v-if="submitted && errors.has('password2')"
                class="invalid-feedback"
              >
                {{ errors.first("password2") }}
              </div>
            </div>
            <div class="group">
              <button class="btn" :disabled="status.registering">
                Criar conta
              </button>
              <img
                v-show="status.registering"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            </div>

            <div class="center">
              <span>Já possui uma conta? </span>
              <router-link to="/login" class="link"
                >Clique aqui para acessar</router-link
              >
            </div>
            <div class="center">
              <router-link to="/login" class="link"
                >Esqueceu sua senha?</router-link
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
      user: {
        /* firstName: "", */
        /* lastName: "", */
        username: "",
        password: "",
        password2: "",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>

<style>
@import "/src/style.css";
</style>