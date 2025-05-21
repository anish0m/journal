<script setup lang="ts">
import { ref } from "vue";
import axiosInstance from "../api/axios";
import router from "../router/router";

const signupData = ref({
  first_name: "",
  last_name: "",
  user_name: "",
  email: "",
  password: "",
});

const isImageUploaded = ref(false);

const handleUpload = () => {
  isImageUploaded.value = true;
};

const handleSignup = async (event: Event) => {
  event.preventDefault();
  try {
    const response = await axiosInstance.post("/sign-up/", signupData.value);
    router.push(`/profile/${response.data.user_name}`);
  } catch (error: any) {
    console.error("Signup failed:", error.response?.data);
  }
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/bs-brain@2.0.4/components/registrations/registration-4/assets/css/registration-4.css"
  />
  <!-- Registration 4 - Bootstrap Brain Component -->
  <section class="signup-section">
    <div class="container">
      <div class="signup-card">
        <div class="row g-0">
          <div class="col-12 col-md-6">
            <img
              class="signup-img"
              loading="lazy"
              src="../assets/card.jpg"
              alt="BootstrapBrain Logo"
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
              <form action="#!">
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12 col-md-6">
                    <label for="firstName" class="form-label">
                      First Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      v-model="signupData.first_name"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <label for="lastName" class="form-label">
                      Last Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      v-model="signupData.last_name"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="userName" class="form-label"
                      >Username <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="userName"
                      id="userName"
                      placeholder="Username"
                      v-model="signupData.user_name"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="email" class="form-label"
                      >Email <span class="text-danger">*</span></label
                    >
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="email@example.com"
                      v-model="signupData.email"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="password" class="form-label"
                      >Password <span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
                      v-model="signupData.password"
                      value=""
                      required
                    />
                  </div>
                  <div class="col-12">
                    <div class="d-flex justify-content-end gap-2">
                      <button
                        class="btn btn-outline-dark d-flex align-items-center upload-btn"
                        :disabled="isImageUploaded"
                        @click="handleUpload"
                      >
                        Upload Image 
                        <!-- handle the image binding later -->
                        <i class="bi bi-upload ms-2"></i>
                      </button>
                      <button
                        class="btn btn-outline-dark signup-btn"
                        type="button"
                        @click="handleSignup"
                      >
                        Sign up
                        <i class="bi bi-box-arrow-in-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-12">
                  <hr class="mt-5 mb-4 border-secondary-subtle" />
                  <p class="m-0 text-secondary text-center">
                    Already have an account?
                    <router-link to="/log-in" class="link-text"
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
  </section>
</template>

<style scoped>
.signup-section {
  padding: 1rem;
  color: #341667;
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
  background: #fff;
}
.signup-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
}
.signup-card-body {
  border: 0.25px solid #c0adcd;
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
  color: #868e96;
  opacity: 1;
}

form .form-label {
  align-self: flex-start;
  margin-bottom: 0.25rem;
  padding-left: 7px;
  color: #341667;
}

form .col-12,
form .col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.signup-card-body h3 {
  color: #492487;
  font-weight: lighter;
}

.upload-btn {
  color: #615dd0;
  border: 1px solid #615dd0;
  border-radius: 7px;
}
.upload-btn:hover {
  background-color: #341667;
  border-color: #341667;
  color: #fff;
  font-weight: bold;
}

.signup-btn {
  color: #615dd0;
  border: 1px solid #615dd0;
  border-radius: 7px;
  padding: 0.75rem 2rem;
}
.signup-btn:hover {
  background-color: #341667;
  border-color: #341667;
  color: #fff;
  font-weight: bold;
}

.link-text {
  text-decoration: none;
  color: #573aa8;
}

.link-text:hover {
  color: #492487;
  cursor: pointer;
}
</style>
