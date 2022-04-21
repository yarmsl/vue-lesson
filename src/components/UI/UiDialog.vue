<template>
  <div class="backdrop" v-if="open" @click="closeDialog" @keydown="closeDialogByEsc">
    <div @click.stop class="dialog">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiDialog",
  props: {
    open: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:open", false);
    },
    closeDialogByEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        this.$emit("update:open", false);
      }
    },
  },
});
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog {
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #fff;
}
</style>
