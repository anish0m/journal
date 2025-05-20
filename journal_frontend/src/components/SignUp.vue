<script setup lang="ts"></script>

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
                      value=""
                      required
                    />
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn bsb-btn-xl signup-btn" type="submit">
                        Sign up
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
                    <a href="#!" class="link-text">Log in</a>
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

.signup-btn {
  background-color: #615dd0;
  border-radius: 7px;
  padding: 0.75rem 2rem;
  border: none;
  color: #fff;
}
.signup-btn:hover {
  background-color: #341667;
  color: #fff;
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
