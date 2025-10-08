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
  <div v-if="show" class="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" @click.self="handleCancel">
    <div class="modal-dialog rounded overflow-auto modal-lg">
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
        <div class="modal-footer d-flex justify-content-end">
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
  background-color: rgba(0, 0, 20, 0.6); /* Using cosmic-indigo with opacity */
  z-index: 1050;
}

.modal-dialog {
  background: var(--white);
  box-shadow: 0 0.5rem 1rem rgba(52, 22, 103, 0.15); /* indigo-mist shadow */
  max-width: 600px;
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

.modal-footer {
  padding: 1rem 2rem 1.5rem 2rem;
  border-top: 1px solid var(--light-lavender-grey);
  gap: 0.75rem;
  background-color: var(--whisper-lavender);
}

.text-muted {
  color: var(--lavender-grey) !important;
}
</style>
