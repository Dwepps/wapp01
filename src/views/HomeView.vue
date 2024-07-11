<template lang="">
  <div class="logo-container">
    <div class="logo">Dwepps®</div>
  </div>

  <div class="main">
    <div class="full-screen ss-child-start">
      <HomeSlider />
    </div>

    <div class="main-1 full-screen ss-child-start">
      <div class="section-1">
        <div class="el-1">
          <div class="img-section img-1 img-show">
            <img src="../assets/img/home_content/mockup_web_01.jpeg" alt="" />
          </div>

          <div class="img-section img-2 img-show">
            <img src="../assets/img/home_content/boceto_web_01.png" alt="" />
          </div>
        </div>

        <div class="el-2">
          <div class="sel-2">
            <i class="fs-3 fw-bold text-danger">
              ¡Presencia a nivel nacional y mundial!
            </i>
            Atrae clientes potenciales y fideliza a los existentes con un sitio
            web informativo
            <br />
            Un sitio web bien diseñado es una herramienta fundamental para
            potenciar la visibilidad de tu negocio, generar confianza y
            fidelizar a tus clientes. A través de él, puedes compartir
            información relevante como:

            <ul class="">
              <li>
                Ubicación: País, ciudad y dirección física (si corresponde).
              </li>
              <li>Oferta: Productos, servicios y sus precios.</li>
              <li>
                Información adicional: Datos de contacto, misión, valores,
                equipo de trabajo, etc.
              </li>
            </ul>
            Al brindar información completa y transparente, permites que los
            usuarios conozcan a fondo lo que ofreces, generando confianza y
            acercamiento hacia tu marca. De esta manera, con solo visitar tu
            sitio web, puedes captar la atención de clientes potenciales e
            incrementar las posibilidades de conversión.
          </div>
        </div>
      </div>
    </div>

    <div class="full-screen ss-child-start bg-danger"></div>
    <div class="full-screen ss-child-start bg-success"></div>
    <div class="full-screen ss-child-start bg-primary"></div>
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

.main {
  .full-screen {
    // width: 100%;
    min-height: 100dvh;
  }

  .main-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .section-1 {
      width: min(1280px, 100%);
      display: flex;
      gap: 2em;
      // flex-direction: row;

      @media (max-width: 990px) {
        flex-direction: column;
      }

      // imagenes
      .el-1 {
        position: relative;
        min-width: 300px;
        width: 50%;
        height: 400px;

        @media (max-width: 990px) {
          width: 100%;
        }

        .img-section {
          width: 100%;
          box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.7);
          position: absolute;
          transition: all 0.5s ease;
          border-radius: 0.5em;
          overflow: hidden;

          @media (max-width: 400px) {
            position: initial;
          }

          &.img-1 {
            height: 100%;
            @media (max-width: 575px) {
              transform: translate(0%, -50%);
            }
            @media (max-width: 990px) {
              border-radius: 0;
            }
          }
          &.img-2 {
            width: min(400px, 100%);
            z-index: 1;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);

            @media (max-width: 400px) {
              top: 0;
              left: 0%;
              transform: translate(0%, 0%);
            }
            @media (max-width: 575px) {
              top: 75%;
            }

            img {
              transform: scale(1.04);
            }
          }

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }

      // texto
      .el-2 {
        min-width: 300px;
        width: 50%;
        margin: auto;
        // padding-left: 2em;
        // padding-right: 2em;

        @media (max-width: 990px) {
          width: min(1280px, 90%);
        }

        .sel-2 {
          display: flex;
          flex-direction: column;
          gap: 1em;
          padding: 1em;
          font-size: 0.9em;
        }
      }
    }

    .section-2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .el-3 {
        width: min(1280px, 90%);
        padding: 1em;
        font-size: 0.9em;
      }
    }
  }
}
</style>
