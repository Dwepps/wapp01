<template lang="">
  <form>
    <br />

    <div class="form-container d-flex flex-column gap-4">
      <div>
        <div>
          <div class="d-flex flex-column flex-sm-row gap-2 gap-md-3">
            <div class="el-input el-name">
              <input
                type="text"
                class="input-name"
                :class="formData.name != '' ? 'value-ok' : ''"
                name="nombre"
                v-model="formData.name"
              />
              <label
                for="nombre"
                :class="formData.name != '' ? 'has-value' : ''"
                >Nombre</label
              >
            </div>

            <div class="el-input el-lname">
              <input
                type="text"
                class="input-lname"
                :class="formData.lname != '' ? 'value-ok' : ''"
                name="apellido"
                v-model="formData.lname"
              />
              <label
                for="apellido"
                :class="formData.lname != '' ? 'has-value' : ''"
                >Apellido</label
              >
            </div>
          </div>

          <div class="form-text" style="font-size: 0.7em; font-style: italic">
            Ej: "Juan Pérez"
          </div>
        </div>
      </div>

      <div>
        <div class="el-input">
          <input
            type="email"
            :class="formData.mail != '' ? 'value-ok' : ''"
            name="correo"
            v-model="formData.mail"
          />
          <label for="correo" :class="formData.mail != '' ? 'has-value' : ''"
            >Correo electrónico</label
          >
        </div>
        <div class="form-text" style="font-size: 0.7em; font-style: italic">
          Ej: "micorreo@mail.com"
        </div>
      </div>

      <div>
        <div class="el-input">
          <input
            type="cel"
            :class="formData.cel != '' ? 'value-ok' : ''"
            name="cel"
            aria-describedby="emailHelp"
            v-model="formData.cel"
          />
          <label for="cel" :class="formData.cel != '' ? 'has-value' : ''"
            >Telefono</label
          >
        </div>
        <div class="form-text" style="font-size: 0.7em; font-style: italic">
          Ej: "912345678"
        </div>
      </div>

      <div>
        <div class="el-input">
          <input
            type="text"
            class=""
            :class="formData.subj != '' ? 'value-ok' : ''"
            name="motivo"
            v-model="formData.subj"
          />
          <label for="motivo" :class="formData.subj != '' ? 'has-value' : ''"
            >Motivo</label
          >
        </div>

        <div class="form-text" style="font-size: 0.7em; font-style: italic">
          Ej: "Problema con ..."
        </div>
      </div>

      <div>
        <div class="el-input el-txtarea">
          <textarea
            :class="formData.msj != '' ? 'value-ok' : ''"
            name="mensaje"
            v-model="formData.msj"
          ></textarea>
          <label for="mensaje" :class="formData.msj != '' ? 'has-value' : ''"
            >Mensaje</label
          >
        </div>

        <div class="form-text" style="font-size: 0.7em; font-style: italic">
          Ej: "He tenido constantes problemas con ..."
        </div>
      </div>

      <div>
        <div class="btn btn-dark d-block">Enviar mensaje</div>
      </div>
    </div>

    <br />
  </form>
</template>
<script>
export default {
  name: "FormContacto",
  data: () => ({
    formData: {
      name: "",
      lname: "",
      mail: "",
      cel: "",
      subj: "",
      msj: "",
    },
  }),
};
</script>
<style lang="scss" scoped>
* {
  // border: 1px solid lightblue;
}

form {
  width: min(1000px, 100%);
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    transition: all 0.2s ease;
  }

  .form-container {
    width: min(500px, 90%);
    margin: auto;
  }

  .el-input {
    width: 100%;
    height: 45px;
    position: relative;
    background-color: var(--bs-white);

    &.el-txtarea {
      height: 100px;
    }

    // @media (width < 300px) {
    //   &.el-name,
    //   &.el-lname {
    //     width: 167px;
    //   }
    // }

    label,
    input,
    textarea {
      position: absolute;
      transform: translate(0%, 0%);
    }

    label {
      left: 1em;
      top: 0.6em;
      z-index: 0;
    }

    input,
    textarea {
      z-index: 1;
      outline: none;
      width: 100%;
      height: 100%;
      background-color: transparent;
      font-size: 0.8em;
      padding: 1em 0 0 0.7em;
      border: 1px solid transparent;
      border-radius: 0.2em;
    }

    textarea {
      resize: none;
    }

    input:focus,
    textarea:focus {
      outline: none;

      & ~ label {
        font-size: 0.6em;
        color: var(--bs-secondary);
        top: 0.3em;
      }
    }

    .has-value {
      font-size: 0.6em;
      color: var(--bs-success);
      top: 0.3em;
    }
    .value-ok {
      border-color: var(--bs-success);
      box-shadow: 0 0 10px rgba($color: rgba(2, 189, 2, 0.76), $alpha: 0.8);
    }
  }

  .form-text {
    margin-left: 1em;
  }

  .btn {
    border-radius: 0.2em;

    &:hover {
      transform: scale(0.9);
      border-radius: 0.5em;
      box-shadow: 0 0 10px 3px rgba($color: rgb(24, 24, 24), $alpha: 0.7);
      background-color: var(--bs-dark);
    }
  }
}
</style>
