<template>
  <div class="home">
     <nav>
      <ul>       
          <li class="button is-primary"><router-link to="/">Home</router-link></li>
          <li class="button is-primary"><router-link to="/Cadastro">Cadastro </router-link></li>
      </ul>
    </nav>

    <WelcomeSection />

    <Button class="primary-button" text="Cadastro" isPrimary />
    
    <HelloWorld msg="" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { WelcomeSection } from "./partials";
import { Button } from '@/components';

export default {
  name: "Home",
  components: {
    HelloWorld,
    WelcomeSection,
    Button,
  },
};
</script>

<style scope>
.primary-button {
  position: relative;
  left: 0;
  margin: 10px;
}
</style>
