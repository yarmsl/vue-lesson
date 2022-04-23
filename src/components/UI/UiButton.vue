<template>
  <button class="ui-button"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiButton",
});
</script>

<style scoped lang="scss">
.ui-button {
  border: none;
  outline: none;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
}
</style>
