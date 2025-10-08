<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import FieldInput from "../reusable/forms/FieldInput.vue";
import Password from "../reusable/forms/Password.vue";
import BaseButton from "../reusable/buttons/large/BaseButton.vue";
import { useAuthStore } from "../../store";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const toast = useToast();
const router = useRouter();

const username = ref("");
const password = ref("");

const handleLogin = async () => {
  if (!username.value || !password.value) {
    return;
  }

  const success = await authStore.login({
    username: username.value,
    password: password.value,
  });
  
  if (success) {
    toast.success("Successfully logged in!");
    await router.push(`/profile/${username.value}`)
  } else {
    toast.error("Invalid username or password!");
  }
};
</script>

<template>
  <div class="container login-section">
    <div class="login-card rounded">
      <div class="row g-0">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-start">
          <img
            class="login-img w-100 object-fit-cover"
            loading="lazy"
            src="../../assets/card.jpg"
            alt="Journal"
          />
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-start">
          <div class="login-card-body">
            <div class="row">
              <div class="col-12 d-flex flex-column justify-content-start">
                <div class="mb-5">
                  <h2>Log in</h2>
                  <h3 class="fs-6 fw-normal m-0">Pick up where you left off</h3>
                </div>
              </div>
            </div>
            <form @submit.prevent="handleLogin">
              <div class="row gy-3 gy-md-4 overflow-hidden">
                <div class="col-12 d-flex flex-column justify-content-start">
                  <FieldInput
                    input-label="Username"
                    input-name="username"
                    input-id="username"
                    input-placeholder="Username"
                    v-model="username"
                    :is-required="true"
                  />
                </div>
                <div class="col-12 d-flex flex-column justify-content-start">
                  <Password v-model="password" />
                </div>
                <div class="col-12 d-flex flex-column justify-content-start">
                  <BaseButton
                    label="Log In"
                    :is-submit="true"
                    :disabled="authStore.loading"
                    :loading="authStore.loading"
                  />
                </div>
              </div>
            </form>
            <div class="row">
              <div class="col-12 d-flex flex-column justify-content-start">
                <hr class="mt-5 mb-4 border-secondary-subtle" />
                <p class="m-0 text-secondary text-center">
                  Don't have an account yet?
                  <router-link to="/signup" class="link-text text-decoration-none"
                    >Sign up</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-section {
  padding: 1rem;
  color: var(--indigo-mist);
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .login-section {
    padding: 2rem;
  }
}

@media (min-width: 1200px) {
  .login-section {
    padding: 3rem;
  }
}

.login-card {
  box-shadow: 0 2px 8px rgba(0, 0, 20, 0.05);
  background: var(--white);
  border: 0.25px solid var(--lavender-grey);
}

.login-img {
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
}

.login-card-body {
  padding: 1rem;
}

@media (min-width: 768px) {
  .login-card-body {
    padding: 2rem;
  }
}

@media (min-width: 1200px) {
  .login-card-body {
    padding: 3rem;
  }
}

.login-card-body h3 {
  color: var(--mystic-violet);
}

.link-text {
  color: var(--deep-lavender);
}

.link-text:hover {
  color: var(--mystic-violet);
  cursor: pointer;
  font-weight: semi-bold;
}
</style>
