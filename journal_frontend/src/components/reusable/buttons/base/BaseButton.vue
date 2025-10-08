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

const emit = defineEmits(["click"]);

const buttonType = computed<"button" | "submit" | "reset">(() => {
  if (props.isSubmit) return "submit";
  if (props.isReset) return "reset";
  return "button"; // default
});
</script>

<template>
  <button class="btn base-btn rounded-2 p-2 border-0" :type="buttonType" @click="emit('click')">
    {{ label }}
  </button>
</template>

<style scoped>
.base-btn {
  background-color: var(--light-lavender-violet);
  color: var(--white);
}

.base-btn:hover {
  background-color: var(--indigo-mist);
  color: var(--white);
  font-weight: bold !important;
}
</style>
