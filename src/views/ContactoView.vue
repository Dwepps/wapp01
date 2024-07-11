<template lang="">
  <div class="ss-child-start">
    <div
      class="el-1 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center"
    >
      <FormContacto />
      <InfoContacto />
    </div>
  </div>
</template>
<script>
import FormContacto from "@/components/FormContacto.vue";
import InfoContacto from "@/components/InfoContacto.vue";

export default {
  name: "ContactView",
  components: {
    FormContacto,
    InfoContacto,
  },
};
</script>
<style lang="scss" scoped>
.el-1 {
  min-height: 100vh;
}
</style>
