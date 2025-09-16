<template>
  <v-text-field
    v-model="search"
    :label="label"
    prepend-inner-icon="mdi-magnify"
    outlined
    clearable
    @keyup.enter="onSearch"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    label: { type: String, default: "Search for books..." },
  },
  data() {
    return { search: "" };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.search);
    },
  },
};
</script>
