<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useUserStore, useJournalStore, useAuthStore } from "../../store";
import type { UserProfile } from "../../store/user/user.types";
import BaseButton from "../reusable/buttons/base/BaseButton.vue";
import BootstrapButton from "../reusable/buttons/base/BootstrapButton.vue";
import FieldInput from "../reusable/forms/FieldInput.vue";
import Modal from "../reusable/Modal.vue";

const editMode = ref(false);
const showModal = ref(false);

const router = useRouter();
const toast = useToast();
const userStore = useUserStore();
const journalStore = useJournalStore();
const authStore = useAuthStore();

onMounted(() => {
  userStore.fetchProfile();
  journalStore.fetchEntries();
});

const user = computed(() => userStore.profile);

const temporaryUserData = ref<UserProfile>({
  id: -1,
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  title: "",
  mobile: "",
  address: "",
  social_links: {
    linkedin: "",
    github: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
});

// Watch for changes in user data and update temporary data
watch(
  user,
  (newUser) => {
    if (newUser) {
      reloadTemporaryUserData();
    }
  },
  { deep: true, immediate: true }
);

// Watch editMode changes
watch(editMode, (newMode) => {
  console.log("Edit mode changed to:", newMode);
  if (newMode) {
    reloadTemporaryUserData();
  }
});

const reloadTemporaryUserData = () => {
  temporaryUserData.value = {
    id: user.value?.id ?? 0,
    username: user.value?.username ?? "",
    email: user.value?.email ?? "",
    first_name: user.value?.first_name ?? "",
    last_name: user.value?.last_name ?? "",
    title: user.value?.title ?? "",
    mobile: user.value?.mobile ?? "",
    address: user.value?.address ?? "",
    social_links: {
      linkedin: user.value?.social_links?.linkedin ?? "",
      github: user.value?.social_links?.github ?? "",
      twitter: user.value?.social_links?.twitter ?? "",
      instagram: user.value?.social_links?.instagram ?? "",
      facebook: user.value?.social_links?.facebook ?? "",
    },
  };
};

onMounted(async () => {
  await userStore.fetchProfile();
  await journalStore.fetchEntries();
  reloadTemporaryUserData();
});

const userJournals = computed(() => journalStore.allEntries);

const handleEditProfile = () => {
  editMode.value = true;
  console.log("Edit profile clicked");
};

const handleSaveProfile = async () => {
  await userStore.updateProfile(temporaryUserData.value);
  await userStore.fetchProfile();
  handleCancelProfile();
  console.log("Save profile clicked");
};

const handleCancelProfile = () => {
  editMode.value = false;
  reloadTemporaryUserData();

  console.log("Cancel profile clicked");
};

const handleAddJournal = () => {
  showModal.value = true;
  console.log("Add new journal clicked");
};

const handleJournalSuccess = () => {
  journalStore.fetchEntries();
  handleJournalModalClose();
};

const handleJournalModalClose = () => {
  showModal.value = false;
};

const handleLogout = async () => {
  await authStore.logout();
  userStore.clearProfile();
  journalStore.clearEntries();
  toast.success("Successfully logged out!");
  router.push("/login");
};
</script>

<template>
  <div class="container">
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="../../assets/default.png"
                  alt="Profile"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{ user?.first_name }} {{ user?.last_name }}</h4>
                  <p class="text-secondary mb-3">
                    {{ user?.title || "Your Title Here" }}
                  </p>
                  <!-- <BaseButton class="me-1" label="Follow" :is-button="true" /> -->
                  <!-- <BaseButton label="Message" :is-button="true" /> -->
                  <BootstrapButton
                    label="Log Out"
                    type="danger"
                    :is-button="true"
                    class="me-2"
                    @click="handleLogout"
                  />
                  <BootstrapButton
                    label="Delete Account"
                    type="danger"
                    :is-button="true"
                  />
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
                <span class="text-secondary">{{
                  user?.social_links?.linkedin || "linkedin.com"
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
              >
                <h6 class="mb-0"><i class="bi bi-github pe-2"></i>Github</h6>
                <span class="text-secondary">{{
                  user?.social_links?.github || "github.com"
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
              >
                <h6 class="mb-0">
                  <i class="bi bi-twitter pe-2 text-info"></i>Twitter
                </h6>
                <span class="text-secondary">{{
                  user?.social_links?.twitter || "twitter.com"
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
              >
                <h6 class="mb-0">
                  <i class="bi bi-instagram pe-2 text-danger"></i>Instagram
                </h6>
                <span class="text-secondary">{{
                  user?.social_links?.instagram || "instagram.com"
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
              >
                <h6 class="mb-0">
                  <i class="bi bi-facebook pe-2 text-primary"></i>Facebook
                </h6>
                <span class="text-secondary">{{
                  user?.social_links?.facebook || "facebook.com"
                }}</span>
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
                <div class="col-sm-9 text-secondary">
                  <template v-if="editMode">
                    <FieldInput
                      input-label="First Name"
                      input-name="firstName"
                      input-id="firstName"
                      input-placeholder="First Name"
                      v-model="temporaryUserData.first_name"
                      :is-required="true"
                    />
                    <FieldInput
                      input-label="Last Name"
                      input-name="lastName"
                      input-id="lastName"
                      input-placeholder="Last Name"
                      v-model="temporaryUserData.last_name"
                      :is-required="true"
                    />
                  </template>
                  <template v-else>
                    {{ user?.first_name }} {{ user?.last_name }}
                  </template>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <template v-if="editMode">
                    <FieldInput
                      input-label="Username"
                      input-name="username"
                      input-id="username"
                      input-placeholder="Username"
                      v-model="temporaryUserData.username"
                      :is-required="true"
                    />
                  </template>
                  <template v-else>
                    {{ user?.username }}
                  </template>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <template v-if="editMode">
                    <FieldInput
                      input-label="Email"
                      input-name="email"
                      input-id="email"
                      input-placeholder="Email"
                      v-model="temporaryUserData.email"
                    />
                  </template>
                  <template v-else>
                    {{ user?.email || "Your Email Here" }}
                  </template>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <template v-if="editMode">
                    <FieldInput
                      input-label="Mobile"
                      input-name="mobile"
                      input-id="mobile"
                      input-placeholder="Mobile"
                      v-model="temporaryUserData.mobile"
                    />
                  </template>
                  <template v-else>
                    {{ user?.mobile || "Your Mobile Number Here" }}
                  </template>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <template v-if="editMode">
                    <FieldInput
                      input-label="Address"
                      input-name="address"
                      input-id="address"
                      input-placeholder="Address"
                      v-model="temporaryUserData.address"
                    />
                  </template>
                  <template v-else>
                    {{ user?.address || "Your Address Here" }}
                  </template>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12">
                  <div v-if="editMode">
                    <BootstrapButton
                      label="Cancel"
                      type="secondary"
                      :is-button="true"
                      @click="handleCancelProfile"
                      class="px-3"
                    />
                    <BootstrapButton
                      label="Save"
                      type="success"
                      :is-button="true"
                      @click="handleSaveProfile"
                      class="px-3 ms-2"
                    />
                  </div>
                  <div v-else>
                    <BaseButton
                      label="Edit"
                      :is-button="true"
                      @click="handleEditProfile"
                      class="px-3"
                    />
                  </div>
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
                  <BaseButton
                    label="Add New"
                    :is-button="true"
                    @click="handleAddJournal"
                    class="px-3"
                  />
                </div>
                <div class="card-body">
                  <div v-if="userJournals.length > 0">
                    <!-- Loop through all journals -->
                    <div
                      v-for="journal in userJournals"
                      :key="journal.id"
                      class="card h-100 mb-3"
                    >
                      <div class="card-body">
                        <h4 class="card-title mb-2 mx-1 text-muted">
                          {{ journal.title }}
                        </h4>
                        <h6 class="card-subtitle mb-3 mx-1 text-muted">
                          {{
                            new Date(journal.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          }}
                        </h6>
                        <p class="card-text">
                          {{ journal.content }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    v-else-if="journalStore.journalLoading"
                    class="text-center"
                  >
                    <p>Loading your thoughts...</p>
                  </div>
                  <div v-else class="text-center">
                    <p class="text-muted">
                      No journal entries yet. Add your first thought!
                    </p>
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
  <Modal
    :show="showModal"
    :title="'New Journal Entry'"
    :content="'Write your thoughts...'"
    @close="handleJournalModalClose"
    @success="handleJournalSuccess"
  />
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
