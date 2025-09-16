<template>
  <v-app>
    <!-- Navigacija -->
    <v-app-bar app class="app-header" elevation="0">
      <v-toolbar-title class="app-title">📚 Book Explorer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" class="nav-btn" variant="text">Home</v-btn>
      <v-btn to="/books" class="nav-btn" variant="text">Books</v-btn>
      <v-btn to="/manage" class="nav-btn" variant="text">Manage Books</v-btn>
    </v-app-bar>

    <!-- Glavni sadržaj -->
    <v-main class="app-background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Header */
.app-header {
  background: linear-gradient(90deg, #1e3c72, #2a5298) !important; /* tamno plavi gradijent */
  color: white !important;
}
.app-title {
  font-weight: bold;
  color: white !important;
}
.nav-btn {
  color: white !important;
  font-weight: bold;
  text-transform: none;
}
.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.15) !important;
}

/* Global background */
.app-background {
  min-height: 100vh;
  background: linear-gradient(135deg, #2c2c2c, #1e3c72);
  color: white;
  padding: 20px;
}
</style>

