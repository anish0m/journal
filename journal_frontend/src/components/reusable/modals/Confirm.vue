<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import Password from "../forms/Password.vue";
import BootstrapButton from "../buttons/base/BootstrapButton.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "confirm"]);

const toast = useToast();
const password = ref("");

const handleConfirm = () => {
  if (!password.value.trim()) {
    toast.error("Please enter your password to confirm");
    return;
  }

  emit("confirm", password.value);
};

const handleCancel = () => {
  // Reset form
  password.value = "";
  emit("close");
};
</script>

<template>
  <div v-if="show" class="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" @click.self="handleCancel">
    <div class="modal-dialog rounded overflow-auto">
      <div class="border-0">
        <div class="modal-header d-flex justify-content-between align-items-center">
          <h5 class="modal-title m-0 fw-semibold">{{ title }}</h5>
          <button
            type="button"
            class="btn-close bg-transparent border-0 cursor-pointer p-1 rounded"
            @click="handleCancel"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="alert-message d-flex align-items-start p-3 rounded mb-3">
            <i class="bi bi-exclamation-triangle-fill warning-icon flex-shrink-0"></i>
            <p class="message-text m-0">{{ message }}</p>
          </div>
          <div class="mb-3">
            <Password 
              v-model="password" 
              input-label="Confirm Password"
              input-placeholder="Enter your password to confirm"
            />
          </div>
          <div class="warning-note rounded mt-3">
            <small class="text-danger d-flex align-items-center fs-6">
              <i class="bi bi-info-circle-fill"></i>
              This action cannot be undone. All your data will be permanently deleted.
            </small>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end">
          <BootstrapButton
            label="Cancel"
            type="secondary"
            :is-button="true"
            @click="handleCancel"
            :disabled="loading"
          />
          <BootstrapButton
            label="Delete"
            type="danger"
            :is-button="true"
            @click="handleConfirm"
            :disabled="loading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 20, 0.6);
  z-index: 1050;
}

.modal-dialog {
  background: var(--white);
  box-shadow: 0 0.5rem 1rem rgba(52, 22, 103, 0.15);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  border: 1px solid var(--light-lavender-grey);
}

.modal-header {
  padding: 1.5rem 2rem 1rem 2rem;
  border-bottom: 1px solid var(--light-lavender-grey);
}

.modal-title {
  font-size: 1.5rem;
  color: var(--indigo-mist);
}

.btn-close {
  font-size: 1.5rem;
  color: var(--lavender-grey);
  transition: all 0.2s ease;
}

.btn-close:hover {
  color: var(--indigo-mist);
  background-color: var(--light-lavender-grey);
}

.modal-body {
  padding: 1.5rem 2rem;
}

.alert-message {
  gap: 1rem;
  background-color: #fff3cd;
  border: 1px solid #ffc107;
}

.warning-icon {
  font-size: 1.5rem;
  color: #ff9800;
  margin-top: 0.125rem;
}

.message-text {
  color: var(--indigo-mist);
  font-size: 1rem;
  line-height: 1.5;
}

.warning-note {
  padding: 0.75rem 1rem;
  background-color: #ffebee;
  border-left: 4px solid #dc3545;
}

.warning-note small {
  gap: 0.5rem;
}

.modal-footer {
  padding: 1rem 2rem 1.5rem 2rem;
  border-top: 1px solid var(--light-lavender-grey);
  gap: 0.75rem;
  background-color: var(--whisper-lavender);
}
</style>
