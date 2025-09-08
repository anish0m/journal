<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import TextInput from "../reusable/forms/TextInput.vue";
import Password from "../reusable/forms/Password.vue";
import LargeButton from "../reusable/buttons/LargeButton.vue";
import { useAuthStore } from "../../store";
import Email from "../reusable/forms/Email.vue";

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

// Form fields
const firstName = ref("");
const lastName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");

// Form submission handler
async function handleSignup() {
  if (
    !firstName.value ||
    !lastName.value ||
    !username.value ||
    !email.value ||
    !password.value
  ) {
    toast.error("Please fill out all required fields");
    return;
  }

  const success = await authStore.signup({
    first_name: firstName.value,
    last_name: lastName.value,
    username: username.value,
    email: email.value,
    password: password.value,
  });

  if (success) {
    toast.success("Account created successfully!");
    router.push("/login");
  }
}
</script>

<template>
  <div class="container signup-section">
    <div class="signup-card">
      <div class="row g-0">
        <div class="col-12 col-md-6">
          <img
            class="signup-img"
            loading="lazy"
            src="../../assets/card.jpg"
            alt="Journal"
          />
        </div>
        <div class="col-12 col-md-6">
          <div class="signup-card-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-5">
                  <h2>Sign up</h2>
                  <h3 class="fs-6 fw-normal m-0">
                    Enter your details to register
                  </h3>
                </div>
              </div>
            </div>
            <form @submit.prevent="handleSignup">
              <div class="row gy-3 gy-md-4 overflow-hidden">
                <div class="col-12 col-md-6">
                  <TextInput
                    input-label="First Name"
                    input-name="firstName"
                    input-id="firstName"
                    input-placeholder="First Name"
                    v-model="firstName"
                    :is-required="true"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <TextInput
                    input-label="Last Name"
                    input-name="lastName"
                    input-id="lastName"
                    input-placeholder="Last Name"
                    v-model="lastName"
                    :is-required="true"
                  />
                </div>
                <div class="col-12">
                  <TextInput
                    input-label="Username"
                    input-name="username"
                    input-id="username"
                    input-placeholder="Username"
                    v-model="username"
                    :is-required="true"
                  />
                </div>
                <div class="col-12">
                  <Email v-model="email" />
                </div>
                <div class="col-12">
                  <Password v-model="password" />
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <LargeButton
                      label="Sign up"
                      :is-submit="true"
                      :disabled="authStore.loading"
                      :loading="authStore.loading"
                    >
                      {{ authStore.loading ? "Signing up..." : "Sign up" }}
                    </LargeButton>
                  </div>
                </div>
              </div>
            </form>
            <div class="row">
              <div class="col-12">
                <hr class="mt-5 mb-4 border-secondary-subtle" />
                <p class="m-0 text-secondary text-center">
                  Already have an account?
                  <router-link to="/login" class="link-text"
                    >Log in</router-link
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
.signup-section {
  padding: 1rem;
  color: var(--indigo-mist);
  margin-top: 4rem;
}
@media (min-width: 768px) {
  .signup-section {
    padding: 2rem;
  }
}
@media (min-width: 1200px) {
  .signup-section {
    padding: 3rem;
  }
}
.signup-card {
  box-shadow: 0 2px 8px rgba(0, 0, 20, 0.05);
  border-radius: 0.5rem;
  background: var(--white);
}
.signup-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
}
.signup-card-body {
  border: 0.25px solid var(--light-lavender-grey);
  padding: 1rem;
}
@media (min-width: 768px) {
  .signup-card-body {
    padding: 2rem;
  }
}
@media (min-width: 1200px) {
  .signup-card-body {
    padding: 3rem;
  }
}

input::placeholder {
  color: var(--lavender-grey);
  opacity: 1;
}

form .form-label {
  align-self: flex-start;
  margin-bottom: 0.25rem;
  padding-left: 7px;
  color: var(--indigo-mist);
}

form .col-12,
form .col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.signup-card-body h3 {
  color: var(--mystic-violet);
  font-weight: lighter;
}

.signup-btn {
  background-color: var(--violet-step-a);
  border-radius: 7px;
  padding: 0.75rem 2rem;
  border: none;
  color: var(--white);
}
.signup-btn:hover {
  background-color: var(--indigo-mist);
  color: var(--white);
}

.link-text {
  text-decoration: none;
  color: var(--deep-lavender);
}

.link-text:hover {
  color: var(--mystic-violet);
  cursor: pointer;
}
</style>
