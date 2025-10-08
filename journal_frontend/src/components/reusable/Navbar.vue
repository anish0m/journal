<script setup lang="ts">
import { computed } from "vue";
import { useAuthStore, useUserStore } from "../../store";

const authStore = useAuthStore();
const userStore = useUserStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);
const user = computed(() => userStore.profile);
const userName = computed(() => user.value?.username || "");
</script>

<template>
  <nav class="navbar custom-navbar">
    <div
      class="container-fluid d-flex justify-content-between align-items-center mx-5"
    >
      <!-- Left: Logo + Brand -->
      <div class="d-flex align-items-center">
        <img src="../../assets/logo.png" alt="Logo" class="logo-img me-2 object-fit-contain" />
        <router-link class="navbar-brand fw-semibold text-decoration-none brand-text fw-bold" to="/">
          journal
        </router-link>
      </div>
      <!-- Right: Profile -->
      <div>
        <router-link
          v-if="isAuthenticated && userName"
          :to="`/profile/${userName}`"
          class="profile-link text-decoration-none fw-bold d-flex align-items-center"
        >
          <span class="me-2">{{ userName }}</span>
          <i class="bi bi-person-circle profile-icon align-middle"></i>
        </router-link>
        <router-link
          v-else
          to="/login"
          class="profile-link text-decoration-none fw-bold d-flex align-items-center"
        >
          <span class="profile-name">Login</span>
          <i class="bi bi-person-circle profile-icon align-middle"></i>
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
}

.navbar-brand {
  color: var(--white);
  font-size: 1rem;
}

.brand-text {
  color: var(--white);
  font-size: 1.5rem;
}

.brand-text:hover,
.brand-text:focus {
  color: var(--white);
}

.profile-name {
  margin-right: 0.75rem;
  margin-top: 0.15rem;
}

.profile-link {
  color: var(--white);
  font-size: 1rem;
  transition: color 0.2s;
}

.profile-link:hover,
.profile-link:focus {
  color: var(--deep-midnight-blue);
}

.profile-icon {
  font-size: 1.25rem;
  transition: color 0.2s;
}
</style>
