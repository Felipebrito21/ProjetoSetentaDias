<template>
  <div>
    <ul>
      <li class="button is-primary"><router-link to="/">Home</router-link></li>
    </ul>
    <h1 class="centralizado">Cadastro</h1>
    <div>
      <form method="POST" action="http://localhost:8080">
        <input
          class="conteiner"
          type="text"
          name="nome"
          placeholder="Nome"
        />

        <input
          class="conteiner"
          type="text"
          name="email"
          placeholder="E-mail"
        />

        <textarea
          class="conteiner"
          name="mensagem"
          placeholder="Mensagem"
        ></textarea>

        <button class="button is-primary" type="submit">Enviar</button>
      </form>
      <router-view />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.centralizado {
  color: black;
  font-size: 40px;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.conteiner {
  border-radius: 6px;
  color: black;
  width: 50%;
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 16px;
  
}
</style>
