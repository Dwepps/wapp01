<template>
  <div>
    <div class="home-slider">
      <div id="slides" class="slides">
        <a class="control prev" @click="prevSlide">{{ "<" }}</a>
        <a class="control next" @click="nextSlide">{{ ">" }}</a>

        <div class="dots">
          <div class="dot" @click="slideTo('slide1')"></div>
          <div class="dot" @click="slideTo('slide2')"></div>
          <div class="dot" @click="slideTo('slide3')"></div>
        </div>

        <div id="slide1" class="slide html">
          <div class="container">
            <div class="info-container">
              <div class="info-slide">
                Construcción de la estructura de sitios web desarrollada con el
                lenguaje de programación HTML5, el cuál nos permite diseñar una
                plantilla inicial sobre el que luego podemos estilizar y darle
                nuestro sello personal.
              </div>
              <div class="img-slide">
                <i class="fa-brands fa-html5"></i>
              </div>
            </div>
            <div class="titulo-slide fs-3 fw-bold">HTML5</div>
            <div class="btn btn-outline-light off">Más informacion</div>
          </div>
        </div>

        <div id="slide2" class="slide css">
          <div class="container">
            <div class="info-container">
              <div class="info-slide">
                Creatividad, y sello personal. Es lo que el lenguaje de
                programación CSS3 permite transmitir a través de la cascada de
                estilos, permite crear diseños unicas e impresionantes.
              </div>
              <div class="img-slide">
                <i class="fa-brands fa-css3"></i>
              </div>
            </div>
            <div class="titulo-slide fs-3 fw-bold">CSS3</div>
            <div class="btn btn-outline-light off">Más informacion</div>
          </div>
        </div>

        <div id="slide3" class="slide js">
          <div class="container">
            <div class="info-container">
              <div class="info-slide">
                Experiencia confortante, es la que permite entregar el lenguaje
                de programación JavaScript. Algo muy importante y necesario para
                poder destacar y hacer que los usuarios se sientan cómodos a la
                hora de navegar en el sitio web.
              </div>
              <div class="img-slide">
                <i class="fa-brands fa-js"></i>
              </div>
            </div>
            <div class="titulo-slide fs-3 fw-bold">JavaScript</div>
            <div class="btn btn-outline-light off">Más informacion</div>
          </div>
        </div>
      </div>
    </div>
    <div class="vh-100 w-100 p-0 m-0"></div>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "HomeSlider",
  components: {},
  setup() {
    const slIndex = ref(1); // Index of the currently active slide (starts from 1)
    const scrollInterval = 8000; // Intervalo en milisegundos (3 segundos)
    // const initialDelay = 5000; // Retraso inicial en milisegundos (4 segundos)
    // let intervalId = null;

    const nextSlide = () => {
      const targetElement = document.getElementById("slides");
      targetElement.scrollBy({
        left: +10,
        behavior: "smooth",
      });
    };

    const prevSlide = () => {
      const targetElement = document.getElementById("slides");
      targetElement.scrollBy({
        left: -10,
        behavior: "smooth",
      });
    };

    const slideTo = (slide) => {
      const targetElement = document.getElementById("slides");
      const scrollTarget = document.getElementById(slide); // Reemplaza "elementX" con el ID del elemento que determina el desplazamiento

      if (targetElement && scrollTarget) {
        const scrollAmount = scrollTarget.offsetWidth; // Ajusta según la propiedad deseada para determinar el desplazamiento

        // Verificar si ha llegado al límite derecho
        if (
          targetElement.scrollLeft + targetElement.clientWidth >=
          targetElement.scrollWidth
        ) {
          // Reiniciar al inicio si ha llegado al final
          targetElement.scrollLeft = 0;
        } else {
          // Hacer scroll hacia la derecha usando el scrollAmount calculado
          targetElement.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    };

    const autoScroll = () => {
      const targetElement = document.getElementById("slides");
      if (targetElement) {
        // Verificar si ha llegado al límite derecho
        if (
          targetElement.scrollLeft + targetElement.clientWidth >=
          targetElement.scrollWidth
        ) {
          // Reiniciar al inicio si ha llegado al final
          targetElement.scrollLeft = 0;
        } else {
          // Hacer scroll hacia la derecha
          targetElement.scrollBy({
            left: 10, // Ajusta el valor según sea necesario
            behavior: "smooth",
          });
        }
      }
    };

    onMounted(() => {
      setInterval(() => {
        autoScroll(); // Ejecutar la función una vez después del initialDelay
      }, scrollInterval);
    });

    onUnmounted(() => {
      // if (intervalId) {
      //   clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
      // }
    });

    return {
      nextSlide,
      prevSlide,
      slideTo,
      slIndex,
    };
  },
};
</script>
<style lang="scss" scoped>
.home-slider {
  width: 100%;
  height: 700px;
  position: relative;

  a.control {
    cursor: pointer;
    transition: all 0.5s ease;
    color: var(--bs-light);
    font-weight: bold;
    font-size: 1.3em;
    position: absolute;
    top: 50%;
    // left: 0;
    transform: translate(0, -50%);
    z-index: 10;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    &.prev {
      left: 0;
      margin-left: 1.1em;
    }

    &.next {
      right: 0;
      margin-right: 1.1em;
    }

    &:hover {
      background-color: var(--bs-danger);
      border-radius: 100%;
      box-shadow: 0 0 10px 3px rgba($color: #000000, $alpha: 0.5);
    }
  }

  .dots {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 2em;
    transform: translate(-50%, 0);
    display: flex;
    gap: 0.5em;

    .dot {
      border-radius: 100%;
      width: 1em;
      height: 1em;
      border: 1px solid var(--bs-light);
      transition: all 0.5s ease;

      &:hover {
        background-color: var(--bs-danger);
        border-color: var(--bs-danger);
        box-shadow: 0 0 10px 3px rgba($color: #ffffff, $alpha: 0.5);
      }
    }
  }

  .slides {
    display: flex;
    overflow: scroll hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }

    .slide {
      min-width: 100%;
      height: 100%;
      position: sticky;
      left: 0;
      object-fit: cover;
      scroll-snap-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.html {
        background-color: #f06529;
        background-image: url("../assets/img/home_slider/img_html.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.css {
        background-color: #2965f1;
        background-image: url("../assets/img/home_slider/img_css.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      &.js {
        background-color: var(--bs-warning);
        background-image: url("../assets/img/home_slider/img_js.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      & .container {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;
        padding: 3.5em;
        box-shadow: 0 0 10px 3px rgba($color: #000000, $alpha: 0.7);
        border-radius: 0.4em;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }

      .info-container {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 3em;
        padding: 1em;

        @media (min-width: 576px) {
          flex-direction: row; // Aplica directamente sobre .info-container en la media query
        }

        .img-slide {
          font-size: 8em;
          color: var(--bs-light);
          display: flex;
          flex-direction: row;
          justify-content: end;
          align-items: center;

          @media (max-width: 350px) {
            font-size: 5em;
          }
        }

        .info-slide {
          color: var(--bs-light);

          @media (max-width: 350px) {
            font-size: 0.8em;
          }
        }
      }

      .titulo-slide {
        color: var(--bs-light);
      }

      .btn {
        @media (max-width: 350px) {
          transform: scale(0.9);
        }
      }
    }
  }
}
</style>
