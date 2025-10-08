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
</script>

<template>
  <div>
    <label for="password" class="form-label"
      >Password <span class="text-danger">*</span></label
    >
    <input
      type="password"
      class="form-control"
      name="password"
      id="password"
      placeholder="Password"
      :value="modelValue"
      required
      @input="emitHandler"
    />
  </div>
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
