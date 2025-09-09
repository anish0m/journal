<script setup lang="ts">
const props = defineProps({
  inputLabel: {
    type: String,
    required: true,
  },
  inputId: {
    type: String,
    required: true,
  },
  inputPlaceholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});

console.log(props);

const emit = defineEmits(["update:modelValue"]);

const emitHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <label :for="inputId" class="form-label">
    {{ inputLabel }} <span class="text-danger">*</span>
  </label>
  <textarea
    :id="inputId"
    :value="modelValue"
    class="form-control"
    rows="8"
    :placeholder="inputPlaceholder"
    :is-required="isRequired"
    @input="emitHandler"
  ></textarea>
</template>

<style scoped>
.form-label {
  align-self: flex-start;
  margin-bottom: 0.25rem;
  padding-left: 7px;
  color: var(--indigo-mist);
}

input::placeholder {
  color: var(--lavender-grey);
  opacity: 1;
}
</style>
