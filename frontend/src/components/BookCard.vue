<template>
  <v-card class="ma-3 book-card" max-width="320" elevation="8">
    <v-img
      v-if="book.volumeInfo.imageLinks"
      :src="book.volumeInfo.imageLinks.thumbnail"
      height="200"
      cover
    ></v-img>
    <v-card-title class="white--text">{{ book.volumeInfo.title }}</v-card-title>
    <v-card-subtitle class="grey--text text-lighten-2">
      {{ book.volumeInfo.authors?.join(", ") }}
    </v-card-subtitle>
    <v-card-text class="white--text">
      <p>{{ book.volumeInfo.description?.slice(0, 100) }}...</p>
    </v-card-text>
    <v-card-actions>
      <v-btn :href="book.volumeInfo.infoLink" target="_blank" color="blue lighten-1" text>
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BookCard",
  props: { book: Object },
};
</script>

<style scoped>
.book-card {
  background-color: #3a3a3a; /* tamna kartica */
  border-radius: 12px;
}
</style>
