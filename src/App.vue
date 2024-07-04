<template>
  <NaveMenu />
  <router-view />
</template>
<script>
import NaveMenu from "@/components/NavMenu.vue";
export default {
  name: "App",
  components: {
    NaveMenu,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
body {
  background-color: var(--bs-light);
}
a {
  color: var(--bs-dark);
  text-decoration: none;
}
.router-link-active,
.router-link-exact-active {
  cursor: pointer;
  color: var(--bs-danger);
  font-weight: bold;
}
</style>
