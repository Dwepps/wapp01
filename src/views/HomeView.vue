<template>
  <div>
    <div class="logo-container">
      <div class="logo">Dwepps®</div>
    </div>
    <div class="home-slider">
      <div class="slides">
        <a class="control prev" @click="prevSlide('slide' + slIndex)">{{
          "<"
        }}</a>
        <a class="control next" @click="nextSlide('slide' + slIndex)">{{
          ">"
        }}</a>

        <div id="slide1" class="slide html">
          <div class="container">
            <div class="info-container">
              <div class="info-slide">
                texto de informacion de la slider texto de informacion de la
                slider texto de informacion de la slider texto de informacion de
                la slider
              </div>
              <div class="img-slide">
                <i class="fa-brands fa-html5"></i>
              </div>
            </div>
            <div class="titulo-slide fs-3 fw-bold">titulo slider</div>
            <div class="btn btn-outline-light">Más informacion</div>
          </div>
        </div>

        <div id="slide2" class="slide css">
          <div class="container">
            <div class="info-container">
              <div class="info-slide">
                texto de informacion de la slider texto de informacion de la
                slider texto de informacion de la slider texto de informacion de
                la slider
              </div>
              <div class="img-slide">
                <i class="fa-brands fa-css3"></i>
              </div>
            </div>
            <div class="titulo-slide fs-3 fw-bold">titulo slider</div>
            <div class="btn btn-outline-light">Más informacion</div>
          </div>
        </div>

        <div id="slide3" class="slide js">
          <div class="container">
            <div class="info-container">
              <div class="info-slide">
                texto de informacion de la slider texto de informacion de la
                slider texto de informacion de la slider texto de informacion de
                la slider
              </div>
              <div class="img-slide">
                <i class="fa-brands fa-js"></i>
              </div>
            </div>
            <div class="titulo-slide fs-3 fw-bold">titulo slider</div>
            <div class="btn btn-outline-light">Más informacion</div>
          </div>
        </div>
      </div>
    </div>
    <div class="vh-100 w-100 p-0 m-0"></div>
  </div>
</template>
<script>
// import { ref, onMounted, onBeforeUnmount } from "vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const slIndex = ref(1); // Index of the currently active slide (starts from 1)
    // const scrollInterval = ref(2000); //tiempo en ms

    const nextSlide = () => {
      if (slIndex.value < 3) {
        slIndex.value++;
        const elId = "slide" + slIndex.value;
        const targetElement = document.getElementById(elId); // Construct ID of the next slide
        targetElement.scrollIntoView({ behavior: "smooth" });
        console.log(elId);
      }
    };

    const prevSlide = () => {
      if (slIndex.value > 1) {
        slIndex.value--;
        const elId = "slide" + slIndex.value;
        const targetElement = document.getElementById(elId); // Construct ID of the next slide
        targetElement.scrollIntoView({ behavior: "smooth" });
        console.log(elId);
      }
    };

    // Start auto-scroll on mount
    // onMounted(() => {
    //   const autoScrollInterval = setInterval(scrollToElement, scrollInterval.value);
    //   // Store the interval ID for stopping later
    //   const intervalId = ref(autoScrollInterval);

    //   // Clean up interval on unmount
    //   onBeforeUnmount(() => {
    //     clearInterval(intervalId.value);
    //   });
    // });

    return {
      nextSlide,
      prevSlide,
      slIndex,
    };
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

  &:hover {
    transform: scale(1.05);
    cursor: default;
  }

  .logo {
    color: var(--bs-danger);
    font-weight: bold;
    font-size: 2em;
  }
}

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
      margin-left: 2em;
    }

    &.next {
      right: 0;
      margin-right: 2em;
    }

    &:hover {
      background-color: var(--bs-dark);
      border-radius: 100%;
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
      // display: none;
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
        background-position: center;
        background-size: 100% 100%;
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
        background-size: 100% 100%;
      }

      & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;
        padding: 3em;
        box-shadow: 0 0 10px 3px rgba($color: #000000, $alpha: 0.7);
        border-radius: 0.4em;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }

      .info-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3em;
        padding: 1em;

        .img-slide {
          font-size: 8rem;
          color: var(--bs-light);
          display: flex;
          flex-direction: row;
          justify-content: end;
          align-items: center;
        }

        .info-slide {
          color: var(--bs-light);
        }
      }

      .titulo-slide {
        color: var(--bs-light);
      }
    }
  }
}
</style>
