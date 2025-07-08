<template>
  <div class="login-container">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <div>
        <label>Usuario:</label>
        <input v-model="username" type="text" placeholder="Ingresa tu usuario" />
      </div>
      <div>
        <label>Contraseña:</label>
        <input v-model="password" type="password" placeholder="Ingresa tu contraseña" />
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function login() {
  alert(`Usuario: ${username.value}\nContraseña: ${password.value}`)
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #1e1e1e;
  color: white;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
