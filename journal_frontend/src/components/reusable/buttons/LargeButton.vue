<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  isButton: {
    type: Boolean,
    default: false,
  },
  isSubmit: {
    type: Boolean,
    default: false,
  },
  isReset: {
    type: Boolean,
    default: false,
  },
});

const buttonType = computed<"button" | "submit" | "reset">(() => {
  if (props.isSubmit) return "submit";
  if (props.isReset) return "reset";
  return "button"; // default
});
</script>

<template>
  <div class="d-grid">
    <button class="btn bsb-btn-xl login-btn" :type="buttonType">{{ label }}</button>
  </div>
</template>

<style scoped>
.login-btn {
  background-color: var(--light-lavender-violet);
  border-radius: 7px;
  padding: 0.75rem 2rem;
  border: none;
  color: var(--white);
}

.login-btn:hover {
  background-color: var(--indigo-mist);
  color: var(--white);
}
</style>
