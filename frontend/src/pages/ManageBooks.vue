<template>
  <v-container>
    <h2 class="mb-4">📖 Manage Your Books</h2>

    <!-- Alert -->
    <alert-message :message="alertMessage" :type="alertType" :show="alertShow" />

    <!-- Forma za dodavanje/uređivanje knjige -->
    <v-form ref="form" @submit.prevent="saveBook" class="pa-4 mb-6 manage-form">
      <v-text-field
        v-model="form.title"
        label="Title"
        outlined
        required
        color="blue lighten-1"
      ></v-text-field>
      <v-text-field
        v-model="form.author"
        label="Author"
        outlined
        required
        color="blue lighten-1"
      ></v-text-field>
      <v-textarea
        v-model="form.description"
        label="Description"
        outlined
        color="blue lighten-1"
      ></v-textarea>

      <v-btn type="submit" color="blue lighten-1" class="mt-3">
        {{ form.id ? "Update Book" : "Add Book" }}
      </v-btn>
    </v-form>

    <!-- Lista knjiga -->
    <v-row>
      <v-col v-for="book in books" :key="book.id" cols="12" sm="6" md="4">
        <v-card class="pa-3 book-card" elevation="6">
          <h3>{{ book.title }}</h3>
          <p><strong>Author:</strong> {{ book.author }}</p>
          <p>{{ book.description }}</p>

          <v-btn
            small
            color="blue lighten-1"
            class="mr-2"
            @click="editBook(book)"
          >
            Edit
          </v-btn>
          <v-btn small color="red darken-1" @click="removeBook(book.id)">
            Delete
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getBooks, addBook, updateBook, deleteBook } from "../services/api";
import AlertMessage from "../components/AlertMessage.vue";

export default {
  name: "ManageBooksPage",
  components: { AlertMessage },
  data() {
    return {
      books: [],
      form: { id: null, title: "", author: "", description: "" },
      alertMessage: "",
      alertType: "success",
      alertShow: false,
    };
  },
  async mounted() {
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const res = await getBooks();
        this.books = res.data;
      } catch (err) {
        this.showAlert("Error fetching books", "error");
      }
    },
    async saveBook() {
      try {
        if (this.form.id) {
          await updateBook(this.form.id, this.form);
          this.showAlert("Book updated!", "success");
        } else {
          await addBook(this.form);
          this.showAlert("Book added!", "success");
        }
        this.form = { id: null, title: "", author: "", description: "" };
        await this.fetchBooks();
      } catch (err) {
        this.showAlert("Error saving book", "error");
      }
    },
    editBook(book) {
      this.form = { ...book };
    },
    async removeBook(id) {
      try {
        await deleteBook(id);
        this.showAlert("Book deleted!", "error");
        await this.fetchBooks();
      } catch (err) {
        this.showAlert("Error deleting book", "error");
      }
    },
    showAlert(message, type) {
      this.alertMessage = message;
      this.alertType = type;
      this.alertShow = true;
      setTimeout(() => (this.alertShow = false), 3000);
    },
  },
};
</script>

<style scoped>
.manage-form {
  background: linear-gradient(160deg, #3a3a3a, #2c5282);

  border-radius: 10px;
  color: white;
}
.book-card {
  background: linear-gradient(160deg, #3a3a3a, #2c5282);

  border-radius: 10px;
  color: white;
}
h2 {
  color: white;
}
</style>
