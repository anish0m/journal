<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const emitHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

console.log(props);
</script>

<template>
  <label for="email" class="form-label"
    >Email <span class="text-danger">*</span></label
  >
  <input
    type="email"
    class="form-control"
    name="email"
    id="email"
    placeholder="email@example.com"
    :v-model="modelValue"
    required
    @input="emitHandler"
  />
</template>

<style scoped></style>
