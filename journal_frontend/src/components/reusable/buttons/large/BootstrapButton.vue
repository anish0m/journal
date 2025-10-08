<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
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
  <div class="d-grid">
    <button
      class="btn bsb-btn-xl"
      :class="`btn-${type}`"
      :type="buttonType"
      @click="emit('click')"
    >
      {{ label }}
    </button>
  </div>
</template>

<style scoped>
.btn:hover {
  color: var(--white);
  font-weight: bold !important;
}
</style>
