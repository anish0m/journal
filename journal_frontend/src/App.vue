<script setup lang="ts">
import Navbar from './components/reusable/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="container mt-4">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>