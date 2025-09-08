<script setup lang="ts">
import { ref } from 'vue'

const isAuthenticated = ref(false) // Replace with actual auth logic later
const userName = ref('') // Replace with actual user name when authenticated
</script>

<template>
  <nav class="navbar custom-navbar">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Left: Logo -->
      <router-link class="navbar-brand" to="/">
        <span class="brand-text">Journal</span>
      </router-link>
      <!-- Right: Profile Icon or Name -->
      <div>
        <router-link
          v-if="isAuthenticated"
          to="/profile"
          class="profile-link d-flex align-items-center"
        >
          <span class="me-2">{{ userName || 'Profile' }}</span>
          <i class="bi bi-person-circle profile-icon"></i>
        </router-link>
        <router-link
          v-else
          to="/profile"
          class="profile-link d-flex align-items-center"
        >
          <span class="me-2">Profile</span>
          <i class="bi bi-person-circle profile-icon"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background: var(--periwinkle-blue);
}

.navbar-brand {
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
}

.brand-text {
  color: var(--white);
}

.profile-link {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.profile-link:hover,
.profile-link:focus {
  color: var(--pale-periwinkle);
}

.profile-icon {
  font-size: 1.8rem;
  vertical-align: middle;
  transition: color 0.2s;
}
</style>