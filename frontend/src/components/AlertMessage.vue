<template>
  <v-alert
    v-if="visible"
    :type="type"
    dismissible
    border="start"
    elevation="2"
    class="mb-4"
    @input="visible = false"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: "AlertMessage",
  props: {
    message: String,
    type: { type: String, default: "success" },
    show: { type: Boolean, default: false },
  },
  data() {
    return { visible: this.show };
  },
  watch: {
    show(val) {
      this.visible = val;
    },
  },
};
</script>
