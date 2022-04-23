<template>
  <select :value="modelValue" @change="changeOptions">
    <option disabled value="">Выберите</option>
    <option v-for="option in options" :key="option.id" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IOption } from "../types";

export default defineComponent({
  name: "UiSelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: [] as PropType<IOption[]>,
      default: () => [],
    },
  },
  methods: {
    changeOptions(option: IOption) {
      this.$emit("update:modelValue", option.label);
    },
  },
});
</script>

<style scoped lang="scss"></style>
