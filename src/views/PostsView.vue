<template>
  <div class="posts-view">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is posts page</h1>
    <PostsBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostsBox from "@/components/PostsBox.vue"; // @ is an alias to /src

export default defineComponent({
  name: "PostsView",
  components: {
    PostsBox,
  },
});
</script>
