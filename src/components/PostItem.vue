<template>
  <div class="post">
    <div class="main">
      <p>{{ title }}</p>
      <p>{{ content }}</p>
    </div>
    <div class="actions">
      <ui-button class="remove" @click="$emit('remove', id)">Удалить</ui-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from "./UI/UiButton.vue";

export default defineComponent({
  components: { UiButton },
  name: "PostsItem",
  props: {
    id: Number,
    title: String,
    content: String,
  },
});
</script>

<style scoped lang="scss">
.post {
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid teal;
  border-radius: 6px;
  & p:first-of-type {
    font-weight: 900;
  }
  margin: 6px;
}
.main {
  flex-grow: 1;
}
.actions {
  display: flex;
}
.remove {
  background-color: red;
  color: white;
  &:hover {
    background-color: rgb(167, 8, 8);
  }
}
</style>
