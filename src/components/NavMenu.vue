<template>
  <div class="p-2">
    <!-- boton de menu lateral -->
    <div class="w-100 d-flex justify-content-end align-items-center">
      <BarsBtn />
    </div>
    <!-- elemento de menu lateral -->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="sidemenu"
      aria-labelledby="sidemenuLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fs-4 text-danger" id="sidemenuLabel">
          Dwepps
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <!-- leyenda del menu -->
        <small class="text-muted">
          Este es un sitio web de ejemplo para portafolio.
        </small>
        <!-- enlaces de vistas -->
        <nav class="mt-3">
          <ul class="lista">
            <li class="">
              <router-link class="enlace" to="/">
                <i class="fa-solid fa-igloo"></i>
                <div>Inicio</div>
              </router-link>
            </li>

            <li class="">
              <router-link class="enlace" to="/about">
                <i class="fa-solid fa-sitemap"></i>
                <div>Nosotros</div>
              </router-link>
            </li>

            <li class="">
              <router-link class="enlace disabled" to="/services">
                <i class="fa-solid fa-person-digging"></i>
                <div>Servicios</div>
              </router-link>
            </li>

            <li class="">
              <router-link class="enlace disabled" to="/products">
                <i class="fa-solid fa-shop"></i>
                <div>Productos</div>
              </router-link>
            </li>

            <li class="">
              <router-link class="enlace disabled" to="/news">
                <i class="fa-solid fa-newspaper"></i>
                <div>Novedades</div>
              </router-link>
            </li>

            <li class="">
              <router-link class="enlace" to="/contact">
                <i class="fa-solid fa-address-card"></i>
                <div>Contacto</div>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- enlaces rrss -->
        <div>
          <a href="#" class="rs">
            <div class="rs-icon"><i class="fa-brands fa-instagram"></i></div>
            <div class="rs-info">
              <i class="rs-title">Instagram</i>
              <div class="rs-id">@Dwepps</div>
            </div>
          </a>

          <a href="#" class="rs">
            <div class="rs-icon"><i class="fa-brands fa-x-twitter"></i></div>
            <div class="rs-info">
              <i class="rs-title">X | Twitter</i>
              <div class="rs-id">@Dwepps</div>
            </div>
          </a>

          <a href="#" class="rs">
            <div class="rs-icon"><i class="fa-brands fa-youtube"></i></div>
            <div class="rs-info">
              <i class="rs-title">Youtube</i>
              <div class="rs-id">@Dwepps</div>
            </div>
          </a>
        </div>
        <!-- marca registrada -->
        <br />
        <hr class="border-secondary" />
        <div class="text-center">
          <small class="text-muted" style="font-size: 0.8em">
            Este sitio web fue desarrollado por
            <router-link id="mr" to="/">Dwepps®</router-link> | 2024
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BarsBtn from "@/components/BarsBtn.vue";

export default {
  name: "NavMenu",
  components: {
    BarsBtn,
  },
};
</script>
<style lang="scss" scoped>
.lista {
  padding: 0.3em 0.7em;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.enlace {
  transition: all 0.1s ease;
  padding: 0.5em 1em;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  align-items: center;

  &:hover {
    font-weight: bold;

    &.disabled {
      font-weight: normal;
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.7;
    border-color: #cccccc;
  }
}

.router-link-active,
.router-link-exact-active {
  background-color: var(--bs-dark);

  i {
    padding: 0.3em;
    border: 0.1em solid var(--bs-white);
    // border-radius: 0.2em;
    background-color: white;
  }

  div {
    color: var(--bs-light);
    font-weight: normal;
    transform: scale(1.4);
  }
}

.rs {
  transition: all 0.8s ease;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 1em;
  margin: auto 1em;
  border-bottom: 1px solid transparent;

  .rs-icon {
    font-size: 1.5em;
    padding-top: 0.2em;
  }
  .rs-info {
    .rs-title {
      font-size: 0.6em;
    }
    .rs-id {
      margin-top: -0.5em;
    }
  }

  &:hover {
    padding-right: 1em;
    border-color: var(--bs-dark);
  }
}

#mr {
  color: var(--bs-danger);
}

#mr.router-link-active,
#mr.router-link-exact-active {
  background-color: transparent;
  font-weight: normal;
}
</style>
