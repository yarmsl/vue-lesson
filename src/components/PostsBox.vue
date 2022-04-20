<template>
  <div class="posts-box">
    <post-form @create="createPost" />
    <posts-list :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostForm from "./PostForm.vue";
import PostsList from "./PostsList.vue";

interface IPost {
  id: number;
  title: string;
  content: string;
}

export default defineComponent({
  components: { PostsList, PostForm },
  name: "PostsBox",
  data() {
    return {
      posts: [
        { id: 1, title: "js", content: "dead" },
        { id: 2, title: "ts", content: "alive" },
        { id: 3, title: "fs", content: "from node" },
      ],
    };
  },
  methods: {
    createPost(post: IPost) {
      this.posts.push(post);
    },
  },
});
</script>

<style scoped lang="scss">
.posts-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 6px;
}
</style>
