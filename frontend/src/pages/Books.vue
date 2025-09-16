<template>
  <v-container>
    <h2 class="mb-4">🔎 Search Books</h2>

    <!-- Search bar -->
    <search-bar label="Search Google Books..." @search="performSearch" />

    <!-- Filter by language -->
    <v-select
      v-model="lang"
      :items="languages"
      label="Filter by language"
      outlined
      color="blue lighten-1"
      class="mt-4"
      @change="fetchBooks"
    ></v-select>

    <!-- Filter by availability -->
    <v-select
      v-model="filter"
      :items="[
        { title: 'All', value: '' },
        { title: 'Free eBooks', value: 'free-ebooks' },
        { title: 'Paid eBooks', value: 'paid-ebooks' }
      ]"
      item-title="title"
      item-value="value"
      label="Filter by availability"
      outlined
      color="blue lighten-1"
      class="mt-4"
      @change="fetchBooks"
    />

    <!-- Results -->
    <v-row class="mt-6" dense>
      <v-col v-for="book in books" :key="book.id" cols="12" sm="6" md="4">
        <book-card :book="book" />
      </v-col>
    </v-row>

    <!-- Pagination -->
    <div class="d-flex justify-center mt-6">
      <v-btn
        color="blue lighten-1"
        class="mx-2"
        @click="prevPage"
        :disabled="startIndex === 0"
      >
        Previous
      </v-btn>
      <v-btn
        color="blue lighten-1"
        class="mx-2"
        @click="nextPage"
        :disabled="books.length < maxResults"
      >
        Next
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { searchGoogleBooks } from "../services/api";
import BookCard from "../components/BookCard.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "BooksPage",
  components: { BookCard, SearchBar },
  data() {
    return {
      books: [],
      query: "",
      startIndex: 0,
      maxResults: 9,
      lang: "",
      filter: "",
      languages: ["", "en", "hr", "de", "fr", "it", "es"],
    };
  },
  methods: {
    async performSearch(query) {
      this.query = query;
      this.startIndex = 0;
      await this.fetchBooks();
    },
    async fetchBooks() {
      if (!this.query) return;
      try {
        const data = await searchGoogleBooks(
          this.query,
          this.startIndex,
          this.maxResults,
          this.lang,
          this.filter
        );
        this.books = data.items || [];
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    },
    async nextPage() {
      this.startIndex += this.maxResults;
      await this.fetchBooks();
    },
    async prevPage() {
      if (this.startIndex >= this.maxResults) {
        this.startIndex -= this.maxResults;
        await this.fetchBooks();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: white;
}
</style>
