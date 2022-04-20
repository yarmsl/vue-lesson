<template>
  <div class="posts">
    <post-item
      v-for="post in posts"
      v-bind:key="post.id"
      :title="post.title"
      :content="post.content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PostItem from "./PostItem.vue";

interface IPost {
  id: number;
  title: string;
  content: string;
}

export default defineComponent({
  components: { PostItem },
  name: "PostsList",
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
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
