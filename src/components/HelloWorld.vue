<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <form method="POST" action="">
        <input
          class="login-button"
          type="text"
          name="nome"
          placeholder="Nome"
        />
        <input
          class="login-button"
          type="text"
          name="E-mail"
          placeholder="E-mail"
        />
        <Button class="primary-button" text="Login" type="submit" isPrimary />
        <input
          class="login-button"
          type="password"
          name="senha"
          id="Senha"
          placeholder="Senha"
        />
           <input class="mostraSenha" type="checkbox" text="mostrarSenha" onclick="mostraOcultarSenha()">Mostrar Senha
      </form>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components";

export default {
  name: "HelloWorld", 
  components: { Button },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.primary-button {
  position: absolute;
  left: 6px;
  margin:10px;
  border-width:1px 1px;
  }
.login-button {
  border-radius: 5px;
  display: inline;
  font-size: larger;
  margin: 18px;
  left: 6%;
  position: relative;
}
.mostraSenha{
  position: relative;
  margin:2rem;
  left: 30px;
}

</style>
