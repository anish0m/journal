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
  <label :for="inputId" class="form-label align-self-start mb-1">
    {{ inputLabel }} <span class="text-danger">*</span>
  </label>
  <textarea
    :id="inputId"
    :value="modelValue"
    class="form-control opacity-100"
    rows="8"
    :placeholder="inputPlaceholder"
    :is-required="isRequired"
    @input="emitHandler"
  ></textarea>
</template>

<style scoped>
.form-label {
  padding-left: 7px;
  color: var(--indigo-mist);
}

input::placeholder {
  color: var(--lavender-grey);
}
</style>
