<script setup lang="ts">
import { ref } from "vue";

const isAuthenticated = ref(false);
const userName = ref("");
</script>

<template>
  <nav class="navbar custom-navbar">
    <div
      class="container-fluid d-flex justify-content-between align-items-center mx-5"
    >
      <!-- Left: Logo + Brand -->
      <div class="d-flex align-items-center">
        <img src="../../assets/logo.png" alt="Logo" class="logo-img me-2" />
        <router-link class="navbar-brand brand-text" to="/">
          journal
        </router-link>
      </div>
      <!-- Right: Profile -->
      <div>
        <router-link
          v-if="isAuthenticated"
          to="/profile"
          class="profile-link d-flex align-items-center"
        >
          <span class="me-2">{{ userName || "Profile" }}</span>
          <i class="bi bi-person-circle profile-icon"></i>
        </router-link>
        <router-link
          v-else
          to="/profile"
          class="profile-link d-flex align-items-center"
        >
          <span class="me-3">Profile</span>
          <i class="bi bi-person-circle profile-icon"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background: var(--light-lavender-violet);
}
.logo-img {
  height: 3rem;
  width: 3rem;
  object-fit: contain;
}
.navbar-brand {
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
}
.brand-text {
  color: var(--white);
  font-size: 2rem;
  font-weight: bolder;
}
.brand-text:hover,
.brand-text:focus {
  color: var(--white);
}
.profile-link {
  color: var(--white);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}
.profile-link:hover,
.profile-link:focus {
  color: var(--deep-midnight-blue);
}
.profile-icon {
  font-size: 1.75rem;
  vertical-align: middle;
  transition: color 0.2s;
  /* Remove color property here */
}
</style>
