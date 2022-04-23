<template>
  <div class="posts-box">
    <div class="actions">
      <ui-button @click="openDialog" class="open">Создать пост</ui-button>
      <ui-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <ui-dialog v-model:open="dialogOpen"><post-form @create="createPost" /></ui-dialog>
    <posts-list v-if="posts.length > 0" :posts="posts" @remove="removePost" />
    <h5 v-else-if="isPostsLoading">Идёт загрузка...</h5>
    <h5 v-else>Постов нет</h5>
    <h5 class="error" v-show="error">{{ error }}</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostForm from "./PostForm.vue";
import PostsList from "./PostsList.vue";
import { fetchGet } from "../lib/fetch";
import { IGetPostRes, IPost } from "./types";
import UiDialog from "./UI/UiDialog.vue";
import UiButton from "./UI/UiButton.vue";
import UiSelect from "./UI/UiSelect.vue";

export default defineComponent({
  components: { PostsList, PostForm, UiDialog, UiButton, UiSelect },
  name: "PostsBox",
  data() {
    return {
      posts: [] as IPost[],
      dialogOpen: false,
      error: "",
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {
          id: 1,
          value: "title",
          label: "По названию",
        },
        {
          id: 2,
          value: "content",
          label: "По содержимому",
        },
      ],
    };
  },
  methods: {
    createPost(post: IPost) {
      this.posts.push(post);
      this.dialogOpen = false;
    },
    removePost(id: number) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    openDialog() {
      this.dialogOpen = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const res = await fetchGet<IGetPostRes[]>("https://jsonplaceholder.typicode.com/posts");
        const transformRes: IPost[] = res.map((post) => ({
          id: post.id,
          title: post.title,
          content: post.body,
        }));
        this.posts = transformRes;
      } catch (e) {
        this.error = e instanceof Error ? e.message : "Неизвестная ошибка";
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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

.actions {
  margin: 8px 0px;
  display: flex;
  justify-content: space-evenly;
}

.open {
  background-color: teal;
  color: #fff;
  &:hover {
    background-color: rgb(0, 182, 182);
  }
}

.error {
  color: crimson;
}
</style>
