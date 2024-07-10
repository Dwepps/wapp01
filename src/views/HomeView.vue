<template lang="">
  <div>
    <div class="logo-container">
      <div class="logo">Dwepps®</div>
    </div>

    <HomeSlider />

    <div class="vh-100 w-100 d-flex justify-content-center align-items-center">
      <div class></div>
    </div>
  </div>
</template>
<script>
import HomeSlider from "@/components/HomeSlider.vue";

export default {
  name: "HomeView",
  components: {
    HomeSlider,
  },
};
</script>
<style lang="scss" scoped>
.logo-container {
  background-color: var(--bs-light);
  width: 250px;
  text-align: end;
  padding-right: 1em;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  border-end-end-radius: 2em;
  border-start-end-radius: 2em;
  position: absolute;
  top: 5em;
  z-index: 10;
  transition: all 0.3s ease;

  @media (max-width: 575px) {
    width: 130px;
  }

  &:hover {
    transform: scale(1.05);
    cursor: default;
  }

  .logo {
    color: var(--bs-danger);
    font-weight: bold;
    font-size: 2em;

    @media (max-width: 575px) {
      font-size: 1.2em;
    }
  }
}
</style>
