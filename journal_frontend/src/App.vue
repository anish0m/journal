<script setup lang="ts"></script>

<template>
  <nav
    class="custom-navbar d-flex align-items-center justify-content-between px-4 py-2 mb-4"
  >
    <div class="d-flex align-items-center px-2">
      <router-link
        to="/"
        class="d-flex align-items-center text-decoration-none"
      >
        <img src="./assets/journal.png" alt="Logo" class="navbar-logo me-2" />
        <span class="navbar-title">journal</span>
      </router-link>
    </div>
    <div>
      <router-link to="/profile" class="text-decoration-none">
        <i class="bi bi-person-circle navbar-profile-icon"></i>
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
.custom-navbar {
  background-color: #290e56;
  color: #fff;
  min-height: 56px;
  box-shadow: 0 2px 8px rgba(0, 0, 20, 0.05);
}
.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  transition: color 0.2s;
  padding: 0 0.5rem;
}
.navbar-logo {
  height: 32px;
  width: 32px;
  object-fit: contain;
}
.navbar-profile-icon {
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0 1rem;
}
.custom-navbar .navbar-title:hover,
.custom-navbar .navbar-profile-icon:hover {
  color: #b9ccff;
}
</style>
