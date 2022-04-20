<template>
  <form class="posts-form" @submit.prevent>
    <h4>Создание поста</h4>
    <label for="title"
      ><span>Название</span><input v-model="post.title" id="title" name="title" type="text"
    /></label>
    <label for="content"
      ><span>Контент</span><input v-model="post.content" id="content" name="content" type="text"
    /></label>
    <ui-button class="add-button" @click="createPost">Отправить</ui-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from "./UI/UiButton.vue";

export default defineComponent({
  components: { UiButton },
  name: "PostsForm",
  data() {
    return {
      post: {
        id: 0,
        title: "",
        content: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        id: 0,
        title: "",
        content: "",
      };
    },
  },
});
</script>

<style scoped lang="scss">
.posts-form {
  width: 200px;
  padding: 12px;
  display: flex;
  flex-direction: column;
}

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
.add-button {
  width: 100%;
  color: #fff;
  background-color: teal;
  &:hover {
    background-color: rgb(0, 182, 182);
  }
}
</style>
