<script setup lang="ts">
import { ref } from "vue";

const isFieldTouched = ref(false);

const props = defineProps({
  inputLabel: {
    type: String,
    required: true,
  },
  inputName: {
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
});

const emit = defineEmits(["update:modelValue"]);

const emitHandler = (event: Event) => {
  isFieldTouched.value = true;
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

console.log(props);
</script>

<template>
  <div>
    <label :for="inputId" class="form-label"
      >{{ inputLabel }} <span class="text-danger">*</span></label
    >
    <input
      type="password"
      class="form-control"
      :name="inputName"
      :id="inputId"
      :placeholder="inputPlaceholder"
      :v-model="modelValue"
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
</style>
