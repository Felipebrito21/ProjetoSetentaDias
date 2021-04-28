import Cadastro from "./components/Cadastro/Cadastro.vue";
import Home from "./views/Home/Home.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/Cadastro", component: Cadastro },
];
