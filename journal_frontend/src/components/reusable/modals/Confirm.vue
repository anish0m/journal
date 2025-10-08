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
  <div v-if="show" class="modal-overlay" @click.self="handleCancel">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="handleCancel"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="alert-message">
            <i class="bi bi-exclamation-triangle-fill warning-icon"></i>
            <p class="message-text">{{ message }}</p>
          </div>
          <div class="mb-3">
            <Password 
              v-model="password" 
              input-label="Confirm Password"
              input-placeholder="Enter your password to confirm"
            />
          </div>
          <div class="warning-note">
            <small class="text-danger">
              <i class="bi bi-info-circle-fill"></i>
              This action cannot be undone. All your data will be permanently deleted.
            </small>
          </div>
        </div>
        <div class="modal-footer">
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 20, 0.6); /* Using cosmic-indigo with opacity */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-dialog {
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(52, 22, 103, 0.15); /* indigo-mist shadow */
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--light-lavender-grey);
}

.modal-content {
  border: none;
}

.modal-header {
  padding: 1.5rem 2rem 1rem 2rem;
  border-bottom: 1px solid var(--light-lavender-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--indigo-mist);
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--lavender-grey);
  padding: 0.25rem;
  border-radius: 0.25rem;
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
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
}

.warning-icon {
  font-size: 1.5rem;
  color: #ff9800;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.message-text {
  margin: 0;
  color: var(--indigo-mist);
  font-size: 1rem;
  line-height: 1.5;
}

.warning-note {
  padding: 0.75rem 1rem;
  background-color: #ffebee;
  border-left: 4px solid #dc3545;
  border-radius: 0.25rem;
  margin-top: 1rem;
}

.warning-note small {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.modal-footer {
  padding: 1rem 2rem 1.5rem 2rem;
  border-top: 1px solid var(--light-lavender-grey);
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  background-color: var(--whisper-lavender);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--indigo-mist);
  background-color: var(--white);
  background-image: none;
  border: 1px solid var(--light-lavender-grey);
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control::placeholder {
  color: var(--lavender-grey);
  opacity: 1;
}

.form-control:focus {
  color: var(--indigo-mist);
  background-color: var(--white);
  border-color: var(--violet-step-a);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(97, 93, 208, 0.25);
}

.form-label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--indigo-mist);
  padding-left: 0.25rem;
}

.text-danger {
  color: #dc3545 !important;
}

.mb-3 {
  margin-bottom: 1.5rem;
}
</style>
