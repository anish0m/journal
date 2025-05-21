<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "../api/axios";

const userData = ref<any>(null);

onMounted(async () => {
  try {
    const response = await axios.get("/profile/");
    userData.value = response.data;
  } catch (error: any) {
    console.error("Error fetching user data:", error);
  }
});

const now = new Date();
const formattedDate = now.toLocaleString("en-US", {
  month: "long",
  year: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
</script>

<template>
  <section>
    <div class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="{{ userData.profile_picture }}"
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />
                  <div class="mt-3">
                    <h4>{{ userData.first_name }} {{ userData.last_name }}</h4>
                    <p class="text-secondary mb-3">Software Engineer</p>
                    <button class="btn btn-primary">Follow</button>
                    <button class="btn btn-outline-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
                    <i class="bi bi-linkedin pe-2 text-primary"></i>LinkedIn
                  </h6>
                  <span class="text-secondary">https://linkedin.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0"><i class="bi bi-github pe-2"></i>Github</h6>
                  <span class="text-secondary">https://github.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
                    <i class="bi bi-twitter pe-2 text-info"></i>Twitter
                  </h6>
                  <span class="text-secondary">https://x.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
                    <i class="bi bi-instagram pe-2 text-danger"></i>Instagram
                  </h6>
                  <span class="text-secondary">https://instagram.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
                    <i class="bi bi-facebook pe-2 text-primary"></i>Facebook
                  </h6>
                  <span class="text-secondary">https://facebook.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ userData.first_name }} {{ userData.last_name }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Username</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ userData.user_name }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ userData.email }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(123) 456-7890</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">California, USA</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <a
                      class="btn edit-btn"
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >Edit</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="row gutters-sm">
              <div class="col-12 mb-3">
                <div class="card h-100">
                  <div
                    class="card-header d-flex justify-content-between align-items-center m-2"
                  >
                    <h3 class="mt-1 mb-0">My latest thoughts...</h3>
                    <button class="btn edit-btn" target="__blank">
                      Add new
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="card h-100">
                      <div class="card-body">
                        <h4 class="card-title mb-2 mx-1 text-muted">
                          How I approach problem solving
                        </h4>
                        <h6 class="card-subtitle mb-3 mx-1 text-muted">
                          {{ formattedDate }}
                        </h6>
                        <p class="card-text">
                          I believe in breaking down complex problems into
                          smaller, manageable pieces. This allows me to focus on
                          one aspect at a time and iterate quickly.
                          Collaboration and feedback are key to refining
                          solutions and achieving the best results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row gutters-sm">
              <div class="col-12 mb-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
body {
  margin-top: 20px;
  text-align: left;
  background-color: #fff;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 20, 0.1), 0 1px 2px 0 rgba(0, 0, 20, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 20, 0.125);
  border-radius: 0.25rem;
}

.card-header {
  background-color: #fff;
  border-bottom: 0px solid rgba(0, 0, 20, 0.125);
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.card-text {
  border-top: 1px solid rgba(0, 0, 20, 0.125);
  padding: 1rem 0;
}

.edit-btn {
  background-color: #615dd0;
  color: #fff;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  text-decoration: none;
}

.edit-btn:hover {
  background-color: #341667;
  color: #fff;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #fff;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>
