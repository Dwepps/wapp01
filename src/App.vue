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
  scroll-behavior: smooth;
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
.off {
  opacity: 0.6; /* Opacidad reducida */
  pointer-events: none; /* Desactiva los eventos de puntero */
  user-select: none; /* Evita la selección de texto */
}

.img-show {
  view-timeline-name: --image;
  view-timeline-area: block;

  animation-timeline: --image;
  animation-name: show;

  animation-range: entry 25% cover 30%;
  animation-fill-mode: both;
}

@keyframes show {
  from {
    opacity: 0;
    scale: 25%;
  }

  to {
    opacity: 1;
    scale: 100%;
  }
}
</style>
