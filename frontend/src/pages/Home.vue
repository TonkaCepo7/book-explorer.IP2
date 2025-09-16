<template>
  <v-container class="home-page d-flex flex-column justify-center align-center text-center">
    <!-- Naslov i opis -->
    <h1 class="mb-4">📚 Book Explorer</h1>
    <p class="mb-6">
      Welcome to <strong>Book Explorer</strong> – a web application where you can search books using
      the Google Books API and manage your personal library.
    </p>

    <!-- Tehnologije -->
    <v-card class="pa-6 mb-6 glass-card" elevation="6" width="400">
      <h3 class="mb-4">🛠 Technologies Used</h3>
      <ul class="tech-list">
        <li>Vue 3</li>
        <li>Vuetify 3</li>
        <li>Vite</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Google Books API</li>
      </ul>
    </v-card>

    <!-- Footer -->
    <div class="footer">
      <small>© 2025 - Projekt izradila: <strong>Tonka Čepo</strong> | Samostalni rad</small>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #2c2c2c, #1e3c72);
  color: white;
  padding-top: 50px;
}

/* Kartica za tehnologije */
.glass-card {
  background: linear-gradient(135deg, #2c2c2c, #1e3c72);
  border-radius: 12px;
  color: white;
}

/* Lista tehnologija */
.tech-list {
  list-style-type: "✔ ";
  text-align: left;
  padding-left: 20px;
  line-height: 1.8;
}
.tech-list li {
  color: white;
  font-size: 1.1rem;
}

/* Footer */
.footer {
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 0.9rem;
  color: #bbb;
}
</style>
