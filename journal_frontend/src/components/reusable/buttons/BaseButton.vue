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

const emit = defineEmits(['click']);

const buttonType = computed<"button" | "submit" | "reset">(() => {
  if (props.isSubmit) return "submit";
  if (props.isReset) return "reset";
  return "button"; // default
});
</script>

<template>
    <button class="btn base-btn" :type="buttonType">{{ label }}</button>
</template>

<style scoped>
.base-btn {
  background-color: var(--light-lavender-violet);
  border-radius: 7px;
  padding: 0.5rem;
  border: none;
  color: var(--white);
}

.base-btn:hover {
  background-color: var(--indigo-mist);
  color: var(--white);
  font-weight: bold;
}
</style>
