<script setup lang="ts">
import { ref } from "vue";
import { useJournalStore } from "../../../store/journal/journal.store";
import { useToast } from "vue-toastification";
import TextInput from "../forms/TextInput.vue";
import BootstrapButton from "../buttons/base/BootstrapButton.vue";
import FieldInput from "../forms/FieldInput.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

console.log(props);

const emit = defineEmits(["close", "success"]);

const journalStore = useJournalStore();
const toast = useToast();

const newJournalTitle = ref("");
const newJournalContent = ref("");

const handleSave = async () => {
  if (!newJournalTitle.value.trim() || !newJournalContent.value.trim()) {
    toast.error("Please fill in both title and content");
    return;
  }

  const success = await journalStore.createEntry({
    title: newJournalTitle.value.trim(),
    content: newJournalContent.value.trim(),
  });

  if (success) {
    toast.success("Successful entry!");
    newJournalTitle.value = "";
    newJournalContent.value = "";
    emit("success");
    emit("close");
  } else {
    toast.error("Entry attempt failed. Please try again.");
  }
};

const handleCancel = () => {
  // Reset form
  newJournalTitle.value = "";
  newJournalContent.value = "";
  emit("close");
};
</script>

<template>
  <div v-if="show" class="modal-overlay" @click.self="handleCancel">
    <div class="modal-dialog modal-lg">
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
          <div class="mb-3">
            <FieldInput
              input-label="Title"
              input-name="title"
              input-id="journalTitle"
              input-placeholder="Enter journal title"
              v-model="newJournalTitle"
              :is-required="true"
            />
          </div>
          <div class="mb-3">
            <TextInput
              input-label="Content"
              input-id="journalContent"
              input-placeholder="Write your journal entry here..."
              v-model="newJournalContent"
              :is-required="true"
            />
          </div>
          <div class="mb-3">
            <small class="text-muted">
              Date:
              {{
                new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </small>
          </div>
        </div>
        <div class="modal-footer">
          <BootstrapButton
            label="Cancel"
            type="secondary"
            :is-button="true"
            @click="handleCancel"
            :disabled="journalStore.loading"
          />
          <BootstrapButton
            label="Save Entry"
            type="success"
            :is-button="true"
            @click="handleSave"
            :disabled="journalStore.loading"
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
  max-width: 600px;
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

.text-muted {
  color: var(--lavender-grey) !important;
}

.mb-3 {
  margin-bottom: 1.5rem;
}
</style>
