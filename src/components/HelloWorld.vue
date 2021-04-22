<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input class="login-button">
    <Button class="primary-button" text="Login" isPrimary />
  </div>
</template>

<script>
import { Button } from '@/components';

export default {
  name: 'HelloWorld',
  components: { Button },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.primary-button {
  position: absolute;
  left: 0;
  margin: 10px;
}
.login-button{
  border-radius: 5px;
  display: inline-block;
  font-size: larger;
  margin: 20px;
  position:relative;
  left: 65px;

}
</style>
