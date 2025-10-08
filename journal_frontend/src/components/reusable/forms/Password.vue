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
    <label for="password" class="form-label align-self-start mb-1"
      >Password <span class="text-danger">*</span></label
    >
    <input
      type="password"
      class="form-control opacity-100"
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
  padding-left: 7px;
  color: var(--indigo-mist);
}

input::placeholder {
  color: var(--lavender-grey);
}
</style>
