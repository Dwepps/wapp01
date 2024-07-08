<template lang="">
  <div class="info-container bg-dark">
    <br />
    <div class="info-subtainer d-flex flex-column gap-2">
      <div class="fs-3 info-title">Dejanos tu mensaje</div>

      <div class="fs-6">
        Envianos tus comentarios, consejos, consultas y más. Te responderemos a
        la brevedad para resolver el motivo de tu mensaje.
      </div>

      <div class="fs-6">
        Recuerda que gracias a tí nosotros podemos mejorar y entregarte un mejor
        (sitio, producto, servicio, etc).
      </div>

      <hr class="border-danger" />

      <div class="fs-6">
        Revisa nuestras redes sociales para mayor información y para mantenerte
        al día con nuestras novedades
      </div>

      <div class="d-flex flex-row justify-content-evenly">
        <a href="#" class="rs-icon"
          ><i class="brand-icon fa-brands fa-instagram"></i
        ></a>
        <a href="#" class="rs-icon"
          ><i class="brand-icon fa-brands fa-x-twitter"></i
        ></a>
        <a href="#" class="rs-icon"
          ><i class="brand-icon fa-brands fa-youtube"></i
        ></a>
      </div>

      <hr class="border-danger" />

      <div>También puedes contactarnos a través de estos canales</div>

      <div class="d-flex flex-row justify-content-evenly">
        <a href="#" class="rs-icon"
          ><i class="brand-icon fa-brands fa-whatsapp"></i
        ></a>
        <a href="#" class="rs-icon">
          <i class="brand-icon fa-solid fa-envelope"></i>
        </a>
      </div>

      <div class="fs-6">
        ¡Gracias por visitar nuestro sitio! El equipo
        <router-link to="/" class="text-danger">Dwepps®</router-link> agradece
        tu aporte.
      </div>
    </div>

    <br />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.info-container {
  width: min(1000px, 100%);
  height: 100vh;
  padding: 1em;
  color: var(--bs-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .info-subtainer {
    width: min(500px, 90%);
    margin: auto;
  }

  .info-title {
    color: var(--bs-danger);
    font-weight: bold;
    // -webkit-text-stroke: 0.015em var(--bs-light);
  }

  .rs-icon {
    font-size: 2.3em;
    transition: all 0.5s ease;
    color: var(--bs-light);
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    .brand-icon {
      padding: 5px;
    }
    .fa-instagram {
      &:hover {
        color: var(--bs-light);
        background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
        border-radius: 0.1em;
      }
    }
    .fa-x-twitter {
      &:hover {
        color: var(--bs-dark);
        background: white;
        border-radius: 0.1em;
      }
    }
    .fa-youtube {
      &:hover {
        color: var(--bs-danger);
        background: white;
        border-radius: 0.1em;
      }
    }
    .fa-whatsapp {
      &:hover {
        color: var(--bs-light);
        background: var(--bs-success);
        border-radius: 0.1em;
      }
    }
    .fa-envelope {
      &:hover {
        color: white;
        background: var(--bs-danger);
        border-radius: 0.1em;
      }
    }
  }
}

hr {
  box-shadow: 0 0 10px 3px rgba($color: red, $alpha: 0.8);
}
</style>
