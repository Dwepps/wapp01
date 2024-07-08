<template lang="">
  <div>
    <a
      class="btn p-0 m-0"
      data-bs-toggle="offcanvas"
      href="#sidemenu"
      role="button"
      aria-controls="sidemenu"
    >
      <div
        class="barras position-relative d-flex justify-content-center align-items-center"
        style="width: 30px; height: 30px"
      >
        <div id="barra1" class="barra"></div>
        <div id="barra2" class="barra"></div>
        <div id="barra3" class="barra"></div>
      </div>
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.btn {
  border: 1px solid dark;
  background: var(--bs-dark);
  border-radius: 0.2em;
  transition: all 0.5s ease;

  &:hover {
    transform: rotate(225deg);
    box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.8);
  }
}

.barras {
  .barra {
    width: 80%;
    height: 0.25em;
    // border: 1px solid #000;
    background-color: var(--bs-light);
    position: absolute;
    border-radius: 0.2em;
    transition: all 0.2s ease-in-out;
  }
  #barra1 {
    top: 20px;
  }
  #barra2 {
    // transition: all 0.1s ease-in-out;
  }
  #barra3 {
    bottom: 20px;
  }

  &:hover {
    // #barra1 {
    //   transform: rotate(45deg);
    //   top: auto;
    // }
    // #barra2 {
    //   opacity: 0;
    // }
    // #barra3 {
    //   transform: rotate(-45deg);
    //   bottom: auto;
    // }

    .barra {
      background-color: var(--bs-danger);
    }
  }
}
</style>
