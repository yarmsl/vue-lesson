<template>
  <label :for="id"
    ><span><slot></slot></span><input :value="modelValue" @input="updateInput" :id="id" type="text"
  /></label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiInput",
  props: {
    modelValue: String,
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(e: Event) {
      this.$emit("update:modelValue", (e.target as HTMLInputElement).value);
    },
  },
});
</script>

<style scoped lang="scss">
label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  margin-bottom: 6px;
  & span::first-letter {
    color: teal;
    font-weight: 800;
  }
}
input {
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid teal;
}
</style>
