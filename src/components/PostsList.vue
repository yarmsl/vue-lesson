<template>
  <div class="posts">
    <post-item
      v-for="post in posts"
      v-bind:key="post.id"
      :id="post.id"
      :title="post.title"
      :content="post.content"
      @remove="$emit('remove', post.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PostItem from "./PostItem.vue";
import { IPost } from "./types";

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
